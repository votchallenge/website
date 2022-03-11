---
template: page2022.pug
submenu: Participate
---

## Participate by submitting a paper

TBA

## Participate by attending the VOT2022 subchallenges

### VOT short-term and realtime subchallenges
 * VOT-ST2022 and VOT-RT2022 address short-term, causal, model-free trackers. These trackers are required to report the target in every frame of the sequence.
 * Trackers may report target location as a segmentation mask or a bounding box. Performance is evaluated w.r.t. to a segmentation ground truth.
 * The general requirements for the trackers submitted to these challenges are the same as in previous VOT challenges
 * VOT-ST2022 will use the new multi-start experiment setup and modified accuracy/robustness/expected average overlap measures for performance assesment
 * VOT-ST2022 winner will be determined on a separate sequestered dataset. The VOT committee will run trackers that obtain top performance on public dataset to determine the winner.
 * VOT-RT2022 will be run as one of the experiments of the VOT-ST2022 with real-time constraints, the experiment is conceptually the same as in the past challenges.

###  VOT long-term subchallenge (VOT-LT2022)

 * VOT-LT2022 addresses long-term, causal, model-free trackers.
 * Trackers may report target location as a segmentation mask or a bounding box. Performance is evaluated w.r.t. to a bounding box ground truth.
 * These trackers are required to determine the target disappearance (e.g., as the target leaves the field of view of undergoes a full occlusion) and re-detect the target once it re-enters the scene.
 * For the toolkit compatibility reasons, the tracker has to report the target position in each frame as well as a certainty score that the target is present (high for when the tracker believes the target is present and low/negative when the target is not present).
 * A dataset is the same as in the VOT-LT2020 and VOT-LT2019 challenges.

###  VOT RGB and depth subchallenge (VOT-RGBD2022)

 * VOT-RGBD2022 addresses long-term, causal, model-free trackers, i.e., the same kind of trackers as the VOT-LT2022 subchallenge.
 * Trackers may report target location as a segmentation mask or a bounding box. Performance is evaluated w.r.t. to a bounding box ground truth.
 * The trackers work with a 4-channel input composed of RGB+depth channels.
 * The testing dataset will be the same as in VOT-RGBD2020 challenge, a novel training set for RGBD trackers is available [here](https://zenodo.org/record/4716441).

## Participation instructions

 * Please note that using the [new Python toolkit](https://github.com/votchallenge/toolkit/) is required for participation. See the [toolkit guide](/howto/tutorial_python.html) on how to set it up and use it with your tracker.
 * The most recent version of the VOT toolkit is required because of adaptation to RGBT/RGBD subchallenges and regular maintenance.

All trackers require integration via the [TraX protocol](https://github.com/votchallenge/trax). The guidelines for integrating TraX protocol directly are available [here](https://trax.readthedocs.io/en/latest/tutorials.html). 
Additionally a wrapper is also provided to simplify the integration for people that have used VOT toolkit in the past, check the [integration examples repository](https://github.com/votchallenge/integration) for the code.

 * Make sure that you select the correct experiment stack for the corresponding challenge. The VOT-realtime subchallenge is automatically run as one of the experiments of the VOT-ST2021 subchallenge.
 * Perform evaluation and pack the results.
 * After packing the results submit them via the [submission system](https://submit.votchallenge.net).
 * In case author submit multiple trackers, they are required to contrast their submissions in the submission form detailed tracker description. State the name of the other trackers you are submitting and clearly list the main differences. The VOT committee will use this description in deciding which tracker will be eligible for competing for the challenge winner on sequestered datasets. Should several moderately similar variants of a tracker with nonzero intersection of authors end up among the top on the public dataset, only the top performing will be promoted to the sequestered analysis.

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
    * In case tracker uses a GPU, provide the model name of the GPU hardware (including laptop/desktop) and CPU version. Make sure that the code is compatible with CUDA 11.2 (or as recent as possible, e.g., CUDA 10 should be fine as well).
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


Questions regarding the VOT2022 challenge should be directed to <a href="mailto:gustavojavier.fernandez@ait.ac.at;matej.kristan@fri.uni-lj.si?subject=VOT2022 question">the VOT committee</a>. 
If you have general technical questions regarding the VOT toolkit, first consult the [FAQ page](/howto/faq.html) and the [VOT support forum](https://groups.google.com/forum/?hl=en#!forum/votchallenge-help).

