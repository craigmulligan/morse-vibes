const vibes = require('./')

beforeEach(() => {
  window.navigator.vibrate = jest.fn()
})

test('_. ._', () => {
  const patt = [1000, 30, 500, 1000, 500, 30, 1000]
  expect(vibes('_. ._')).toEqual(patt)
  expect(window.navigator.vibrate).toBeCalledWith(patt)
})

test(' .._ _.', () => {
  const patt = [1000, 500, 30, 500, 30, 1000, 1000, 1000, 30, 500]
  expect(vibes(' .._ _.')).toEqual(patt)
  expect(window.navigator.vibrate).toBeCalledWith(patt)
})

test('custom mapping', () => {
  const mapping = {
    _: 500,
    '.': 250,
    ' ': 250,
    '~': 10,
  }

  const patt = [500, 10, 250, 250, 250, 10, 500]
  expect(vibes('_. ._', { mapping })).toEqual(patt)
  expect(window.navigator.vibrate).toBeCalledWith(patt)
})
