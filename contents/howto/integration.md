---
template: page.jade
menu: Support
title: Integrating tracker
---

# Integrating tracker into the VOT toolkit

This tutorial assumes that you already have the toolkit on your computer, that you have [set up](workspace.html) the workspace correctly. After this the setup script has generated a template file for your tracker configuration that has to be manually edited. Open the tracker configuration file `vot-workspace/tracker_{{name}}.m`, where `{{name}}` is the unique identifier of your tracker:
- Remove line: `error('Tracker not configured!');` 
- Optionally, set `tracker_label = [];` to `tracker_label = '{{name}}';`, where `{{name}}` is a non-unique human-readable name of the tracker.
- Set the `tracker_command` variable to the absolute path to your tracker executable and the optional parameters as explained further down.
- Set variable `tracker_linkpath` if the tracker needs some additional libraries which are not in standard library path.`

<div class="screenshot"><img src="/howto/img/perfeval/22.png"/></div>
       
Also, verify that `./vot-workspace/run_experiments.m` line `tracker = tracker_load('{{tracker}}')` is set that `{{tracker}}` is the unique identifier of your tracker. (e.g. `tracker = tracker_load('NCC')`). This is important to do if you are running multiple trackers in the same workspace.

<div class="screenshot"><img src="/howto/img/perfeval/23.png" /></div>

The best way to get familiar with integration of trackers into the VOT toolkit is by looking one of the examples that are provided in the `/tracker/examples` directory of the VOT toolkit.

## Native trackers

For native trackers, written in C or C++ the communcation between the toolkit and the tracker is handled by the code in the `vot.h` file that is available in the `tracker/examples/native` directory. Below is a simple example that illustrates how the communication is performed using this header file in C code.

    #define VOT_POLYGON // Comment this if you want to use rectangles instead of polygons
    #include "vot.h"

    int main( int argc, char** argv)
    {
        int f;
        vot_region* region = vot_initialize(); // Initialize the communcation
        const char* imagefile = vot_frame();// Get the first frame

        // TODO: Load the first frame and use the initialization region to initialize the tracker.

        for(f = 1;; f++)
        {

            const char* imagefile = vot_frame(); // Get the next frame
            if (!imagefile) break; // Are we done?

            // TODO: Perform a tracking step with the image, obtain new region

            vot_report(region); // Report the position of the tracker
        }

        vot_region_release(&region); // In C regions have to be released to free memory.
        vot_quit(); // Output the results and clear the resources
        return 0;
    }

If the code is compiled as C++ the following simple example illustrates how the communication is performed using the same header file using classes.

    #define VOT_POLYGON // Comment this if you want to use rectangles instead of polygons
    #include "vot.h"

    int main(int argc, char* argv[])
    {

        VOT vot; // Initialize the communcation

        VOTRegion region = vot.region(); // Get region and first frame
        string path = vot.frame();
        
        // TODO: Load the first frame and use the initialization region to initialize the tracker.

        //track   
        while (true) {
            path = vot.frame(); // Get the next frame
            if (path.empty()) break; // Are we done?

            // TODO: Perform a tracking step with the image, obtain new region

            vot.report(region); // Report the position of the tracker
        }

        // Finishing the communication is completed automatically with the destruction
        // of the communication object (if you are using pointers you have to explicitly
        // delete the object).

        return 0;
    }

To register a native tracker in the environment, simply set the `tracker_command` variable value in the tracker configuration file to the full absolute path to the executable (optionally together with required parameters if the tracker requires some).

**Linking problems**: In some cases the executable requires access to some additional libraries, found in non-standard directories. Matlab overrides the default linking path environmental variable, which can cause linking problems in some cases. For this we have introduced a `tracker_linkpath` variable. This variable should be a cell-array of all directories that should be included in the linking path. An example below adds two custom directories to the library path list in Linux:

    tracker_linkpath = {'/usr/lib64/qt4/', '/usr/lib64/opencv/'};

## Matlab trackers

Matlab-based trackers are a bit more tricky to integrate as the scripts are typically run in an integrated development environment. In order to integrate a Matlab tracker into the evaluation, a wrapper function has to be created. This function will usually read the input files, process it and write the output data. In case of the old integration approach is it is important that the `exit` command is called at the end in order to terminate Matlab interpreter completely. This is very important as the toolkit waits for the tracker executable to stop before it continues with the evaluation of the generated results. Another issue that has to be addressed is the user-issued termination. When a `Ctrl+C` command is issued during the `system` call the command is forwarded to the child process. Because of this the child Matlab will break the execution and return to interactive mode. In order to tell Matlab to quit in this case we can use the [onCleanup](http://www.mathworks.com/help/matlab/ref/oncleanup.html) function which also addresses the normal termination scenario:

	function your tracker
		cleanup = onCleanup(@() exit() ); % Tell Matlab to exit once the function exits
		... tracking code ...

The communcation between the toolkit and the tracker is handled by the code in `vot.m` file that is available in the `tracker/examples/matlab` directory. It is best to copy this file to your tracker directory. The function `vot` accepts a string parameter that should contain either value `'rectangle'` or `'polygon'` depending on which region format does your tracker expect (formats will be automatically converted, however, you may want to do it manually to avoid any problems and to get the most information from the input data). Below is a simple example that illustrates how the communication is performed.

    function your_tracker

        cleanup = onCleanup(@() exit() ); % Always call exit command at the end to terminate Matlab!
        RandStream.setGlobalStream(RandStream('mt19937ar', 'Seed', sum(clock))); % Set random seed to a different value every time as required by the VOT rules.

        [handle, image, region] = vot('rectangle'); % Obtain communication object

        image_rgb = imread(image); % Read first image from file
        % TODO: Initialize the tracker with first image and the given initialization region

        while true

            [handle, image] = handle.frame(handle); % Get the next frame

            if isempty(image) % Are we done?
                break;
            end;
         
            image_rgb = imread(image); % Read the image from file
	        % TODO: Perform a tracking step with the image, obtain new region
            
            handle = handle.report(handle, region); % Report position for the given frame
            
        end;

        handle.quit(handle); % Output the results and clear the resources

    end

For an concrete example of integration please check out the Matlab tracker example in the `tracker/examples/matlab` directory.

When specifying the `tracker_command` variable in the tracker configuration file please note that the wrapper script file is not the one being executed but functions only as a parameter to the Matlab executable. For convinience, the toolkit provides a function that generates a valid `tracker_command` string for Matlab trackers by specifying the script that should be run and the directories that should be included before that. 

    tracker_command = generate_matlab_command('<TODO: tracker script>', {'<TODO: path to script>'});

It is important that all the directories containing required Matlab scripts are contained in the MATLAB path when the evaluation is run. Also note that any unhandled exception thrown in the script will result in Matlab breaking to interactive mode and that this will prevent the evaluation from continuing. It is therefore advised that all exceptions are handled explicitly so that the wrapper script always terminates the interpreter.

## Testing integration

It is not recommended to immediately run the entire evaluation without testing the integration on a simpler task. For this the toolkit provides the `workspace_test` function that provides an interactive environment for testing your tracker on various sequences.

Using this environment you can verify the correct interpretation of input and output data (at the moment the interactive visualization only works in Matlab) as well as estimate the entire evaluation time based on several runs of the tracker on various sequences (run the tracker on several sequences, then select the option to display required estimate).

## Integration rules

To make the tracker evaluation fair we list several rules that you should be aware of:

* _Stochastic processes_ - Many trackers use pseudo-random sampling at certain parts of the algorithm. To properly evaluate such trackers the random seed should not be fixed to a certain value. The best way to ensure this is to initialize seed with a different value every time, for example using current time. In C this is done by calling `srandom(time(NULL))` at the beginning of the program, while one way of doing this in Matlab is by calling:

		RandStream.setGlobalStream(RandStream('mt19937ar', 'Seed', sum(clock)));

* _Image stream_ - The tracking scenario specifies input images as a stream. Therefore the tracker should always only access images in the specified order and not skip ahead. 
* _Tracker parameters_ - The tracker is supposed to be executed with the same set of parameters on all the sequences. Any effort to determine the parameter values that were pre-tuned to a specific challenge sequence from the given images is prohibited.
* _Resources access_ - The tracker program should only access the files in the directory that it is executed in.

While we cannot enforce these guidelines in the current toolkit, the adherence of these rules is mandatory. Any violation is considered as cheating and could result in disqualification from the challenge.

       
<div class="alert alert-info" role="alert">
<div class="icon-left"><i class="glyphicon glyphicon-question-sign hugeicon"></i> </div>
<h4>Need more information?</h4>
You can find more detailed information about the toolkit and how to set it up in the [toolkit documentation](http://box.vicos.si/vot/toolkit/docs/). If the problem still cannot be resolved with the documentation, look at the [Frequently Asked Questions](/howto/faq.html) or <a href="https://groups.google.com/forum/?hl=en#!forum/votchallenge-help"> contact us on the support forum</a>.
</div>

