---
template: page.jade
menu: Support
title: FAQ
---

# Frequently Asked Questions

<div class="alert alert-info" role="alert">
<div class="icon-left"><i class="glyphicon glyphicon-question-sign hugeicon"></i> </div>
<h4>Did not find a tutorial for your task?</h4>

If you cannot find the answer to your question on this page, <a href="https://groups.google.com/forum/?hl=en#!forum/votchallenge-help"> contact us on the support forum</a>.
</div>

- **I have a workspace that was created using VOT toolkit 1 (VOT2013) or 2 (VOT2014). What do I have to do to use the workspace in VOT toolkit 3 (VOT2015)?**

   For VOT2015 we have made some changes to the toolkit. Most of them are just reorganization and renaming of functions and scripts. To use an old workspace with the new toolkit, you have to either rename these functions in all the scripts with `run_` prefix in your workspace, but the easier option is to delete the `configuration.m` script and run the `workspace_create` script in the folder again. Keep all the subdirectories as they are, they will not get overwritten, but the scripts will get re-generated.

- **I am trying to integrate a tracker to the toolkit but I keep getting a *"File not found"* (or something similar) error. What should I do?**

   The toolkit running trackers as external programs in temporary directories for each run. Therefore, the path to the executable should be absolute. Another thing that you have to be careful about are spaces in the command path. If your path contains spaces you will probably have to escape them or add double-quotes around the entire command to tell the operating system that this is one single path element.

- **How to change number of repetitions per sequence?**

   Alter a variable `parameters.repetitions` field in experiment stack you are using, e.g. for VOT2013 stack, edit file `stacks/stack_vot2013.m` by changing default number 15.

<div class="alert alert-warning" role="alert">
Be careful when changing the official benchmark parameters. For a valid submission you have to make sure that the settings remain the same to the original version.
</div>

- **How to perform evaluation only on baseline experiment?**

  Alter a variable `{{experiments}}` in experiment stack you are using, e.g. for VOT2013 stack, edit file `vot-toolkit/stacks/stack_vot2013.m` by changing `experiments = {baseline, region_noise, grayscale};` to `experiments = {baseline};`

<div class="alert alert-warning" role="alert">
Be careful when changing the official benchmark parameters. For a valid submission you have to make sure that the settings remain the same to the original version.
</div>

- **The evaluation crashes, what do I do?**

  To debug crashes, turn on debug information in `vot-workspace/configuration.m` by uncommenting line `set_global_variable('debug', 1);`. After that evaluation kit is more verbose and it is easier to debug your tracker. If this happens at the beginning of the evaluation it is very likely that you have not integrated your tracker correctly. Make sure that you first test the integration using `run_test` script.

- **The results in ranking analysis change if I add another tracker, is this correct?**

  Yes, this can happen in case of overall ranks that are obtained with averaging over multiple partial ranks. See next question for a more detailed explanation.

- **When I compare trackers A and B with the ranking methodology, I get the result that A is better than B. After I add the tracker C, the tracker A may perform worse than B, is this correct?**

  You are probably observing the overall ranking that is obtained by averaging per-attribute or per-sequence partial ranks. If a new tracker C is added, it may perform same as one of the other trackers, e.g. A (the difference is not statistically or practically different). In this case both trackers are assigned their average rank, which means that the tracker A essentially gets a lower rank than before. This can lead to overall rank getting lower. It is therefore important to always also look at partial ranks and raw scores when interpreting the results.


