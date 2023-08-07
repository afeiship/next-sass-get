const NxSassGet = require('../src');
var sass = require('node-sass');
var sassString = require('fs').readFileSync('./__tests__/app.scss').toString();

describe('NxSassGet.methods', function () {
  test('syncRender', function () {
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

  test.only('locals i18n', () => {
    var result = sass.renderSync({
      data: sassString,
      options: {
        outputStyle: 'expanded'
      },
      functions: NxSassGet.create({
        locals: {
          cn: 'zh-CN',
          en: 'en-US'
        }
      })
    });

    console.log(result.css.toString());
  });
});
