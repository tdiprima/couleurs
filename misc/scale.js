// scale rgb colors to percentage
let scaleToPct = num => {
  return num / 255 * 100
}

// num to rgb
let scaleToRgb = num => {
  return num * 255 / 100
}

console.log(175, Math.floor(scaleToPct(175))) // 175 69

console.log(69, Math.floor(scaleToRgb(69))) // 69 175

