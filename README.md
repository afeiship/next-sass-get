# next-sass-get
> Deep get for sass-loader based node-sass.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-sass-get
```

## apis
| api | params | description   |
|-----|--------|---------------|
| get | -      | desc balabala |


## usage
```js
import NxSassGet from '@jswork/next-sass-get';

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

### input
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

### output
```css
.color1 {
  color: #4cd964; }

.color2 {
  background: #999; }
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-sass-get/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-sass-get
[version-url]: https://npmjs.org/package/@jswork/next-sass-get

[license-image]: https://img.shields.io/npm/l/@jswork/next-sass-get
[license-url]: https://github.com/afeiship/next-sass-get/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-sass-get
[size-url]: https://github.com/afeiship/next-sass-get/blob/master/dist/next-sass-get.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-sass-get
[download-url]: https://www.npmjs.com/package/@jswork/next-sass-get
