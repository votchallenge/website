---
template: results.jade
---
<div class='results'>
<h1 class="caption">Ranking report for experiment baseline</h1>
<h2>Accuracy</h2>
<h3>Raw results</h3>
<div class="table"><table>
<tr><th>&nbsp;</th><th>FoT</th><th>SCTT</th><th>PLT</th><th>EDFT</th><th>LGT++</th></tr>
<tr><th>camera_motion</th><td>0.64 (0.237)</td><td>0.65 (0.226)</td><td>0.584 (0.207)</td><td>0.575 (0.236)</td><td>0.533 (0.151)</td></tr>
<tr><th>illum_change</th><td>0.773 (0.105)</td><td>0.584 (0.257)</td><td>0.647 (0.171)</td><td>0.64 (0.176)</td><td>0.541 (0.106)</td></tr>
<tr><th>occlusion</th><td>0.576 (0.28)</td><td>0.66 (0.211)</td><td>0.722 (0.178)</td><td>0.667 (0.251)</td><td>0.411 (0.12)</td></tr>
<tr><th>size</th><td>0.562 (0.25)</td><td>0.525 (0.24)</td><td>0.434 (0.185)</td><td>0.402 (0.23)</td><td>0.5 (0.109)</td></tr>
<tr><th>motion</th><td>0.695 (0.201)</td><td>0.619 (0.249)</td><td>0.614 (0.178)</td><td>0.616 (0.221)</td><td>0.575 (0.137)</td></tr>
<tr><th>empty</th><td>0.649 (0.24)</td><td>0.714 (0.21)</td><td>0.71 (0.258)</td><td>0.7 (0.262)</td><td>0.564 (0.127)</td></tr>
</table>
</div><h3>Ranks</h3>
<div class="table"><table>
<tr><th>&nbsp;</th><th>FoT</th><th>SCTT</th><th>PLT</th><th>EDFT</th><th>LGT++</th></tr>
<tr><th>camera_motion</th><td>2</td><td>1</td><td>3</td><td>4</td><td>5</td></tr>
<tr><th>illum_change</th><td>1</td><td>4</td><td>2</td><td>3</td><td>5</td></tr>
<tr><th>occlusion</th><td>4</td><td>2.5</td><td>1</td><td>2.5</td><td>5</td></tr>
<tr><th>size</th><td>1</td><td>2</td><td>4</td><td>5</td><td>3</td></tr>
<tr><th>motion</th><td>1</td><td>2</td><td>3.5</td><td>3.5</td><td>5</td></tr>
<tr><th>empty</th><td>3</td><td>1</td><td>3</td><td>3</td><td>5</td></tr>
<tr><th><em>Average</em></th><td>2</td><td>2.08</td><td>2.75</td><td>3.5</td><td>4.67</td></tr>
</table>
</div><h2>Robustness</h2>
<h3>Raw results</h3>
<div class="table"><table>
<tr><th>&nbsp;</th><th>PLT</th><th>LGT++</th><th>FoT</th><th>EDFT</th><th>SCTT</th></tr>
<tr><th>camera_motion</th><td>0 (0)</td><td>0.117 (0.339)</td><td>1.42 (2.3)</td><td>1.08 (1.39)</td><td>2.33 (2.63)</td></tr>
<tr><th>illum_change</th><td>0 (0)</td><td>0 (0)</td><td>0 (0)</td><td>0.333 (0.477)</td><td>1.33 (0.953)</td></tr>
<tr><th>occlusion</th><td>0 (0)</td><td>0.0778 (0.269)</td><td>1.17 (2.2)</td><td>0.5 (0.503)</td><td>1.17 (2.2)</td></tr>
<tr><th>size</th><td>0 (0)</td><td>0.0583 (0.235)</td><td>0.875 (1.27)</td><td>0.375 (0.699)</td><td>0.875 (1.27)</td></tr>
<tr><th>motion</th><td>0 (0)</td><td>0.0564 (0.231)</td><td>0.462 (0.845)</td><td>0.385 (0.838)</td><td>1.15 (1.52)</td></tr>
<tr><th>empty</th><td>0 (0)</td><td>0 (0)</td><td>0 (0)</td><td>0 (0)</td><td>0 (0)</td></tr>
</table>
</div><h3>Ranks</h3>
<div class="table"><table>
<tr><th>&nbsp;</th><th>PLT</th><th>LGT++</th><th>FoT</th><th>EDFT</th><th>SCTT</th></tr>
<tr><th>camera_motion</th><td>1</td><td>2</td><td>3.5</td><td>3.5</td><td>5</td></tr>
<tr><th>illum_change</th><td>2</td><td>2</td><td>2</td><td>4</td><td>5</td></tr>
<tr><th>occlusion</th><td>1</td><td>2</td><td>4</td><td>4</td><td>4</td></tr>
<tr><th>size</th><td>1</td><td>2</td><td>4.5</td><td>3</td><td>4.5</td></tr>
<tr><th>motion</th><td>1</td><td>2</td><td>3.5</td><td>3.5</td><td>5</td></tr>
<tr><th>empty</th><td>3</td><td>3</td><td>3</td><td>3</td><td>3</td></tr>
<tr><th><em>Average</em></th><td>1.5</td><td>2.17</td><td>3.42</td><td>3.5</td><td>4.42</td></tr>
</table>
</div><h2>Combined ranking (weight = 0.5)</h2>
<div class="table"><table>
<tr><th>PLT</th><th>FoT</th><th>SCTT</th><th>LGT++</th><th>EDFT</th></tr>
<tr><td>2.12</td><td>2.71</td><td>3.25</td><td>3.42</td><td>3.5</td></tr>
</table>
</div><p class="plot"><img src="images/extra_ranking_baseline.png" alt="Ranking AR-plot for baseline" /><span class="caption">Ranking AR-plot for baseline</span></p>
<p class="timestamp">Generated on 2013-12-17 15:43:28</p>
</div>
