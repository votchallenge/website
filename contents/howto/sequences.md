---
template: page.jade
menu: Support
title: Selecting sequences
---

# How to use different sequences with VOT methodology

1.  Convert your sequence to unified naming convention of VOT `%8d.jpg` (i.e. 8 digits,  leading with zeros), i.e. image names `00000000.jpg`, `00000001.jpg`, etc.

    Under LINUX, you can use following script:
        #!/bin/bash
        t=0;
        for i in `ls *.jpg | sort -g`; do
            printf -v newName '%08d.jpg' $t
            convert $i $newName;
            let t=t+1;
        done

    Under Windows, download [this VB script](./script_rename_files.vbs), copy it into the directory where your files are located and run the following line in the command line:
        cscript //nologo script_rename_files.vbs

2.  If it is necessary, change the format of the groundtruth annotations according to the [VOT annotation format](http://box.vicos.si/vot/toolkit/docs/sequence/index.html). The groundtruth file should be named `groundtruth.txt` and placed next to the image files in the sequence directory.

3.  Move your sequence directory to the `vot-workspace/sequences` directory.

4.  Modify the `vot-workspace/sequences/list.txt` file to include only directory names of the sequence that you want to use.


