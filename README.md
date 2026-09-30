# MoneyReady: a beginner's guide

This is a free financial-literacy website. This guide assumes you have never built a website. Go slowly and do one step at a time. If something goes wrong, copy the exact error message and ask for help.

**Honest status:** the code was written carefully but has not been through a full production build yet. The first time you run it, errors are possible. Also, the lesson content has NOT been checked against official sources. See the "Sources" page on the site.

## What the folders do

| Folder or file | What it is |
|---|---|
| `site.config.ts` | Site name, tagline, email, menu links, web address. Edit this first. |
| `content/` | All the teaching text. `courses/` lists the courses. `lessons/` holds lesson text and quiz questions. `sources.ts` lists sources. `impact.ts` holds impact numbers. |
| `app/` | The pages. Each folder is a web address (`app/learn` is `/learn`). |
| `components/` | Reusable pieces of screen, like the menu, quiz, and cards. |
| `lib/` | Behind-the-scenes code: calculator math (`calc.ts`) and saving progress (`progress.ts`). |
| `app/globals.css` | The site colors. |

## Install and run it on your computer

A **terminal** is a window where you type commands. On Windows, search "Terminal" or "Command Prompt". On Mac, search "Terminal".

1. Install **Node.js** (LTS version) from nodejs.org. Node lets your computer run the tools this project needs.
2. Unzip the project. In the terminal, go into the folder: type `cd ` (with a space), drag the `moneyready` folder into the terminal window, press Enter.
3. Type `npm install` and press Enter. **npm** downloads the tools the project uses. It takes a few minutes and creates a `node_modules` folder. Never edit that folder.
4. Type `npm run dev` and press Enter.
5. Open `http://localhost:3000` in your browser. Changes you save in a file appear automatically. Press Ctrl+C in the terminal to stop.

## Common edits

**Change the name or tagline:** open `site.config.ts`, change the words inside the quotes, save.

**Change colors:** open `app/globals.css` and edit the color codes near the top (like `#3442e8`). Search "hex color picker" to find codes. There are two sets: light mode and dark mode.

**Edit lesson text:** open `content/lessons/budgeting.ts`. Change the words between quotes. Do not delete quote marks, commas, or brackets.

**Add quiz questions:** in a lesson, find `questions: [`. Copy one `{ kind: ... }` block, paste it after a comma, and change the text. `answer` is the position of the correct option, counting from 0 (first option is 0, second is 1).

**Add a lesson:** in `content/lessons/budgeting.ts`, copy a whole lesson block (from `{` with a `slug` to its closing `},`), paste it before the assessment, and change `slug`, `title`, steps, and questions. The `slug` becomes part of the web address, so use lowercase words joined by dashes.

**Add a whole course:** make a new file in `content/lessons/` like `banking.ts`, add it to `content/lessons/index.ts`, and set `available: true` for that course in `content/courses/index.ts`. Make sure the course `slug` matches.

**Add your email:** in `site.config.ts` set `contactEmail`. Until then the contact form stays turned off.

**Add impact numbers:** in `content/impact.ts`, change `null` to real numbers only once you have measured them.

## Test the website

1. Click every link in the menu and footer.
2. Finish a lesson and check that the score saves on the "My progress" page.
3. Try the calculators with simple numbers. For example, $500 start, $0 monthly, 1 year, 0% should end at $500.
4. Shrink your browser window to phone width and check that nothing is cut off.
5. Press the Tab key to move through a page. You should always see where you are.
6. Run `npm run build`. If it says "Compiled successfully", you are ready to publish. If it shows errors, copy them and ask for help.

## Put it on the internet (free)

**Git** is a tool that saves versions of your files. **GitHub** is a website that stores them. **Vercel** is a company that runs your website for you. Menu names may look slightly different from what is written here.

1. Create a free account at github.com.
2. Click the **+** at the top, choose **New repository**, name it `moneyready`, click **Create repository**.
3. Click **uploading an existing file**. Drag in everything inside the `moneyready` folder, except `node_modules` and `.next`. Click **Commit changes**.
4. Create a free account at vercel.com using **Continue with GitHub**.
5. Click **Add New**, then **Project**, pick `moneyready`, and click **Deploy**. Wait a minute. Vercel gives you a web address.
6. Open `site.config.ts` and change `siteUrl` to that address, then upload it again (see "Update it" below).

## Use your own domain name

A **domain** is an address like `mymoneysite.com`. You buy one from a domain seller (usually about $10 to $20 a year). In Vercel, open your project, go to **Settings**, then **Domains**, type your domain, and follow the instructions it shows. Vercel tells you exactly what to enter at the seller's website. It can take up to a day to start working.

## Update it after it is live

1. Edit the file on your computer, or open the file on github.com and click the pencil icon.
2. Upload the changed file to GitHub again (**Add file**, then **Upload files**) and click **Commit changes**.
3. Vercel notices and updates the website by itself in about a minute.

## Before you tell the public

- Have the lesson content checked against official sources and add links.
- Have a qualified person review the Privacy and Terms drafts.
- Replace the founder placeholder on the About page with your real bio.
- Add analytics only with a privacy plan in place. The site currently uses none.
