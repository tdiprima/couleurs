const filter = OpenSeadragon.Filters.GREYSCALE
filter.prototype.COLORIZE = function (r, g, b) {
  return function (context, callback) {
    let imgData = context.getImageData(
      0, 0, context.canvas.width, context.canvas.height)
    let pixels = imgData.data

    for (let j = 0; j < pixels.length; j += 4) {
      if (pixels[j + 3] === 255) {
        pixels[j] = 65
        pixels[j + 1] = 1
        pixels[j + 2] = 147
      } else {
        pixels[j + 3] = 0
      }
    }
    context.putImageData(imgData, 0, 0)
    callback()
  }
}
