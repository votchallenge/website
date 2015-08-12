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

### Preparation

- **I have a workspace that was created using VOT toolkit 1 (VOT2013) or 2 (VOT2014). What do I have to do to use the workspace in VOT toolkit 3 (VOT2015)?**

   For VOT2015 we have made some changes to the toolkit. Most of them are just reorganization and renaming of functions and scripts. To use an old workspace with the new toolkit, you have to either rename these functions in all the scripts with `run_` prefix in your workspace, but the easier option is to delete the `configuration.m` script and run the `workspace_create` script in the folder again. Keep all the subdirectories as they are, they will not get overwritten, but the scripts will get re-generated.

### Running the tracker

- **I am trying to integrate a tracker to the toolkit but I keep getting a *"File not found"* (or something similar) error. What should I do?**

   The toolkit running trackers as external programs in temporary directories for each run. Therefore, the path to the executable should be absolute. Another thing that you have to be careful about are spaces in the command path. If your path contains spaces you will probably have to escape them or add double-quotes around the entire command to tell the operating system that this is one single path element.

- **I am trying to integrate a tracker to the toolkit but I keep getting a *"Timeout"* (or something similar) error. What should I do?**

   If your tracker is slow, the new integration protocol will raise a timeout error if the tracker will not issue a correct feedback in `30` seconds when initialized or presented with a new frame. If your tracker needs more than 30 seconds to process a frame, then you should increase the default timeout interval by adding the following line to your `configuration.m` file:

        set_global_variable('trax_timeout', <add the timeout in seconds here>);

### Running experiments

- **Why does the toolkit run tracker on each sequence multiple times?**

    Because many trackers are not deterministic (do not produce the same results on every run due to stochastic optimization or similar processes), the toolkit has to evaluate the tracker multiple times on the same data to get a better representation of the average performance and the variation of the performance. If a tracker is deterministic, this is not necessary, however, since the toolkit can only reliably determine this after a couple of runs, the tracker is still run three times to check if the results do not change.

- **How to change number of repetitions per sequence?**

   Alter a variable `parameters.repetitions` field in experiment stack you are using, e.g. for VOT2013 stack, edit file `stacks/stack_vot2013.m` by changing default number 15.

<div class="alert alert-warning" role="alert">
Be careful when changing the official benchmark parameters. For a valid submission you have to make sure that the settings remain the same to the original version. </br>

Also note that the ranking methodology requires 15 repetitions to work reliably because the statistical tests will not work on small number of samples. The toolkit will issue a warning if an attempt is made to rank trackers based on less than 15 repetitions and issue an error if the number of repetitions is equal or lower to 5.
</div>

- **Can a tracker use a pre-trained model?**

    The current aim of the VOT Challenges is single-object short-term trackers that do not apply pre-learned models of object appearance (model-free), however, this does not strictly mean that the tracker must not use any pre-trained data, it means that no object-specific information based on specific dataset sequence can be used (like recognizing the sequence based on stored image features or even file path). More precisely, one has to be careful about two guidelines:

     - The tracker must not know what kind of object is it tracking, there should be no sequence specific pre-trained model, only one model is allowed for the entire dataset.
     - If a model is trained in advance, it should not be trained on the sequences in the testing dataset. This is similar to machine learning evaluation, where the training and learning datasets are separated, but since we do not provide a separate training set, you have to accumulate your own (that does not include any VOT sequences). It is, however, fair to mention which sequences were used and the size of the final model once the results are published as we rely on fair-play and any problem to reproduce results will cast some doubt on the validity of the comparison.

- **How to perform evaluation only on baseline experiment?**

  Alter a variable `{{experiments}}` in experiment stack you are using, e.g. for VOT2013 stack, edit file `vot-toolkit/stacks/stack_vot2013.m` by changing `experiments = {baseline, region_noise, grayscale};` to `experiments = {baseline};`

<div class="alert alert-warning" role="alert">
Be careful when changing the official benchmark parameters. For a valid submission you have to make sure that the settings remain the same to the original version.
</div>

- **The evaluation crashes, what do I do?**

  To debug crashes, turn on debug information in `vot-workspace/configuration.m` by uncommenting line `set_global_variable('debug', 1);`. After that evaluation kit is more verbose and it is easier to debug your tracker. If this happens at the beginning of the evaluation it is very likely that you have not integrated your tracker correctly. Make sure that you first test the integration using `run_test` script.

### Analysis

- **The results in ranking analysis change if I add another tracker, is this correct?**

  Yes, this can happen in case of overall ranks that are obtained with averaging over multiple partial ranks. See next question for a more detailed explanation.

- **When I compare trackers A and B with the ranking methodology, I get the result that A is better than B. After I add the tracker C, the tracker A may perform worse than B, is this correct?**

  You are probably observing the overall ranking that is obtained by averaging per-attribute or per-sequence partial ranks. If a new tracker C is added, it may perform same as one of the other trackers, e.g. A (the difference is not statistically or practically different). In this case both trackers are assigned their average rank, which means that the tracker A essentially gets a lower rank than before. This can lead to overall rank getting lower. It is therefore important to always also look at partial ranks and raw scores when interpreting the results.


