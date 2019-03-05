# next-sass-get
> Deep get for sassLoader based nodeSass

## install:
```bash
npm install -S afeiship/next-sass-get --registry=https://registry.npm.taobao.org
```

## apis:
| api    | params | description           |
|--------|--------|-----------------------|
| create |        | get from json context |

## usage:
```js
import NxSassGet from 'next-sass-get';

// code goes here:
const cssResult = sass.renderSync({
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
```
### input:
```scss
$colors: (
  f: #fff,
  e: #eee,
  0: #000,
  3: #333,
  6: #666,
  8: #888,
  9: #999,
  primary: get("color.primary.default"),
  secondary: get("color.secondary")
);

.color1 {
  color: map-get($colors, primary);
}

.color2 {
  background: get("color.secondary");
}
```

### output:
```css
.color1 {
  color: #4cd964; }

.color2 {
  background: #999; }
```

## resources:
- https://github.com/afeiship
