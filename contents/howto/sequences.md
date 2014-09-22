---
template: page.jade
menu: Tutorials
title: Selecting sequences
---

# How to use different sequences with VOT methodology

1.  Convert your sequences to unified naming convention of VOT %8d.jpg (i.e. 8 digits,  leading with zeros), i.e image names "00000000.jpg", "00000001.jpg", etc.
    In linux, you can use script:
        #!/bin/bash
        t=0;
        for i in `ls *.jpg | sort -g`; do
            printf -v newName '%08d.jpg' $t
            convert $i $newName;
            let t=t+1;
        done


2.  Move your sequences to the `./vot-toolkit/sequences` directory
3.  Modify the `./vot-toolkit/sequences/list.txt` file to include only directory names of the sequence that you want to use.


