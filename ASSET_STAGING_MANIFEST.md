# Dark Desert Media: Candidate Asset Staging Manifest and Media Review Gallery

## Overview
This manifest catalogs all candidate visual media and brand assets staged for the Dark Desert Media portfolio website (`02_Portfolio_Site`). Per project guidelines, this staging manifest provides a transparent pre-deployment inspection log so the user can verify safe-for-work (SFW) status, intellectual property ownership, and intended portfolio context before public deployment.

## Guardrail Compliance Summary
- **File Size Guardrail**: All staged assets must be strictly under GitHub's 100 MB static file limit. All staged files in this batch are under 0.9 MB.
- **SFW and Brand Guardrail**: All staged assets are verified safe for work and suitable for professional operations, systems, and creative media portfolios.
- **Privacy and Data Security Guardrail**: Absolute exclusion of non-public personal records, confidential documents, local workstation drive paths, and non-SFW materials.
- **Zero Em Dash Policy**: All documentation and metadata adhere to the strict zero em dash rule.

---

## 1. Staged Candidate Media (Local Repository Assets)

The following 5 vetted assets are present on disk under `02_Portfolio_Site\assets\img\` and approved for deployment.

| Source Archive Label | Staged Destination Path | File Size (Bytes & KB/MB) | Proposed Caption / Use Context in Portfolio | Verified SFW Status | User Approval Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `[Portfolio Archive] Logo 1.png` | `02_Portfolio_Site\assets\img\branding\logo.png` | 425,729 bytes (415.8 KB / 0.41 MB) | Dark Desert Media primary studio mark. Header brand icon, Open Graph social preview, and default card thumbnail. | Yes / Verified SFW | [x] Approved for Deployment |
| `[Portfolio Archive] arachnode_logo_BG.png` | `02_Portfolio_Site\assets\img\branding\arachnode_logo_BG.png` | 707,919 bytes (691.3 KB / 0.68 MB) | Arachnode node-logic productivity tool application icon and project card schema thumbnail. | Yes / Verified SFW | [x] Approved for Deployment |
| `[Portfolio Archive] Limitoad_BLACK.png` | `02_Portfolio_Site\assets\img\branding\Limitoad_BLACK.png` | 158,429 bytes (154.7 KB / 0.15 MB) | Limitoad desktop audio limiter application badge and project card schema thumbnail. | Yes / Verified SFW | [x] Approved for Deployment |
| `[Portfolio Archive] Midnight Mini Reviews 1 - CLEAR.png` | `02_Portfolio_Site\assets\img\creative\midnight_mini_reviews.png` | 856,162 bytes (836.1 KB / 0.82 MB) | Midnight Miniatures brand badge and tabletop review showcase graphic. | Yes / Verified SFW | [x] Approved for Deployment |
| `[Creative Archive] banner concept.jpg` | `02_Portfolio_Site\assets\img\creative\banner concept.jpg` | 194,280 bytes (189.7 KB / 0.19 MB) | Clean widescreen channel banner (1323x270 JPG) for media layout and header design. | Yes / Verified SFW | [x] Approved for Deployment |

---

## 2. Excluded / Not Staged Assets

### Excluded Character & Unstaged Media
- `ART1 Transparent.png` (5.78 MB character illustration) and `sytri PFP V2.jpg` (132.1 KB avatar portrait) are **not staged** in `02_Portfolio_Site\assets\img\` to preserve the minimal-image operations and systems portfolio aesthetic.

### Excluded Large Video Assets (Over 100 MB Static Limit)
The following video production assets exceed or approach GitHub's 100 MB static file limit and are excluded from local repository staging and git tracking.

| Source Archive Label | File Size (Bytes & MB) | Status / Exclusion Reason | Recommended Distribution Method | Caption / Description |
| :--- | :--- | :--- | :--- | :--- |
| `[Portfolio Archive] Asset 001 Full Quality.mp4` | 653,125,075 bytes (622.87 MB) | Excluded: Exceeds 100 MB GitHub file limit (623 MB). | Stream via unlisted YouTube link, Vimeo showcase, or portfolio CDN embed. | Full quality digital video production reel and motion graphics demonstration. |
| `[Portfolio Archive] Frankenhowl Background Visuals.mp4` | 303,647,792 bytes (289.58 MB) | Excluded: Exceeds 100 MB GitHub file limit (289 MB). | Stream via external video host or compressed web loop. | Animated background visualizer and ambient projection loop. |
| `[Portfolio Archive] Asset 002 - Clip - Self Control-1.mp4` | 99,217,382 bytes (94.62 MB) | Excluded: Near 100 MB threshold (94.6 MB); triggers repository push warnings. | Stream via external video host or transcode to lower-bitrate web format. | Video editing clip and audio synchronization sample. |

---

## 3. User Review and Approval Protocol

To approve or modify staged assets before public release:
1. Inspect the local preview files directly in `02_Portfolio_Site\assets\img\branding\` and `02_Portfolio_Site\assets\img\creative\`.
2. Confirm `[x]` status in Table 1 above.
3. If any asset should be swapped, removed, or recaptioned, note adjustments in this manifest.
