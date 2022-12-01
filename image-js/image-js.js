// https://www.npmjs.com/package/image-js
// A greyscale image will be saved in the same folder.

// npm i -d image-js
// npm audit fix

// node image-js.js

const { Image } = require('image-js')

execute().catch(console.error)

async function execute() {
  let image = await Image.load('../images/cat.jpg')
  let grey = image
    .grey() // convert the image to greyscale.
    .resize({ width: 200 }) // resize the image, forcing a width of 200 pixels. The height is computed automatically to preserve the aspect ratio.
    .rotate(30) // rotate the image clockwise by 30 degrees.
  return grey.save('cat-gray.png')
}
