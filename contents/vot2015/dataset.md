---
template: page2015.jade
submenu: Participation
---

## VOT2015 Dataset

The VOT 2015 dataset is available [here](http://box.vicos.si/vot/vot2015.zip)

# About the VOT 2015 dataset
The dataset comprises 60 short sequences showing various objects in 
challenging backgrounds. 

The sequences were chosen from a large pool of sequences including the 
ALOV dataset, OTB2 dataset, ?? Gustavo which datasets?? , and a set of 
additional sequences. The VOT sequence selection protocol was applied 
to obtain a representative set of challenging sequences.

The sequences were annotated by the VOT committee using rotated bounding 
boxes in order to provide highly accurate ground truth values for 
comparing results.

The dataset is automatically downloaded by the evaluation kit during the 
install process; there is no need to separately download the sequences 
for the challenge. If you are solely interested in the sequences, please 
download the [dataset](http://box.vicos.si/vot/vot2015.zip). 
The compressed file contains the single images of each sequence and per 
frame labels of the rotated bounding box marking the object. The labels 
are stored in a text file with the format:

	frameN: X1, Y1, X2, Y2, X3, Y3, X4, Y4
	
where `Xi` and `Yi` are the coordinates of corner `i` of the bounding box in 
frame `N`, the N-th row in the text file.

The following images give an overview of the dataset:

