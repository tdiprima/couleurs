// DEFAULT RANGES
const camicRGB = [{ color: 'rgba(216, 63, 42, 255)', low: 201, hi: 255 },
  { color: 'rgba(246, 173, 96, 255)', low: 151, hi: 200 },
  { color: 'rgba(254, 251, 191, 255)', low: 101, hi: 150 },
  { color: 'rgba(171, 221, 164, 255)', low: 51, hi: 100 },
  { color: 'rgba(44, 131, 186, 255)', low: 0, hi: 50 }]

const camicHex = [{ color: '#d83f2a', low: 201, hi: 255 }, { color: '#f6ad60', low: 151, hi: 200 },
  { color: '#fefbbf', low: 101, hi: 150 }, { color: '#abdda4', low: 51, hi: 100 }, { color: '#2c83ba', low: 0, hi: 50 }]

// RAINBOW
const rainbowRGB = [{ color: 'rgba(255, 0, 0, 255)', low: 201, hi: 255 },
  { color: 'rgba(255, 153, 0, 255)', low: 171, hi: 200 },
  { color: 'rgba(255, 255, 0, 255)', low: 141, hi: 170 },
  { color: 'rgba(1, 185, 245, 255)', low: 101, hi: 140 },
  { color: 'rgba(0, 0, 255, 255)', low: 76, hi: 100 },
  { color: 'rgba(135, 19, 172, 255)', low: 31, hi: 75 },
  { color: 'rgba(255, 255, 255, 0)', low: 0, hi: 30 }]

// RAINBOW HEX
const rainbowHex = [{ color: '#FF0000', low: 201, hi: 255 },
  { color: '#FF9900', low: 171, hi: 200 },
  { color: '#FFFF00', low: 141, hi: 170 },
  { color: '#01B9F5', low: 101, hi: 140 },
  { color: '#0000FF', low: 76, hi: 100 },
  { color: '#8713AC', low: 31, hi: 75 },
  { color: '#FFFFFF00', low: 0, hi: 30 }]

// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function componentToHex (c) {
  let hex = c.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}

function rgbToHex (r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

console.log(rgbToHex(0, 51, 255)) // #0033ff

function hexToRgb (hex) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

console.log(hexToRgb('#0033ff').g) // "51";

// https://stackoverflow.com/questions/49974145/how-to-convert-rgba-to-hex-color-code-using-javascript
function rgba2hex (orig) {
  let a
  const rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i)
  const alpha = (rgb && rgb[4] || '').trim()
  let hex = rgb
    ? (rgb[1] | 1 << 8).toString(16).slice(1) +
        (rgb[2] | 1 << 8).toString(16).slice(1) +
        (rgb[3] | 1 << 8).toString(16).slice(1) : orig

  if (alpha !== '') {
    a = alpha
  } else {
    a = 0o1
  }
  // multiply before convert to HEX (a * 255)
  a = (a | 1 << 8).toString(16).slice(1)
  hex = hex + a
  // hex = '#' + hex

  return hex
}
