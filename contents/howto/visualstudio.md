---
template: page.jade
menu: Support
title: Building tracker examples on Windows using Visual Studio
---

# Building tracker examples on Windows using Visual Studio

Visual Studio is a popular Windows-only IDE for C++/C# and other languages. Follow the steps below to compile the example trackers in Visual Studio. The steps were created using Visual Studio 2010 Express edition. Other versions may require different steps.

<div class="alert alert-info" role="alert">
<div class="icon-left"><i class="glyphicon glyphicon-question-sign hugeicon"></i> </div>
<h4>TraX protocol</h4>

This example explains how to prepare a Visual Studio project using the VOT C/C++ wrapper. It is however recommended that you integrate support for TraX protocol directly as the tracker will also work with the toolkit but also with other TraX clients. Follow the [official TraX tutorial](https://trax.readthedocs.io/en/latest/tutorials.html) for more information.
</div>

1. To build tracker tracker examples in Microsoft Visual Studio, create an empty C/C++ project (if you are on a 64-bit machine, you have to create a 64-bit project).
2. Import one of the three trackers that you find in `vot-toolkit/tracker/examples/native` directory into the project (in case of the NCC tracker you will also have to link against OpenCV library, but this is out of our scope).
3. Import the `vot.h` header as a header file. This file contains all the necessary code required for the communication with the toolkit.
4. What you have to do to enable trax is to compile with `TRAX` variable defined, provide path to `trax.h` header, and link against `libtrax.dll`. When running the tracker you have to make sure that `libtrax.dll` is visible by adding the directory to system `PATH` or by copying the library to the direcory that contains the executable of a tracker. To enable TraX support in Visual Studio you have to do the following steps:
    - [Initialize workspace](workspace.html) so that precompiled binaries are downloaded to `vot-toolkit/native` directory.
    - Go to `Project properties > Configuration properties > C/C++ > General` and add `vot-toolkit/native` path to `Additional Include Directories`.
    - Go to `Project properties > Configuration properties > C/C++ > Preprocessor` and add `TRAX` symbol to `Preprocessor Definitions`.
    - Go to `Project properties > Configuration properties > Linker > General` and add `vot-toolkit/native` path to `Additional Library Directories`.
    - Go to `Project properties > Configuration properties > Linker > Input` and add `libtrax.dll.a` path to `Additional Dependencies`.


