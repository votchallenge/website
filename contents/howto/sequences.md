---
template: howtosidebar.jade
menu: Selecting Sequences
---

##### How to use different sequences with VOT methodology

1. Convert your sequences to unified naming convention of VOT %8d.jpg (i.e. 8 digits,  leading with zeros), i.e image names "00000000.jpg", "00000001.jpg", etc.<br>
In linux, you can use script: <br>
<code>#!/bin/bash<br>
t=0;<br>
for i in `ls *.jpg | sort -g`; do<br>
&nbsp;&nbsp;&nbsp;&nbsp;    printf -v newName '%08d.jpg' $t<br>
&nbsp;&nbsp;&nbsp;&nbsp;    convert $i $newName;<br>
&nbsp;&nbsp;&nbsp;&nbsp;    let t=t+1;<br>
done</code>
2. Move your sequences to the <i>./vot-toolkit/sequences</i> directory
3. Modify the <i>./vot-toolkit/sequences/list.txt</i> file to include only directory names of the sequence that you want to use.


