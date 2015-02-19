'use strict';

// input => /, /faq, /about
// output => active or blank

module.exports = function(currentPath, expectedPath) {
  if (currentPath === expectedPath) {
    return 'active';
  }
};
