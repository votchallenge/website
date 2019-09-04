---
template: page2013results.pug
---
<div class='results'>
<h1 class="caption">Ranking report for experiment region_noise</h1>
<h2>Accuracy</h2>
<h3>Raw results</h3>
<div class="table"><table>
<tr><th>&nbsp;</th><th>FoT</th><th>PLT</th><th>EDFT</th><th>SCTT</th><th>LGT++</th></tr>
<tr><th>camera_motion</th><td>0.606 (0.195)</td><td>0.574 (0.17)</td><td>0.553 (0.19)</td><td>0.581 (0.17)</td><td>0.522 (0.141)</td></tr>
<tr><th>illum_change</th><td>0.713 (0.0799)</td><td>0.614 (0.142)</td><td>0.625 (0.151)</td><td>0.599 (0.131)</td><td>0.53 (0.106)</td></tr>
<tr><th>occlusion</th><td>0.54 (0.143)</td><td>0.672 (0.127)</td><td>0.637 (0.166)</td><td>0.6 (0.172)</td><td>0.413 (0.117)</td></tr>
<tr><th>size</th><td>0.513 (0.215)</td><td>0.447 (0.177)</td><td>0.396 (0.179)</td><td>0.495 (0.201)</td><td>0.499 (0.113)</td></tr>
<tr><th>motion</th><td>0.644 (0.16)</td><td>0.586 (0.146)</td><td>0.579 (0.176)</td><td>0.565 (0.17)</td><td>0.564 (0.126)</td></tr>
<tr><th>empty</th><td>0.584 (0.149)</td><td>0.642 (0.196)</td><td>0.626 (0.228)</td><td>0.604 (0.201)</td><td>0.579 (0.0878)</td></tr>
</table>
</div><h3>Ranks</h3>
<div class="table"><table>
<tr><th>&nbsp;</th><th>FoT</th><th>PLT</th><th>EDFT</th><th>SCTT</th><th>LGT++</th></tr>
<tr><th>camera_motion</th><td>1</td><td>3</td><td>4</td><td>2</td><td>5</td></tr>
<tr><th>illum_change</th><td>1</td><td>3</td><td>2</td><td>4</td><td>5</td></tr>
<tr><th>occlusion</th><td>4</td><td>1</td><td>2</td><td>3</td><td>5</td></tr>
<tr><th>size</th><td>1</td><td>3.5</td><td>5</td><td>3</td><td>2.5</td></tr>
<tr><th>motion</th><td>1</td><td>2</td><td>3</td><td>4.5</td><td>4.5</td></tr>
<tr><th>empty</th><td>4.5</td><td>1</td><td>2.5</td><td>2.5</td><td>4.5</td></tr>
<tr><th><em>Average</em></th><td>2.08</td><td>2.25</td><td>3.08</td><td>3.17</td><td>4.42</td></tr>
</table>
</div><h2>Robustness</h2>
<h3>Raw results</h3>
<div class="table"><table>
<tr><th>&nbsp;</th><th>PLT</th><th>LGT++</th><th>FoT</th><th>EDFT</th><th>SCTT</th></tr>
<tr><th>camera_motion</th><td>0.0778 (0.269)</td><td>0.128 (0.382)</td><td>1.66 (2.26)</td><td>1.37 (1.66)</td><td>2.54 (2.81)</td></tr>
<tr><th>illum_change</th><td>0 (0)</td><td>0.0889 (0.288)</td><td>0.0222 (0.149)</td><td>0.333 (0.564)</td><td>1.11 (0.959)</td></tr>
<tr><th>occlusion</th><td>0.0111 (0.105)</td><td>0.0222 (0.148)</td><td>0.933 (2.05)</td><td>0.556 (0.823)</td><td>1.13 (2.09)</td></tr>
<tr><th>size</th><td>0.0167 (0.129)</td><td>0.0417 (0.201)</td><td>0.875 (1.38)</td><td>1.03 (1.08)</td><td>1.21 (1.41)</td></tr>
<tr><th>motion</th><td>0.0359 (0.187)</td><td>0.0718 (0.296)</td><td>0.636 (1.15)</td><td>0.667 (0.998)</td><td>1.3 (1.46)</td></tr>
<tr><th>empty</th><td>0 (0)</td><td>0 (0)</td><td>0.0267 (0.162)</td><td>0 (0)</td><td>0 (0)</td></tr>
</table>
</div><h3>Ranks</h3>
<div class="table"><table>
<tr><th>&nbsp;</th><th>PLT</th><th>LGT++</th><th>FoT</th><th>EDFT</th><th>SCTT</th></tr>
<tr><th>camera_motion</th><td>1.5</td><td>1.5</td><td>3.5</td><td>3.5</td><td>5</td></tr>
<tr><th>illum_change</th><td>1.5</td><td>2.5</td><td>2</td><td>4</td><td>5</td></tr>
<tr><th>occlusion</th><td>1.5</td><td>1.5</td><td>4</td><td>4</td><td>4</td></tr>
<tr><th>size</th><td>1.5</td><td>1.5</td><td>3</td><td>4.5</td><td>4.5</td></tr>
<tr><th>motion</th><td>1.5</td><td>1.5</td><td>3.5</td><td>3.5</td><td>5</td></tr>
<tr><th>empty</th><td>3</td><td>3</td><td>3</td><td>3</td><td>3</td></tr>
<tr><th><em>Average</em></th><td>1.75</td><td>1.92</td><td>3.17</td><td>3.75</td><td>4.42</td></tr>
</table>
</div><h2>Combined ranking (weight = 0.5)</h2>
<div class="table"><table>
<tr><th>PLT</th><th>FoT</th><th>LGT++</th><th>EDFT</th><th>SCTT</th></tr>
<tr><td>2</td><td>2.62</td><td>3.17</td><td>3.42</td><td>3.79</td></tr>
</table>
</div><p class="plot"><img src="images/extra_ranking_region_noise.png" alt="Ranking AR-plot for region_noise" /><span class="caption">Ranking AR-plot for region_noise</span></p>
<p class="timestamp">Generated on 2013-12-17 15:43:47</p>
</div>
