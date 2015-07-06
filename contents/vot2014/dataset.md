---
template: page2014.jade
submenu: Dataset
---

# About the VOT 2014 dataset

The dataset comprises 25 short sequences showing various objects in challenging backgrounds. Eight sequences are from last year's VOT2013 challenge (bolt, bicycle, david, diving, gymnastics, hand, sunshade, woman). The new sequences show complementary objects and backgrounds, for example a fish underwater or a surfer riding a big wave.

The sequences were chosen from a large pool of sequences including the [ALOV dataset](http://www.alov300.org/) using a methodology based on clustering visual features of object and background so that those 25 sequences sample evenly well the existing pool.

The sequences were annotated by the VOT committee using rotated bounding boxes in order to provide highly accurate ground truth values for comparing results.

The dataset is automatically downloaded by the evaluation kit during the install process; there is no need to separately download the sequences for the challenge. If you are solely interested in the sequences, please download the [dataset](http://box.vicos.si/vot/vot2014.zip). The compressed file contains the single images of each sequence and per frame labels of the rotated bounding box marking the object. The labels are stored in a text file with the format:

	frameN: X1, Y1, X2, Y2, X3, Y3, X4, Y4
	
where `Xi` and `Yi` are the coordinates of corner `i` of the bounding box in frame `N`, the N-th row in the text file.

The following images give an overview of the dataset:

<div class="gallery">
<img class="image sequence preview" title="ball" alt="ball" src="img/thumbnails/ball_static.gif" />
<img class="image sequence preview" title="basketball" alt="basketball" src="img/thumbnails/basketball_static.gif" />
<img class="image sequence preview" title="bicycle" alt="bicycle" src="img/thumbnails/bicycle_static.gif" />
<img class="image sequence preview" title="bolt" alt="bolt" src="img/thumbnails/bolt_static.gif" />
<img class="image sequence preview" title="car" alt="car" src="img/thumbnails/car_static.gif" />
<img class="image sequence preview" title="david" alt="david" src="img/thumbnails/david_static.gif" />
<img class="image sequence preview" title="diving" alt="diving" src="img/thumbnails/diving_static.gif" />
<img class="image sequence preview" title="drunk" alt="drunk" src="img/thumbnails/drunk_static.gif" />
<img class="image sequence preview" title="fernando" alt="fernando" src="img/thumbnails/fernando_static.gif" />
<img class="image sequence preview" title="fish1" alt="fish1" src="img/thumbnails/fish1_static.gif" />
<img class="image sequence preview" title="fish2" alt="fish2" src="img/thumbnails/fish2_static.gif" />
<img class="image sequence preview" title="gymnastics" alt="gymnastics" src="img/thumbnails/gymnastics_static.gif" />
<img class="image sequence preview" title="hand1" alt="hand1" src="img/thumbnails/hand1_static.gif" />
<img class="image sequence preview" title="hand2" alt="hand2" src="img/thumbnails/hand2_static.gif" />
<img class="image sequence preview" title="jogging" alt="jogging" src="img/thumbnails/jogging_static.gif" />
<img class="image sequence preview" title="motocross" alt="motocross" src="img/thumbnails/motocross_static.gif" />
<img class="image sequence preview" title="polarbear" alt="polarbear" src="img/thumbnails/polarbear_static.gif" />
<img class="image sequence preview" title="skating" alt="skating" src="img/thumbnails/skating_static.gif" />
<img class="image sequence preview" title="sphere" alt="sphere" src="img/thumbnails/sphere_static.gif" />
<img class="image sequence preview" title="sunshade" alt="sunshade" src="img/thumbnails/sunshade_static.gif" />
<img class="image sequence preview" title="surfing" alt="surfing" src="img/thumbnails/surfing_static.gif" />
<img class="image sequence preview" title="torus" alt="torus" src="img/thumbnails/torus_static.gif" />
<img class="image sequence preview" title="trellis" alt="trellis" src="img/thumbnails/trellis_static.gif" />
<img class="image sequence preview" title="tunnel" alt="tunnel" src="img/thumbnails/tunnel_static.gif" />
<img class="image sequence preview" title="woman" alt="woman" src="img/thumbnails/woman_static.gif" />
</div>
