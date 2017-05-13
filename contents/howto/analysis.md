---
template: page.jade
menu: Support
title: Analyzing results and generating reports
---

# Analyzing results and generating reports

There are many ways that the results of tracking evaluation can be analyzed. In this tutorial we will cover ranking analysis as it is done for VOT2013 or VOT2014 challenge as well as simplified ranking that is recommended for inclusion in a paper. The results of both approaches are different so it is important to know which approach is used, so that the results are interpreted correctly.

## Generating challenge report

Assuming you have your working directory set up and configured `vot-workspace`, you have to do the following steps:

<ul>
<li> download the reference trackers results for the benchmark, </li>

<li> extract the results to the `vot-workspace/results` directory in your workspace, </li>

<li> edit `vot-workspace/run_analysis.m` and modify so that it looks like this: <br/><br/>
<pre>
[sequences, experiments] = workspace_load();

trackers = order_trackers(tracker_list('trackers.txt'));

context = create_report_context('challenge');

report_challenge(context, experiments, trackers, sequences);
</pre><br />Replace the `trackers.txt` filename with the name of the file that contains a list of the trackers and is included in the results bundle.
</li>


<li> execute the `run_analysis` script, and</li>

<li> open the newly generated report documents in the `vot-workspace/reports/challenge`.</li>

</ul>

<div class="alert alert-warning" role="alert">
<div class="icon-left"><i class="glyphicon glyphicon-exclamation-sign hugeicon"></i> </div>
<h4>Note about the challenge results</h4>

Please note that due to ongoing changes to the evaluation system, the results obtained using this process may not be completely identical to the published results of the challenge.
</div>

### Adding another tracker to the ranking analysis

To add results of a tracker to the challenge analysis, you have to change the `vot-workspace/run_analysis.m` script to include your tracker. To do this you have to change line `trackers = order_trackers(tracker_load('vot2014.txt'));` to `trackers = order_trackers(tracker_load('vot2014.txt', 'yourtracker'));`, where `yourtracker` denotes the identifier of the additional tracker. Make sure that you have actually performed the evaluation on the correct benchmark before that. Also note that due to complexity of ranking interaction, the overal results of the analysis may change when the set of trackers is changed so the results of the analysis may differ from the official challenge results.

<div class="alert alert-warning" role="alert">
<div class="icon-left"><i class="glyphicon glyphicon-exclamation-sign hugeicon"></i> </div>
<h4>Note about result caching</h4>

To speed up the analysis, some intermediate results are cached. If you plan to re-run the analysis, make sure that you delete the appropriate files in the `vot-workspace/cache` directory).
</div>

## Generating article report

Assuming you have your working directory set up and configured `vot-workspace` and that you have already performed the evaluation on your tracker, you have to do the following steps:

<ul>
<li> download the reference trackers results for the benchmark, </li>

<li> extract the results to the `vot-workspace/results` directory in your workspace, </li>

<li> edit `vot-workspace/run_analysis.m` and modify so that it looks like this: <br/><br/>
<pre>
[sequences, experiments] = workspace_load();

trackers = order_trackers(tracker_list('trackers.txt', 'yourtracker'));

context = create_report_context('article');

report_article(context, experiments, trackers, sequences, 'spotlight', 'yourtracker');
</pre>

<br />Replace the `trackers.txt` filename with the name of the file that contains a list of the trackers and is included in the results bundle. Replace `yourtracker` with  the identifier of your tracker.
</li>

<li> execute the `run_analysis` script, and</li>

<li> open the newly generated report documents in the `vot-workspace/reports/article`.</li>

</ul>

