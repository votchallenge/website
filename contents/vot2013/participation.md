---
template: page2013sidebar.jade
menu: Participation
---

As the VOT2013 challenge is over, it is not possible to submit results to the challenge. It is, however, still possible to use the benchmark (evaluation kit and the dataset) to evaluate your tracker. In the future we will even enable submission of these late results so that they could be compared to the official ones on-line.

###### Compare to VOT2013 challenge results

The first thing that you have to do is to set up the VOT toolkit. Download the [code](https://github.com/vicoslab/vot-toolkit/archive/master.zip) from the official Github repository and follow the instructons to integrate your own tracker into the toolkit. Then run the experiments. After the evaluation is finished, download the raw official results of the challenge from [this link](http://box.vicos.si/vot/vot2013_results.zip) and unzip its content to the `results` directory (alongside the results of your own tracker). Then modify (or copy and edit) the generated `run_analysis.m` script to take into account the downloaded results:

    ...

    trackers = create_trackers('yourtracker', 'results/vot2013.txt');

    labels = {'camera_motion', 'illum_change', 'occlusion', 'size', ...
        'motion', 'empty'};

    context = create_report_context('report_vot2013'); 

    ...

If you encounter any problems with the process, do not hesitate to contact the members of the [VOT technical committee](http://votchallenge.net/people.html).

Note: Due to newly-imposed tracker name restrictions, we have renamed the LGT++ tracker to LGTpp in the publicly available result archive.

