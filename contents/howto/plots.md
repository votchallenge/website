---
template: page.jade
menu: Tutorials
title: Plotting graphs after evaluation on benchmark
---

# Plotting graphs after evaluation on benchmark

Assuming you have your working directory set up and configured `vot-workspace` and that you have performed the evaluation on your tracker already all you have to do is to run Matlab/Octave, edit `vot-workspace/run_analysis.m`, download the reference trackers results and then execute the `run_analysis` script.

 * **To evaluate on VOT2013 benchmark**, download [resutls file](http://box.vicos.si/vot/vot2013_results.zip). The archive contains results
of all trackers from VOT2013 challenge. Simply extract the archive to `vot-toolkit/results`, remove `error` command, modify `trackers` variable such that
`trackers = create_trackers(vot2013.txt', '{{yourtracker}}')`, where `{{yourtracker}}` is the name of your tracker, comment `report_article` and uncomment `report_challenge` command.

 * **To evaluate on VOT2014 benchmark**, download [resutls file](http://box.vicos.si/vot/vot2014_results.zip) and follow the instructions above.

 * **To evaluate for your paper**, download raw results for the trackers you want to compare to (e.g. from VOT2013 challenge) and set the `trackers` variable according to instruction above (for VOT2013/2014). Last, uncomment `report_article` and comment `report_challenge` command.


<div class="screenshot"><img src="/howto/img/analysis/11.png" alt="Download zip VOT toolkit"/></div>

