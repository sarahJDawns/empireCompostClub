const Post = require("./src/_includes/components/Post");

const Image = require("@11ty/eleventy-img");

// async function imageShortcode(src, alt, sizes) {
//   let metadata = await Image(`./src${src}`, {
//     widths: [300, 800, null],
//     formats: ["avif", "jpeg"],
//     urlPath: "/images/",
//     outputDir: "./public/images/",
//   });

//   let imageAttributes = {
//     alt,
//     sizes,
//     loading: "lazy",
//     decoding: "async",
//   };

//   return Image.generateHTML(metadata, imageAttributes);
// }

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/images/");
  eleventyConfig.addPassthroughCopy("src/assets/css/");
  eleventyConfig.addWatchTarget("src/assets/css/");
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addShortcode("Post", Post);
  // eleventyConfig.addNunjucksAsyncShortcode("EleventyImage", imageShortcode);

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "public",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
