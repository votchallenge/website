---
template: page2013.jade
submenu: Dataset
---

# About the VOT 2013 dataset

The dataset comprises 16 short sequences showing various objects in challenging backgrounds.The sequences were chosen from a large pool of sequences using a methodology based on clustering visual features of object and background so that those 16 sequences sample evenly well the existing pool. The sequences were annotated by the VOT committee using axis-aligned bounding boxes.

The dataset is automatically downloaded by the evaluation kit during the install process; there is no need to separately download the sequences for the challenge. If you are solely interested in the sequences, please download the [dataset](http://box.vicos.si/vot/vot2013.zip). The compressed file contains the single images of each sequence and per frame labels of the rotated bounding box marking the object. The labels are stored in a text file with the format:

	frameN: left, top, width, height
	
The following gallery gives an overview of the dataset (hover over image to see several snapshots from the sequence).

<div class="gallery">
<img class="image sequence preview" title="bicycle" alt="bicycle" src="img/thumbnails/bicycle_static.gif" />
<img class="image sequence preview" title="bolt" alt="bolt" src="img/thumbnails/bolt_static.gif" />
<img class="image sequence preview" title="car" alt="car" src="img/thumbnails/car_static.gif" />
<img class="image sequence preview" title="cup" alt="cup" src="img/thumbnails/cup_static.gif" />
<img class="image sequence preview" title="david" alt="david" src="img/thumbnails/david_static.gif" />
<img class="image sequence preview" title="diving" alt="diving" src="img/thumbnails/diving_static.gif" />
<img class="image sequence preview" title="face" alt="face" src="img/thumbnails/face_static.gif" />
<img class="image sequence preview" title="gymnastics" alt="gymnastics" src="img/thumbnails/gymnastics_static.gif" />
<img class="image sequence preview" title="hand" alt="hand" src="img/thumbnails/hand_static.gif" />
<img class="image sequence preview" title="iceskater" alt="iceskater" src="img/thumbnails/iceskater_static.gif" />
<img class="image sequence preview" title="juice" alt="juice" src="img/thumbnails/juice_static.gif" />
<img class="image sequence preview" title="jump" alt="jump" src="img/thumbnails/jump_static.gif" />
<img class="image sequence preview" title="singer" alt="singer" src="img/thumbnails/singer_static.gif" />
<img class="image sequence preview" title="sunshade" alt="sunshade" src="img/thumbnails/sunshade_static.gif" />
<img class="image sequence preview" title="torus" alt="torus" src="img/thumbnails/torus_static.gif" />
<img class="image sequence preview" title="woman" alt="woman" src="img/thumbnails/woman_static.gif" />
</div>
