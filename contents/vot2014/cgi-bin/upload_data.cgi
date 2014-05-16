#!/usr/bin/perl -w

# CGI and PERL Workspace (error management, potential dangers, etc.)
use strict;
use CGI;
use CGI::Carp qw ( fatalsToBrowser );
use File::Basename;

# ****************************************************
# File settings
# ****************************************************
# Maximum size of uploaded file (20 Mb)
$CGI::POST_MAX = 1024 * 20000;
# List fo safe characters for filenames
my $safe_filename_characters = "a-zA-Z0-9_.-";
# Upload directory located at our server
my $upload_dir = "/var/www/vot/vot2014/upload/";
# File containing data of participants who have submitted results
my $file_data_submissions = "submissions_data.txt";
# Complete path
my $dir_file_data_submissions = $upload_dir . $file_data_submissions;
# Abstract
# Maximum size of uploaded data
my $max_input_abstract = 1200;
# Extension
my $file_abstract_extension = ".txt";

# ****************************************************
# Date and hour
# ****************************************************
my ( $sec, $min, $hr, $mday, $mon, $year, $wday, $yday, $isdst ) =
  localtime(time);
my $longyr = $year + 1900;
# ****************************************************
# Format
# ****************************************************
# Month
my $local_month = $mon + 1;
if ( $local_month < 10 )
{
  $local_month = "0" . $local_month;
}
# Day
my $local_day = $mday;
if ( $local_day < 10 )
{
  $local_day = "0" . $local_day;
}
# ****************************************************
# Hour, minute and second
if ( $hr < 10 )
{
  $hr = "0" . $hr;
}
if ( $min < 10 )
{
  $min = "0" . $min;
}
if ( $sec < 10 )
{
  $sec = "0" . $sec;
}


my $hour_minute_second = $hr. $min . $sec;
my $year_month_day = $longyr . $local_month . $local_day;
my $extension_date = $year_month_day . $hour_minute_second;
my $submission_text_date = "Files were successfully uploaded on " . $longyr . "/" . $local_month . "/" . $local_day . " at "  . $hr . ":" . $min . ":" . $sec;

# ****************************************************
# Upload itself
# ****************************************************
# ****************************************************
# Fields 
# ****************************************************
my $query = new CGI;
my $first_name = $query->param("first_name");
my $last_name = $query->param("last_name");
my $email_address = $query->param("email_address");
my $affiliation = $query->param("affiliation");
# my $abstract = $query->param("abstract");
# my $abstract = substr($form->param('abstract'),0,$max_input_abstract); 
my $abstract = substr($query->param("abstract"),0,$max_input_abstract); 
# ****************************************************
# Files 
# ****************************************************
my $file_results = $query->param("file_results");
my $file_paper = $query->param("file_paper");
my $file_sources = $query->param("file_sources");
# ****************************************************
# Checkbox
# ****************************************************
my $checkbox_announcement = $query->param("checkbox_announcement");

my $flag_exit = 0;
my $string_error = "";
my $string_error_01 = "Fields marked with * are mandatory. Please complete them with correct information.\n";
my $string_error_02 = " file contains invalid characters";
my $string_error_03 = " file has to be either a zip file or a tar file.";

my $file_sources_extension_01 = "";

# ****************************************************
# Problems by uploading data
# ****************************************************
# ****************************************************
# Fields
# ****************************************************

