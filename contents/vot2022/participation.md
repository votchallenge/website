---
template: page2022.pug
submenu: Participate
---

## Participate by submitting a paper

TBA

## Participate by attending the VOT2022 subchallenges

### VOT short-term and realtime subchallenges
 * Four variants: VOT-STS2022, VOT-RTS2022, VOT-STB2022, VOT-RTB2022
 * Address short-term, causal, model-free trackers. These trackers are required to report the target in every frame of the sequence.
 * VOT-STS2022 – target location reported as a segmentation mask, winners identified on a sequestered dataset.
 * VOT-STB2022 – target location reported as a bounding box, winners identified on a sequestered dataset.
 * VOT-RTS2022 – runs as part of the VOT-STS2022 experiments, target location reported as a segmentation mask, winners identified on the public dataset.
 * VOT-STS2022 & VOT-STB2022 winners identified on a sequestered dataset.

###  VOT long-term subchallenge (VOT-LT2022)

 * VOT-LT2022 addresses long-term, causal, model-free trackers.
 * New VOT-LT2021 dataset introduced!
 * Trackers may report target location as a segmentation mask or a bounding box. Performance is evaluated w.r.t. to a bounding box ground truth.
 * These trackers are required to determine the target disappearance (e.g., as the target leaves the field of view or undergoes a full occlusion) and re-detect the target once it re-enters the scene.
 * For the toolkit compatibility reasons, the tracker has to report the target position in each frame as well as a certainty score that the target is present (high for when the tracker believes the target is present and low/negative when the target is not present).

###  VOT RGB and depth subchallenge (VOT-RGBD2022)

 * Two variants: VOT-RGBD2022 and VOT-D2022
 * The main idea between the two variants is to evaluate how well depth-only tracking works and how much additional information RGB provides
   NOTE: in contrast to previous years, VOT-RGBD/D are now short-term challenges.
 * Trackers may report target location as a bounding box. Performance is evaluated w.r.t. to a bounding box ground truth and using the short-term bounding box evaluation protocol.
 * VOT-RGBD2022: The trackers use a 4-channel (R+G+B+depth) input.
 * VOT-D2022: The trackers use only the depth channel as input.
 * New dataset introduced - the dataset is composed of the previous year’s VOT-RGBD (CDTB) & DepthTrack sequences.
 * Participants are not allowed to use the previous year VOT-RGBD dataset or CDTB dataset or DepthTrack test sequences in training. 
 * Winners are identified on the public dataset.

## Participation instructions

 * Please note that using the [new Python toolkit](https://github.com/votchallenge/toolkit/) is required for participation. See the [toolkit guide](/howto/tutorial_python.html) on how to set it up and use it with your tracker. The most recent version of the VOT toolkit is required (at least 0.5.3).

All trackers require integration via the [TraX protocol](https://github.com/votchallenge/trax). The guidelines for integrating TraX protocol directly are available [here](https://trax.readthedocs.io/en/latest/tutorials.html). 
Additionally a wrapper is also provided to simplify the integration for people that have used VOT toolkit in the past, check the [integration examples repository](https://github.com/votchallenge/integration) for the code.

 * Make sure that you select the correct experiment stack for the corresponding challenge. The VOT-realtime subchallenge is automatically run as one of the experiments of the VOT-ST2021 subchallenge.
 * Perform evaluation and pack the results.
 * After packing the results submit them via the [submission system](https://submit.votchallenge.net).
 * In case author submit multiple trackers, they are required to contrast their submissions in the submission form detailed tracker description. State the name of the other trackers you are submitting and clearly list the main differences. The VOT committee will use this description in deciding which tracker will be eligible for competing for the challenge winner on sequestered datasets. Should several moderately similar variants of a tracker with nonzero intersection of authors end up among the top on the public dataset, only the top performing will be promoted to the sequestered analysis.

### Participation requirements

 * The real-time experiment requires running the tracker on a single machine (multiple CPU/GPU allowed). Please specify your hardware setup correctly when submitting the results: CPU, memory, GPU, GPU-memory, HD/SSD etc.
 * Authors are required to help the VOT technical committee to reproduce their results. The VOT TC reserves the right to disqualify a tracker if results cannot be easily reproduced.
 * The submission should contain (i) the results  and (ii) the tracker code.
   * The submitted code should follow these guidelines for result reproduction:
   * It is recommended to submit a Singularity file (.def) for the submission. If this is provided, requirements 5-6 below are not needed.
   * It is strongly recommended to use Linux and Python
   * The OS MUST be sufficiently recent: Linux Ubuntu 18.04 or newer, Windows 10, MacOS is unfortunately not possible.
   * ALL source code for the tracker must be included in the submission.
   * ALL dependencies (operating system, installed libraries, Matlab/Python version, etc.) must be stated in a README file (not needed if Singularity file is provided).
   * A single script to compile all binaries is required (called install.m for Matlab, or install.sh for others; not needed if Singularity file is provided).
   * A runfile for the tracker, that the toolkit can call to execute it, is required. (basically what the toolkit generates for each tracker)
   * In case tracker uses a GPU, provide the model name of the GPU hardware (including laptop/desktop) and CPU version. Make sure that the code is compatible with CUDA 11.2.
   * The trackers with the top five performance will be asked to submit a Singularity file (.def) for evaluation on the sequestered dataset to identify the winner. Please see the guidance for instruction [here](https://internal.wasp-sweden.org/networks-and-resources/wara-ml-internal-page/singularity-tutorial-vot-challenge-2022/).
 * When submitting the results, you will need to classify the design of your tracker and paste (i) a short and (ii) a longer tracker description.
 * The short tracker description should contain a concise description (tex format) for the VOT results paper tracker descriptions appending. The more detailed description should  be provided in the longer description, which is used by the VOT TC in results interpretation. Write these descriptions in advance to speed up the submission process.
 * In case you coauthor multiple submissions with similar design, the longer description should refer to the other submissions and clearly expose the differences. If several submissions from the same author bear substantial similarity, only the top of the public set is eligible for sequestered evaluation.
 * The VOT committee reserves to disqualify submissions for which a cheating strategy is suspected.
 * Authors are encouraged to submit their own previously published trackers.
 * Authors may submit modified versions of third-party trackers. The submission description should clearly state what the changes were. Third-party trackers submitted without significant modification will not be accepted.


### Subchallenge winner requirements

 * Top performance on the corresponding subchallenge.
 * The following restrictions apply:
   * OTB, VOT, ALOV, UAV123, NUSPRO, TempleColor, are NOT allowed to be used in learning.
   * Most part of GOT10k CAN be used for learning, except from its (1) test set, (2) validation set and (3) the 1k sequences specified in the following [https://www.votchallenge.net/vot2019/res/list0_prohibited_1000.txt](list).
   * VOT-RGBD2021 & DepthTrack test sets are not allowed in training.
   * The use of class labels specific to VOT is not allowed (i.e., identifying a target class in each sequence and applying pretrained class-specific trackers is not allowed).
 * Agreement to publish the code online at VOT page is required.



Questions regarding the VOT2022 challenge should be directed to <a href="mailto:gustavojavier.fernandez@ait.ac.at;matej.kristan@fri.uni-lj.si?subject=VOT2022 question">the VOT committee</a>. 
If you have general technical questions regarding the VOT toolkit, first consult the [FAQ page](/howto/faq.html) and the [VOT support forum](https://groups.google.com/forum/?hl=en#!forum/votchallenge-help).

