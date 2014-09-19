---
template: page.jade
menu: Tutorials
title: Plotting graphs after evaluation on benchmark
---

# Plotting graphs after evaluation on benchmark

Assuming you have toolkit in <i>./vot-toolkit</i> directory

1. Copy <i>./vot-toolkit/templates/run_analysis.tpl</i> to <i>./vot-toolkit/run_analysis.m</i> and edit
    - edit variable <i>{{tracker}}</i> in line <i>trackers = create_trackers('{{tracker}}');</i><br>
        -- set {{tracker}} to filename containing names of trackers (which correspons to name of directories in <i>./vot-toolkit/results/</i>)<br> e.g. {{tracker}} = './results/trackers.txt'<br>
        -- manually list trackers names, e.g. {{tracker}} = 'NCC', 'OTHER_TRACKER', ...
    - edit variable <i>{{tracker}}</i> in line <i>context = create_report_context('report_{{tracker}}');</i> to the name of your liking.<br>
    This effects where the plots, tables will be stored,<br> e.g. <i>context = create_report_context('report_my');</i> will store plots in directory <i>./vot-toolkit/reports/report_my</i>
    <img src="/howto/img/analysis/11.png" class="screenshot"/>

2. Run matlab and execute <i>run_analysis</i> command.<br>

<b>To evaluate on VOT2013 benchmark</b>, download <a href="http://box.vicos.si/vot/vot2013_results.zip">resutls file</a>. The archive contains results
of all trackers from VOT2013 challenge. Simply extract the archive to <i>./vot-toolkit/results</i> and modify <i>trackers</i> variable <br>
<i>trackers = create_trackers('vot2013.txt', '{{yourtracker}}')</i>, where <i>{{yourtracker}}</i> is the name of your tracker.

<b>To evaluate on VOT2014 benchmark</b>, download <a href="http://box.vicos.si/vot/vot2014_results.zip">resutls file</a> and follow the instruction above.
