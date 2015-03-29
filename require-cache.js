module.exports = RequireCache

function RequireCache () {
  this.cache = RequireCache.snapshot()
}

RequireCache.snapshot = function () {
  var cache = {}
  for (var key in require.cache) {
    cache[key] = true
  }
  return cache
}

RequireCache.prototype.clear = function () {
  for (var key in require.cache) {
    if ( ! this.cache[key]) {
      // Avoid deleting native modules...
      // they don't re-register cleanly.
      if (/\.node$/.test(require.cache[key].id)) {
        this.cache[key] = true
      } else {
        delete require.cache[key]
      }
    }
  }
}
