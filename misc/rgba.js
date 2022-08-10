// https://stackoverflow.com/questions/11068240/what-is-the-most-efficient-way-to-parse-a-css-color-in-javascript#21966100
function colorToArray(input) {
  return input.replace(/[a-z%\s()]/g, '').split(',')
}

// works for both
console.log(colorToArray('rgba(11, 11, 11, 11)'))
console.log(colorToArray('rgb(11, 11, 11)'))


/* PART 2 */
// let colors = [{color: '#FF0000', low: 201, hi: 255}, {color: '#FF9900', low: 151, hi: 200},
//   {color: '#fefbbf', low: 101, hi: 150}, {color: '#abdda4', low: 51, hi: 100}, {color: '#2c83ba', low: 0, hi: 50}]
let colors = ['#FF0000', '#FF9900', '#FFFF00', '#01B9F5', '#0000FF', '#8713AC', '#FFFFFF00']
let numbers = [255, 200, 170, 140, 100, 75, 30, 0]

// A function to create another function
for (let i = 0; i < colors.length; i++) {
  let low = numbers[i + 1] + 1
  let hi = numbers[i]
  let color = colors[i]

  if (hi === 255) {
    console.log('num >= ' + low)
  } else if (low === 1) {
    console.log('num >= ' + numbers[i + 1] + ' and num <= ' + hi)
  } else {
    console.log('num >= ' + low + ' and num <= ' + hi)
  }

  // console.log('{ color: \'' + colors[i] + '\', low: ' + (numbers[i + 1] + 1) + ', hi: ' + numbers[i] + ' }, ')
}
