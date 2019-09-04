---
template: page.pug
menu: Support
title: Selecting sequences
---

# How to use different sequences with VOT methodology

1.  Convert your sequence to unified naming convention of VOT `%08d.jpg` (i.e. 8 digits, leading with zeros), i.e. image names `00000001.jpg`, `00000002.jpg`, etc.

    Under LINUX, you can use following script:
        #!/bin/bash
        t=1;
        for i in `ls *.jpg | sort -g`; do
            printf -v newName '%08d.jpg' $t
            cp $i $newName;
            let t=t+1;
        done

    Under Windows, you can use the following Visual Basic script.

        Set objFS = CreateObject("Scripting.FileSystemObject")
        file_directory=".\"
        file_extension="jpg"
        Set name_directory = objFS.GetFolder(file_directory)
        idx=0
        For Each file_name In name_directory.Files
          If objFS.GetExtensionName(file_name) = file_extension Then
            idx=idx+1
            If idx < 10 Then
              string_replace = "0000000" & idx
            Else
              If idx < 100 Then
                string_replace = "000000" & idx
              Else
                If idx < 1000 Then
                  string_replace = "00000" & idx
                Else
                  If idx < 10000 Then
                    string_replace = "0000" & idx
                  Else
                    If idx < 100000 Then
                      string_replace = "000" & idx
                    Else
                      If idx < 1000000 Then
                        string_replace = "00" & idx
                      Else
                        If idx < 10000000 Then
                          string_replace = "0" & idx
                        End If
                      End If
                    End If
                  End If
                End If
              End If
            End If
            file_name.Name = string_replace & "." & file_extension
          End If
        Next

    Copy it into the directory where your files are located and run the following line in the command line:
        cscript //nologo script_rename_files.vbs


2.  If it is necessary, change the format of the groundtruth annotations according to the [VOT annotation format](http://docs.votchallenge.net/sequence/index.html). The groundtruth file should be named `groundtruth.txt` and placed next to the image files in the sequence directory.

3.  Move your sequence directory to the `vot-workspace/sequences` directory.

4.  Modify the `vot-workspace/sequences/list.txt` file to include only directory names of the sequence that you want to use.


