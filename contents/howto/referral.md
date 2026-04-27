---
template: page.pug
menu: Support
title: VOTSr Referral Challenge tutorial
---

# VOTSr2026 Referral Challenge tutorial

In the Referral Challenge, each video sequence comes with multiple **text prompts** describing a target object. Your tracker must produce a segmentation mask for each frame, for each prompt, independently.

Unlike the other VOTS challenges, **trackers are not integrated with the toolkit through the TraX protocol**. The toolkit is used only to (i) download the dataset, (ii) format and validate the predictions and (iii) package them for submission. You are free to run your tracker any way you like.

## Step 1: Download the dataset

```bash
pip install vot-toolkit

vot initialize vots2026/votsr --workspace ~/referral_workspace
```

This creates `~/referral_workspace/sequences/` with one folder per sequence:

```
~/referral_workspace/
├── sequences/
│   ├── list.txt                        (list of sequence names, one per line)
│   ├── aurora_2_1_160/
│   │   ├── sequence                    (metadata: name, fps, prompts, frame pattern)
│   │   ├── color/                      (video frames)
│   │   │   ├── 00000001.jpg
│   │   │   ├── 00000002.jpg
│   │   │   └── ...
│   │   └── ...
│   ├── biol_1_1_99/
│   │   └── ...
│   └── smoke_2_70_256/
│       └── ...
└── ...
```

For development you can use the smaller validation dataset, which ships with ground-truth masks so you can run analysis locally:

```bash
vot initialize vots2026/votsrval --workspace ~/referral_dev_workspace
```

### The `sequence` metadata file

Each sequence directory contains a `sequence` file with key=value metadata:

```
channels.color=color/%08d.jpg
format=default
fps=24
name=aurora_2_1_160
prompts=the aurora;the lights in the sky;the northern lights at night;the aurora in the evening
```

- **`prompts`** — semicolon-separated text prompts. Your tracker must produce one set of per-frame masks per prompt.
- **`channels.color`** — printf-style pattern for frame filenames (1-indexed).
- **`fps`** — frame rate of the video.

### Reading the workspace data

```python
import os
from PIL import Image

workspace = os.path.expanduser("~/referral_workspace")
sequences_dir = os.path.join(workspace, "sequences")

with open(os.path.join(sequences_dir, "list.txt")) as f:
    sequence_names = [line.strip() for line in f if line.strip()]

for seq_name in sequence_names:
    seq_dir = os.path.join(sequences_dir, seq_name)

    prompts = []
    with open(os.path.join(seq_dir, "sequence")) as f:
        for line in f:
            if line.startswith("prompts="):
                prompts = line.strip().split("=", 1)[1].split(";")

    frame_dir = os.path.join(seq_dir, "color")
    frame_files = sorted(os.listdir(frame_dir))  # ["00000001.jpg", ...]

    for prompt in prompts:
        for frame_file in frame_files:
            image = Image.open(os.path.join(frame_dir, frame_file))
            # mask = your_tracker(image, prompt)  -> numpy array (H, W) of 0s and 1s
```

## Step 2: Run your tracker

Run your tracker however you like. For each sequence, for each prompt, produce a binary segmentation mask per frame. Do **not** use `vot evaluate` — it is not supported for the referral challenge.

## Step 3: Format the predictions

### File naming

Each prediction file is named `<sequence_name>_<prompt_hash>.txt`, where `prompt_hash` is the **first 8 characters of the MD5 hash** of the prompt string:

```python
from hashlib import md5

prompt = "the aurora"
prompt_hash = md5(prompt.encode()).hexdigest()[:8]   # -> "b2654d24"
filename = f"aurora_2_1_160_{prompt_hash}.txt"        # -> "aurora_2_1_160_b2654d24.txt"
```

### File contents

Each `.txt` file has **one line per frame**. Each line is an RLE-encoded binary mask using the VOT toolkit's mask format:

```python
from vot.region import Mask
import numpy as np

# your_mask: a 2D numpy array (H, W) of 0s and 1s
mask_rle = str(Mask(your_mask))   # -> "m42,0,320,480,..."
```

If the object is not visible in a frame, write a single `0` for that line.

### Directory structure

Place the `.txt` files under a `baseline/` directory:

```
baseline/
├── aurora_2_1_160/
│   ├── aurora_2_1_160_b2654d24.txt   (prompt: "the aurora")
│   ├── aurora_2_1_160_d6ee0fdd.txt   (prompt: "the lights in the sky")
│   ├── aurora_2_1_160_211dfaae.txt   (prompt: "the northern lights at night")
│   └── aurora_2_1_160_4b34746a.txt   (prompt: "the aurora in the evening")
├── biol_1_1_99/
│   └── ...
└── smoke_2_70_256/
    └── ...
```

Each sequence folder must contain one `.txt` file per prompt, and the number of lines in each file must equal the number of frames in the sequence.

## Step 4: Pack the submission

Place your predictions inside the workspace results directory and register the tracker in `trackers.ini`:

```
~/referral_workspace/results/<tracker_id>/baseline/<seq_name>/<seq_name>_<hash>.txt
```

```ini
# ~/referral_workspace/trackers.ini
[my_tracker]
label = My Tracker
protocol = trax
command = dummy
```

The section name (e.g. `my_tracker`) is your **tracker identifier**. The `command` field is required by the toolkit but is not used here, since the tracker was run externally.

Then run `vot pack` to validate the predictions and produce a submission zip:

```bash
vot pack --workspace ~/referral_workspace my_tracker
```

This produces `my_tracker_<timestamp>.zip` containing `baseline/` and `manifest.yml` in the workspace.

## Step 5: Submit

Upload the zip on the [VOTSr2026 evaluation server](https://eu.aihub.ml/competitions/) (link tba). The **tracker identifier** in `manifest.yml` (the `[section]` name in `trackers.ini`) must match the tracker short name registered on the [VOTSr2026 registration form](https://forms.gle/eVKQGqWNT5uU6U1E7); otherwise the submission will be rejected.

Performance scores are sent to the registered email after evaluation completes.

## Quick reference

| Item | Detail |
|---|---|
| Workspace init | `vot initialize vots2026/votsr --workspace <path>` |
| Prompt hash | `md5(prompt.encode()).hexdigest()[:8]` |
| Mask format | `str(Mask(numpy_array))`, or `0` for absent |
| File naming | `<seq_name>_<prompt_hash>.txt`, one line per frame |
| Submission zip | `vot pack <tracker_id>` (contains `baseline/` + `manifest.yml`) |
| Identifier | section in `trackers.ini` = `identifier` in `manifest.yml` = registered tracker short name |

## Helper: convert predictions to the submission format

```python
import os
from hashlib import md5
from vot.region import Mask

def write_predictions(predictions, results_dir):
    """
    predictions: dict mapping seq_name -> dict mapping prompt -> list of (H, W) numpy masks
                 (one mask per frame; use None or an all-zero mask for "object absent").
    results_dir: <workspace>/results/<tracker_id>
    """
    for seq_name, prompt_preds in predictions.items():
        out_dir = os.path.join(results_dir, "baseline", seq_name)
        os.makedirs(out_dir, exist_ok=True)

        for prompt, masks in prompt_preds.items():
            prompt_hash = md5(prompt.encode()).hexdigest()[:8]
            with open(os.path.join(out_dir, f"{seq_name}_{prompt_hash}.txt"), "w") as f:
                for mask in masks:
                    if mask is None or mask.sum() == 0:
                        f.write("0\n")
                    else:
                        f.write(str(Mask(mask)) + "\n")
```

After writing the files, run `vot pack` (Step 4) to validate and zip the submission.
