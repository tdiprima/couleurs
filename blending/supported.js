// https://stackoverflow.com/questions/32751619/how-to-check-if-html5-canvas-blend-modes-are-supported-in-my-browser
// How to check if HTML5 Canvas blend modes are supported in my browser?
// https://stackoverflow.com/questions/33955992/js-how-to-get-list-of-supported-html-canvas-globalcompositeoperation-types/33956608#33956608

const blendMode = 'difference'
let canvas = document.createElement('canvas')
canvas.id = 'canvas'
document.body.appendChild(canvas)
// const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

context.fillStyle = '#fff'
context.fillRect(0, 0, canvas.width, canvas.height)

context.globalCompositeOperation = 'source-over'
context.globalCompositeOperation = 'soft-light'
if (context.globalCompositeOperation) {
  // browser supports
  console.log('true')
} else {
  // browser doesn't support
  console.log('false')
}

context.globalCompositeOperation = blendMode
if (context.globalCompositeOperation !== blendMode) {
  // not supported mode
  console.log('false')
}
