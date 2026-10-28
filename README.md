# 90-Day Tracker

A personal 90-day accountability tracker that runs in the phone browser. One HTML file, no backend, no account. Your data stays on your device.

I built it for myself because I tend to drop projects around day 3-5. Everything in it is designed around staying consistent past that point.

**Live app:** [add your Netlify link here]

## What it does

- **Day X of 90** with a countdown to the end date. The end date follows your start date, which you can edit in settings.
- **Daily checklist** for three habits (code, learn, post) with a streak counter and a best-streak record.
- **Minimum version** for each habit, so a bad day still counts when you do the smallest version.
- **Comeback mode** after a missed day, so one miss doesn't reset everything to zero.
- **Days 3-5 warning**, since that's where I usually quit.
- **"Why I'm doing this"** note kept visible every day.
- **Plan tomorrow** with simple "when X, I will Y" lines.
- **Daily note** for what I actually did, and a **reason field** for missed days.
- **Weekly view** showing which days were done or missed, plus progress percentages.
- **Projects** with milestones you can tick off.
- **Marketing log** for each video posted, with views and signups.
- **Weekly review** with three questions: what worked, what failed, what to adjust.
- **Share update** button to send a short progress message to an accountability partner.

## How to use it

1. Open the live link in Chrome on your phone.
2. Tap the three dots (⋮), then **Install app** or **Add to Home screen**.
3. Set your start date in the settings icon at the top right.
4. Tick your habits daily. Plan tomorrow's three tasks before bed.
5. Fill in the weekly review on Sundays.

## Your data

Everything is saved in your browser's `localStorage`, on your own device. Nothing is sent to a server.

- Data is tied to the exact link you use. A different link starts empty.
- Clearing site data or cookies in Chrome deletes your history.
- Data does not sync between devices.

## Run it yourself

No build step. Download the files and open `index.html`, or drop the folder onto any static host (Netlify, GitHub Pages, Cloudflare Pages).

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole app (HTML, CSS and JavaScript) |
| `manifest.json` | Lets the phone install it as an app |
| `sw.js` | Service worker, network-first so updates show up |
| `icon-192.png`, `icon-512.png` | App icons |

## Built with

Vanilla HTML, CSS and JavaScript. Built with AI assistance (Replit) and hosted on Netlify.
