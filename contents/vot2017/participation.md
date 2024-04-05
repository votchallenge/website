---
template: page2017.pug
submenu: Participate
---

## Participate by submitting a paper

### Scope of the solicited papers

 * Original or improved trackers as well as papers giving new insights into existing trackers or class of trackers (see below). Note that participation at VOT2017 challenge is required.
 * Novel ways of using and extending the VOT framework for tracker performance analysis.

### Submission instructions for regular papers

 * The full-length VOT2017 workshop papers must follow the standard requirements for ICCV2017 regular papers.
 * Submit the paper using the [VOT2017 CMT paper submission system](https://cmt3.research.microsoft.com/VOT2017).
 * The submitted papers should be compiled for double-blind reviewing.

### Submission instructions for ICCV-rejected papers

We offer authors of ICCV-rejected tracking papers to submit their paper to the VOT workshop. Rules are the same as for the regular submission process with some additions.

 * You must include all review forms and rebuttal letter as single PDF document to your submission.
 * You must address criticism and exposed flaws in your submitted paper to meet the requirements of the VOT workshop. Your submission will be assessed by the VOT organizers based on the provided review forms and rebuttal letter.

## Participate by attending the VOT2017 challenge

* The VOT2017 will contain the following experiments: (1) reset-based experiment for accuracy/robustness/expected average overlap computation,  (2) no-reset experiment to allow average overlap computation and (3) a real-time experiment to evaluate tracker performance under real-time constraints.
* The VOT2017 dataset is a refreshed version of the VOT2016 challenge with easy sequences replaced by completely new sequences not available in other tracking datasets.
* The winner will be determined on a separate sequestered dataset that we constructed in parallel to the VOT2017 dataset. That dataset will not be published. The VOT committee will run trackers that obtain top performance on public dataset to determine the winner.
* The VOT-TIR2017 will not introduce a new dataset. Rather VOT-TIR2016 challenge will be re-opened.

### Participation instructions

 * The **most recent version of the [VOT toolkit](https://github.com/votchallenge/vot-toolkit) is required** (VOT-TIR2017: the TIR challenge is also supported by the new toolkit). Because of some recent changes at least version 5.0.1 of the toolkit is required (previous results may be invalid).
 * Follow [this tutorial](/howto/workspace.html) to download the toolkit and set up the environment and [this tutorial](/howto/integration.html) to integrate your tracker into the toolkit. The toolkit will automatically download the dataset, alternatively you can download it [here](https://data.votchallenge.net/vot2017/vot2017.zip).

<div class="alert alert-info" role="alert" >
The legacy file-based integration approach, introduced in VOT2013 is not supported any more. All trackers require integration via the [TraX protocol](https://github.com/votchallenge/trax). The guidelines for integrating TraX protocol directly are available [here](https://trax.readthedocs.io/en/latest/tutorials.html). Additionally a wrapper is also provided to simplify the integration for people that have used VOT toolkit in the past, check the integration examples in the VOT toolkit repository on how to use it.
</div>

 * Make sure that you select the correct experiment stack (`vot2017` for VOT2017 challenge and `vottir2016` for VOT-TIR2017 challenge) for the corresponding challenge.
 * Follow [this tutorial](/howto/perfeval.html) to run the experiments and correctly pack the results.
 * After packing the results submit them via the [submission page](http://submit.votchallenge.net/).

### Participation requirements

 * The real-time experiment requires running the tracker on a single machine (you can use multiple CPUs or GPU). Please, make sure that this is the hardware that you are using when running the tracker. Also, specify your hardware setup correctly when submitting the results.
 * Authors are required to help the VOT technical committee to reproduce their results. If the results cannot be reproduced by the VOT using the submitted code, the tracker will be removed from the paper.
 * The submission should contain all the results and the tracker code following several requirements that will enable us to automatically process the submission and re-produce the results:
   - ALL source code for the tracker must be included in the submission.
   - ALL dependencies (operating system, installed libraries, Matlab/Python version, etc.) must be stated in a README file.
   - There must be a single script to compile all binaries (called install.m (Matlab), or install.sh (others)).
   - There must be a runfile for the tracker, that the toolkit can call to execute it. (basically what the toolkit generates for each tracker)
   - In case tracker uses a GPU, provide the GPU and CPU version.
 * In the past year we have noticed attempts of intentionally reporting large bounding boxes to avoid resets. The VOT committee will analyze the submitted tracker outputs. If such or similar strategies are detected, the committee reserves the right to disqualify the tracker.

### Results paper co-authorship requirement

 * In addition to the General submission rules, the authors will agree to publish their code online at VOT2017 page. If the tracker is under submission, the public release of the code can be delayed until publication. The authors are required to contact the VOT team immediately after the tracker is accepted.
 * For VOT-TIR, the VOT-TIR 2016 challenge will be reopened. Submissions that perform better than the baseline (SRDCFir) and fulfill the VOT-criteria for co-authorship, will be included in the results paper.

### Challenge winner requirements

 * Top performance on VOT2017 challenge.
 * Learning from the tracking datasets (OTB, VOT, ALOV, NUSPRO) is **prohibited**. The use of class labels specific to VOT is not allowed (i.e., identifying a target class in each sequence and applying pretrained class-specific trackers is not allowed).
 * Agreement to publish the code online at VOT page is required.
 * Top-performing method among the VOT-TIR submissions that perform better than the baseline (SRDCFir).

Questions regarding the VOT2017 challenge should be directed to [the VOT committee](mailto:&#103;&#117;&#115;&#116;&#97;&#118;&#111;&#106;&#97;&#118;&#105;&#101;&#114;&#46;&#102;&#101;&#114;&#110;&#97;&#110;&#100;&#101;&#122;&#64;&#97;&#105;&#116;&#46;&#97;&#99;&#46;&#97;&#116;&#59;&#109;&#97;&#116;&#101;&#106;&#46;&#107;&#114;&#105;&#115;&#116;&#97;&#110;&#64;&#102;&#114;&#105;&#46;&#117;&#110;&#105;&#45;&#108;&#106;&#46;&#115;&#105;?subject=VOT2017 question). If you have general technical questions regarding the VOT toolkit, first consult the [FAQ page](/howto/faq.html) and the [VOT support forum](https://groups.google.com/forum/?hl=en#!forum/votchallenge-help).