if ( ( !$first_name ) || ( !$last_name ) || ( !$email_address ) || ( !$affiliation ) || ( !$abstract ) || ( !$file_results ) || ( !$file_paper ) )
{
  $string_error = $string_error_01;
  $flag_exit = 1;
}
else
{
  # ****************************************************
  # File checking:
  # Parsing, conversion: Spaces into underscores and safe characters
  # Getting file handle and saving files in our own area
  # ****************************************************

  # ****************************************************
  # File: Results
  # ****************************************************
  my ( $file_results_name, $file_results_path, $file_results_extension ) = fileparse ( $file_results, '\..*' );
  $file_results = $file_results_name . $file_results_extension;
  $file_results =~ tr/ /_/;
  $file_results =~ s/[^$safe_filename_characters]//g;
  # ****************************************************
  # File: Paper
  # ****************************************************
  my ( $file_paper_name, $file_paper_path, $file_paper_extension ) = fileparse ( $file_paper, '\..*' );
  $file_paper = $file_paper_name . $file_paper_extension;
  $file_paper =~ tr/ /_/;
  $file_paper =~ s/[^$safe_filename_characters]//g;



  # ****************************************************
  # File: Results
  # ****************************************************
  if ( $file_results =~ /^([$safe_filename_characters]+)$/ )
  {
    $file_results = $1;

    $file_results = lc $file_results;
    $file_results_extension = lc $file_results_extension;
  }
  else
  {
    $string_error = $file_results . $string_error_02;
    $flag_exit = 2;
  }
  # ****************************************************
  # File: Paper
  # ****************************************************
  if ( $file_paper =~ /^([$safe_filename_characters]+)$/ )
  {
    $file_paper = $1;

    $file_paper = lc $file_paper;
    $file_paper_extension = lc $file_paper_extension;
  }
  else
  {
    $string_error = $file_paper . $string_error_02;
    $flag_exit = 2;
  }

  # ****************************************************
  # File: Sources
  # ****************************************************
  my $file_sources_extension = "";

  if ( $file_sources ne "" )
  {
    my ( $file_sources_name, $file_sources_path, $file_sources_extension ) = fileparse ( $file_sources, '\..*' );
    $file_sources = $file_sources_name . $file_sources_extension;
    $file_sources =~ tr/ /_/;
    $file_sources =~ s/[^$safe_filename_characters]//g;
    if ( $file_sources =~ /^([$safe_filename_characters]+)$/ )
    {
      $file_sources = $1;

      $file_sources = lc $file_sources;
      $file_sources_extension = lc $file_sources_extension;

      if ( ( $file_sources_extension eq ".zip" ) || ( $file_sources_extension eq ".tar" ) )
      {
      	$file_sources_extension_01 = $file_sources_extension;
      }
      else
      {
        $flag_exit = 3;
        $string_error = "Sources " . $string_error_03;
      }
    }
    else
    {
      $string_error = $file_sources . $string_error_02;
      $flag_exit = 2;
    }
  }

  # ****************************************************
  if ( $flag_exit == 0 )
  {
    # ****************************************************
    # Check whether data is correct.
    # If it is correct, store it to the server and
    # print a thankful message
    # ****************************************************

    if ( ( ( $file_results_extension eq ".zip" ) || ( $file_results_extension eq ".tar" ) ) && ( ( $file_paper_extension eq ".zip" ) || ( $file_paper_extension eq ".tar" ) ) )
    {
      # ****************************************************
      # Submission - Data upload
      # ****************************************************
      my $affiliation_without_blanks = $affiliation;
      $affiliation_without_blanks =~ s/ /_/g;

      my $submission_file_name_01 = $affiliation_without_blanks . "_" . $first_name . "_" . $last_name;

      my $submission_file_name_results_01 = $extension_date . "_" . $submission_file_name_01 . "_results" . $file_results_extension;
      my $submission_file_name_results = $upload_dir . $submission_file_name_results_01;
  
      my $submission_file_name_paper_01 = $extension_date . "_" . $submission_file_name_01 . "_paper" . $file_paper_extension;
      my $submission_file_name_paper = $upload_dir . $submission_file_name_paper_01;
  
      my $submission_file_name_sources_01 = "";
      my $submission_file_name_sources = "";
      if ( $file_sources ne "" )
      {
        $submission_file_name_sources_01 = $extension_date . "_" . $submission_file_name_01 . "_sources" . $file_sources_extension_01;
        $submission_file_name_sources = $upload_dir . $submission_file_name_sources_01;
      }

      my $dir_file_name_abstract_01 = $extension_date . "_" . $submission_file_name_01 . "_abstract" . $file_abstract_extension;
      my $dir_file_name_abstract = $upload_dir . $dir_file_name_abstract_01;

      # ****************************************************
      # Personal information
      open(file_handle, ">>$dir_file_data_submissions")||die "Can't open $dir_file_data_submissions";
      flock(file_handle, 2)||die "Can't lock $dir_file_data_submissions";
      print file_handle "$first_name;";
      print file_handle "$last_name;";
      print file_handle "$email_address;";
      print file_handle "$affiliation;";
      print file_handle "$file_results;";
      print file_handle "$file_paper;";
      print file_handle "$file_sources;";
      print file_handle "$submission_file_name_results_01;";
      print file_handle "$submission_file_name_paper_01;";
      print file_handle "$submission_file_name_sources_01;";
      print file_handle "$submission_text_date;";
      print file_handle "\n";
      close(file_handle) || die "Can't close $dir_file_data_submissions";

      # ****************************************************
      # Abstract
      open(file_handle, ">>$dir_file_name_abstract")||die "Can't open $dir_file_name_abstract";
      flock(file_handle, 2)||die "Can't lock $dir_file_name_abstract";
      print file_handle "$abstract";
      print file_handle "\n";
      close(file_handle) || die "Can't close $dir_file_name_abstract";
  
      # ****************************************************
      # File: Results
      my $upload_filehandle_file_results = $query->upload("file_results");
  
      open ( UPLOADFILE, ">$submission_file_name_results" ) or die "$!";
      binmode UPLOADFILE;
      while ( <$upload_filehandle_file_results> )
      {
        print UPLOADFILE;
      }
      close UPLOADFILE;
  
      # ****************************************************
      # File: Paper
      my $upload_filehandle_file_paper = $query->upload("file_paper");
  
      open ( UPLOADFILE, ">$submission_file_name_paper" ) or die "$!";
      binmode UPLOADFILE;
      while ( <$upload_filehandle_file_paper> )
      {
        print UPLOADFILE;
      }
      close UPLOADFILE;
  
      # ****************************************************
      # File: Sources
      if ( $file_sources ne "" )
      {
        my $upload_filehandle_file_sources = $query->upload("file_sources");
  
        open ( UPLOADFILE, ">$submission_file_name_sources" ) or die "$!";
        binmode UPLOADFILE;
        while ( <$upload_filehandle_file_sources> )
        {
          print UPLOADFILE;
        }
        close UPLOADFILE;
      }
      else
      {
        # Nothing to do because sources file was not uploaded
      }
    }
    else
    {
      $flag_exit = 3;
      if ( ( $file_paper_extension eq ".zip" ) || ( $file_paper_extension eq ".tar" ) )
      {
        $string_error = "Results" . $string_error_03;
      }
      else
      {
        $string_error = "Supporting description and results" . $string_error_03;
      }
    }
  }
  else
  {
    # Nothing to do: An error was occurred
  }
}

