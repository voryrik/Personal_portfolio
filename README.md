# Rik Vory — Portfolio Website

Plain HTML, CSS and vanilla JavaScript, built to match your design.

## Folder structure
```
portfolio/
├── index.html        → all page content
├── css/style.css      → all styling (colors, layout, responsive rules)
├── js/script.js       → menu, smooth scroll, active link, back-to-top, reveal animations
├── images/            → put your photo and project screenshots here
└── assets/            → extra files (icons, resume PDF, etc.) if you need them
```

## Where to edit things

**Your photo**
Add a file named `profile.jpg` inside `images/`. Until you do, a placeholder image shows automatically.

**Project screenshots**
Add `project1.jpg`, `project2.jpg`, `project3.jpg` inside `images/` — a real screenshot of each project, ideally around 800×500px, works best. Until you add them, a labeled placeholder shows automatically so you can see where each one goes.

**Project links**
In `index.html`, inside each project's `.project-card__actions`, replace the placeholder `href="#"` with your real Live Demo and/or GitHub URL. If a project has no live demo (like the console-based Hospital Management System), just leave the single GitHub button — don't add a fake Live Demo link.

**Text content** (name, intro, about text, skills, project descriptions)
All in `index.html`. Search for the text you want to change and replace it.

**Contact links**
In `index.html`, update the `href` values in the Contact section (GitHub, LinkedIn, email) if they change.

**Colors**
All colors are defined once at the top of `css/style.css` under `:root { ... }`, so changing `--color-blue-primary` (for example) updates it everywhere.

**Add a new project card**
Copy one `<article class="project-card">...</article>` block in the Projects section of `index.html`, then update the image, title, description and tags.

## Running it
Just open `index.html` in a browser — no build step or server needed. For live-reload while editing, you can also use the VS Code "Live Server" extension.
