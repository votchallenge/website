---
template: page.pug
menu: Support
title: Visualize tracker outputs
---

# Visualize tracker outputs

Displaying tracker predictions is a crucial part of a development process. The VOT toolkit enables rich visualization facilities, some available from CLI. More specific visualizations can be created by interacting with methods directly. This tutorial assumes that you already have the toolkit on your computer, that you have set up the workspace correctly.

## Visualize on test data

You can visualize how a tracker is run on a generated sequence using the following command (assuming that you are in the same folder than `trackers.ini`, otherwise you can point the toolkit to the registry file manually using `--registry` flag):

```console
vot test -g  <tracker-name>
```

## Visualize on a selected sequence

You can also run a selected tracker on a custom sequence (in VOT format) by specifying its location. Note that the tracker is run in an unsupervised manner from start to the end and that only multi-object trackers will be run on multi-object sequences.

```console
vot test -g --sequence=<path to VOT sequence> <tracker-name> 
```

## Detailed result debugging

To further help debug your tracker, we also provide some classes for visulization in VOT toolkit that is available in the [toolkit/vot/utilities
/draw.py](https://github.com/votchallenge/toolkit/blob/master/vot/utilities/draw.py) directory , e.g. `DrawHandle`, `MatplotlibDrawHandle`, and `ImageDrawHandle`. Below is a simple example that illustrates how it works.

```python
import matplotlib.pylab as plt
from vot.utilities.draw import MatplotlibDrawHandle

figure = plt.figure()
figure.canvas.set_window_title('VOT Test')
axes = figure.add_subplot(1, 1, 1)
axes.set_aspect("equal")
handle = MatplotlibDrawHandle(axes, size=sequence.size)
handle.style(fill=False)
figure.show()
```


