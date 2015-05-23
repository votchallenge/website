---
template: page.jade
menu: Tutorials
title: FAQ
---

# FAQ: Frequently Asked Questions

## Experiments

### How to change number of repetitions per sequence?

Alter a variable `{{repeat}}` in experiment stack you are using,
e.g. for VOT2013 stack, edit file `vot-toolkit/experiment/stack_vot2013.m`
by changing default number 15 in `set_global_variable('repeat', 15);`

<div class="alert alert-warning" role="alert">
Be careful when changing the official benchmark parameters. For a valid submission you have to make sure that the settings remain the same to the original version.
</div>

### How to use only baseline experiment?

Alter a variable `{{experiments}}` in experiment stack you are using,
e.g. for VOT2013 stack, edit file `vot-toolkit/experiment/stack_vot2013.m` 
by changing `experiments = {baseline, region_noise, grayscale};` to `experiments = {baseline};`

<div class="alert alert-warning" role="alert">
Be careful when changing the official benchmark parameters. For a valid submission you have to make sure that the settings remain the same to the original version.
</div>

### The evaluation crashes, what to do?

To debug crashes, turn on debug information in `vot-workspace/configuration.m` by uncommenting line `set_global_variable('debug', 1);`. 
After that evaluation kit is more verbose and it is easier to debug your tracker.


## Analysis

### The results in ranking analysis change if I add another tracker, is this correct?

Yes, this can happen in case of overall ranks that are obtained with averaging over multiple partial ranks. See next question for a more detailed explanation.

### When I compare trackers A and B with the ranking methodology, I get the result that A is better than B. After I add the tracker C, the tracker A may perform worse than B, is this correct?

You are probably observing the overall ranking that is obtained by averaging per-attribute or per-sequence partial ranks. If a new tracker C is added, it may perform same as one of the other trackers, e.g. A (the difference is not statistically or practically different). In this case both trackers are assigned their average rank, which means that the tracker A essentially gets a lower rank than before. This can lead to overall rank getting lower. It is therefore important to always also look at partial ranks and raw scores when interpreting the results.


