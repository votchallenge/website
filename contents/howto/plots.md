---
template: page.jade
menu: Tutorials
title: Plotting graphs after evaluation on benchmark
---

# Plotting graphs after evaluation on benchmark

Assuming you have toolkit in `./vot-toolkit` directory


1. Copy `./vot-toolkit/templates/run_analysis.tpl` to `./vot-toolkit/run_analysis.m` and edit
    - edit variable `{{tracker}}` in line `trackers = create_trackers('{{tracker}}');`
        * set `{{tracker}}` to filename containing names of trackers (which correspons to name of directories in `./vot-toolkit/results/`), e.g. 
        `{{tracker}} = './results/trackers.txt'`

        * manually list trackers names, e.g. {{tracker}} = 'NCC', 'OTHER_TRACKER', ...
    - edit variable `{{tracker}}` in line `context = create_report_context('report_{{tracker}}');` to the name of your liking. This effects where the plots, tables will be stored.
        * e.g. `context = create_report_context('report_my');` will store plots in directory `./vot-   toolkit/reports/report_my`

    ![fig11](/howto/img/analysis/11.png)

2. Run matlab and execute `run_analysis` command.


**To evaluate on VOT2013 benchmark**, download [resutls file](http://box.vicos.si/vot/vot2013_results.zip). The archive contains results
of all trackers from VOT2013 challenge. Simply extract the archive to `./vot-toolkit/results` and modify `trackers` variable such that
`trackers = create_trackers('vot2013.txt', '{{yourtracker}}')`, where `{{yourtracker}}` is the name of your tracker.

**To evaluate on VOT2014 benchmark**, download [resutls file](http://box.vicos.si/vot/vot2014_results.zip) and follow the instruction above.
