import { readFileSync } from "node:fs";
import { minify } from "html-minifier-terser";

export default function (eleventyConfig) {
  // Inline the CSS into the page instead of copying it as a separate file
  eleventyConfig.addGlobalData("inlineCss", () =>
    readFileSync("src/css/style.css", "utf8")
  );

  // Rebuild when the CSS changes during `--serve`
  eleventyConfig.addWatchTarget("src/css/");

  // Self-hosted font files, copied as-is to _site/fonts/
  eleventyConfig.addPassthroughCopy("src/fonts");

  // Minify the HTML output (and the inlined CSS along with it)
  eleventyConfig.addTransform("minify", async (content, outputPath) => {
    if (!outputPath || !outputPath.endsWith(".html")) return content;
    return minify(content, {
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true,
    });
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    // .njk files are processed with Nunjucks (the default, set explicitly)
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
