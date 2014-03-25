---
template: page2013results.jade
---
<div class='results'>
<h1 class="caption">Ranking report for experiment resize</h1>
<h2>Accuracy</h2>
<h3>Raw results</h3>
<div class="table"><table>
<tr><th>&nbsp;</th><th>EDFT</th><th>FoT</th><th>PLT</th><th>SCTT</th><th>LGT++</th></tr>
<tr><th>camera_motion</th><td>0.592 (0.215)</td><td>0.582 (0.239)</td><td>0.577 (0.187)</td><td>0.568 (0.296)</td><td>0.538 (0.136)</td></tr>
<tr><th>illum_change</th><td>0.631 (0.18)</td><td>0.764 (0.13)</td><td>0.509 (0.144)</td><td>0.445 (0.334)</td><td>0.56 (0.091)</td></tr>
<tr><th>occlusion</th><td>0.712 (0.228)</td><td>0.543 (0.266)</td><td>0.731 (0.155)</td><td>0.678 (0.233)</td><td>0.438 (0.107)</td></tr>
<tr><th>size</th><td>0.411 (0.229)</td><td>0.516 (0.262)</td><td>0.477 (0.211)</td><td>0.454 (0.31)</td><td>0.503 (0.104)</td></tr>
<tr><th>motion</th><td>0.607 (0.21)</td><td>0.6 (0.255)</td><td>0.577 (0.166)</td><td>0.505 (0.323)</td><td>0.568 (0.126)</td></tr>
<tr><th>empty</th><td>0.693 (0.25)</td><td>0.616 (0.204)</td><td>0.7 (0.236)</td><td>0.677 (0.238)</td><td>0.562 (0.0919)</td></tr>
</table>
</div><h3>Ranks</h3>
<div class="table"><table>
<tr><th>&nbsp;</th><th>EDFT</th><th>FoT</th><th>PLT</th><th>SCTT</th><th>LGT++</th></tr>
<tr><th>camera_motion</th><td>2.33</td><td>2.33</td><td>3.5</td><td>2.5</td><td>5</td></tr>
<tr><th>illum_change</th><td>2</td><td>1</td><td>4</td><td>5</td><td>3</td></tr>
<tr><th>occlusion</th><td>2</td><td>4</td><td>1</td><td>3</td><td>5</td></tr>
<tr><th>size</th><td>5</td><td>1.5</td><td>3</td><td>4</td><td>1.5</td></tr>
<tr><th>motion</th><td>1</td><td>2</td><td>3</td><td>5</td><td>4</td></tr>
<tr><th>empty</th><td>2</td><td>4</td><td>2</td><td>2</td><td>5</td></tr>
<tr><th><em>Average</em></th><td>2.39</td><td>2.47</td><td>2.75</td><td>3.58</td><td>3.92</td></tr>
</table>
</div><h2>Robustness</h2>
<h3>Raw results</h3>
<div class="table"><table>
<tr><th>&nbsp;</th><th>LGT++</th><th>PLT</th><th>FoT</th><th>EDFT</th><th>SCTT</th></tr>
<tr><th>camera_motion</th><td>0.278 (0.635)</td><td>0.25 (0.434)</td><td>2.58 (3.69)</td><td>1.5 (1.66)</td><td>3.58 (5.23)</td></tr>
<tr><th>illum_change</th><td>0.244 (0.57)</td><td>0.667 (0.477)</td><td>0 (0)</td><td>0.667 (0.477)</td><td>0.667 (0.477)</td></tr>
<tr><th>occlusion</th><td>0.0111 (0.105)</td><td>0 (0)</td><td>1.83 (4.12)</td><td>0.833 (1.07)</td><td>1.83 (2.87)</td></tr>
<tr><th>size</th><td>0.0833 (0.278)</td><td>0.25 (0.435)</td><td>1 (1.12)</td><td>0.75 (1.09)</td><td>1 (1)</td></tr>
<tr><th>motion</th><td>0.133 (0.49)</td><td>0.231 (0.422)</td><td>0.846 (1.1)</td><td>0.692 (0.994)</td><td>1.31 (1.33)</td></tr>
<tr><th>empty</th><td>0 (0)</td><td>0 (0)</td><td>0 (0)</td><td>0 (0)</td><td>0 (0)</td></tr>
</table>
</div><h3>Ranks</h3>
<div class="table"><table>
<tr><th>&nbsp;</th><th>LGT++</th><th>PLT</th><th>FoT</th><th>EDFT</th><th>SCTT</th></tr>
<tr><th>camera_motion</th><td>1.5</td><td>1.5</td><td>3.5</td><td>3.5</td><td>5</td></tr>
<tr><th>illum_change</th><td>2</td><td>4</td><td>1</td><td>4</td><td>4</td></tr>
<tr><th>occlusion</th><td>1.5</td><td>1.5</td><td>4</td><td>4</td><td>4</td></tr>
<tr><th>size</th><td>1</td><td>2</td><td>4</td><td>3.5</td><td>4.5</td></tr>
<tr><th>motion</th><td>1</td><td>2</td><td>3.5</td><td>3.5</td><td>5</td></tr>
<tr><th>empty</th><td>3</td><td>3</td><td>3</td><td>3</td><td>3</td></tr>
<tr><th><em>Average</em></th><td>1.67</td><td>2.33</td><td>3.17</td><td>3.58</td><td>4.25</td></tr>
</table>
</div><h2>Combined ranking (weight = 0.5)</h2>
<div class="table"><table>
<tr><th>PLT</th><th>LGT++</th><th>FoT</th><th>EDFT</th><th>SCTT</th></tr>
<tr><td>2.54</td><td>2.79</td><td>2.82</td><td>2.99</td><td>3.92</td></tr>
</table>
</div><p class="plot"><img src="images/extra_ranking_resize.png" alt="Ranking AR-plot for resize" /><span class="caption">Ranking AR-plot for resize</span></p>
<p class="timestamp">Generated on 2013-12-17 15:44:31</p>
</div>
