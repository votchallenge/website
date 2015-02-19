---
template: page2013.jade
submenu: Program
---

# Workshop program

<p style="text-align: justify;">
	The workshop proceedings are available from
	<a href="http://www.cv-foundation.org/openaccess/ICCV2013_workshops/ICCV2013_W3.py">CVF</a> or
	<a href="http://ieeexplore.ieee.org/xpl/mostRecentIssue.jsp?punumber=6751566">IEEE</a>.
</p>
<div class="content_separator"></div>
<table>
	<tbody>
		<tr>
			<td width="105">9:15 - 10:15</td>
			<td>
				<p>
					<b>Session 1: 
						<i>The Visual Object Tracking VOT2013 challenge results
							<a href="Download/vot_2013_presentation.pdf">Presentation</a>
							<a href="http://www.cv-foundation.org/openaccess/content_iccv_workshops_2013/W03/papers/Kristan_The_Visual_Object_2013_ICCV_paper.pdf">Paper</a>
						</i>
					</b>
					<br><br>
					Matej Kristan (University of Ljubljana), 
					Roman Pflugfelder (Austrian Institute of Technology), 
					Ale&#353; Leonardis (University of Birmingham), 
					Jiri Matas (Czech Technical University in Prague), 
					Fatih Porikli (Mitsubishi Electric Research Laboratories), 
					Luka Cehovin (University of Ljubljana), 
					Georg Nebehay (Austrian Institute of Technology), 
					Gustavo Fernandez (Austrian Institute of Technology), 
					Tomas Vojir (Czech Technical University in Prague), 
					<a href="#reference_00">et al.</a>
				</p>
			</td>
		</tr>
		<tr>
			<td>10:15 - 10:30</td>
			<td>
				<p>
					Coffee break
				</p>
			</td>
		</tr>
		<tr>
			<td>10:30 - 11:45</td>
			<td>
				<p>
					<b>Session 2: Tracker Presentations</b>
					<br><br>
					<div class="success">
						10:30
						<p>
							<b>VOT2013 Winner: <i>PLT - Single scale pixel based LUT tracker</i></b>
							<br>
							Cher Keng Heng, Samantha Yue Ying Lim, Zhi Heng Niu, Bo Li (Panasonic 
							R&D Center Singapore)
						</p>
					</div>
					<br><br>
					10:55 <br>
							<i>Robust Real-Time Tracking with Diverse Ensembles and Random Projections</i>
						<br>
						<u>Ahmed Salaheldin</u>, Mohamed ELHelw, Sara Maher (Nile University)
						<p style="text-align: justify;">
							<i>Abstract:</i>
							Tracking by detection techniques have recently been gaining 
							popularity and showing promising results. They use samples 
							classified in previous frames to detect an object in a new 
							frame. However, because they rely on self updating, such 
							techniques are prone to object drift. Multiple classifier 
							systems can be used to improve the detection over that of 
							a single classifier. However, such techniques can be slow 
							as they combine information from different tracking methods. 
							In this paper we propose a novel real-time ensemble approach 
							to tracking by detection. We create a diverse ensemble using 
							random projections to select strong and diverse sets of 
							compressed features. We show that our proposed ensemble 
							tracker significantly improves the accuracy of tracking 
							while not using any additional information than that available 
							to the single classifier; thus requiring little extra 
							computational overhead. Our results also show that employing 
							our multiple classifier system with feature subsets gives 
							significantly better results than directly combining the features.
						</p>
						<br><br>
					11:20 <br>
							<i>Enhanced Distribution Field Tracking using Channel Representations</i>
						<br>
						<u>Michael Felsberg</u> (Link&ouml;ping University)
						<p style="text-align: justify;">
							<i>Abstract:</i>
							Visual tracking of objects under varying lighting conditions
							and changes of the object appearance, such as articulation
							and change of aspect, is a challenging problem. Due to its 
							robustness and speed, distribution field tracking is among the 
							state-of-the-art approaches for tracking objects with constant 
							size in grayscale sequences. In the present paper we use the 
							theoretic connection between averaged histograms and channel 
							representations to derive an enhanced computational scheme. 
							This enhanced distribution field tracking method outperforms 
							the state-of-the-art method in all three aspects of the VOT 
							evaluation: accuracy, robustness, and speed.
						</p>
				</p>
			</td>
		</tr>
		<tr>
			<td>11:45 - 12:00</td>
			<td>
				<p>
					Coffee break
				</p>
			</td>
		</tr>
		<tr>
			<td>12:00 - 12:50</td>
			<td>
				<p>
					<b>Session 3: Tracker Presentations</b>
					<br><br>
					12:00 <br>
							<i>An Adaptive Combination of Multiple Features for Robust Tracking in Real Scene</i>
						<br>
						<u>Weihua Chen</u>, Lijun Cao, Junge Zhang, Kaiqi Huang (Chinese Academy of Sciences)
						<p style="text-align: justify;">
							<i>Abstract:</i>
							Real scene video surveillance always involves low resolutions, 
							lack of illumination or cluttered environments, which leads to 
							insufficiency of discriminative details for the target. In this 
							situation, discrimination based tracking methods could fail. To 
							address this problem, this paper presents an adaptive multi-feature 
							integration method in terms of feature invariance, which can 
							evaluate the stability of features in sequential frames. The 
							adaptive integrated feature (AIF) is consisted of several 
							features with dynamic weights, which describe the degree of 
							invariance of each single feature. An incremental principal 
							component analysis (IPCA) adjusted by the accuracy of tracking 
							results is used to update the adaptive integrated feature, and 
							partially avoids the problem of 'updating dilemma', which is 
							common in most of adaptive updating methods. Experiments on
							pedestrian tracking demonstrate the proposed approach is
							effective and shows improved performance compared with
							several state-of-the-art methods in real surveillance scenes.
						</p>
						<br><br>
					12:25 <br>
							<i>An enhanced adaptive coupled-layer LGTracker++</i>
						<br>
						<u>Jingjing Xiao</u>, Rustam Stolkin, Ale&#353; Leonardis (University of Birmingham)
						<p style="text-align: justify;">
							<i>Abstract:</i>
							This paper addresses the problems of tracking targets which 
							undergo rapid and significant appearance changes. Our starting 
							point is a successful, state-of-the-art tracker based on an 
							adaptive coupled-layer visual model <a href="#reference_01">[1]</a>. 
							In this paper, we identify four important cases when the original 
							tracker often fails: significant scale changes, environment clutter, 
							and failures due to occlusion and rapid disordered movement. We 
							suggest four new enhancements to solve these problems: we adapt 
							the scale of the patches in addition to adapting the bounding 
							box; marginal patch distributions are used to solve patch 
							drifting in environment clutter; a memory is added and used 
							to assist recovery from occlusion; situations where the tracker 
							may lose the target are automatically detected, and a particle 
							filter is substituted for the Kalman filter to help recover the 
							target. We have evaluated the enhanced tracker on a publicly 
							available dataset of 16 challenging video sequences, using a 
							test toolkit <a href="#reference_02">[2]</a>. We demonstrate the advantages of the enhanced 
							tracker over the original tracker, as well as several other 
							state-of-the art trackers from the literature.
						</p>
				</p>
			</td>
		</tr>
		<tr>
			<td>12:50 - 14:40</td>
			<td>
				<p>
					Lunch
				</p>
				<br><br>
			</td>
		</tr>
		<tr>
			<td>14:40 - 15:40</td>
			<td>
				<div class="success">
					<p>
						<b><span style="font-weight: bold;">Session 4: Keynote Talk</span></b>
						<br>
						<a  href="http://crcv.ucf.edu/people/faculty/shah.html">Mubarak Shah</a>
						(University of Central Florida)
					</p>
					<p>
							<i>Visual Tracking: Single and Multiple Object Tracking</i>
					</p>
					<p style="text-align: justify;">
						<b><span style="font-weight: bold;">Abstract:</span></b>
						<br>
						Object tracking in realistic scenarios is a difficult problem, 
						and therefore remains an active area of research in Computer 
						Vision. A good tracker should perform well in diverse videos 
						involving illumination changes, occlusion, clutter, camera 
						motion, low contrast, and specularities, etc. 
						<br>
						In this talk I will start with an overview of visual tracking, 
						then focus on an experimental survey of single object trackers 
						we have recently conducted. In this study, we have evaluated 
						trackers systematically and experimentally on 315 videos 
						involving the above aspects. We selected a set of nineteen 
						trackers to include a wide variety of algorithms often cited 
						in literature, supplemented with trackers appearing recent 
						years for which the code was publicly available. (This is a 
						joint work with University of Amsterdam and University of 
						Modena.)
						<br>
						Tracking of multiple objects in a given video can be more 
						challenging than tracking a single object. Next, I will 
						present our recent work on tracking humans and their parts 
						in videos containing large number of humans. We explore how 
						spurious detections of humans and their parts can help each 
						other to track people under clutter and occlusions.
						<br>
						Finally, I will present our recently developed method for 
						tracking thousands of objects in wide area surveillance videos 
						acquired by unmanned aerial vehicles.
						<br>
					</p>
				</div>
				<br><br>
			</td>
		</tr>
		<tr>
			<td>15:40 - 16:00</td>
			<td>
				<p>
					Coffee break
				</p>
			</td>
		</tr>
		<tr>
			<td>16:00 - 17:40</td>
			<td>
				<p>
					<b>Session 5: Tracker Presentations, Discussion</b>
					<br><br>
					16:00 <br>
							<i>Graph Embedding Based Semi-Supervised Discriminative Tracker</i>
						<br>
						<u>Jin Gao</u>, Junliang Xing, Weiming Hu, Xiaoqin Zhang (Chinese Academy of Sciences)
						<p style="text-align: justify;">
							<i>Abstract:</i>
							Recently, constructing a good graph to represent data structures is 
							widely used in machine learning based applications. Some existing 
							trackers have adopted graph construction based classifiers for 
							tracking. However, their graph structures are not effective to 
							characterize the interclass separability and multi-model sample 
							distribution, both of which are very important to successful 
							tracking. In this paper, we propose to use a new graph structure
							to improve tracking performance without the assistance of learning 
							object subspace generatively as previous work did. Meanwhile, 
							considering the test samples deviate from the distribution of the 
							training samples in tracking applications, we formulate the 
							discriminative learning process, to avoid overfitting, in a 
							semi-supervised fashion as 1-graph based regularizer. In 
							addition, a non-linear variant is extended to adapt to 
							multi-modal sample distribution. Experimental results demonstrate 
							the superior properties of the proposed tracker.
						</p>
						<br><br>
					16:25 <br>
							<i>Long-Term Tracking Through Failure Cases</i>
						<br>
						<u>Karel Lebeda</u>, Simon Hadfield, Richard Bowden (University of Surrey), <br>
						Jiri Matas (Czech Technical University)
						<p style="text-align: justify;">
							<i>Abstract:</i>
							Long term tracking of an object, given only a single instance
							in an initial frame, remains an open problem. We propose a 
							visual tracking algorithm, robust to many of the difficulties 
							which often occur in real-world scenes. Correspondences of 
							edge-based features are used, to overcome the reliance on the 
							texture of the tracked object and improve invariance to 
							lighting. Furthermore we address long-term stability, enabling 
							the tracker to recover from drift and to provide redetection 
							following object disappearance or occlusion. The two-module 
							principle is similar to the successful state-of-the-art 
							long-term TLD tracker, however our approach extends to cases 
							of low-textured objects.
							<br>
							Besides reporting our results on the VOT Challenge dataset, 
							we perform two additional experiments. Firstly, results on 
							short-term sequences show the performance of tracking 
							challenging objects which represent failure cases for 
							competing state-of-the-art approaches. Secondly, long 
							sequences are tracked, including one of almost 30 000 
							frames which to our knowledge is the longest tracking sequence
							reported to date. This tests the re-detection and drift
							resistance properties of the tracker. All the results are 
							comparable to the state-of-the-art on sequences with textured
							objects and superior on non-textured objects. The new annotated
							sequences are made publicly available.
						</p>
						<br><br>
					16:50 <br>
							<b><i>Panel discussion</i></b>
						<br><br>
						<u>Panelists</u>
						<ul>
							<li>
								David Liebowitz, General Dynamics Mediaware
							</li>
							<li>
								Mubarak Shah, University of Central Florida
							</li>
							<li>
								Jiri Matas, University Prague
							</li>
							<li>
								Federico Pernici, University Florence
							</li>
							<li>
								Navid Nourani-Vatani, CSIRO
							</li>
						</ul>
						<br>
						<u>Discussion</u>
						<ul>
							<li>
								Which evaluation criterias: speed v. accuracy and reliability?
							</li>
							<li>
								How to design a standardised evaluation kit?
							</li>
							<li>
								Future challenges on particular applications?
							</li>
						</ul>
				</p>
			</td>
		</tr>
		<tr>
			<td>17:40 - </td>
			<td>
				<p>
					<b>Closing, Concluding remarks</b>
				</p>
			</td>
		</tr>
	</tbody>
