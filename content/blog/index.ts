
import React from 'react';
import GettingStartedPost from './getting-started-with-saas-development';
import TheRoiOfGreatDesignPost from './the-roi-of-great-design';

// This file acts as a static registry for all blog posts.
// When you add a new blog post file, import it here and add it to the map.
export const blogPostComponents: { [key: string]: React.ComponentType } = {
  'getting-started-with-saas-development': GettingStartedPost,
  'the-roi-of-great-design': TheRoiOfGreatDesignPost,
};
