'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    return this.reduce((string, current, index) => {
      let currentInner = current;

      if (typeof current === 'undefined' || current === null) {
        currentInner = '';
      }

      if (index === this.length - 1) {
        return string + currentInner;
      }

      return string + currentInner + separator;
    }, '');
  };
}

module.exports = applyCustomJoin;
