---
template: page2013results.jade
---
<div class='results'>
<h1 class="caption">Ranking report for experiment reverse</h1>
<h2>Accuracy</h2>
<h3>Raw results</h3>
<div class="table"><table>
<tr><th>&nbsp;</th><th>EDFT</th><th>FoT</th><th>SCTT</th><th>PLT</th><th>LGT++</th></tr>
<tr><th>camera_motion</th><td>0.59 (0.222)</td><td>0.597 (0.232)</td><td>0.583 (0.259)</td><td>0.532 (0.211)</td><td>0.498 (0.168)</td></tr>
<tr><th>illum_change</th><td>0.534 (0.192)</td><td>0.666 (0.201)</td><td>0.411 (0.32)</td><td>0.541 (0.185)</td><td>0.448 (0.15)</td></tr>
<tr><th>occlusion</th><td>0.692 (0.204)</td><td>0.634 (0.223)</td><td>0.652 (0.165)</td><td>0.547 (0.263)</td><td>0.462 (0.124)</td></tr>
<tr><th>size</th><td>0.373 (0.236)</td><td>0.386 (0.234)</td><td>0.534 (0.244)</td><td>0.407 (0.2)</td><td>0.417 (0.148)</td></tr>
<tr><th>motion</th><td>0.588 (0.238)</td><td>0.628 (0.243)</td><td>0.539 (0.267)</td><td>0.524 (0.232)</td><td>0.507 (0.16)</td></tr>
<tr><th>empty</th><td>0.687 (0.231)</td><td>0.516 (0.304)</td><td>0.615 (0.217)</td><td>0.529 (0.261)</td><td>0.494 (0.111)</td></tr>
</table>
</div><h3>Ranks</h3>
<div class="table"><table>
<tr><th>&nbsp;</th><th>EDFT</th><th>FoT</th><th>SCTT</th><th>PLT</th><th>LGT++</th></tr>
<tr><th>camera_motion</th><td>2.5</td><td>2</td><td>2</td><td>4</td><td>5</td></tr>
<tr><th>illum_change</th><td>2.5</td><td>1</td><td>4.5</td><td>2.5</td><td>4.5</td></tr>
<tr><th>occlusion</th><td>1</td><td>2.5</td><td>2.5</td><td>4</td><td>5</td></tr>
<tr><th>size</th><td>5</td><td>4</td><td>1</td><td>2.5</td><td>2.5</td></tr>
<tr><th>motion</th><td>2</td><td>1</td><td>3</td><td>4</td><td>5</td></tr>
<tr><th>empty</th><td>1</td><td>4</td><td>2</td><td>3.5</td><td>4.5</td></tr>
<tr><th><em>Average</em></th><td>2.33</td><td>2.42</td><td>2.5</td><td>3.42</td><td>4.42</td></tr>
</table>
</div><h2>Robustness</h2>
<h3>Raw results</h3>
<div class="table"><table>
<tr><th>&nbsp;</th><th>PLT</th><th>LGT++</th><th>EDFT</th><th>FoT</th><th>SCTT</th></tr>
<tr><th>camera_motion</th><td>0.167 (0.554)</td><td>0.45 (0.742)</td><td>2 (1.92)</td><td>1.58 (1.5)</td><td>2.67 (2.85)</td></tr>
<tr><th>illum_change</th><td>0 (0)</td><td>0.356 (0.679)</td><td>0 (0)</td><td>0.333 (0.477)</td><td>1 (0.826)</td></tr>
<tr><th>occlusion</th><td>0 (0)</td><td>0.111 (0.316)</td><td>0.5 (0.768)</td><td>0.5 (0.503)</td><td>1.17 (1.78)</td></tr>
<tr><th>size</th><td>0.25 (0.664)</td><td>0.2 (0.528)</td><td>1.75 (1.4)</td><td>1.25 (1.4)</td><td>1.75 (2.17)</td></tr>
<tr><th>motion</th><td>0 (0)</td><td>0.164 (0.578)</td><td>0.769 (1.12)</td><td>0.923 (1.44)</td><td>1.23 (2.09)</td></tr>
<tr><th>empty</th><td>0 (0)</td><td>0 (0)</td><td>0 (0)</td><td>0 (0)</td><td>0 (0)</td></tr>
</table>
</div><h3>Ranks</h3>
<div class="table"><table>
<tr><th>&nbsp;</th><th>PLT</th><th>LGT++</th><th>EDFT</th><th>FoT</th><th>SCTT</th></tr>
<tr><th>camera_motion</th><td>1</td><td>2</td><td>4</td><td>3.5</td><td>4.5</td></tr>
<tr><th>illum_change</th><td>1.5</td><td>3.5</td><td>1.5</td><td>3.5</td><td>5</td></tr>
<tr><th>occlusion</th><td>1</td><td>2</td><td>3.5</td><td>4</td><td>4.5</td></tr>
<tr><th>size</th><td>1.5</td><td>1.5</td><td>4.5</td><td>4</td><td>4</td></tr>
<tr><th>motion</th><td>1</td><td>2</td><td>3.5</td><td>4</td><td>4.5</td></tr>
<tr><th>empty</th><td>3</td><td>3</td><td>3</td><td>3</td><td>3</td></tr>
<tr><th><em>Average</em></th><td>1.5</td><td>2.33</td><td>3.33</td><td>3.67</td><td>4.25</td></tr>
</table>
</div><h2>Combined ranking (weight = 0.5)</h2>
<div class="table"><table>
<tr><th>PLT</th><th>EDFT</th><th>FoT</th><th>LGT++</th><th>SCTT</th></tr>
<tr><td>2.46</td><td>2.83</td><td>3.04</td><td>3.38</td><td>3.38</td></tr>
</table>
</div><p class="plot"><img src="images/extra_ranking_reverse.png" alt="Ranking AR-plot for reverse" /><span class="caption">Ranking AR-plot for reverse</span></p>
<p class="timestamp">Generated on 2013-12-17 15:44:42</p>
</div>
