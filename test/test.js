var nx = require('next-js-core2');
require('../src/next-sass-get');

test('nx.sassGet', function() {
  var context = { color: { primary: { default: '#8e8e93', dark: '#f60', light: '#eee' } } };
  var path = 'color.primary.default';

  // var context = {
  //   color: {
  //     primary: { default: '#007aff', dark: '#f60' },
  //     secondary: '#999'
  //   }
  // };
  // var path = 'color.primary.default';

  console.log(nx.get(context, path));
});
