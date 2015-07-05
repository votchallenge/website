---
template: page.jade
menu: Tutorials
title: Reproducing VOT2014 arXiv paper results
---

# Reproducing VOT2014 arXiv paper results

You can use the script below to generate the results used in [<i class="glyphicon glyphicon-file"></i>arXiv:1503.01313](http://arxiv.org/abs/1503.01313). Assuming that you have correctly initialized VOT2014 workspace, the script generates three separate reports for different ranking approaches that were included in the paper. We have used VOT toolkit tagged [vot2014-final](https://github.com/votchallenge/vot-toolkit/releases/tag/vot2014-final) to generate the results. If you will use a more recent version of the toolkit be aware that some function names have changed so the script will have to be adapted.

<pre>
% Initialize the workspace
[sequences, experiments] = vot_environment();

% Use all VOT2014 trackers (the file should contain identifiers of all trackers)
trackers = create_trackers('vot2014.txt');

% Set raw robustness sensitivity parameter to 100
set_global_variable('report_ranking_sensitivity', 100);

% Run the per-attribute ranking analysis
set_global_variable('report_ranking_average', 'weighted_mean');
context = create_report_context('report_vot2014_challenge', 'latex', true, 'raw', true);
report_challenge(context, experiments, trackers, sequences);

% Run the per-sequence pooled analysis
set_global_variable('report_ranking_average', 'pool');
context = create_report_context('report_vot2014_sequence_pool', 'latex', true, 'raw', true);
report_article(context, experiments, trackers, sequences, 'arplot', true); 

% Run the per-sequence weighted analysis
set_global_variable('report_ranking_average', 'weighted_mean');
context = create_report_context('report_vot2014_sequence_weighted', 'latex', true, 'raw', true);
report_article(context, experiments, trackers, sequences, 'arplot', true); 
</pre>
