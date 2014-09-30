---
template: page.jade
menu: Tutorials
title: Plotting graphs after evaluation on benchmark
---

# Plotting graphs after evaluation on benchmark

Assuming you have your working directory set up and configured `vot-workspace` and that you have performed the evaluation on your tracker already all you have to do is to run Matlab/Octave, edit `vot-workspace/run_analysis.m`, download the reference trackers results and then execute the `run_analysis` script.

 * **To evaluate on VOT2013 benchmark**, download [resutls file](http://box.vicos.si/vot/vot2013_results.zip). The archive contains results
of all trackers from VOT2013 challenge. Simply extract the archive to `vot-toolkit/results` and modify `trackers` variable such that
`trackers = create_trackers('vot2013.txt', '{{yourtracker}}')`, where `{{yourtracker}}` is the name of your tracker.

 * **To evaluate on VOT2014 benchmark**, download [resutls file](http://box.vicos.si/vot/vot2014_results.zip) and follow the instructions above.

<div class="screenshot"><img src="/howto/img/analysis/11.png" alt="Download zip VOT toolkit"/></div>

