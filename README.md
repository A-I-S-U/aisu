# AISU — AI Student Universe

Official website of **AISU (AI Student Universe)**, the student tech community
at Horus University of Egypt (HUE), focused on AI, software engineering,
cybersecurity, and robotics.

**Live site:** [a-i-s-u.me](https://a-i-s-u.me)

## Pages

| Page | Description |
| --- | --- |
| `index.html` | Home — who we are and how the community works |
| `tracks.html` | Overview of all tracks and sectors |
| `team.html` | The team |
| `tracks/` | Technical tracks: AI, Data Analysis, Web Development, Flutter, Robotics, Cyber Security |
| `sectors/` | Non-technical sectors: Public Relations, Human Resources, Events & Ops, Media, Documentation, Finance |

## Tech

Plain static HTML styled with [Tailwind CSS](https://tailwindcss.com/) via CDN —
no build step, no dependencies.

Hosted on **GitHub Pages**, served from the root of the `master` branch with the
custom domain `a-i-s-u.me` (see `CNAME`).

## Run locally

No tooling required — open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```
