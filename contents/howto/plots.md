---
template: page.jade
menu: Tutorials
title: Plotting graphs after evaluation on benchmark
---

# Plotting graphs after evaluation on benchmark

Assuming you have your working directory set up and configured `vot-workspace` and that you have already performed the evaluation on your tracker, all you have to do is:

(i) run Matlab/Octave, 

(ii) edit `vot-workspace/run_analysis.m` and modify it according the instructions below, 

(iii) download the reference trackers results, and 

(iv) execute the `run_analysis` script.


## Modifying the script run_analysis.m 

<div class="row">
<div class="col-lg-6 col-sm-12">
<a class="buttonevaluation2013 text-primary">
<h3>To evaluate on VOT2013 benchmark</h3>
</a>
 
(i) download the [results file](http://box.vicos.si/vot/vot2013_results.zip). This file contains results
of all trackers from VOT2013 challenge. <br>

(ii) Extract the archive to `vot-toolkit/results`. <br>

(iii) Remove `error` command. <br>

(iv) Modify `trackers` variable such that
`trackers = create_trackers(vot2013.txt', '{{yourtracker}}')`, where `{{yourtracker}}` is the name of your tracker. <br>

(v) Comment `report_article`. <br>

(vi) Uncomment `report_challenge` command. <br>

</div>


<div class="col-lg-6 col-sm-12">
<a class="buttonevaluation2014 text-primary">
<h3>To evaluate on VOT2014 benchmark</h3>
</a>
 
(i) download the [results file](http://box.vicos.si/vot/vot2014_results.zip). This file contains results
of all trackers from VOT2014 challenge. <br>

(ii) Extract the archive to `vot-toolkit/results`. <br>

(iii) Remove `error` command. <br>

(iv) Modify `trackers` variable such that
`trackers = create_trackers(vot2014.txt', '{{yourtracker}}')`, where `{{yourtracker}}` is the name of your tracker. <br>

(v) Comment `report_article`. <br>

(vi) Uncomment `report_challenge` command. <br>

</div>


<div class="col-lg-6 col-sm-12">
<a class="buttonevaluationpaper text-primary">
<h3>To generate results for your paper</h3>
</a>
 
(i) Download the raw results for the trackers you want to compare to (e.g. from VOT2013 challenge). <br>

(ii) Set the `trackers` variable according to instruction above (for VOT2013/2014). <br>

(iii) Uncomment `report_article`. <br>

(iv) Comment `report_challenge` command. <br>

</div>



</div>


<div class="screenshot"><img src="/howto/img/analysis/11.png" alt="Download zip VOT toolkit"/></div>

