---
template: howtosidebar.jade
menu: Perf. Evaluation
---

##### Performing evaluation on VOT benchmark

1. Download VOT toolkit from git repository (https://github.com/vicoslab/vot-toolkit)<br>
    -- using git command line : <i>git clone https://github.com/vicoslab/vot-toolkit</i><br>
    -- by downloading a zip file<br>
    <a href="/howto/img/perfeval/1b.png" target=new><img src="/howto/img/perfeval/1b.png" width=400 alt="download zip VOT toolkit"/></a>
2. Set up the VOT toolkit environment (assuming you have toolkit in <i>./vot-toolkit</i> directory)
    - Copy <i>./vot-toolkit/templates/configuration.tpl</i> to <i>./vot-toolkit/configuration.m</i> and edit global variable <i>stack</i> in <i>configuration.m</i><br>
        -- if you want to use VOT2013 benchmark:           <i>set_global_variable('stack', '<b>vot2013</b>');</i> <br>
        -- if you want to use VOT2014 benchmark (default): <i>set_global_variable('stack', '<b>vot2014</b>');</i> <br>
        <a href="/howto/img/perfeval/21.png" target=new><img src="/howto/img/perfeval/21.png" width=400/></a>
    
    - Copy <i>./vot-toolkit/templates/tracker.tpl</i> to <i>./vot-toolkit/tracker_{{name}}.m</i>, where {{name}} replace with name of your tracker, e.g. <i>tracker_NCC.m</i><br>
        - remove <i>error('Tracker not configured!');</i> line<br>
        - set <i>tracker_label = [];</i> to <i>tracker_label = ['{{name}}'];</i>, e.g. <i>tracker_label = ['NCC'];</i><br>
        - set the <i>tracker_command</i> variable. <br>
        -- For trackers with binary executable: <i>tracker_command = '/path/to/ncc/binary/ncc_tracker {{parameters to binary}}';</i><br>
        -- For trackers in matlab: 
        <i>tracker_command = '/path/to/matlab/bin/matlab  -nodesktop -nosplash -r "matlab_ncc_tracker;" ';</i><br>
        - set variable <i>tracker_linkpath</i> if the tracker needs some additional libraries which are not in standard library path<br>
        e.g. <i>tracker_linkpath = {'/usr/lib64/qt4/'};</i>
        - set variable <i>tracker_trax</i> to <i>true</i> if you used trax protocol to integrate your tracker to VOT toolkit, otherwise
        set it to <i>false</i><br> e.g. <i>tracker_trax = false;</i><br> <h7><b><a href="/vot2014/download/vot2014-guidelines.pdf">How to integrate your tracker to VOT toolkit</a></b></h7><br>
        <a href="/howto/img/perfeval/22.png" target=new><img src="/howto/img/perfeval/22.png" width=400/></a>
       
    - Copy <i>./vot-toolkit/templates/run_experiments.tpl</i> to <i>./vot-toolkit/run_experiments.m</i> and <br> edit the line <i>tracker = create_tracker('{{tracker}}')</i> by replacing a <i>{{tracker}}</i> by the {{name}} of the tracker set in step 2. <br>
    e.g. tracker = create_tracker('NCC')</i><br>
    <a href="/howto/img/perfeval/23.png" target=new><img src="/howto/img/perfeval/23.png" width=400/></a>
   
3. Run matlab and execute <i>run_experiments</i> command.<br>
   <a href="/howto/img/perfeval/31.png" target=new><img src="/howto/img/perfeval/31.png" width=400/></a>
