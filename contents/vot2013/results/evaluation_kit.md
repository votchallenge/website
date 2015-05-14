---
template: page.jade
menu: Evaluation Kit
---

##### Summary

The VOT2013 challenge provides a Matlab/Octave evaluation kit and the
dataset for performing objective evaluation of the trackers. The authors
attending the VOT2013 challenge are required to download:

-   [The document detailing the VOT2013 kit and the
    dataset](Download/vot_2013_evaluation_kit.pdf)
-   [The VOT2013 evaluation
    kit](https://github.com/vicoslab/vot-toolkit) (\~3.13 Mb)
-   [The VOT2013 dataset](http://box.vicos.si/vot/vot2013.zip) (\~279
    Mb). By default the evaluation toolkit downloads the dataset
    automatically. Manual download is only required in cases of limited
    Internet connectivity of other download problems.

A tracker has to be integrated and run with the [VOT2013 evaluation
kit](https://github.com/vicoslab/vot-toolkit), which will automatically
perform a standardised experiment on the [VOT2013
dataset](http://box.vicos.si/vot/vot2013.zip) (demos available for
Matlab and C trackers). The results obtained by the evaluation kit
should be submitted through the [VOT2013 submission
page](submission.html).

##### A short description

The evaluation kit is a bundle of Matlab/Octave functions that
automatically perform the experiments on the VOT2013 dataset, which is
composed of 16 color sequences. In each sequence a single target is
annotated thoroughout the sequence by a bounding box. A tracker is
initialized on the ground truth bounding box in the first frame and the
tracker's task is to track the selected target throughout the remainder
of the sequence. The tracker is required to output the current estimate
of the bounding box immediately after processing a given frame. Future
frames should not be used to obtain results of the past frames. The
tracker outputs the per-frame list of bounding boxes into a designated
file. The evaluation kit will check this file to detect the possible
tracking failure (e.g., first frame for which the bounding box was not
on target). In that case, the kit will reinitialize the tracker in the
same sequence at some point after the failure and rerun the experiment.
Note that at this point, the tracker should not store any prelearned
model from the previous frames -- it should act as if this is the first
frame in a entirely new sequence. For more details on the evaluation
kit, please see the [VOT2013 evaluation kit
document](Download/vot_2013_evaluation_kit.pdf).

###### The evaluation kit can perform three types of experiments

-   **Experiment 1**
     Will run a tracker on all sequences in the VOT2013 dataset by
    initializing it on the ground truth bounding boxes.
-   **Experiment 2**
     Will perform Experiment 1, but initialise with noisy bounding
    boxes.
-   **Experiment 3**
     Will perform the Experiment 1 on all sequences with the colour
    images changed to greyscale.

###### Mandatory and optional experiments

Note that participation in VOT2013 challege does not require performing
all the experiments. Participation in the challenge requires performing
at least Experiment 1. By this you get your entry at the VOT2013
homepage. But all three experiments have to be performed to become a
co-author of the VOT2013 results paper. To compete for the VOT2013
challenge prize, all three experiments have to be performed and the
results have to pass the VOT2013 challenge committee verification.
Please see the [Requirements](participation.html) for more details.

*Note that if your tracker does not require colour information, the
results of Experiment 1 and Experiment 3 should be the same in theory.
So in this case you can skip running the Experiment 1 and perform the
Experiment 3 instead. The results from the Experiment 3 will then be
considered by the VOT2012 committee as if also obtained also for
Experiment 1.*

##### Enquiries

[Questions](https://groups.google.com/forum/?hl=en#!forum/votchallenge-help)
about the evaluation kit?
