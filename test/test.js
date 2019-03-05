(function() {
  var nx = require('next-js-core2');
  var sass = require('node-sass');
  var NxSassGet = require('../src/next-sass-get');
  var sassString = require('fs')
    .readFileSync('./test/app.scss')
    .toString();

  describe('NxSassGet.methods', function() {
    test('syncRender', function() {
      var result = sass.renderSync({
        data: sassString,
        options: {
          outputStyle: 'expanded'
        },
        functions: NxSassGet.create({
          color: {
            primary: {
              default: '#4cd964',
              dark: '#f60',
              light: '#eee'
            },
            secondary: '#999'
          }
        })
      });

      console.log(result.css.toString());
    });
  });
})();
