---
template: page.pug
menu: Home
---

<!--div class="panel panel-success">
  <div class="panel-heading">
    <h3 class="panel-title">Submit to the ECCV [VOT 2016 Workshop](http://www.votchallenge.net/vot2016/index.html)!</h3>
  </div>
</div-->

The VOT challenges provide the visual tracking community with a precisely defined and repeatable way of comparing short-term trackers as well as a common platform for discussing the evaluation and advancements made in the field of visual tracking.

The goal of the challenges is to build up a repository of considerable benchmarks and to organize workshops or similar events in order to push forward research in visual tracking.

<br />

<div class="row">

<div class="col-lg-4 col-sm-12">
<a href="/challenges.html" class="hugebutton text-primary">
<h3><i class="glyphicon glyphicon-star"></i> Challenges</h3>
<p>Challenges and workshops that we have organized or are organizing.</p>
</a>
</div>

<div class="col-lg-4 col-sm-12">
<a href="/howto/" class="hugebutton text-primary">
<h3><i class="glyphicon glyphicon-book"></i> Support</h3>
A collection of documentation and tutorials on various topics.
</a>
</div>

<div class="col-lg-4 col-sm-12">
<div  class="hugebutton text-muted">
<h3><i class="glyphicon glyphicon-cloud"></i> Database</h3>
<p>An online repository of sequences and results.</p>
<p class="text-warning"><i class="glyphicon glyphicon-wrench"></i> The database is currently under construction.</p>
</div>
</div>

</div>

## Citing VOT Challenge

When using any of VOT benchmarks in your paper, please cite the VOT journal paper as well as the relevant VOT workshop paper describing the relevant benchmark.

<div class="bibtex panel panel-default">@article {VOT_TPAMI,
    author = {Matej Kristan and Jiri Matas and Ale\v{s} Leonardis and Tomas Vojir and Roman Pflugfelder and Gustavo Fernandez and Georg Nebehay and Fatih Porikli and Luka \v{C}ehovin},
    journal={IEEE Transactions on Pattern Analysis and Machine Intelligence},
    title={A Novel Performance Evaluation Methodology for Single-Target Trackers},
    year={2016}, month={Nov}, volume={38}, number={11}, pages={2137-2155},
    doi={10.1109/TPAMI.2016.2516982}, ISSN={0162-8828}
}</div>


## Highlights and news


<div class="panel panel-primary">
  <div class="panel-heading">
    <h3 class="panel-title">VOT2019 announcement</h3>
  </div>
  <div class="panel-body">
  
Due to multiple requests the VOT2019 results submission deadline has been extended to 9.6.2019.</br></br>
  
The VOT2019 workshop proposal has been submitted and we expect decision from the workshop chairs in early April. Here's some announcements and heads-ups:</br></br>

In addition to the (1) VOT short-term challenge, (2) VOT short-term realtime and (3) VOT long-term challenge, we plan to introduce two new challenges:</br>
4) VOT-RGBT challenge (RGB + Thermal/infra-red)</br>
5) VOT-RGBD challenge (RGB + Depth)</br></br>

These two challenges anticipate 4-channel videos (3 8-bit channels for RGB + additional 16-bit channel). The VOT-RGBT challenge is a natural evolution of the VOT-TIR challenges addressing short-term trackers that use RGB and TIR modalities. VOT-TIR will be likely organized as well as part of the VOT-RGBT challenge.</br></br>

The VOT-RGBD challenge is a new challenge aiming at trackers that use both RGB and depth information in a long-term tracking scenario -- objects may disappear and reappear, thus re-detection capabilities are required.</br></br>

We are aware that RGBD trackers are not as wide-spread as RGB-only, and we see this as a chance to boost the development of this type of trackers. To allow researchers to prepare early for the VOT-RGBD challenge, we have updated the VOT-toolkit and trax protocol (new versions available on GIT). The guidelines for integration and testing are available on the [VOT homepage](http://www.votchallenge.net/howto/integration_channels.html). We included two test sequences (not part of the final dataset) to allow early integration and tracker testing -- the toolkit will automatically download the sequences.</br></br>

Here's a roughly planned timeline for VOT2019 challenge (may change):</br>
- 15. April: VOT 2019 challenge open, datasets available</br>
- 9. June: Tracker results submission deadline

  </div>
</div>


<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">The VideoNet initiative</h3>
  </div>
  <div class="panel-body">

    VideoNet is a new initiative to bring together the community of researchers that have put effort into creating benchmarks for video tasks.  The goal of the VideoNet is to exchange ideas on how to improve annotations, evaluation measures, and learn from each other's experiences. More information available at the [official page](http://videonet.team/).
  </div>
</div>


<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">VOT paper was accepted at Transactions on Pattern Analysis and Machine Intelligence</h3>
  </div>
  <div class="panel-body">

    We are happy to announce that the VOT (2013-2014) methodology paper has been accepted to Transactions on Pattern
    Analysis and Machine Intelligence (TPAMI). The paper can be accessed from the [VOT publications page
    link](http://www.votchallenge.net/publications.html). For future reference, if you use any of the VOT datasets
    in your evaluation, please cite this paper as  methodology reference as well as the relevant VOT workshop paper
    for the dataset.
  </div>
</div>

<div class="alert alert-info" role="alert">
<div class="icon-left"><i class="glyphicon glyphicon-bullhorn hugeicon"></i> </div>
<h4>Do you want to stay informed?</h4>

If you want to stay informed about the future VOT activities you can subscribe to [our news mailing list](https://service.ait.ac.at/mailman/listinfo/votchallenge). If you are interested in the toolkit and technical aspects, subscribe to [VOT support forum](https://groups.google.com/forum/?hl=en#!forum/votchallenge-help).
</div>
