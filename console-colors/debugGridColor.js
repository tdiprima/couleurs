// https://github.com/openseadragon/openseadragon/blob/master/src/openseadragon.js
// Loop through Array with Delay

const debugGridColor = ['#437AB2',
  '#1B9E77',
  '#D95F02',
  '#7570B3',
  '#E7298A',
  '#66A61E',
  '#E6AB02',
  '#A6761D',
  '#666666']

for (let i = 0; i < debugGridColor.length; i++) {
  // for each iteration console.log a word
  // and make a pause after it
  (function (i) {
    setTimeout(function () {
      document.body.bgColor = debugGridColor[i]
      console.log(`%c${debugGridColor[i]}`, `color: ${debugGridColor[i]};`)
    }, 1000 * i)
  })(i)
};
