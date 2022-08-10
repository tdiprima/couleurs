// https://stackoverflow.com/questions/11068240/what-is-the-most-efficient-way-to-parse-a-css-color-in-javascript#11068286
//function parseColor(input) {
function colorToArray(input) {
  let m
  m = input.match(/^#([0-9a-f]{3})$/i) // 3-char format
  if (m) {
    m = m[1]
    return [
      parseInt(m.charAt(0), 16) * 0x11,
      parseInt(m.charAt(1), 16) * 0x11,
      parseInt(m.charAt(2), 16) * 0x11
    ]
  }
  m = input.match(/^#([0-9a-f]{6})$/i) // 6-char format
  if (m) {
    m = m[1]
    return [
      parseInt(m.substr(0, 2), 16),
      parseInt(m.substr(2, 2), 16),
      parseInt(m.substr(4, 2), 16)
    ]
  }
  m = input.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i) // rgb
  if (m) {
    // console.log('%cm', 'color: yellow;', m)
    return [m[1], m[2], m[3]]
  }

  m = input.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i) // rgba
  // m = input.match(/rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*\d+(?:\.\d+)?\)/g) // last val can be decimal
  if (m) {
    // console.log('%cm', 'color: yellow;', m)
    return [m[1], m[2], m[3], m[4]]
  }
}

// https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript#10316616
function arraysEqual(a1, a2) {
  // Arrays must not contain {...} or behavior may be undefined
  return JSON.stringify(a1) === JSON.stringify(a2);
}

function arrToInt(arr) {
  return arr.map(function (x) {
    return parseInt(x, 10);
  })
}

// RUN SOME TESTS
let a, b, c, result
a = parseColor('#00FFFF')
console.log(a)

b = parseColor('#0FF')
console.log(b)

a = parseColor('rgb(255, 0, 0)')
b = parseColor('rgba(0, 255, 0, 255)')
console.log(a)
console.log(b)

c = parseColor('rgba(0, 255, 0, 255)')
result = arraysEqual(b, c)
console.log(b, c, result)

let rgb = [ '255', '0', '0' ]
console.log(arrToInt(rgb))

let rgba = [ '255', '0', '0', '128' ]
console.log(arrToInt(rgba))

// https://stackoverflow.com/questions/10970958/get-a-color-component-from-an-rgb-string-in-javascript#10971090
let red = 'rgb(200, 12, 53)'
// Non-regex method:
red = red.substring(4, red.length - 1)
  .replace(/ /g, '')
  .split(',')

console.log(red)