</table>  
<div class="content_separator"></div>
<h2>References</h2>
<p style="text-align: justify;">
	<a name="reference_01">[1]</a>
	L. &#268;ehovin, M. Kristan and A. Leonardis, 
	"Robust Visual Tracking Using an Adaptive 
	Coupled-Layer Visual Model," IEEE Transactions 
	on Pattern Analysis and Machine Intelligence, 
	vol.35, no.4, pp.941-953, 2013
	<br><br>
	<a name="reference_02">[2]</a>
	The VOT 2013 evaluation kit. 
	<a href="http://www.votchallenge.net">http://www.votchallenge.net</a>
</p>
<div class="content_separator"></div>
<h2>Notes</h2>
<br>
<h5><a name="reference_00">et al.</a></h5>
<p style="text-align: justify;">
	Adam Gatt (DSTO), 
	Ahmad Khajenezhad (Sharif University of Technology), 
	Ahmed Salahledin (Nile University), 
	Ali Soltani-Farani (Sharif University of Technology), 
	Ali Zarezade (Sharif University of Technology), 
	Alfredo Petrosino (Parthenope University of Naples), 
	Anthony Milton (University of South Australia), 
	Behzad Bozorgtabar (University of Canberra), 
	Bo Li (Panasonic R&D Center), 
	Chee Seng Chan (University of Malaya), 
	CherKeng Heng (Panasonic R&D Center), 
	Dale Ward (University of South Australia), 
	David Kearney (University of South Australia), 
	Dorothy Monekosso (University of West England), 
	Hakki Can Karaimer (Izmir Institute of Technology), 
	Hamid R. Rabiee (Sharif University of Technology), 
	Jianke Zhu (Zhejiang University), 
	Jin Gao (National CAS), 
	Jingjing Xiao (University of Birmingham), 
	Junge Zhang (Chinese Academy of Sciences), 
	Junliang Xing (CAS), 
	Kaiqi Huang (Chinese Academy of Sciences), 
	Karel Lebeda (University of Surrey), 
	Simon Hadfield (University of Surrey), 
	Lijun Cao (Chinese Academy of Sciences), 
	Mario Edoardo Maresca (Parthenope University of Naples), 
	Mei Kuan Lim (University of Malaya), 
	Mohamed ELHelw (Nile University), 
	Michael Felsberg (Linkoeping University), 
	Paolo Remagnino (Kingston University), 
	Richard Bowden (University of Surrey), 
	Roland Goecke (Australian National University), 
	Rustam Stolkin (University of Birmingham), 
	Samantha YueYing Lim (Panasonic R&D Center), 
	Sara Maher (Nile University), 
	Sebastien Poullot (NII), 
	Sebastien Wong (DSTO), 
	Shin ichi Satoh (NII), 
	Weihua Chen (Chinese Academy of Sciences), 
	Weiming Hu (CAS), 
	Xiaoqin Zhang (CAS), 
	Yang Li (Zhejiang University), 
	ZhiHeng Niu (Panasonic R&D Center)
</p>
