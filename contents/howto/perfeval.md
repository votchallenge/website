---
template: page.jade
menu: Tutorials
title: Performing evaluation on VOT benchmark
---

# Performing evaluation on VOT benchmark

Download VOT toolkit from git repository (https://github.com/vicoslab/vot-toolkit)
* using git command line : `git clone https://github.com/vicoslab/vot-toolkit`
* by downloading a zip file

<div class="screenshot"><img src="/howto/img/perfeval/1b.png" width=600 alt="Download zip VOT toolkit"/></div>

From now on we are assuming you have toolkit in `vot-toolkit` directory. It is recommended that you add this directory to default path list in [Matlab/Octave](http://www.mathworks.com/help/matlab/matlab_env/what-is-the-matlab-search-path.html). Then create an empty directory that will be used to perform your experiments. We will call this directory `vot-workspace`.

1. Go to `vot-workspace` directory. Run matlab and execute `vot_initialize` command.
    -  enter the unique indentifier of your tracker (e.g. `NCC` for norm-crosscorrelation tracker)
    -  select an experiment stack that you want to use:
       - if you want to use VOT2013 benchmark select `vot2013`
       - if you want to use VOT2014 benchmark select `vot2014`

     <div class="screenshot"><img src="/howto/img/perfeval/2b.png" alt="Download zip VOT toolkit"/></div>

     The script will automatically initialize toolkit environment, generate a workspace configuration file `vot-workspace/configuration.m` and a configuration file for your tracker (e.g. `vot-workspace/tracker_NCC.m`).

2. Edit tracker configuration file `./vot-workspace/tracker_{{name}}.m`, where `{{name}}` is the unique identifier from step 1\. (e.g. `tracker_NCC.m`)
    - remove `error('Tracker not configured!');` line
    - set `tracker_label = [];` to `tracker_label = ['{{name}}'];`, where `{{name}}` is the unique identifier from step 1\. (e.g. `tracker_label = ['NCC'];`)
    - set the `tracker_command` variable as follows:
        - For trackers with binary executable: `tracker_command = '/path/to/ncc/binary/ncc_tracker {{command line arguments for binary}}';`
        - For trackers in matlab: `tracker_command = '/path/to/matlab/bin/matlab  -nodesktop -nosplash -r "addpath(' '/path/to/ncc/matlab/' ')matlab_ncc_tracker;" ';`
    - set variable `tracker_linkpath` if the tracker needs some additional libraries which are not in standard library path
    e.g. `tracker_linkpath = {'/usr/lib64/qt4/'};`
    - set variable `tracker_trax` to `true` if you used trax protocol to integrate your tracker to VOT toolkit, otherwise
    set it to `false`

    <div class="screenshot"><img src="/howto/img/perfeval/22.png"/></div>
       
3. Verify that `./vot-workspace/run_experiments.m` line `tracker = create_tracker('{{tracker}}')` is set that `{{tracker}}` is the unique identifier from step 1\.
    (e.g. `tracker = create_tracker('NCC')`)

    <div class="screenshot"><img src="/howto/img/perfeval/23.png" /></div>
   
4. Run matlab and execute `run_experiments` command.

    <div class="screenshot"><img src="/howto/img/perfeval/31.png" alt="Running experiments"/></div>

<div class="alert alert-info" role="alert">
<div class="icon-left"><i class="glyphicon glyphicon-question-sign hugeicon"></i> </div>
<h4>Need more information?</h4>
You can find more detailed information about the toolkit and how to set it up at the [Github wiki](https://github.com/vicoslab/vot-toolkit/wiki) of the project.
</div>

