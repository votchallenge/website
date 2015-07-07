---
template: page.jade
menu: Support
title: Performing evaluation with VOT toolkit
---

# Performing evaluation with VOT toolkit

This tutorial assumes that you already have the toolkit on your computer, that you have [set up](workspace.html) the workspace correctly, and that you have a tracker correctly [integrated](integration.html) into the toolkit.

1. Open Matlab or Octave, go to the workspace directory and execute `run_experiments` script.

    <div class="screenshot"><img src="/howto/img/perfeval/31.png" alt="Running experiments"/></div>

    If the execution does not start or the toolkit reports an error it is very likely that there is an error with the setup so, please re-check your configuration steps.

2. If you have to interrupt the evaluation at any time you can do it by pressing ´Ctrl+C´. To continue the evaluation simply run `run_experiments` script again, the evaluation will continue from the position of interruption.

3. Once the experiments are complete you can run `run_pack` script that validates the results and generates a valid archive suitable for submission to the VOT challenge.

<div class="alert alert-info" role="alert">
<div class="icon-left"><i class="glyphicon glyphicon-question-sign hugeicon"></i> </div>
<h4>Need more information?</h4>
You can find more detailed information about the toolkit and how to set it up in the [toolkit documentation](http://box.vicos.si/vot/toolkit/docs/). If the problem still cannot be resolved with the documentation, look at the [Frequently Asked Questions](/howto/faq.html) or <a href="https://groups.google.com/forum/?hl=en#!forum/votchallenge-help"> contact us on the support forum</a>.
</div>

