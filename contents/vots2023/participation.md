---
template: page2023.pug
submenu: Participate
---

## Problem statement

VOTS adopts a general problem formulation that covers single/multiple-target and short/long-term tracking as special cases. The tracker is initialized in the first frame by segmentation masks for all tracked targets. In each subsequent frame, the tracker has to report all segmentation masks (one for each target). The following figure summarizes the tracking task.

![Problem statement](problem_statement.png)

## Participation steps

 - Follow the guidelines to integrate your tracker with the new VOTS toolkit and run the experiment (link TBA).
 - Register your tracker on the evaluation server page (link TBA), fill-out the tracker description questionnaire and submit the tracker description documents: a short description for the results paper and a longer description (see explanations below).
 - Submit the output produced by the toolkit to the evaluation server (link TBA).
 - Receive performance scores via email. 

![Participation steps](participation_steps.png)

### Additional clarifications

 - The short tracker description should contain a concise description (LaTeX format) for the VOT results paper appendix (see examples in Appendix of a VOT results papers). The longer description will be used by the VOTS TC for result interpretation. Write the descriptions in advance to speed up the submission process.
 - Results for a single registered tracker may be submitted to the evaluation server at most 10 times. In response to submissions >10, an email  with Subject “Maximum number of VOTS submissions reached” will be sent to avoid confusion about the situation. Registering a slightly modified tracker to increase the number of server evaluations is prohibited. The VOTS committee reserves the discretion to disqualify trackers that violate this constraint. If in doubt whether a modification is “slight”, contact the VOTS committee.
 - When  coauthoring multiple submissions with similar design, the longer description should refer to the other submissions and clearly expose the differences. If in doubt whether a change is sufficient enough, contact the organisers. 
 - Authors are encouraged to submit their own previously published or unpublished trackers.
 - Authors may submit modified versions of third-party trackers. The submission description should clearly state what the changes were. Third-party trackers submitted without significant modification will not be accepted.

## FAQ

  - **Does the number of targets change during tracking?**

    All targets in the sequence are specified in the first frame. During tracking, some targets may disappear and possibly reappear later. The number of targets is different from sequence to sequence.
  - **Can I participate with a single-target tracker?**

    Sure, with a slight adjustment. You will write a wrapper that creates several independent tracker instances, each tracking one of the targets. To the toolkit, your tracker will be a multi-target tracker, while internally, you’re running independent trackers. See the example here.
  - **Can I participate with a bounding box tracker?**

    Sure, with a slight extension. In previous VOT challenges we showed that box trackers achieve very good performance on segmentation tasks by running a general segmentation on top of a bounding box. So you can simply run AlphaRef (or a similar box refinement module) on the top of your estimated bounding box to create the per-target segmentation mask. Running a vanilla bounding box tracker is possible, but its accuracy will be low (robustness might still be high).
  - **Which datasets can I use for training?**

    Validation and test splits of popular tracking datasets are NOT allowed for training the model. These include: OTB, VOT, ALOV, UAV123, NUSPRO, TempleColor, AVisT, LaSOT-val, GOT10k-val, GOT10k-test, TrackingNet-val/test, TOTB.
    Other than above, training splits of any dataset is allowed (including LaSOT-train, TrackingNet-train, YouTubeVOS, COCO, etc.). For including the transparent objects, it is allowed to use the Trans2k dataset.

  - **Which performance measures are you using?**

    New performance measures are developed for the VOTS challenges, [here is a draft](https://data.votchallenge.net/vots2023/measures.pdf).

  - **When will my results be publicly available?**

    The results for a registered tracker are immediately revealed to the participant via an email. But these results will not be publicly disclosed until after the VOTS2023 workshop. At that point, a public VOTS2023 challenge leaderboard will appear on the VOTS webpage.


<br/>
<br/>

<div class="alert alert-info" role="alert">
<div class="icon-left"><i class="glyphicon glyphicon-bullhorn hugeicon"></i> </div>
<h4>More questions?</h4>

Questions regarding the VOTS2023 challenge should be directed to the VOTS2023 committee. If you have general technical questions regarding the VOTS toolkit, consult the FAQ page and the VOT support forum first.
</div>



