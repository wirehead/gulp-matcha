# gulp-matcha

This lets you run matcha benchmarks as a gulp task.

## Install

```sh
npm install --save-dev gulp-matcha
```

## Usage

```js
var gulp = require('gulp');
var matcha = require('gulp-matcha');

gulp.task('default', function () {
  return gulp.src('benchmarks/**/*.js', {
    read: false
  })
  .pipe(matcha({
    reporter: 'clean'
  }))
});
```

## API

### matcha(options)

### options.ui

Type: `string`
Default: `bdd`
Values: `bdd`, `exports`

The interface to use.

### options.reporter

Type: `string`
Default: `clean`
Values: `clean`, `csv`, `plain`

The reporter to use.

## License

### MIT License
#### Copyright (c) 2015 Stephen Belanger

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
