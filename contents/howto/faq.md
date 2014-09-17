---
template: howtosidebar.jade
menu: faq
---

##### FAQ: Frequently Asked Questions

<b>How to change number of repetitions per sequence?</b>:<br>
Alter a variable <i>{{repeat}}</i> in experiment stack you are using,<br>
e.g. for VOT2013 stack, edit file <i>./vot-toolkit/experiment/stack_vot2013.m</i><br>
by changing default number 15 in <i>set_global_variable('repeat', 15);</i>

<b>How to use only baseline experiment?</b>:<br>
Alter a variable <i>{{experiments}}</i> in experiment stack you are using,<br>
e.g. for VOT2013 stack, edit file <i>./vot-toolkit/experiment/stack_vot2013.m</i><br>
by changing <i>experiments = {baseline, region_noise, grayscale};</i> to <i>experiments = {baseline};</i>

<b>The evaluation crashes, what to do?</b>:<br>
To debug crashes, turn on debug information in <i>./vot-toolkit/configuration.m</i> by uncommenting line <i>set_global_variable('debug', 1);</i>.<br>
After that evaluation kit is more verbose and it is easier to debug your tracker.


