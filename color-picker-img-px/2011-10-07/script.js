// https://www.script-tutorials.com/demos/158/js/script.js
var canvas
var ctx

var images = [ // predefined array of used images
  '../images/pic1.jpg',
  '../images/pic2.jpg',
  '../images/pic3.jpg',
  '../images/pic4.jpg',
  '../images/pic5.jpg',
  '../images/pic6.jpg',
  '../images/pic7.jpg',
  '../images/pic8.jpg',
  '../images/pic9.jpg',
  '../images/pic10.jpg'
]
var iActiveImage = 0

$(function () {
  // drawing active image
  var image = new Image()
  image.onload = function () {
    ctx.drawImage(image, 0, 0, image.width, image.height) // draw the image on the canvas
  }
  image.src = images[iActiveImage]

  // creating canvas object
  canvas = document.getElementById('panel')
  ctx = canvas.getContext('2d')

  // mouse move handler
  $('#panel').mousemove(function (e) {
    // get coordinates of current position
    var canvasOffset = $(canvas).offset()
    var canvasX = Math.floor(e.pageX - canvasOffset.left)
    var canvasY = Math.floor(e.pageY - canvasOffset.top)

    // get current pixel
    var imageData = ctx.getImageData(canvasX, canvasY, 1, 1)
    var pixel = imageData.data

    // update preview color (RGBA)
    var pixelColor = 'rgba(' + pixel[0] + ', ' + pixel[1] + ', ' + pixel[2] + ', ' + pixel[3] + ')'
    $('#preview').css('backgroundColor', pixelColor)
  })

  $('#panel').click(function (e) { // mouse click handler
    var canvasOffset = $(canvas).offset()
    var canvasX = Math.floor(e.pageX - canvasOffset.left)
    var canvasY = Math.floor(e.pageY - canvasOffset.top)

    var imageData = ctx.getImageData(canvasX, canvasY, 1, 1)
    var pixel = imageData.data

    // update controls
    $('#rVal').val(pixel[0])
    $('#gVal').val(pixel[1])
    $('#bVal').val(pixel[2])

    $('#rgbVal').val(pixel[0] + ',' + pixel[1] + ',' + pixel[2])
    $('#rgbaVal').val(pixel[0] + ',' + pixel[1] + ',' + pixel[2] + ',' + pixel[3])
    var dColor = pixel[2] + 256 * pixel[1] + 65536 * pixel[0]
    $('#hexVal').val('#' + dColor.toString(16))
  })

  $('#swImage').click(function (e) { // switching images
    iActiveImage++
    if (iActiveImage >= 10) iActiveImage = 0
    image.src = images[iActiveImage]
  })
})
