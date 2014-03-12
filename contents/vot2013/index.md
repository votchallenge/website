---
template: page2013sidebar.jade
menu: Home
---

##### VOT 2013

Welcome to the official homepage of the VOT2013 benchmark. This benchmark was used in the VOT2013 challenge that was organized from 

How to compare your tracker to VOT2013 challenge results
--------------------------------------------------------

The first thing that you have to do is to set up the VOT toolkit. Download the [code](https://github.com/vicoslab/vot-toolkit/archive/master.zip) from the official Github repository and follow the instructons to integrate your own tracker into the toolkit. Then run the experiments. After the evaluation is finished, download the raw official results of the challenge from [this link](http://box.vicos.si/vot/vot2013_results.zip) and unzip its content to the `results` directory (alongside the results of your own tracker). Then modify (or copy and edit) the generated `run_analysis.m` script to take into account the downloaded results:

    ...

    trackers = create_trackers('yourtracker', 'results/vot2013.txt');

    labels = {'camera_motion', 'illum_change', 'occlusion', 'size', ...
        'motion', 'empty'};

    context = create_report_context('report_vot2013'); 

    ...

If you encounter any problems with the process, do not hesitate to contact the members of the [VOT technical committee](http://votchallenge.net/people.html).

Note: Due to newly-imposed tracker name restrictions, we have renamed the LGT++ tracker to LGTpp in the publicly available result archive.