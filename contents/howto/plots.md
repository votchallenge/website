---
template: page.jade
menu: Tutorials
title: Plotting graphs after evaluation on benchmark
---

# Plotting graphs after evaluation on benchmark

Assuming you have your working directory set up and configured `vot-workspace` and that you have already performed the evaluation on your tracker, all you have to do is:

<ul>
<li> run Matlab/Octave, </li>

<li> edit `vot-workspace/run_analysis.m` and modify it according the instructions below, </li>

<li> download the reference trackers results, and </li>

<li> execute the `run_analysis` script.</li>

</ul>


## Modifying the script run_analysis.m 

<div class="row">
<div class="col-lg-6 col-sm-12">
<a class="buttonevaluation2013 text-primary">
<h3>To evaluate on VOT2013 benchmark</h3>
</a>

<ul>
<li> download the [results file](http://box.vicos.si/vot/vot2013_results.zip). This file contains results
of all trackers from VOT2013 challenge. </li>

<li> Extract the archive to `vot-toolkit/results`. </li>

<li> Remove `error` command. </li>

<li> Modify `trackers` variable such that
`trackers = create_trackers(vot2013.txt', '{{yourtracker}}')`, where `{{yourtracker}}` is the name of your tracker. </li>

<li> Comment `report_article`. </li>

<li> Uncomment `report_challenge` command. </li>

<br>

Disclaimer: Due to ongoing changes in the toolkit some results for VOT2013 may not be completely identical to the 
official ones. We are currently working to obtain the published results.

</div>


<div class="col-lg-6 col-sm-12">
<a class="buttonevaluation2014 text-primary">
<h3>To evaluate on VOT2014 benchmark</h3>
</a>

<ul>
<li> download the [results file](http://box.vicos.si/vot/vot2014_results.zip). This file contains results
of all trackers from VOT2014 challenge. </li>

<li> Extract the archive to `vot-toolkit/results`. </li>

<li> Remove `error` command. </li>

<li> Modify `trackers` variable such that
`trackers = create_trackers(vot2014.txt', '{{yourtracker}}')`, where `{{yourtracker}}` is the name of your 
tracker. </li>

<li> Comment `report_article`. </li>

<li> Uncomment `report_challenge` command. </li>

</ul>

</div>


<div class="col-lg-6 col-sm-12">
<a class="buttonevaluationpaper text-primary">
<h3>To generate results for your paper</h3>
</a>
 
<ul>
<li> Download the raw results for the trackers you want to compare to (e.g. from VOT2013 challenge). </li>

<li> Set the `trackers` variable according to instruction above (for VOT2013/2014). </li>

<li> Uncomment `report_article`. </li>

<li> Comment `report_challenge` command. </li>

</ul>

</div>



</div>


<div class="screenshot"><img src="/howto/img/analysis/11.png" alt="Download zip VOT toolkit"/></div>

