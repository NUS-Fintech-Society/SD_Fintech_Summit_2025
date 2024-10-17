# Fintech Summit - Next.js Frontend

## Overview

This project is built using **Next.js**, and it automatically maps the files within the `src/app/` directory to routes in the application. Each directory within `app/` corresponds to a URL path, and each `page.tsx` file within those directories serves as the content for that route.

For example:
- The `page.tsx` file located in `/src/app/about/` would load when you visit `/about` in the browser.

---

## Key Routing Folders

- `src/app/faq/page.tsx` → `/faq`
- `src/app/demo-day/page.tsx` → `/demo-day`
- `src/app/hackathon/page.tsx` → `/hackathon`
- `src/app/opening-ceremony/page.tsx` → `/opening-ceremony`
- `src/app/workshops/page.tsx` → `/workshops`
- `src/app/workshops/day1/page.tsx` → `/workshops/day1`
- `src/app/workshops/day2/page.tsx` → `/workshops/day2`
- `src/app/workshops/day3/page.tsx` → `/workshops/day3`
- `src/app/registration/page.tsx` → `/registration`
- `src/app/sponsors/page.tsx` → `/sponsors`

### Components
- Components for each page are located within the `src/app/components/(page)` directory.

---

## Setting Up + Running Locally
1. fork the repo [https://github.com/NUS-Fintech-Society/SD_Fintech_Summit]
2. git clone (URL)
3. npm install
4. npm run dev

## Github Workflow
1. git add *
2. git commit -m "(message)"
3. git push
4. make a pull request
