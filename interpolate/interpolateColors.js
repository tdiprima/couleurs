/**
 * interpolateColor generates the gradient colors from the color1 and color2
 * @param  {String} color1
 * @param  {String} color2
 * @param  {Number} factor
 * @return {Array}        the gradient color that bases on factor
 */
function interpolateColor(color1, color2, factor) {
  if (arguments.length < 3) {
    factor = 0.5;
  }
  var result = color1.slice();
  for (var i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
  }
  return result;
}

/**
 * interpolateColors to interpolate between two colors completely
 * @param  {String} color1 the color should be in RGB format. e.g. rgb(255,255,255).
 * @param  {String} color2
 * @param  {Number} steps how much colors in the result
 * @return {Array}        the gradient colors
 */
function interpolateColors(color1, color2, steps) {
  var stepFactor = 1 / (steps - 1);
  var interpolatedColorArray = [];

  color1 = color1.match(/\d+/g).map(Number);
  color2 = color2.match(/\d+/g).map(Number);

  for (var i = 0; i < steps; i++) {
    const rgbArray = interpolateColor(color1, color2, stepFactor * i);
    interpolatedColorArray.push(
      `rgb(${rgbArray[0]},${rgbArray[1]},${rgbArray[2]})`,
    );
  }

  return interpolatedColorArray;
}

function hexToRgb(hex) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return `rgb(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')})`;
  }
  throw new Error('Bad Hex');
}

let colorList = interpolateColors(hexToRgb("#ff0000"), hexToRgb("#008800"), 7);
console.log(colorList);

colorList = [
  'rgb(255,0,0)',
  'rgb(213,23,0)',
  'rgb(170,45,0)',
  'rgb(128,68,0)',
  'rgb(85,91,0)',
  'rgb(43,113,0)',
  'rgb(0,136,0)'
]
