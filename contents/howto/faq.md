---
template: page.jade
menu: Tutorials
title: FAQ
---

# FAQ: Frequently Asked Questions


**How to change number of repetitions per sequence?**

Alter a variable `{{repeat}}` in experiment stack you are using,
e.g. for VOT2013 stack, edit file `./vot-toolkit/experiment/stack_vot2013.m`
by changing default number 15 in `set_global_variable('repeat', 15);`


**How to use only baseline experiment?**

Alter a variable `{{experiments}}` in experiment stack you are using,
e.g. for VOT2013 stack, edit file `./vot-toolkit/experiment/stack_vot2013.m` 
by changing `experiments = {baseline, region_noise, grayscale};` to `experiments = {baseline};`


**The evaluation crashes, what to do?**

To debug crashes, turn on debug information in `./vot-toolkit/configuration.m` by uncommenting line `set_global_variable('debug', 1);`. 
After that evaluation kit is more verbose and it is easier to debug your tracker.