if ( $flag_exit == 0 )
{
  # ****************************************************
  # Thanking the user showing his/her personal data and 
  #  which files were uploaded 
  # ****************************************************

  print $query->header ( );
  print <<END_HTML;
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/xhtml" xml:lang="en" lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>
      Thanks!
    </title>

    <style type="text/css">
      img {border: none;}
    </style>
  </head>
  <body>

    <p>VOT2014 Visual Object Tracking challenge</p>
    <p>****************************************</p>
    <p></p>

    <p>
      Thanks for uploading your data!
    </p>
    <p>
      Your name: $first_name $last_name
    </p>
    <p>
      Your email address: $email_address
    </p>
    <p>
      Your affiliation: $affiliation
    </p>
    <p>
      Uploaded files: 
        <p style="text-indent: 3em">Results file: $file_results</p>
        <p style="text-indent: 3em">Paper file: $file_paper</p>
        <p style="text-indent: 3em">Sources file: $file_sources</p>
    </p>
    <p>
        <p style="text-indent: 3em">Sources file: $submission_text_date</p>
    </p>
    <p>
      Abstract: 
        <p style="text-indent: 3em">$abstract</p>
    </p>

  </body>
</html>
END_HTML
}
else
{
  # Errors
  print $query->header ( );

  print <<END_HTML;
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/xhtml" xml:lang="en" lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Data error!</title>
    <style type="text/css">
      img {border: none;}
    </style>
  </head>
  <body>

    <p>VOT2014 Visual Object Tracking challenge</p>
    <p>****************************************</p>
    <p></p>

      <p>$string_error</p>
    <p></p>

  </body>
</html>
END_HTML
}
