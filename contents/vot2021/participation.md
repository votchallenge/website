---
template: page2021.pug
submenu: Participate
---

## Participate by submitting a paper

### Scope of the solicited papers

 * Original or improved single object trackers as well as papers that give new insights into existing single object trackers and analysis of tracker performance.
 * Novel ways of using and extending the VOT framework for performance analysis of trackers.

### Submission instructions for regular papers

 * Full-length VOT2021 workshop papers must follow the [standard requirements for ICCV2021 regular papers](http://iccv2021.thecvf.com/node/4#submission-guidelines).
 * Submit the paper using the submission system (TBA).
 * The submitted papers should be compiled for double-blind review.

### Submission instructions for tracking papers not accepted to ICCV

High-quality tracking papers submitted (but not accepted) to ICCV2021 can be re-submitted to VOT2021. Rules are the same as for the regular submission process with some additions.

 * Include all review forms and the rebuttal letter as a single PDF document to your submission.
 * The re-submission should address the criticism and exposed flaws in your ICCV submitted paper to meet the requirements of the VOT workshop.
 * The submissions will be assessed by the VOT organizers based on the provided review forms and the rebuttal letter.

## Participate by attending the VOT2021 subchallenges


### VOT standard (VOT-ST2021) and realtime (VOT-RT2021) subchallenges
 * VOT-ST2021 and VOT-RT2021 address short-term, causal, model-free trackers. These trackers are required to report the target in every frame of the sequence.
 * Trackers may report target location as a segmentation mask or a bounding box. Performance is evaluated w.r.t. to a segmentation ground truth.
 * The general requirements for the trackers submitted to these challenges are the same as in previous VOT challenges
 * VOT-ST2021 will use the new multi-start experiment setup and modified accuracy/robustness/expected average overlap measures for performance assesment
 * VOT-ST2021 dataset is the same as VOT-ST2020 dataset.
 * VOT-ST2021 winner will be determined on a separate sequestered dataset. The VOT committee will run trackers that obtain top performance on public dataset to determine the winner.
 * VOT-RT2021 will be run as one of the experiments of the VOT-ST2021 with real-time constraints, the experiment is conceptually the same as in the past challenges.

###  VOT long-term subchallenge (VOT-LT2021)

 * VOT-LT2021 addresses long-term, causal, model-free trackers.
 * Trackers may report target location as a segmentation mask or a bounding box. Performance is evaluated w.r.t. to a bounding box ground truth.
 * These trackers are required to determine the target disappearance (e.g., as the target leaves the field of view of undergoes a full occlusion) and re-detect the target once it re-enters the scene.
 * For the toolkit compatibility reasons, the tracker has to report the target position in each frame as well as a certainty score that the target is present (high for when the tracker believes the target is present and low/negative when the target is not present).
 * A dataset is the same as in the VOT-LT2020 and VOT-LT2019 challenges.

###  VOT RGB and depth subchallenge (VOT-RGBD2021)

 * VOT-RGBD2021 addresses long-term, causal, model-free trackers, i.e., the same kind of trackers as the VOT-LT2021 subchallenge.
 * Trackers may report target location as a segmentation mask or a bounding box. Performance is evaluated w.r.t. to a bounding box ground truth.
 * The trackers work with a 4-channel input composed of RGB+depth channels.
 * The testing dataset will be the same as in VOT-RGBD2020 challenge, a novel training set for RGBD trackers is available [here](https://zenodo.org/record/4716441).

## Participation instructions

 * Please note that using the [new Python toolkit](https://github.com/votchallenge/vot-toolkit-python/) is required for participation. See the [toolkit guide](/howto/tutorial_python.html) on how to set it up and use it with your tracker.
 * The most recent version of the VOT toolkit is required because of adaptation to RGBT/RGBD subchallenges and regular maintenance.

All trackers require integration via the [TraX protocol](https://github.com/votchallenge/trax). The guidelines for integrating TraX protocol directly are available [here](https://trax.readthedocs.io/en/latest/tutorials.html). 
Additionally a wrapper is also provided to simplify the integration for people that have used VOT toolkit in the past, check the [integration examples repository](https://github.com/votchallenge/integration) for the code.

 * Make sure that you select the correct experiment stack (votst2021 for VOT-ST2021 main short-term subchallenge ; votlt2021 for VOT-LT2021 subchallenge ; votrgbd2021 for VOT-RGBD2021 subchallenge) for the corresponding challenge. The VOT-realtime subchallenge is automatically run as one of the experiments of the VOT-ST2021 subchallenge.
 * Perform evaluation and pack the results.
 * After packing the results submit them via the submission page (TBA).

### Participation requirements

 * The real-time experiment requires running the tracker on a single machine (multiple CPU/GPU allowed). Please specify your hardware setup correctly when submitting the results: CPU, memory, GPU, GPU-memory, HD/SSD etc.
 * Authors are required to help the VOT technical committee to reproduce their results. If the results cannot be reproduced by the VOT TC using the submitted code within reasonable time, the tracker will be removed from the challenge and the paper.
 * The submission should contain all the results and the tracker code which follows these requirements for automatic results reproduction:
    * It is recommended to submit a Singularity file (.def) for the submission
    * It is strongly recommended to use Linux and Python
    * The OS MUST be sufficiently recent: Linux Ubuntu 18.04 or newer, Windows 10, MacOS is unfortunately not possible.
    * ALL source code for the tracker must be included in the submission.
    * ALL dependencies (operating system, installed libraries, Matlab/Python version, etc.) must be stated in a README file.
    * A single script to compile all binaries is required (called install.m  for Matlab, or install.sh for others).
    * A runfile for the tracker, that the toolkit can call to execute it is required. (basically what the toolkit generates for each tracker)
    * In case tracker uses a GPU, provide the model name of the GPU hardware (including laptop/desktop) and CPU version. Make sure that the code is  compatible with CUDA 11.2.
 * The VOT committee reserves to disqualify submissions for which a cheating strategy is suspected.
 * Authors are encouraged to submit their own previously published trackers.
 * Authors may submit modified versions of third-party trackers. The submission description should clearly state what the changes were. Third-party trackers submitted without significant modification will not be accepted.

### Subchallenge winner requirements

 * Top performance on the corresponding subchallenge.
 * The tracker should obey the following learning restrictions:
	* OTB, VOT, ALOV, UAV123, NUSPRO, TempleColor, RGBT234 (or datasets with parts of it, e.g. RGBT210) are NOT allowed to be used in learning.
	* Most part of GOT10k CAN be used for learning, except from its (1) test set, (2) validation set and (3) the 1k sequences specified in the following [list](res/list0_prohibited_1000.txt).
	* The use of class labels specific to VOT is not allowed (i.e., identifying a target class in each sequence and applying pretrained class-specific trackers is not allowed).
 * Agreement to publish the code online at VOT page is required.


Questions regarding the VOT2021 challenge should be directed to <a href="mailto:gustavojavier.fernandez@ait.ac.at;matej.kristan@fri.uni-lj.si?subject=VOT2021 question">the VOT committee</a>. 
If you have general technical questions regarding the VOT toolkit, first consult the [FAQ page](/howto/faq.html) and the [VOT support forum](https://groups.google.com/forum/?hl=en#!forum/votchallenge-help).

