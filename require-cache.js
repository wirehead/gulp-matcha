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
      delete require.cache[key]
    }
  }
}
