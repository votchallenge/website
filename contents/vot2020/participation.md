---
template: page2020.pug
submenu: Participate
---

## Participate by submitting a paper

### Scope of the solicited papers

 * Original or improved single object trackers as well as papers that give new insights into existing single object trackers and analysis of tracker performance.
 * Novel ways of using and extending the VOT framework for performance analysis of trackers.

### Submission instructions for regular papers

 * Full-length VOT2020 workshop papers must follow the [standard requirements for ECCV2020 regular papers](https://eccv2020.eu/author-instructions/).
 * Submit the paper using the [VOT2020 CMT paper submission system](https://cmt3.research.microsoft.com/VOT2020).
 * The submitted papers should be compiled for double-blind review.

### Submission instructions for tracking papers not accepted to ECCV

High-quality tracking papers submitted (but not accepted) to ECCV2020 can be re-submitted to VOT2020. Rules are the same as for the regular submission process with some additions.

 * Include all review forms and the rebuttal letter as a single PDF document to your submission.
 * The re-submission should address the criticism and exposed flaws in your ECCV submitted paper to meet the requirements of the VOT workshop.
 * The submissions will be assessed by the VOT organizers based on the provided review forms and the rebuttal letter.

## Participate by attending the VOT2020 subchallenges

<div class="alert alert-info" role="alert">
<div class="icon-left"><i class="glyphicon glyphicon-exclamation-sign hugeicon"></i> </div>
<h4>New toolkit </h4>

Please note that using the new Python toolkit is required for participation. See the [toolkit guide](/howto/tutorial_python.html) on how to set it up and use it with your tracker.
</div>



### VOT standard (VOT-ST2020) and realtime (VOT-RT2020) subchallenges
 * VOT-ST2020 and VOT-RT2020 address short-term, causal, model-free trackers. These trackers are required to report the target in every frame of the sequence.
 * Trackers may report target location as a segmentation mask or a bounding box. Performance is evaluated w.r.t. to a segmentation ground truth.
 * The general requirements for the trackers submitted to these challenges are the same as in previous VOT challenges
 * VOT-ST2020 will use a new multi-start experiment setup and modified accuracy/robustness/expected average overlap measures for performance assesment
 * VOT-ST2020 dataset is refreshed version of the dataset from VOT-ST2019 with new segmentation-based annotations.
 * VOT-ST2020 winner will be determined on a separate sequestered dataset. The VOT committee will run trackers that obtain top performance on public dataset to determine the winner.
 * VOT-RT2020 will be run as one of the experiments of the VOT-ST2020 with real-time constraints, the experiment is conceptually the same as in the past challenges.
 * The new VOT2020 evaluation protocol and measures are used - more information available [here](https://data.votchallenge.net/vot2020/vot-2020-protocol.pdf)

###  VOT long-term subchallenge (VOT-LT2020)

 * VOT-LT2020 addresses long-term, causal, model-free trackers.
 * Trackers may report target location as a segmentation mask or a bounding box. Performance is evaluated w.r.t. to a bounding box ground truth.
 * These trackers are required to determine the target disappearance (e.g., as the target leaves the field of view of undergoes a full occlusion) and re-detect the target once it re-enters the scene.
 * For the toolkit compatibility reasons, the tracker has to report the target position in each frame as well as a certainty score that the target is present (high for when the tracker believes the target is present and low/negative when the target is not present).
 * A dataset is the same as in the VOT-LT2019 challenge.

###  VOT RGB thermal and infrared subchallenge (VOT-RGBT2020)

 * VOT-RGBT2020 addresses short-term, causal, model-free trackers, i.e., the same kind of trackers as the VOT-ST2020 subchallenge.
 * The trackers work with a 4-channel input composed of RGB+thermal channels.
 * A completely new dataset has been constructed for this subchallenge.
 * The nature of RGB+T acquisition is such that the RGB and T channels are temporally fairly well synchronized for the most part, but in some frames the RGB and T modality will go out of sync. This results in slight misalignment between the target location in RGB and T channels. The ground truth is specified in the T-channel since this is the primary modality and the RGB channels are considered as an auxiliary modality. Thus the trackers are required to address the de-synchronization issue and output the target location as specified in the primary modality (T  channel).

###  VOT RGB and depth subchallenge (VOT-RGBD2020)

 * VOT-RGBD2020 addresses long-term, causal, model-free trackers, i.e., the same kind of trackers as the VOT-LT2020 subchallenge.
 * Trackers may report target location as a segmentation mask or a bounding box. Performance is evaluated w.r.t. to a bounding box ground truth.
 * The trackers work with a 4-channel input composed of RGB+depth channels.
 * A dataset is the same as in the VOT-RGBD2019 challenge.
 * Care has been taken to accurately temporally synchronize and spatially align the RGB and Depth channels, resulting in nearly per-pixel accurate alignment between all channels.

## Participation instructions

 * Please note that using the [new Python toolkit](https://github.com/votchallenge/vot-toolkit-python/) is required for participation. See the [toolkit guide](/howto/tutorial_python.html) on how to set it up and use it with your tracker.
 * The most recent version of the VOT toolkit is required because of adaptation to RGBT/RGBD subchallenges and regular maintenance.

All trackers require integration via the [TraX protocol](https://github.com/votchallenge/trax). The guidelines for integrating TraX protocol directly are available [here](https://trax.readthedocs.io/en/latest/tutorials.html). Additionally a wrapper is also provided to simplify the integration for people that have used VOT toolkit in the past, check the [integration examples repository](https://github.com/votchallenge/integration) for the code.

 * Make sure that you select the correct experiment stack (votst2020 for VOT-ST2020 main short-term subchallenge ; votlt2020 for VOT-LT2020 subchallenge ; votrgbt2020 for VOT-RGBT2020 subchallenge ; votrgbd2020 for VOT-RGBD2020 subchallenge) for the corresponding challenge. The VOT-realtime subchallenge is automatically run as one of the experiments of the VOT-ST2020 subchallenge.
 * Perform evaluation and pack the results.
 * After packing the results submit them via the [submission page](https://submit.votchallenge.net).

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

### Subchallenge winner requirements

 * Top performance on the corresponding subchallenge.
 * The tracker should obey the following learning restrictions:
	* OTB, VOT, ALOV, UAV123, NUSPRO, TempleColor, RGBT234 (or datasets with parts of it, e.g. RGBT210) are NOT allowed to be used in learning.
	* Most part of GOT10k CAN be used for learning, except from its (1) test set, (2) validation set and (3) the 1k sequences specified in the following [list](res/list0_prohibited_1000.txt).
	* The use of class labels specific to VOT is not allowed (i.e., identifying a target class in each sequence and applying pretrained class-specific trackers is not allowed).
 * Agreement to publish the code online at VOT page is required.


Questions regarding the VOT2020 challenge should be directed to <a href="mailto:gustavojavier.fernandez@ait.ac.at;matej.kristan@fri.uni-lj.si?subject=VOT2020 question">the VOT committee</a>. If you have general technical questions regarding the VOT toolkit, first consult the [FAQ page](/howto/faq.html) and the [VOT support forum](https://groups.google.com/forum/?hl=en#!forum/votchallenge-help).

