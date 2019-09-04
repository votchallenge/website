---
template: page2013results.pug
---
<div class='results'>
<h1 class="caption">Ranking report for experiment loss_black</h1>
<h2>Accuracy</h2>
<h3>Raw results</h3>
<div class="table"><table>
<tr><th>&nbsp;</th><th>EDFT</th><th>PLT</th><th>SCTT</th><th>FoT</th><th>LGT++</th></tr>
<tr><th>camera_motion</th><td>0.563 (0.239)</td><td>0.529 (0.257)</td><td>0.536 (0.244)</td><td>0.4 (0.212)</td><td>0.332 (0.188)</td></tr>
<tr><th>illum_change</th><td>0.57 (0.193)</td><td>0.506 (0.231)</td><td>0.554 (0.226)</td><td>0.442 (0.231)</td><td>0.303 (0.128)</td></tr>
<tr><th>occlusion</th><td>0.694 (0.231)</td><td>0.6 (0.283)</td><td>0.645 (0.239)</td><td>0.485 (0.221)</td><td>0.2 (0.111)</td></tr>
<tr><th>size</th><td>0.395 (0.223)</td><td>0.445 (0.226)</td><td>0.504 (0.267)</td><td>0.292 (0.179)</td><td>0.317 (0.157)</td></tr>
<tr><th>motion</th><td>0.592 (0.214)</td><td>0.52 (0.26)</td><td>0.479 (0.245)</td><td>0.345 (0.229)</td><td>0.3 (0.144)</td></tr>
<tr><th>empty</th><td>0.708 (0.259)</td><td>0.63 (0.256)</td><td>0.621 (0.278)</td><td>0.465 (0.289)</td><td>0.29 (0.232)</td></tr>
</table>
</div><h3>Ranks</h3>
<div class="table"><table>
<tr><th>&nbsp;</th><th>EDFT</th><th>PLT</th><th>SCTT</th><th>FoT</th><th>LGT++</th></tr>
<tr><th>camera_motion</th><td>1</td><td>2.5</td><td>2.5</td><td>4</td><td>5</td></tr>
<tr><th>illum_change</th><td>1</td><td>2.5</td><td>2.5</td><td>4</td><td>5</td></tr>
<tr><th>occlusion</th><td>1</td><td>3</td><td>2</td><td>4</td><td>5</td></tr>
<tr><th>size</th><td>3</td><td>1.5</td><td>1.5</td><td>5</td><td>4</td></tr>
<tr><th>motion</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
<tr><th>empty</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
<tr><th><em>Average</em></th><td>1.33</td><td>2.25</td><td>2.42</td><td>4.17</td><td>4.83</td></tr>
</table>
</div><h2>Robustness</h2>
<h3>Raw results</h3>
<div class="table"><table>
<tr><th>&nbsp;</th><th>EDFT</th><th>LGT++</th><th>SCTT</th><th>FoT</th><th>PLT</th></tr>
<tr><th>camera_motion</th><td>1.33 (1.38)</td><td>2.17 (1.91)</td><td>4.25 (3.89)</td><td>6.33 (7.36)</td><td>7.08 (5.48)</td></tr>
<tr><th>illum_change</th><td>0.333 (0.477)</td><td>1.8 (1.47)</td><td>2.33 (1.72)</td><td>3.67 (1.72)</td><td>3.33 (1.72)</td></tr>
<tr><th>occlusion</th><td>1 (1.01)</td><td>0.867 (1.4)</td><td>1.17 (2.62)</td><td>1.17 (2.2)</td><td>1.17 (2.2)</td></tr>
<tr><th>size</th><td>1.25 (1.3)</td><td>0.992 (1.04)</td><td>1.62 (1.87)</td><td>2.25 (2.23)</td><td>3.12 (3.31)</td></tr>
<tr><th>motion</th><td>0.923 (1.07)</td><td>1.38 (1.44)</td><td>3 (2.97)</td><td>6.15 (6.91)</td><td>3.85 (3.26)</td></tr>
<tr><th>empty</th><td>0 (0)</td><td>0.0267 (0.162)</td><td>0 (0)</td><td>0 (0)</td><td>0 (0)</td></tr>
</table>
</div><h3>Ranks</h3>
<div class="table"><table>
<tr><th>&nbsp;</th><th>EDFT</th><th>LGT++</th><th>SCTT</th><th>FoT</th><th>PLT</th></tr>
<tr><th>camera_motion</th><td>1</td><td>2</td><td>3.5</td><td>4</td><td>4.5</td></tr>
<tr><th>illum_change</th><td>1</td><td>2.5</td><td>3.33</td><td>4</td><td>4.5</td></tr>
<tr><th>occlusion</th><td>2</td><td>2.67</td><td>4</td><td>3.25</td><td>3.25</td></tr>
<tr><th>size</th><td>2</td><td>1.5</td><td>2.5</td><td>4.5</td><td>4.5</td></tr>
<tr><th>motion</th><td>1</td><td>2</td><td>3</td><td>5</td><td>4</td></tr>
<tr><th>empty</th><td>3</td><td>3</td><td>3</td><td>3</td><td>3</td></tr>
<tr><th><em>Average</em></th><td>1.67</td><td>2.28</td><td>3.22</td><td>3.96</td><td>3.96</td></tr>
</table>
</div><h2>Combined ranking (weight = 0.5)</h2>
<div class="table"><table>
<tr><th>EDFT</th><th>SCTT</th><th>PLT</th><th>LGT++</th><th>FoT</th></tr>
<tr><td>1.5</td><td>2.82</td><td>3.1</td><td>3.56</td><td>4.06</td></tr>
</table>
</div><p class="plot"><img src="images/extra_ranking_loss_black.png" alt="Ranking AR-plot for loss_black" /><span class="caption">Ranking AR-plot for loss_black</span></p>
<p class="timestamp">Generated on 2013-12-17 15:44:11</p>
</div>
