---
template: page.jade
menu: Support
title: Setting up VOT workspace
---

# Setting up VOT workspace

Download VOT toolkit from git repository (https://github.com/votchallenge/vot-toolkit), either
* by using git command line : `git clone https://github.com/votchallenge/vot-toolkit`

or

* by downloading a zip file

<div class="screenshot"><img src="/howto/img/perfeval/1b.png" width=600 alt="Download zip VOT toolkit"/></div>

From now on we are assuming you have toolkit in `vot-toolkit` directory. It is recommended that you add this directory at least the `workspace` subdirectory to default path list in [Matlab/Octave](http://www.mathworks.com/help/matlab/matlab_env/what-is-the-matlab-search-path.html). Then create an empty directory that will be used to perform your experiments. We will call this directory `vot-workspace`.

1. Go to `vot-workspace` directory. Run matlab and execute `workspace_create` command.
2. Select an experiment stack that you want to use (e.g. `vot2013` denotes the VOT2013 benchmark experiment stack).
3. Enter the unique indentifier of your tracker (e.g. `NCC` for norm-crosscorrelation tracker).

  <div class="screenshot"><img src="/howto/img/perfeval/2b.png" alt="Workspace setup guide"/></div>

The script will automatically initialize the toolkit environment, generate a workspace configuration file `vot-workspace/configuration.m` and a configuration file template for your tracker (e.g. `vot-workspace/tracker_NCC.m`). Note that your tracker is not configured yet, for more information on how to correctly set up the tracker, you should check the [integration tutorial](integration.html).
       
<div class="alert alert-info" role="alert">
<div class="icon-left"><i class="glyphicon glyphicon-question-sign hugeicon"></i> </div>
<h4>Need more information?</h4>
You can find more detailed information about the toolkit and how to set it up in the [toolkit documentation](http://box.vicos.si/vot/toolkit/docs/). If the problem still cannot be resolved with the documentation, look at the [Frequently Asked Questions](/howto/faq.html) or <a href="https://groups.google.com/forum/?hl=en#!forum/votchallenge-help"> contact us on the support forum</a>.
</div>
