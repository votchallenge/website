---
template: page.pug
menu: Support
title: Integrating tracker (multi-object support)
---

# Integration of tracker for multi-object support

This tutorial contains a short tutorial on how to add VOT toolkit support to multi-object trackers or extend single-object trackers. For more details on integration also check the default [integration tutorial](integration.html).

## Python trackers

This tutorial assumes that you already have the toolkit on your computer, that you have set up the workspace correctly. And you also already has integrated a python tracker into the VOT toolkit. 

The communcation between the toolkit and the tracker is handled by the code in the `vot.py` file that is available in the [integration/python](https://github.com/votchallenge/integration/tree/master/python) directory. Make sure that you are using the newest version of the vot.py file. In the `vot.py` file, there is a base class, `VOT`, which is a wrapper around the TraX protocol and can be used for single or multi-object tracking. The wrapper assumes that the experiment will provide new objects only at the first frame and will fail otherwise. Below is a simple (non-complete) example, how to adapt an existing single-object tracker for multi-object tracking.

```python
# tracker implementation omitted

handle = vot.VOT("mask", multiobject=True)
objects = handle.objects()

imagefile = handle.frame()

image = cv2.imread(imagefile, cv2.IMREAD_GRAYSCALE)

trackers = [SingleObjectTracker(image, object) for object in objects]

while True:
    imagefile = handle.frame()
    if not imagefile:
        break
    image = cv2.imread(imagefile, cv2.IMREAD_GRAYSCALE)
    handle.report([tracker.track(image) for tracker in trackers])
```

The alternative is to use a wrapper class `VOTManager` that provides a simple interface for running multiple single object trackers sequentially. The wrapper accepts a initialization callable that is called for each object with an initial image and the initialization region. The function returns a callable that will return a predicted region when given a new frame.

```python
# tracker implementation omitted

if __name__ == "__main__":
    print(vot.__file__)
    manager = vot.VOTManager(NCCTracker, "mask")
    manager.run()
```

### Integration with the toolkit

A tracker can be integrated into the toolkit by putting a tracker description in the `trackers.ini` file, which is placed in the `workspace` directory. Example of a tracker description for a Python tracker ([NCC tracker](https://github.com/votchallenge/integration/blob/master/python/ncc_multiobject_manager.py) from [Python integration examples](https://github.com/votchallenge/integration/tree/master/python)):
```ini
[NCCPython]
label = PyNCC
protocol = traxpython
command = python_ncc
# Specify a path to trax python wrapper if it is not visible (separate by ; if using multiple paths)
paths = <path-to-tracker-source-directory>
# Additional environment paths
env_PATH = <additional-env-paths>;${PATH}
```

### Reporting target absence

A tracker can report target absence by reporting an empty region in the wrapper file. See the [integration example](https://github.com/votchallenge/integration/blob/master/python/ncc_multiobject_manager.py), or the following code snippet:
```python
handle.report(vot.Empty())
```

## Native trackers

For native trackers, written in C or C++ the communcation between the toolkit and the tracker is handled by the code in the `vot.h` file that is available in the [integration/native](https://github.com/votchallenge/integration). Below is a simple example that illustrates how the communication is performed using this header file in C code.

```c++
include "vot.h"

int main( int argc, char** argv)
{
    NCCTracker tracker; // Initialize single object tracker
    VOT vot; // Initialize the communcation

    cv::Rect initialization;
    initialization << vot.region(); // Get region and first frame
    cv::Mat image = cv::imread(vot.frame());
    tracker.init(image, initialization); //Load the first frame and use the initialization region to initialize the tracker.

    while (!vot.end()) {

        string imagepath = vot.frame(); // Get the next frame

        if (imagepath.empty()) break;

        cv::Mat image = cv::imread(imagepath);
        
        float confidence;  // tracker can report the confidence of the predicted region

        cv::Rect rect = tracker.track(image, confidence);

        vot.report(rect, confidence);  // Report the position of the tracker

    return 0;
}
```


