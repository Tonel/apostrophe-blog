// This configures the @apostrophecms/pages module to add a "home" page type to the
// pages menu

module.exports = {
  options: {
    types: [
      {
        name: 'default-page',
        label: 'Default'
      },
      {
        name: '@apostrophecms/home-page',
        label: 'Home'
      },
      // register the blog page type
      {
        name: '@apostrophecms/blog-page',
        label: 'Blog Page'
      }
    ]
  }
};
