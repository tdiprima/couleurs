// https://gamedev.stackexchange.com/questions/38536/given-a-rgb-color-x-how-to-find-the-most-contrasting-color-y
// how to find the high contrast color to a color

function fun(oldColor) {
  // let newColor = { r: 255 - oldColor.r, g: 255 - oldColor.g, b: 255 - oldColor.b }
  console.log(typeof oldColor.r)
  let newColor = [255 - oldColor.r, 255 - oldColor.g, 255 - oldColor.b]
  console.log('oldColor:', oldColor)
  console.log('newColor:', newColor + '\n')
  return false
}

let arr = [{ r: 190, g: 0, b: 108 }, { r: 143, g: 0, b: 143 }]
arr.forEach(function (item) {
  fun(item)
})
