---
template: page.jade
menu: Support
title: Building tracker examples using CMake
---

# Building tracker examples using CMake

[CMake](http://www.cmake.org/) is a cross-platform, open-source build system. It is a family of tools designed to build, test and package software. CMake generates native makefiles and IDE projects that can be used with the compiler environment of your choice. To compile the example trackers with CMake you can place the following script to the `vot-toolkit/tracker/examples/native` directory to the file `CMakeLists.txt`. Then use CMake to generate a project or makefile for your compiler and compile the examples.

<div class="alert alert-info" role="alert">
<div class="icon-left"><i class="glyphicon glyphicon-question-sign hugeicon"></i> </div>
<h4>TraX protocol</h4>
This example explains how to prepare a CMake project using the VOT C/C++ wrapper. It is however recommended that you integrate support for TraX protocol directly as the tracker will also work with the toolkit but also with other TraX clients. Follow the [official TraX tutorials](https://trax.readthedocs.io/en/latest/tutorials.html) for more information.
</div>

    PROJECT(static)
    CMAKE_MINIMUM_REQUIRED(VERSION 2.8)

    # Try to find TraX header and library ...
    FIND_FILE(TRAX_HEADER NAMES trax.h PATHS ../../../native)
    IF (EXISTS ${TRAX_HEADER})
        GET_FILENAME_COMPONENT(TRAX_DIR ${TRAX_HEADER} DIRECTORY)
        ADD_DEFINITIONS(-DTRAX) # Added to enable TraX protocol support
        LINK_DIRECTORIES(${TRAX_DIR}) # Add library directory
        INCLUDE_DIRECTORIES(${TRAX_DIR}) # Add includes directory
    ENDIF()

    ADD_EXECUTABLE(static_c static.c) # Generate executable for C tracker
    ADD_EXECUTABLE(static_cpp static.cpp) # Generate executable for C++ tracker

    IF (EXISTS ${TRAX_HEADER})
        TARGET_LINK_LIBRARIES(static_c trax) # Link with trax library
        TARGET_LINK_LIBRARIES(static_cpp trax) # Link with trax library
    ENDIF()

