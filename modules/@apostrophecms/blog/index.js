module.exports = {
  fields: {
    // add the content field to the
    // "@apostrophe/blog" piece definition
    add: {
      content: {
        type: 'area',
        options: {
          widgets: {
            // add support for the rich-text editor
            '@apostrophecms/rich-text': {},
            // add support to multimedia fiels in
            // the blog post content
            '@apostrophecms/image': {},
            '@apostrophecms/video': {}
          }
        }
      }
    },
    // add the "content" fields to the
    // "Basics" fields
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'content'
        ]
      }
    }
  }
};
