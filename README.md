# VOT Challenge website

This repository contains the Hugo source for [votchallenge.net](https://www.votchallenge.net/). It retains the existing `.html` URL scheme while using Hugo content, layouts, and data files.

## Local setup

Install the Hugo extended edition (the site was developed with Hugo `0.151.0` or later), then run commands from the repository root:

```sh
hugo server --bind 127.0.0.1 --port 1313
```

Open <http://localhost:1313/>. Hugo watches the source files and rebuilds the local site on changes. Include drafts while authoring with:

```sh
hugo server -D --bind 127.0.0.1 --port 1313
```

Create a production build with:

```sh
hugo --panicOnWarning
```

Hugo writes the generated site to `public/`. This directory, `resources/`, and `.hugo_build.lock` are ignored by Git and must not be committed.

## Site structure

- `content/`: Markdown pages and their front matter.
- `layouts/`: Hugo templates, partials, and shortcodes.
- `data/challenges.json`: challenge metadata, navigation, and challenge-card data.
- `static/`: files copied directly to the published site, including images, CSS, JavaScript, and the standalone anniversary page.
- `archetypes/`: templates used by `hugo new content`.

Internal links must be root-relative, such as `/vots2026/participation.html`. Links to other hosts, including `data.votchallenge.net`, remain absolute.

## Pages

Add a regular page by creating a Markdown file in the appropriate directory under `content/`. For example, `content/vots2026/example.md` becomes `/vots2026/example.html` unless its front matter specifies a `url`.

Challenge subpages need the following front matter so they inherit the correct navigation and banner:

```yaml
---
title: Example page
params:
  navigation: Challenges
  submenu: Example
  challenge: page2026
---
```

The `challenge` value must match the key in `data/challenges.json`; `submenu` must match one of that challenge's navigation item names.

## News

Create a news item with:

```sh
hugo new content news/my-announcement.md
```

Set `draft: false` to publish it. Every news item must include a publication `date` in `YYYY-MM-DD` format; all news feeds display items newest first using this date. The news archetype fills in the creation timestamp automatically, which you can adjust to the intended publication date. News front matter also supports `title` and a `tags` list. Tag a challenge announcement with its lowercase challenge identifier, for example:

```yaml
tags: [vots2026]
```

The part before `<!--more-->` is the listing preview; the complete content is displayed on the individual news page. Embed a news feed with:

```go-html-template
{{< news >}}
{{< news tag="vots2026" >}}
```

## Publications

Create a publication with:

```sh
hugo new content publications/my-paper.md
```

Set `draft: false` and complete the fields under `params`:

```yaml
params:
  year: 2026
  authors:
    - Author One
    - Author Two
  venue: Conference or journal name
  publicationKind: Conference paper
  paperURL: https://example.org/publication
  pdfURL: https://example.org/paper.pdf
  doi: 10.0000/example
```

The publications index groups records by year and shows a compact author list. Individual publication pages show all authors, the Markdown abstract, links, and a copyable BibTeX entry generated from this metadata. Use `publicationKind: Journal article` for journal records; other types generate a conference-style BibTeX entry.

## Challenges

Challenge cards on `/challenges.html`, challenge page banners, and sub-navigation are generated from `data/challenges.json`. To add or update a challenge, edit its metadata entry:

```json
"page2027": {
  "name": "VOTS2027",
  "url": "/vots2027/",
  "logo": "/img/vots2027_logo_website_large.png",
  "thumbnail": "/img/vots2027_logo_website.png",
  "year": 2027,
  "status": "open",
  "description": "Short description for the challenges page.",
  "event": "Conference and location",
  "eventURL": "https://example.org/",
  "items": []
}
```

Valid `status` values are `open`, `benchmark`, and `deprecated`. They determine which section renders the challenge card and whether it receives the deprecated visual marker. Add the corresponding page directory and set its `params.challenge` to the metadata key.

## Reusable content

Use the existing shortcodes instead of copying repeated markup:

```go-html-template
{{< challenges-list status="open" >}}
{{% follow-us %}}
Your page-specific subscription message.
{{% /follow-us %}}
```

`challenges-list` accepts `open`, `benchmark`, or `deprecated` and renders cards from challenge metadata. `follow-us` renders the shared subscription alert while preserving the message supplied by the page.
