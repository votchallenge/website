---
template: page.jade
menu: Support
title: Setting up VOT workspace
---

# Setting up VOT workspace

You can download the VOT toolkit with pre-compiled components from BinTray.

 * Latest VOT toolkit binaries: [![Download](https://api.bintray.com/packages/votchallenge/toolkit/current/images/download.svg) ](https://bintray.com/votchallenge/toolkit/current/_latestVersion)
 * Latest TraX library binaries: [![Download](https://api.bintray.com/packages/votchallenge/trax/stable/images/download.svg) ](https://bintray.com/votchallenge/trax/stable/_latestVersion)

Alternatively, you can download just the sources from the [VOT toolkit GitHub repository](https://github.com/votchallenge/vot-toolkit).

<div class="screenshot"><img src="/howto/img/perfeval/1b.png" width=600 alt="Download zip VOT toolkit"/></div>

From now on we are assuming you have toolkit in `vot-toolkit` directory. It is recommended that you add at least this directory to default path list in [Matlab/Octave](http://www.mathworks.com/help/matlab/matlab_env/what-is-the-matlab-search-path.html). Then create an empty directory that will be used to perform your experiments. We will call this directory `vot-workspace`.

1. Run `toolkit_path` to ensure that all the required subdirectories are in matlab path (you must be in `vot-toolkit` directory or have have the `vot-toolkit` directory in the path list for this to work).
2. Go to `vot-workspace` directory. Run Matlab/Octave and execute `workspace_create` command.
3. Select an experiment stack that you want to use (e.g. `vot2013` denotes the VOT2013 benchmark experiment stack).
4. Enter the unique identifier of your tracker (e.g. `NCC` for normalized cross-correlation tracker that is supplied in the `tracker/examples` directory).
5. Select the interpreter used in your tracker (or none if the tracker is compiled into an executable).

  <div class="screenshot"><img src="/howto/img/perfeval/2b.png" alt="Workspace setup guide"/></div>

The script will automatically initialize the toolkit environment, generate a workspace configuration file `vot-workspace/configuration.m` and a configuration file template for your tracker (e.g. `vot-workspace/tracker_NCC.m`). Note that your tracker is not configured yet, for more information on how to correctly set up the tracker, you should check the [integration tutorial](integration.html).

<div class="alert alert-info" role="alert">
<div class="icon-left"><i class="glyphicon glyphicon-question-sign hugeicon"></i> </div>
<h4>Need more information?</h4>
You can find more detailed information about the toolkit and how to set it up in the [toolkit documentation](http://docs.votchallenge.net). If the problem still cannot be resolved with the documentation, look at the [Frequently Asked Questions](/howto/faq.html) or <a href="https://groups.google.com/forum/?hl=en#!forum/votchallenge-help"> contact us on the support forum</a>.
</div>
