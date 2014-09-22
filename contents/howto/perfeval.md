---
template: page.jade
menu: Tutorials
title: Performing evaluation on VOT benchmark
---

# Performing evaluation on VOT benchmark

Download VOT toolkit from git repository (https://github.com/vicoslab/vot-toolkit)
* using git command line : `git clone https://github.com/vicoslab/vot-toolkit`
* by downloading a zip file

    <img src="/howto/img/perfeval/1b.png" width=600 alt="Download zip VOT toolkit"/>

From now on we are assuming you have toolkit in `./vot-toolkit` directory

1. Run matlab and execute `vot_initialize` command.
    -  enter the unique indentifier of your tracker (e.g. `NCC` for norm-crosscorrelation tracker)

    <img src="/howto/img/perfeval/2b.png" width=600 alt="Download zip VOT toolkit"/>

    - the script automatically initialize toolkit environment and create a configuration file for your tracker (e.g. `tracker_NCC.m`)

2. Verify that `./vot-toolkit/configuration.m` global variable `stack` is set to the benchmark you want to use.
    - if you want to use VOT2013 benchmark:           `set_global_variable('stack', '`**vot2013**`');`
    - if you want to use VOT2014 benchmark (default): `set_global_variable('stack', '`**vot2014**`');`

    <a href="/howto/img/perfeval/21.png" target=new><img src="/howto/img/perfeval/21.png" width=400/></a>
    
3. Edit tracker configuration file `./vot-toolkit/tracker_{{name}}.m`, where `{{name}}` is the unique identifier from step 1\. (e.g. `tracker_NCC.m`)
    - remove `error('Tracker not configured!');` line
    - set `tracker_label = [];` to `tracker_label = ['{{name}}'];`, where `{{name}}` is the unique identifier from step 1\. (e.g. `tracker_label = ['NCC'];`)
    - set the `tracker_command` variable as follows:
        - For trackers with binary executable: `tracker_command = '/path/to/ncc/binary/ncc_tracker {{command line arguments for binary}}';`
        - For trackers in matlab: `tracker_command = '/path/to/matlab/bin/matlab  -nodesktop -nosplash -r "addpath(' '/path/to/ncc/matlab/' ')matlab_ncc_tracker;" ';`
    - set variable `tracker_linkpath` if the tracker needs some additional libraries which are not in standard library path
    e.g. `tracker_linkpath = {'/usr/lib64/qt4/'};`
    - set variable `tracker_trax` to `true` if you used trax protocol to integrate your tracker to VOT toolkit, otherwise
    set it to `false`

    <h7>**[How to integrate your tracker to VOT toolkit](/vot2014/download/vot2014-guidelines.pdf)**</h7>
    
    <a href="/howto/img/perfeval/22.png" target=new><img src="/howto/img/perfeval/22.png" width=400/></a>
       
4. Verify that `./vot-toolkit/run_experiments.m` line `tracker = create_tracker('{{tracker}}')` is set that `{{tracker}}` is the unique identifier from step 1\.
    (e.g. `tracker = create_tracker('NCC')`)

    <a href="/howto/img/perfeval/23.png" target=new><img src="/howto/img/perfeval/23.png" width=400/></a>
   
5. Run matlab and execute `run_experiments` command.

   <a href="/howto/img/perfeval/31.png" target=new><img src="/howto/img/perfeval/31.png" width=400/></a>
