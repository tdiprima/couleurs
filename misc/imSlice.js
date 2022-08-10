/**
 * Replicate image data (a 2D matrix) with values from the ith channel.
 */
 function imSlice(i, imgData) { // slice ith layer of imgData matrix
  i = i || 0;
  return imgData.map(x => {
    return x.map(y => {
      return y[i]
    })
  })
};
