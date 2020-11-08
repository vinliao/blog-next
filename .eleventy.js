module.exports = function (eleventyConfig) {
  let md = require('markdown-it')
  const options = {
    html: true,
    breaks: true,
    typographer: true,
    linkify: true
  }

  eleventyConfig.setLibrary('md', md(options));
  eleventyConfig.addPassthroughCopy('src/style');
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "dist"
    },
  }
};