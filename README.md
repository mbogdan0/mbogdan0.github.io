# mbogdan0.github.io

A site about me. It was made with a few prompts to Claude — but with soul,
which is the part that doesn't scale.

It's a single page that says who I am, lists a few things I've vibe-coded, and
gets out of your way. No analytics, no cookie banner, no JavaScript. The boldest
technical decision here is a font.

**Live:** https://mbogdan0.github.io

## Running it

You will need Node 20+. Then:

```sh
npm ci          # install the three dev dependencies, deliberately
npm run serve   # http://localhost:8080, rebuilds on save
npm run build   # writes the production site to _site/
npm run clean   # removes _site/, in case it has seen too much
```

That's it. There is no step three.

## Where things live

```
src/
  index.njk          the page (singular)
  _includes/
    base.njk         the HTML skeleton: meta tags, favicon, inlined CSS
  _data/
    site.json        who I am, in JSON form
    projects.json    the projects list — add yours here (you can't, it's my site)
  css/
    style.css        the aged-paper theme, light and dark
  fonts/             Fraunces and Inter, self-hosted like it's 2003
eleventy.config.js   Eleventy setup: watch CSS, copy fonts, minify HTML
_site/               build output, not committed
```

## How it works

[Eleventy](https://www.11ty.dev/) takes the Nunjucks template, pours the JSON
data into it, inlines the CSS straight into the `<head>`, minifies the result,
and produces one HTML file plus two font files. The whole site ships in a
single request (fonts pending).

The theme is aged paper: warm cream in the light, warm near-black in the dark,
links in canonical browser blue — the way links looked before anyone decided
they should be "brand color". Contrast is WCAG AAA throughout, checked with
axe-core, because irony is no excuse for unreadable text.

## Deploying

Push to `main`. GitHub Actions builds it and deploys to Pages
(`.github/workflows/deploy-pages.yml`). No tags, no rituals.

## On the prompts

It took a few: some built the site, the rest fixed what I actually meant.
Nobody's counting.
