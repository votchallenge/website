---
template: page.jade
menu: Support
title: Support
---

<div class="alert alert-info" role="alert">
<div class="icon-left"><i class="glyphicon glyphicon-question-sign hugeicon"></i> </div>
<h4>Where to start?</h4>

Look at the [Frequently Asked Questions](faq.html) for a list of most frequently asked questions.
</div>

# Documentation

- [Toolkit documentation](http://box.vicos.si/vot/toolkit/docs/)
- [TraX protocol documentation](http://trax.readthedocs.io/)

# Resources

The workshop presentations, report papers, and raw results needed to reproduce the analysis are available for each VOT benchmark on its corresponding sub-page.

- [VOT2016 resources](/vot2016/results.html)
- [VOT2015 resources](/vot2015/results.html)
- [VOT2014 resources](/vot2014/results.html)
- [VOT2013 resources](/vot2013/results.html)

# Tutorials and guides

These tutorials cover various topics on how to use VOT toolkit in your experiments:

- [Setting up the workspace](workspace.html)
- [Integrate a tracker](integration.html)
- [Building tracker examples on Windows using Visual Studio](visualstudio.html)
- [Building tracker examples using CMake](cmake.html)
- [Perform evaluation and submit results](perfeval.html)
- [Analyzing results and generating reports](analysis.html)
- [Reproducing the 2016 TPAMI paper results](analysis_vot2014.html)
- [Using different set of sequences with VOT toolkit](sequences.html)

# Support forum

If you did not find the information that you were looking for in the FAQ, documentation, or tutorials, you can <a href="https://groups.google.com/forum/?hl=en#!forum/votchallenge-help"> contact us on the support forum</a>.

<iframe id="forum_embed" src="javascript:void(0)" scrolling="no" frameborder="0" height="600">
</iframe>
<script type="text/javascript">
var a = document.getElementById("forum_embed");
var uri = encodeURIComponent(window.location.href);
a.src = "https:" + "//groups.google.com/forum/embed/?place=forum/votchallenge-help\u0026parenturl=" + uri;

function resize_handle() {
	var a = $("#forum_embed");
	a.attr('width', a.parent().width() + 'px');
}
$(window).resize(resize_handle);
resize_handle();
</script>


