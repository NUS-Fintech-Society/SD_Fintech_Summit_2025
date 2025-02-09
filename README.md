# Fintech Summit - Next.js

## Frontend

The Frontend is built using **Next.js**, and it automatically maps the files within the `src/app/` directory to routes in the application. Each directory within `app/` corresponds to a URL path, and each `page.tsx` file within those directories serves as the content for that route.

For example:
- The `page.tsx` file located in `/src/app/about/` would load when you visit `/about` in the browser.

---

## Key Routing Folders

- `src/app/faq/page.tsx` → `/faq`
- `src/app/demo-day/page.tsx` → `/demo-day`
- `src/app/hackathon/page.tsx` → `/hackathon`
- `src/app/opening-ceremony/page.tsx` → `/opening-ceremony`
- `src/app/workshops/page.tsx` → `/workshops`
- `src/app/registration/page.tsx` → `/registration`
- `src/app/sponsors/page.tsx` → `/sponsors`

### Components
- Components for each page are located within the `src/app/components/(page)` directory.

---

# Backend

The API routes are located in **`src/app/api/`**, following the **Next.js App Router** convention. Each directory inside `api/` corresponds to a backend route, and each `route.ts` file inside those directories defines the logic for that route.

For example:
- The `route.ts` file inside `src/app/api/hackathon/registration/` will handle requests to `/api/hackathon/registration`.

---

### Hackathon Registration
- **File Path:** `src/app/api/hackathon/registration/route.ts`
- **Endpoint:** `POST /api/hackathon/registration`
- **Description:** Registers a **hackathon team**, including the leader and team members.

---

### Hackathon Submission
- **File Path:** `src/app/api/hackathon/submission/route.ts`
- **Endpoint:** `POST /api/hackathon/submission`
- **Description:** Allows **only registered team leaders** to submit their hackathon project.

---

### Workshop Registration
- **File Path:** `src/app/api/workshop/registration/route.ts`
- **Endpoint:** `POST /api/workshop/registration`
- **Description:** Registers a participant for **workshops**, but only if they are already **registered for the hackathon**.

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
