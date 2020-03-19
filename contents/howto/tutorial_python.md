---
template: page.pug
menu: Support
title: Setting up VOT workspace
---

# VOT Toolkit installation

 The toolkit requires Python 3 (version greater than 3.6.). Install the toolkit using pip:
```console
pip install git+https://github.com/lukacu/vot-toolkit-python
```
Alternatively, you can download just the sources from the [VOT toolkit GitHub repository](https://github.com/votchallenge/toolkit).

# Setting up the VOT workspace

Then create an empty directory that will be used to perform your experiments. We will call this directory `vot-workspace`. It is highly recommended to use some environment management tool, e.g., <i>Anaconda</i> or <i>venv</i>.

1. In the terminal run a command to create workspace:
```console
vot workspace <stack-name> --workspace <workspace-path>
```
Make sure that `<stack-name>` is a valid stack from directory vot/stack, e.g., use `vot2014` if you want to use vot2014.yaml stack denoting the VOT 2014 Challenge setup. `<workspace-path>` is the full path to the `vot-workspace` directory.
2. Put a tracker description in the `trackers.ini` file, located in the `vot-workspace` directory. See section <i>Tracker integration</i> below, which explains how to create a tracker description. The following programming languages are supported: Python, Matlab and C/C++.
3. You can test the integration of the tracker on a synthetic sequence using the following command (assuming that you are in the same folder than `trackers.ini`):
```console
vot test <tracker-name>
```
4. Assuming that you have created a tracker named `<tracker-name>`, it can be run using the following command:
```console
vot evaluate --workspace <workspace-path> <tracker-name>
```
The command will automatically download the dataset and perform experiments described in the stack file.


# Tracker integration

A tracker can be integrated into the toolkit by putting a tracker description in the `trackers.ini` file, which is placed in the `vot-workspace` directory. Note that multiple tracker descriptions can be in the same `trackers.ini` file. Here are examples of integration for three trackers (Python, Matlab and native). Source code of the example trackers can be found [here](https://github.com/votchallenge/integration).

Example of a tracker description for a Python tracker (NCC tracker - <i>python_ncc.py</i> from [Python integration examples](https://github.com/votchallenge/integration/tree/master/python)):
```
[NCCPython]  # <tracker-name>
label = PyNCC
protocol = traxpython

command = python_ncc

# Specify a path to trax python wrapper if it is not visible (separate by ; if using multiple paths)
paths = <path-to-tracker-source-directory>

# Additional environment paths
env_PATH = <additional-env-paths>;${PATH}
```

Example of a tracker description for a Matlab tracker (NCC tracker - <i>ncc.m</i> from [Matlab integration examples](https://github.com/votchallenge/integration/tree/master/matlab)):
```
[NCCMatlab]  # <tracker-name>
label = NCC
protocol = traxmatlab

command = ncc

# Specify a path to trax matlab wrapper if it is not visible (separate by ; if using multiple paths)
paths = <matlab-paths>

# Additional environment paths
env_PATH = <additional-env-paths>;${PATH}
```
Make sure that you have compiled traxserver.cpp and added the path to the directory with this MEX file into the `paths`. Traxserver can be found on [TraX Github](https://github.com/votchallenge/trax/tree/master/support/matlab) and compiled using the script `compile_trax.m`.

Example of a tracker description for a native tracker (NCC tracker - <i>ncc.cpp</i> from [Native integration examples](https://github.com/votchallenge/integration/tree/master/native)):
```
[NCCNative]  # <tracker-name>
label = NCCNative
protocol = trax

command = <path-to-source>\ncc.exe

# Additional environment paths
env_PATH = <additional-env-paths>;${PATH}
```


# Tracking performance evaluation

After running evaluation of a tracker and obtaining the raw results in the `results` directory, tracking performance can be calculated using the following command:
```console
vot analysis --workspace <workspace-path> <tracker-name> --output json
```
The toolkit will calculate performance measures which are specified in the stack file. Note that `<tracker-name>` can represent a single tracker or multiple space-delimited tracker identifiers. Currently the supported output is json. The command will create a json file with the tracking scores in the `vot-workspace` directory. We will add more output options in the future.


<div class="alert alert-info" role="alert">
<div class="icon-left"><i class="glyphicon glyphicon-question-sign hugeicon"></i> </div>
<h4>Need more information?</h4>

You can find more detailed information about the toolkit and how to set it up in the [toolkit documentation](http://docs.votchallenge.net). If the problem still cannot be resolved with the documentation, look at the [Frequently Asked Questions](/howto/faq.html) or <a href="https://groups.google.com/forum/?hl=en#!forum/votchallenge-help"> contact us on the support forum</a>.
</div>
