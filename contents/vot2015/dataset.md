---
template: page2015.jade
submenu: Dataset
---

## VOT2015 Dataset

The dataset comprises 60 short sequences showing various objects in challenging backgrounds. 
The sequences were chosen from a large pool of sequences including the [ALOV dataset](www.alov300.org/), OTB2 dataset, non-tracking datasets, [Computer Vision Online](http://www.computervisiononline.com/datasets), [Professor Bob Fisher's Image Database](http://homepages.inf.ed.ac.uk/rbf/CVonline/Imagedbase.htm), [Videezy](http://www.videezy.com/), [Center for Research in Computer Vision, University of Central Florida, USA](http://crcv.ucf.edu/data/), [NYU Center for Genomics and Systems Biology](http://celltracking.bio.nyu.edu/), [Data Wrangling](http://www.datawrangling.com/some-datasets-available-on-the-web/), [Open Access Directory](http://oad.simmons.edu/oadwiki/Data_repositories) and [Learning and Recognition in Vision Group, INRIA, France](http://lear.inrialpes.fr/data). The VOT sequence selection protocol was applied to obtain a representative set of challenging sequences.



### Annotations

The sequences were annotated by the VOT committee using rotated bounding boxes in order to provide highly accurate ground truth values for comparing results.

The dataset is automatically downloaded by the evaluation kit when needed, there is no need to separately download the sequences for the challenge. If you are solely interested in the sequences, please download the [dataset](http://box.vicos.si/vot/vot2015.zip). The compressed archive contains directories of images for each sequence and per frame annotations of the rotated bounding box marking the object. The annotations are stored in a text file with the format:

	frameN: X1, Y1, X2, Y2, X3, Y3, X4, Y4
	
where `Xi` and `Yi` are the coordinates of corner `i` of the bounding box in frame `N`, the N-th row in the text file.

### Overview

The following gallery gives an overview of the dataset (hover over image to see several snapshots from the sequence).

<div class="gallery">
<img class="image sequence preview" title="bag" alt="bag" src="img/thumbnails/bag_static.gif" />
<img class="image sequence preview" title="ball1" alt="ball1" src="img/thumbnails/ball1_static.gif" />
<img class="image sequence preview" title="ball2" alt="ball2" src="img/thumbnails/ball2_static.gif" />
<img class="image sequence preview" title="basketball" alt="basketball" src="img/thumbnails/basketball_static.gif" />
<img class="image sequence preview" title="birds1" alt="birds1" src="img/thumbnails/birds1_static.gif" />
<img class="image sequence preview" title="birds2" alt="birds2" src="img/thumbnails/birds2_static.gif" />
<img class="image sequence preview" title="blanket" alt="blanket" src="img/thumbnails/blanket_static.gif" />
<img class="image sequence preview" title="bmx" alt="bmx" src="img/thumbnails/bmx_static.gif" />
<img class="image sequence preview" title="bolt" alt="bolt" src="img/thumbnails/bolt_static.gif" />
<img class="image sequence preview" title="bolt2" alt="bolt2" src="img/thumbnails/bolt2_static.gif" />
<img class="image sequence preview" title="book" alt="book" src="img/thumbnails/book_static.gif" />
<img class="image sequence preview" title="butterfly" alt="butterfly" src="img/thumbnails/butterfly_static.gif" />
<img class="image sequence preview" title="car1" alt="car1" src="img/thumbnails/car1_static.gif" />
<img class="image sequence preview" title="car2" alt="car2" src="img/thumbnails/car2_static.gif" />
<img class="image sequence preview" title="crossing" alt="crossing" src="img/thumbnails/crossing_static.gif" />
<img class="image sequence preview" title="dinosaur" alt="dinosaur" src="img/thumbnails/dinosaur_static.gif" />
<img class="image sequence preview" title="fernando" alt="fernando" src="img/thumbnails/fernando_static.gif" />
<img class="image sequence preview" title="fish1" alt="fish1" src="img/thumbnails/fish1_static.gif" />
<img class="image sequence preview" title="fish2" alt="fish2" src="img/thumbnails/fish2_static.gif" />
<img class="image sequence preview" title="fish3" alt="fish3" src="img/thumbnails/fish3_static.gif" />
<img class="image sequence preview" title="fish4" alt="fish4" src="img/thumbnails/fish4_static.gif" />
<img class="image sequence preview" title="girl" alt="girl" src="img/thumbnails/girl_static.gif" />
<img class="image sequence preview" title="glove" alt="glove" src="img/thumbnails/glove_static.gif" />
<img class="image sequence preview" title="godfather" alt="godfather" src="img/thumbnails/godfather_static.gif" />
<img class="image sequence preview" title="graduate" alt="graduate" src="img/thumbnails/graduate_static.gif" />
<img class="image sequence preview" title="gymnastics1" alt="gymnastics1" src="img/thumbnails/gymnastics1_static.gif" />
<img class="image sequence preview" title="gymnastics2" alt="gymnastics2" src="img/thumbnails/gymnastics2_static.gif" />
<img class="image sequence preview" title="gymnastics3" alt="gymnastics3" src="img/thumbnails/gymnastics3_static.gif" />
<img class="image sequence preview" title="gymnastics4" alt="gymnastics4" src="img/thumbnails/gymnastics4_static.gif" />
<img class="image sequence preview" title="hand" alt="hand" src="img/thumbnails/hand_static.gif" />
<img class="image sequence preview" title="handball1" alt="handball1" src="img/thumbnails/handball1_static.gif" />
<img class="image sequence preview" title="handball2" alt="handball2" src="img/thumbnails/handball2_static.gif" />
<img class="image sequence preview" title="helicopter" alt="helicopter" src="img/thumbnails/helicopter_static.gif" />
<img class="image sequence preview" title="iceskater" alt="iceskater" src="img/thumbnails/iceskater_static.gif" />
<img class="image sequence preview" title="leaves" alt="leaves" src="img/thumbnails/leaves_static.gif" />
<img class="image sequence preview" title="marching" alt="marching" src="img/thumbnails/marching_static.gif" />
<img class="image sequence preview" title="matrix" alt="matrix" src="img/thumbnails/matrix_static.gif" />
<img class="image sequence preview" title="motocross1" alt="motocross1" src="img/thumbnails/motocross1_static.gif" />
<img class="image sequence preview" title="motocross2" alt="motocross2" src="img/thumbnails/motocross2_static.gif" />
<img class="image sequence preview" title="nature" alt="nature" src="img/thumbnails/nature_static.gif" />
<img class="image sequence preview" title="octopus" alt="octopus" src="img/thumbnails/octopus_static.gif" />
<img class="image sequence preview" title="pedestrian1" alt="pedestrian1" src="img/thumbnails/pedestrian1_static.gif" />
<img class="image sequence preview" title="pedestrian2" alt="pedestrian2" src="img/thumbnails/pedestrian2_static.gif" />
<img class="image sequence preview" title="rabbit" alt="rabbit" src="img/thumbnails/rabbit_static.gif" />
<img class="image sequence preview" title="racing" alt="racing" src="img/thumbnails/racing_static.gif" />
<img class="image sequence preview" title="road" alt="road" src="img/thumbnails/road_static.gif" />
<img class="image sequence preview" title="shaking" alt="shaking" src="img/thumbnails/shaking_static.gif" />
<img class="image sequence preview" title="sheep" alt="sheep" src="img/thumbnails/sheep_static.gif" />
<img class="image sequence preview" title="singer1" alt="singer1" src="img/thumbnails/singer1_static.gif" />
<img class="image sequence preview" title="singer2" alt="singer2" src="img/thumbnails/singer2_static.gif" />
<img class="image sequence preview" title="singer3" alt="singer3" src="img/thumbnails/singer3_static.gif" />
<img class="image sequence preview" title="skating" alt="skating" src="img/thumbnails/skating_static.gif" />
<img class="image sequence preview" title="soccer1" alt="soccer1" src="img/thumbnails/soccer1_static.gif" />
<img class="image sequence preview" title="soccer2" alt="soccer2" src="img/thumbnails/soccer2_static.gif" />
<img class="image sequence preview" title="soldier" alt="soldier" src="img/thumbnails/soldier_static.gif" />
<img class="image sequence preview" title="sphere" alt="sphere" src="img/thumbnails/sphere_static.gif" />
<img class="image sequence preview" title="tiger" alt="tiger" src="img/thumbnails/tiger_static.gif" />
<img class="image sequence preview" title="traffic" alt="traffic" src="img/thumbnails/traffic_static.gif" />
<img class="image sequence preview" title="tunnel" alt="tunnel" src="img/thumbnails/tunnel_static.gif" />
<img class="image sequence preview" title="wiper" alt="wiper" src="img/thumbnails/wiper_static.gif" />
</div>

## VOT-TIR2015 Dataset

The VOT-TIR dataset consists of 20 sequences of which eight has been recorded specifically for this dataset. The other twelve sequences have been collected from different sources including Termisk Systemteknik AB, the Department of Electrical Engineering at Link&ouml;ping University, the School of Mechanical Engineering at University of Birmingham, ETH Z&uuml;rich, Fraunhofer IOSB, Aalborg University, and finally the EU FP7 project P5.

The raw signal values from a thermal infrared sensor is typically stored in 16bits. Since not all trackers can handle 16-bit data and for the purpose of visualisation, all sequences in the dataset have been truncated to 8-bit. In practice, this is a common procedure since not all sensors give access to the 16-bit values. Therefore, the sequences are not radiometric (the corresponding temperature value is unknown) and the dynamic may adaptively change during the course of a sequence.

### Annotations

Annotations have been performed in accordance with the VOT2013 annotation procedure. That is, there are no rotating bounding boxes, all of them are axis-aligned. The annotations are stored in a text file with the format:

	frameN: left, top, width, height

Regading local, per-frame, annotations, the label illumination change has been replaced with the label dynamics change since there are no illumination changes in VOT-TIR2015. Instead, there may be dynamic changes in some sequences due to the 16-bit to 8-bit conversion described above.

### Overview

The following gallery gives an overview of the dataset (hover over image to see several snapshots from the sequence).

TODO

