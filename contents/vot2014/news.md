---
template: page2014sidebar.jade
menu: News
---

##19.6.2014

The submission deadline has been extended to 29 June.

##17.6.2014

We have discovered another issue in the toolkit that resulted in
incorrectly measured time per frame for a tracker. This issue is only
relevant for those who use the TraX protocol and is caused by inaccurate
timing facilities (operating system limitation). Because of this we have
now reverted the time measuring code to only measure per-sequence
average time per frame (which is also how this is done in the old
integration approach). The updated code is available on Github. If you
are using TraX protocol and you have still not started the final run I
would like to ask you to update the toolkit before you do. If you have
already started the final run we will prepare a simpler and shorter
experiment that you can run and submit (you can also submit it after the
deadline) so that at least some picture about the performance of the
implementation can be obtained.
##10.6.2014

The CMT submission page is now open for you. Please [submit](https://cmt.research.microsoft.com/vot2014) your full paper now.

##4.6.2014

As promised in the previous announcement, the results for the reference
NCC implementations are now also available as a zip archive so that you
do not have to run it yourself. We have used the Matlab implementation
to obtain the results.

The file is available for download at:
http://box.vicos.si/vot/vot2014_ncc.zip

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
