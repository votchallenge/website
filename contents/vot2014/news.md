---
template: page2014sidebar.jade
menu: News
---

##2.6.2014

In the past two weeks we have made some changes to the VOT toolkit so we
invite you to update your local copy.

Most of the changes are of non-critical, however, we have also provided
a fix for a bug in the region parsing code that we have found with the
help of a very cooperative participant. According to what we currently
know, this bug only affects Windows platform, but we urge all the
participants to update their local copy and delete the trax directory
within the toolkit so that new version of trax library will be
downloaded again next time you run the experiments. If you are using
trax protocol for communication, recompile the library and client as
well. It is also recommended to delete any cached results. We apologize
for any problems that this may have caused, but it was a really obscure
platform dependent bug that we did not notice during our testing phase.
If you observe any strange in the toolkit behavior please open an issue
at GitHub: https://github.com/vicoslab/vot-toolkit/issues .

We have also implemented a NCC tracker in C++ and Matlab. These
implementations may serve as an integration guide but will also be used
as a reference baseline tracker. We have focused on making both
implementations work in the same way, however, the Matlab implementation
should be considered as the reference in case of deviations. We will
publish the reference results for VOT2014 dataset for your convenience soon.

##21.5.2014

It was brought to our attention by a participant that the file /tracker/examples/cpp/vot.hpp contained a bug. We have resolved the issue and updated the git repository so if you used this file in your own tracker, please make sure that it is up-to-date.

##20.5.2014

The final preparations for this year's challenge are finished and the challenge is open as of now. We are sorry for the delayed start, but we ran into some unexpected technical problems that have all been resolved by now.

In order to successfully participate in the challenge, please make sure that you are working with the latest version of the VOT toolkit that can be found in our GitHub repository at https://github.com/vicoslab/vot-toolkit . It is also very important that you are using the latest version of the dataset, which can be obtained by either starting from a clean working directory or by manually deleting the 'sequences' folder in the working directory. Both of these actions will lead to a fresh download of the dataset.

Please keep in mind that the submission deadline for results and for workshop papers is June 23.

For detailed information about participation, please check http://www.votchallenge.net/vot2014/participation.html .
