# Dark Desert Media Portfolio: Deployment and Verification Guide

Putting the `02_Portfolio_Site/` directory online provides hiring managers with a verifiable HTTPS portfolio URL showcasing formula-driven Excel workbooks, Chicago Manual of Style proofreading redlines, systems architecture utilities (*Arachnode*, *Limitoad*, *Armadimmer*, *STRATA 7X: BLACKBOX*), and commercial media credits (*Stray Cafe*, *Just Some Guy*).

## Option A: GitHub Pages (Primary via Automated Quality Gate)
1. Authenticate the GitHub CLI in PowerShell (`gh auth login`) and confirm active credentials with `gh auth status`.
2. Create a public GitHub repository (`Garrett-M-Harper.github.io`) and push the `main` branch from `02_Portfolio_Site/`.
3. Enable GitHub Pages from GitHub Actions in **Settings -> Pages -> Build and deployment -> Source: GitHub Actions**.
4. Every push to `main` runs `.github/workflows/deploy.yml`, which executes the automated quality gate (zero em dashes, zero AI cliches, zero sensitive files, and all files strictly under 100 MB) before publishing to `https://garrett-m-harper.github.io/`.
5. Record the confirmed live HTTPS URL in `02_Portfolio_Site/DEPLOYED_URL.txt`.

## Option B: Netlify Drop (30-Second Fallback)
1. Open **https://app.netlify.com/drop** in a web browser and sign in.
2. Drag the `02_Portfolio_Site/` folder directly onto the Netlify Drop target.
3. Copy the generated HTTPS URL (for example, `https://dark-desert-media.netlify.app`) and record it in `02_Portfolio_Site/DEPLOYED_URL.txt`.

## Synchronize Live Portfolio URL Into Resumes
After confirming the live HTTPS URL returns HTTP 200, regenerate all core resume PDFs and cover letters from the workspace root so each header carries the clickable portfolio hyperlink:

```powershell
python "01_Resumes_and_Letters\build_resumes.py" --portfolio-url "https://garrett-m-harper.github.io/"
```
