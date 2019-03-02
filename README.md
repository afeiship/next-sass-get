# next-sass-get
> Deep get for sassLoader based nodeSass

## install:
```bash
npm install -D afeiship/next-sass-get --registry=https://registry.npm.taobao.org
```

## usage:
1. define theme.json or JS file:

```js
{
  "variables": {
    "color": {
      "primary": {
        "dark": "#f60",
        "light": "#eee"
      }
    }
  },
  "components": {
    "user": {
      "avatarUrl": "https://image-static.segmentfault.com/151/223/1512235645-5c77c9963220a_articlex"
    },
    "info-item-chart": {
      "iconShare": "https://image-static.segmentfault.com/151/223/1512235645-5c77c9963220a_articlex",
      "iconStar": "https://i.stack.imgur.com/tfWDY.png",
      "iconClass": "c-primary tc"
    }
  }
}
```

2. webapck loader config:
```js
import nxSassGet from 'next-sass-get';
const variables = require(__dirname + '/src/config/themes/default.json').variables;

// ....
{
  loader: 'sass-loader',
  options: {
    includePaths: [resolve('src', './assets/styles')],
    functions: nxSassGet(
      variables
    )
  }
}
```

3. sass file:
```scss
.container {
  width: 90%;
  padding: 14px;
  color: get('color.primary.dark');
  background: get('color.primary.light');
}
```

## resources:
- https://github.com/sass-eyeglass/node-sass-utils
- https://itnext.io/sharing-variables-between-js-and-sass-using-webpack-sass-loader-713f51fa7fa0
