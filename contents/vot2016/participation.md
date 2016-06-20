---
template: page2016.jade
submenu: Participate
---

## Prerequisites

A prerequisite for participating either VOT2016 challenge or VOT-TIR2016 challenge is to have the most recent version of the VOT toolkit set up on your computer and that your tracker implementation is able to communicate with the toolkit. Follow [this tutorial](/howto/workspace.html) to download the toolkit and set up the environment and [this tutorial](/howto/integration.html) to integrate your tracker into the toolkit. Make sure that you select the correct experiment stack for the corresponding challenge. Then you have to run the experiments, pack the results and submit them. This is described in [this tutorial](/howto/perfeval.html).


<div class="alert alert-info" role="alert">
<div class="icon-left"><i class="glyphicon glyphicon-bullhorn hugeicon"></i></div><h4>Important</h4>
Please, subscribe to our [mailing list](https://service.ait.ac.at/mailman/listinfo/votchallenge) so that you receive recent news about the workshop and the challenge details.
</div>

<br>

**Remark about VOT2016 dataset and VOT-TIR2016 dataset:** 

The sequences of VOT2016 dataset are the same sequences of VOT2015 dataset. 
However, the GT of VOT2016 is more accurate than the GT of VOT2015 dataset which has an impact on the evaluation. 

The VOT-TIR2016 dataset was updated with new sequences. 

## Participate in VOT2016 challenge

Follow the guidelines above to set up the workspace for VOT2016 challenge (select the vot2016 experiment stack). The main experiment will initialize trackers from the ground truth (this is equivalent to the VOT2014 baseline experiment). An additional experiment may be included.

There are two different levels of participation in the VOT2016 challenge:

 * **Level 0 --** Tracking results included in the joint paper:
   * Perform all the experiments of the VOT2016 challenge and submit them along with the description document. If a publication on the tracker exists, please provide a citation so that the paper can be correctly cited in the joint paper.

 * **Level 1 --** Becoming co-author of the VOT2016 joint paper and/or winning the VOT2016 challenge:
   * Co-authors are required to perform all the experiments of the VOT2016 challenge and submit them along with the description document.
   * The submitted tracker is required to out-perform the NCC tracker (provided with the toolkit) in terms of robustness.
   * Co-authors are required to submit the binaries or the source code of the tracker. Include all required libraries and ensure correct integration in the VOT toolkit. The VOT committee will use the submitted tracker only to verify the results and will delete the code/binaries after the challenge unless the authors agree to make the tracker publicly available on the VOT website.

**Submit the challenge results via the [results submission page](submission_page.html)**
and use the template paper for report your results (template is available [here](vot2016_authorkit.zip)).

Questions regarding the VOT2016 challenge should be directed to [the VOT committee](mailto:&#103;&#117;&#115;&#116;&#97;&#118;&#111;&#106;&#97;&#118;&#105;&#101;&#114;&#46;&#102;&#101;&#114;&#110;&#97;&#110;&#100;&#101;&#122;&#64;&#97;&#105;&#116;&#46;&#97;&#99;&#46;&#97;&#116;&#59;&#109;&#97;&#116;&#101;&#106;&#46;&#107;&#114;&#105;&#115;&#116;&#97;&#110;&#64;&#102;&#114;&#105;&#46;&#117;&#110;&#105;&#45;&#108;&#106;&#46;&#115;&#105;?subject=VOT2016 question). If you have general technical questions regarding the VOT toolkit, first consult the [FAQ page](/howto/faq.html) and the [VOT support forum](https://groups.google.com/forum/?hl=en#!forum/votchallenge-help).

## Participate in VOT-TIR2016 challenge
Follow the guidelines above to set up the workspace for VOT-TIR2016 challenge (select the vottir2016 experiment stack). The same experiments as in VOT2016 will be performed.

There are two different levels of participation in the VOT-TIR2016 challenge:

 * **Level 0 --** Tracking results included in the joint paper:
   * Perform all the experiments of the VOT2016 challenge and submit them along with the description document. If a publication on the tracker exists, please provide a citation so that the paper can be correctly cited in the joint paper.

 * **Level 1 --** Becoming co-author of the VOT-TIR2016 joint paper and/or winning the VOT-TIR2016 challenge:
   * Co-authors are required to perform all the experiments of the VOT-TIR2016 challenge and submit them along with the description document.
   * Co-authors are required to submit the binaries or the source code of the tracker. Include all required libraries and ensure correct integration in the VOT toolkit. The VOT committee will use the submitted tracker only to verify the results and will delete the code/binaries after the challenge unless the authors agree to make the tracker publicly available on the VOT website.

**Submit the challenge results via the [results submission page](submission_page.html)**
and use the template paper for report your results (template is available [here](vot2016_authorkit.zip)).

Questions regarding the VOT-TIR2016 challenge should be directed to [the VOT-TIR committee](mailto:&#109;&#105;&#99;&#104;&#97;&#101;&#108;&#46;&#102;&#101;&#108;&#115;&#98;&#101;&#114;&#103;&#64;&#108;&#105;&#117;&#46;&#115;&#101;?subject=VOT-TIR2016 question). If you have general technical questions regarding the VOT toolkit, first consult the [FAQ page](/howto/faq.html) and the [VOT support forum](https://groups.google.com/forum/?hl=en#!forum/votchallenge-help).


## Important notice on VOT/VOT-TIR2016

Two constraints are placed on trackers that will be considered for winners:

 * Constraint 1: Learning from the tracking datasets is not allowed (OTB, VOT, ALOV, NUSPRO). The use of class labels specific to VOT is not allowed (i.e., identifying a target class in each sequence and applying pre-trained class-specific trackers is not allowed).  
 
 * Constraint 2: The winning tracker has to provide CPU-only implementation for results validation (in addition to a potential GPU implementation). The authors of the tracker are required to cooperate with VOT to help run the tracker and reproduce the results.
 
Note that Constraints 1 and 2 apply only to the trackers that are considered for winners of VOT2016. We will accept submissions that do not account for the two constraints, but these will not be considered for the winning position.

## Participate at VOT2016 workshop

**Requirement for submitting a full-length paper to VOT2016 workshop:**

Participation at VOT2016 or VOT-TIR2016 challenge (level 0 or higher) is required. 

 * The full-length VOT2016 workshop papers must follow the standard requirements for ECCV2016 regular papers (template is available [here](vot2016_authorkit.zip)). 
 * Papers rejected from ECCV 2016 may be submitted until the July 7 deadline,
  i.e. until after the ECCV final decisions are announced, provided that:
    * the paper contains experiments on a VOT dataset.
    * the ECCV2016 CMT review and metareview is uploaded as supplemental material 
      (print "https://cmt.research.microsoft.com/ECCV2016/Protected/Author/ViewReviewsForPaper.aspx?paperId=YOUR-ID"
      and "https://cmt.research.microsoft.com/ECCV2016/Protected/Author/ViewMetaReviewsForPaper.aspx?paperId=YOUR-ID"
      into a pdf)
 * A cover letter describing the difference between the ECCV and VOT 2016 submissions and possibly the ECCV rebuttal.
 * Improvements of the ECCV submission are highly encouraged.
 * Submit the paper and the supplementary material via the VOT2016 CMT paper submission system (coming soon). 
 * The submitted papers should be compiled for double-blind reviewing.

**Submit the challenge results via the [CMT system](https://cmt3.research.microsoft.com/VOT2016)**
