# mbogdan0.github.io

A site about me. It was made with a few prompts to Claude — but with soul,
which is the part that doesn't scale.

It's a single page that says who I am, lists a few things I've vibe-coded, and
gets out of your way. No analytics, no cookie banner, and just enough
JavaScript to work a light switch. The boldest technical decision here is
a font.

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
    base.njk         the HTML skeleton: meta tags, favicon, inlined CSS,
                     and the light switch
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

The theme is aged paper, with a faint grain to prove it: warm cream in the
light, warm near-black in the dark, links in canonical browser blue — the way
links looked before anyone decided they should be "brand color". It follows
your system preference; a small sun-or-moon button in the corner overrules it,
and remembers. Contrast is WCAG AAA throughout, checked with axe-core, because
irony is no excuse for unreadable text.

## Deploying

Push to `main`. GitHub Actions builds it and deploys to Pages
(`.github/workflows/deploy-pages.yml`). No tags, no rituals.
