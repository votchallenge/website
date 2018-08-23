---
template: page2018.jade
submenu: Participate
---

## Participate by submitting a paper

### Scope of the solicited papers

 * Original or improved trackers as well as papers giving new insights into existing trackers or class of trackers (see below). Note that participation at VOT2018 challenge is required.
 * Novel ways of using and extending the VOT framework for tracker performance analysis.

### Submission instructions for regular papers

 * Full-length VOT2018 workshop papers must follow the standard requirements for [ECCV2018 regular papers](https://eccv2018.org/papersubmission/author-guidelines/).
 * Submit the paper using the [VOT2018 CMT paper submission system](https://cmt3.research.microsoft.com/VOT2018).
 * The submitted papers should be compiled for double-blind reviewing.

### Submission instructions for tracking papers not accepted to ECCV

We offer authors of papers submitted to ECCV but not accepted to re-submit their paper to the VOT workshop. Rules are the same as for the regular submission process with some additions.
 * You must include all review forms and rebuttal letter as single PDF document to your submission.
 * You must address criticism and exposed flaws in your submitted paper to meet the requirements of the VOT workshop. Your submission will be assessed by the VOT organizers based on the provided review forms and rebuttal letter.


## Participate by attending the VOT2018 challenge

### VOT 2018 main challenge (VOT2018) and realtime subchallenge (VOT-RT2018)
 * The VOT2018 and VOT-RT2018 address short-term, causal, model-free trackers. These trackers are required to report the target in every frame of the sequence.
 * The general requirements for the trackers submitted to these challenges are the same as in previous VOT challenges.
 * The VOT2018 main challenge will contain (1) reset-based experiment for accuracy/robustness/expected average overlap computation and (2) no-reset experiment to allow average overlap computation.
 * The VOT2018 dataset is kept the same as in VOT2017.
 * The VOT2018 main challenge winner will be determined on a separate sequestered dataset from VOT2017. The VOT committee will run trackers that obtain top performance on public dataset to determine the winner.
 * The VOT2018 realtime subchallenge will be run as one of the experiments of the main challenge.

### VOT 2018 long-term subchallenge (VOT-LT2018)
 * The VOT-LT2018 addresses long-term, causal, model-free trackers.
 * These trackers are required to determine the target disappearance (e.g., as the target leaves the field of view of undergoes a full occlusion) and re-detect the target once it re-enters the scene.
 * For the toolkit compatibility reasons, the tracker has to report the target position in each frame as well as a certainty score that the target is present (high for when the tracker believes the target is present and low/negative when the target is not present).
 * A new methodology was developed to test the long-term tracking performance.
 * A new dataset has been constructed with many occurances of target leaving and re-entering the field of view.


### VOT 2018 thermal and infrared subchallenge

<div class="alert alert-warning" role="alert">
The VOT-TIR will not be opened this year.
</div>

## Participation instructions

* The most recent version of the VOT toolkit is required because of adaptation to long-term challenge and regular maintenance.
* Follow [this tutorial](/howto/workspace.html) to download the toolkit and set up the environment and [this tutorial](/howto/integration.html) to integrate your tracker into the toolkit. The toolkit will automatically download the dataset, alternatively you can download it here.

The legacy file-based integration approach, introduced in VOT2013 is not supported any more. All trackers require integration via the [TraX protocol](https://github.com/votchallenge/trax). The guidelines for integrating TraX protocol directly are available [here](https://trax.readthedocs.io/en/latest/tutorials.html). Additionally a wrapper is also provided to simplify the integration for people that have used VOT toolkit in the past, check the integration examples in the VOT toolkit repository on how to use it.

 * Make sure that you select the correct experiment stack (vot2018 for VOT2018 main challenge and votlt2018 for VOT-LT2018 subchallenge) for the corresponding challenge. The VOT-realtime subchallenge is automatically run as one of the experiments of the main VOT2018 challenge.
 * Follow [this tutorial](/howto/perfeval.html) to run the experiments and correctly pack the results.
 * After packing the results submit them via the [submission page](http://submit.votchallenge.net).

### Participation requirements

 * The real-time experiment requires running the tracker on a single machine (you can use multiple CPUs or GPU). Please, make sure that this is the hardware that you are using when running the tracker. Also, specify your hardware setup correctly when submitting the results.
 * Authors are required to help the VOT technical committee to reproduce their results. If the results cannot be reproduced by the VOT using the submitted code, the tracker will be removed from the paper.
 * The submission should contain all the results and the tracker code following several requirements that will enable us to automatically process the submission and re-produce the results:
   * ALL source code for the tracker must be included in the submission.
   * ALL dependencies (operating system, installed libraries, Matlab/Python version, etc.) must be stated in a README file.
   * There must be a single script to compile all binaries (called install.m (Matlab), or install.sh (others)).
   * There must be a runfile for the tracker, that the toolkit can call to execute it. (basically what the toolkit generates for each tracker)
   * In case tracker uses a GPU, provide the GPU and CPU version.
 * To counter attempts of intentionally reporting large bounding boxes to avoid resets, the VOT committee will analyze the submitted tracker outputs. If such or similar strategies are detected, the committee reserves the right to disqualify the tracker.
 * Authors are encouraged to submit their own previously published trackers.
 * Authors may submit modified versions of third-party trackers. The submission description should clearly state what the changes were. Third-party trackers submitted without significant modification will not be accepted.

### Challenge winner requirements

 * Top performance on VOT2018 challenge.
 * Learning from the tracking datasets (OTB, VOT, ALOV, NUSPRO, TempleColor) is prohibited. The use of class labels specific to VOT is not allowed (i.e., identifying a target class in each sequence and applying pretrained class-specific trackers is not allowed).
 * Agreement to publish the code online at VOT page is required.


Questions regarding the VOT2018 challenge should be directed to [the VOT committee](mailto:gustavojavier.fernandez@ait.ac.at;matej.kristan@fri.uni-lj.si?subject=VOT2018 question). If you have general technical questions regarding the VOT toolkit, first consult the [FAQ page](/howto/faq.html) and the [VOT support forum](https://groups.google.com/forum/?hl=en#!forum/votchallenge-help).


