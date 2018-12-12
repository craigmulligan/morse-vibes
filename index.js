const GAP = 30
const MAPPING = {
  _: 1000,
  '.': 500,
  ' ': 1000,
  '~': 30,
}

function flatten(arr) {
  return Array.prototype.concat(...arr)
}

module.exports = function vibes(pattern, opts = { mapping: MAPPING }) {
  const vibes = flatten(
    [...pattern].map((c, i, arr) => {
      // if there is space after or its the last char we don't add a space char
      if (c == ' ' || arr[i + 1] == ' ' || i == arr.length - 1) {
        return c
      }
      return [c, '~']
    }),
  )
    .map(c => opts.mapping[c])
    .filter(s => s)

  if (window.navigator) {
    window.navigator.vibrate(vibes)
  }

  return vibes
}
