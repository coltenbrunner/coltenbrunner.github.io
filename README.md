# coltenbrunner.github.io

Personal portfolio — Angular 17, deployed to GitHub Pages via GitHub Actions.

## Local development

```bash
cd frontend
npm install        # first time only
ng serve           # http://localhost:4200  (hot reload)
```

## Deploy

Just push to `main` — GitHub Actions builds and deploys automatically.

```bash
git add .
git commit -m "your message"
git push
```

## Updating content

| What | File |
|---|---|
| Projects | `frontend/src/assets/data/projects.json` |
| Work experience | `frontend/src/assets/data/experience.json` |
| Skills | `frontend/src/app/components/skills/skills.component.ts` |
| Hero titles / bio | `frontend/src/app/components/hero/hero.component.ts` + `.html` |
| About text | `frontend/src/app/components/about/about.component.html` |
| Contact form | set `formspreeId` in `frontend/src/app/services/api.service.ts` |
| Profile photo | `frontend/src/assets/images/profile.jpg` |
| Resume PDF | `frontend/src/assets/resume.pdf` |
