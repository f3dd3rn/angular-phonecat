angular.
  module('core').
  filter('checkmark', function() {
    return function(isChecked) {
      return isChecked ? '\u2713' : '\u2718';
    };
  });
