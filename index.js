var domain = require('domain')
var gutil = require('gulp-util')
var through = require('through')
var matcha = require('matcha')
var Interface = require('matcha/lib/matcha/interface')
var RequireCache = require('./require-cache')

module.exports = function (options) {
  options = options || {}

  var suite = new matcha.Suite()
  var ui = new Interface(suite, {
    style: options.ui || 'bdd'
  })

  var reporter = require(
    'matcha/lib/matcha/reporters/' + (options.reporter || 'clean')
  )

  var cache = new RequireCache()

  return through(function (file) {
    suite.emit('pre-require')
    suite.emit('require', require(file.path))
    this.queue(file)
  }, function () {
    var stream = this
    var d = domain.create()

    d.on('error', function (err) {
      cache.clear()
      stream.emit('error', new gutil.PluginError('gulp-matcha', err, {
        stack: err.stack,
        showStack: true
      }))
    })

    d.run(function () {
      var runner = new matcha.Runner(suite)
      reporter(runner, matcha.utils)
      runner.run(function () {
        cache.clear()
        stream.emit('end')
      })
    })
  })
}
