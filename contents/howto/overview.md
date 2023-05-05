---
template: page.pug
menu: Support
title: Toolkit CLI overview
---

# Toolkit overview

The toolkit requires Python 3 (version greater than 3.7). Install the toolkit using pip:
```bash
pip install vot-toolkit
```
Alternatively, you can download just the sources from the [VOT toolkit GitHub repository](https://github.com/votchallenge/toolkit).

## Setting up the workspace

Then create an empty directory that will be used to perform your experiments. We will call this directory `workspace`. It is highly recommended to use some environment management tool, e.g., Anaconda or venv.

In the terminal run a command to create workspace:
```bash
vot initialize <stack-name> --workspace <workspace-path>
```
Make sure that `<stack-name>` is a valid stack from directory vot/stack, e.g., use `vots2023` if you want to use vots2023.yaml stack denoting the VOTS 2023 Challenge setup. `<workspace-path>` is the full path to the `workspace directory`. You can get the list of included dataset stacks using `vot initialize` (without the stack name).

## Tracker integration

A tracker can be integrated into the toolkit by putting a tracker description in the `trackers.ini` file, which is placed in the `workspace` directory. Note that multiple tracker descriptions can be in the same `trackers.ini` file. Here are examples of integration for three trackers (Python, Matlab and native). Source code of the example trackers can be found [here](https://github.com/votchallenge/integration).

<div class="alert alert-info" role="alert">
<div class="icon-left"><i class="glyphicon glyphicon-exclamation-sign hugeicon"></i> </div>

Example of a **multi object tracker** written in Python is the NCC tracker - `python_ncc.py` from [Python integration examples](https://github.com/votchallenge/integration/tree/master/python). Note that there is no difference between multi-object and single-object trackers at this point. The toolkit will recognize capabilities of a tracker when it is executed and fail if its capablities will not match the desired experiment.

<br />
</div>

```bash
[NCCPython]  # <tracker-name>
label = PyNCC
protocol = traxpython
command = python_ncc
# Specify a path to trax python wrapper if it is not visible (separate by ; if using multiple paths)
paths = <path-to-tracker-source-directory>
# Additional environment paths
env_PATH = <additional-env-paths>;${PATH}
```

You can test the integration of the tracker on a synthetic sequence using the following command (assuming that you are in the same folder than `trackers.ini`):
    ```bash
    vot test <tracker-name>
    ```
    You can also visualize results for a single sequence:
    ```bash
    vot test -g <tracker-name>

## Perform experiments

To run all the experiments for a tracker, use the following command:

```console
vot evaluate --workspace <workspace-path> <tracker-name>
```

This command will skip already performed runs for the tracker, so you can resume the evaluation easily in case of failure. If you want to restart the evaluation use `-f` flag to force rerun.

## Performance analysis

After running evaluation of a tracker and obtaining the raw results in the `results` directory, tracking performance can be calculated using the following command:

```console
vot analysis --workspace <workspace-path> <tracker-name>
```

The toolkit will calculate performance measures which are specified in the stack file. Note that `<tracker-name>` can represent a single tracker or multiple space-delimited tracker identifiers. Currently the supported output is JSON. The command will create a json file with the tracking scores in the `workspace` directory. We will add more output options in the future.

## Packaging results

If you want to submit results as a part of a challenge, package them using the following command that will produce a zip file, with all the required data.

```console
vot pack --workspace <workspace-path> <tracker-name>
```