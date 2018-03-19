Main website for the VOT challenges
===================================

Source files for the VOT challenge website.

This page uses [Wintersmith](http://www.wintersmith.io) as a static website generator.
Wintersmith uses [Markdown](http://daringfireball.net/projects/markdown/) for content
and [Jade](http://jade-lang.com/) for templates.
In order to compile this repository into html pages, the following steps are necessary.
* Install nodejs and npm from [here](http://nodejs.org/download/).
* Open a terminal and run 
```
npm install -g wintersmith
```
* Clone this repository
```
git clone git@github.com:votchallenge/website
```
After navigating to your local folder where the website resides (still in the terminal), you have two options:

* Preview the site using a local webserver
```
wintersmith preview
```
* Compile the site into the folder 'build'
```
wintersmith build
```
In order to publish the website, the contents of the build folder currently must be transmitted manually to the ftp server by someone who has access to it.
