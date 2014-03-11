---
template: page.jade
menu: Participation
---

Participants are required to perform the experiments on their tracker by
using the [VOT2013 evaluation kit](evaluation_kit.html). The raw results
from this experiment, as well as a supporting document containing a
short description of the tracker, should be submitted to the VOT2013
challenge.

##### Submission formatting instructions

The following templates should be used for submissions:

-   The VOT2013 challenge results
    [document](Download/template_results.zip)
-   Original workshop [paper](Download/template_paper.zip)

[Here](Download/templates.zip) you can download both templates
together.

The page limit for the full paper is 8 pages. 
 Authors should refer to the details on the content of the 'The VOT2013
supporting description and results document' to [a note on the accepted
results](participation.html#Note_accepted_results).

##### How to submit

The VOT2013 supporting description and results document, along with the
zip output from the VOT2013 evaluation kit, should be submitted through
the [submission page](submission.html). The full-length paper should be
submitted through a [separate link](submission.html) on the submission
page.

##### Levels of participation

The VOT2013 evaluation kit allows performing three different sets of
experiments. There are three levels of participation:

-   **Level 0**
     The entry point for participation is to perform Experiment 1 and
    submit the results (together with the results document).
-   **Level 1**
     Perform Experiments 1, 2 and 3 and submit the results (together
    with the results document).
-   **Level 2**
    This level extends level 1 of participation by also providing the
    tracker's binaries that will allow the VOT2013 committe to verify
    the submitted results. In case the binaries are submitted, they
    should come with a short description of the operating system and
    with all the required libraries for running the tracker in the
    VOT2013 evaluation kit. The authors may also accompany their
    binaries with the tracker's sourcode.

##### Requirements

-   **To submit a workshop paper:**
     The participation in Level 0 or higher is required.
-   **To become a co-author of the VOT2013 results paper:**
     The participation in Level 1 or higher is required.
-   **To compete for the VOT2013 prize:**
     The participation in Level 2 is required. If a participant agrees,
    the VOT2013 results page can make their binaries/source code
    publically available after the VOT2013 challenge is over.
    Alternatively, the VOT2013 will delete the submitted binaries/source
    after the evaluation and results verification is completed. In any
    case, the binaries/source should be accompanied by a readme.txt file
    that clearly states what the VOT2013 should do after completing the
    verification.

##### A note on the accepted results

One of the VOT2013 goals is to provide insights into what kind of
approaches and techniques work well for tracking in the different
conditions. Therefore, the short description in the results document
should be sufficiently informative to identify the different parts that
make up a particular tracker. This is achieved by either referring to a
published paper describing the tracker or submitting the full-length
paper to the workshop. Alternatively, if the tracker is a composition of
previously published trackers, the short description should refer to all
of these and provide a enough details to understand how these were
combined. If detailed disclosure of the tracker's insides is not an
option (e.g., due to industry-imposed nondisclosure agreements), the
authors are required to write a general description and submit a working
binary so that the VOT2013 team can verify their results.

##### One submission per tracker

Participants are expected to submit a single set of results per tracker.
Participants who have investigated several trackers may submit one
result per tracker. Changes in tracker's parameters do not constitute a
different tracker. The tracker is required to run with fixed parameters
on all experiments. Note that the method may internally change specific
parameters, but these have to be set automatically by the tracker, e.g.,
from the image size and the initial size of the bounding box, and should
not be set by detecting a specific test sequence and then selecting the
parameters that were hand-tuned to this sequence.
