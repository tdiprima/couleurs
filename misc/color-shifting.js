// Function to convert RGB to HSL
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return [h, s, l];
}

// Function to convert HSL to RGB
function hslToRgb(h, s, l) {
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }

    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

// Function to shift color from blue to green
function shiftColorToGreen(hexColor) {
  // Remove the "#" from the beginning of the hex color
  let color = hexColor.substring(1);

  // Extract the RGB values from the hex color
  let r = parseInt(color.substring(0, 2), 16);
  let g = parseInt(color.substring(2, 4), 16);
  let b = parseInt(color.substring(4, 6), 16);

  // Convert RGB to HSL
  let [h, s, l] = rgbToHsl(r, g, b);

  // Set the desired green hue
  let greenHue = 120; // 120 represents green in the HSL color space

  // Convert the green hue to RGB
  let [shiftedR, shiftedG, shiftedB] = hslToRgb(greenHue, s, l);

  // Convert the shifted RGB values to hex color
  let shiftedHexColor = `#${shiftedR.toString(16)}${shiftedG.toString(16)}${shiftedB.toString(16)}`;

  return shiftedHexColor;
}

// Function to shift color to red
function shiftColorToRed(hexColor) {
  // Remove the "#" from the beginning of the hex color
  let color = hexColor.substring(1);

  // Extract the RGB values from the hex color
  let r = parseInt(color.substring(0, 2), 16);
  let g = parseInt(color.substring(2, 4), 16);
  let b = parseInt(color.substring(4, 6), 16);

  // Convert RGB to HSL
  let [h, s, l] = rgbToHsl(r, g, b);

  // Set the desired red hue
  let redHue = 0; // 0 represents red in the HSL color space

  // Convert the red hue to RGB
  let [shiftedR, shiftedG, shiftedB] = hslToRgb(redHue, s, l);

  // Convert the shifted RGB values to hex color
  let shiftedHexColor = `#${shiftedR.toString(16)}${shiftedG.toString(16)}${shiftedB.toString(16)}`;

  return shiftedHexColor;
}

// todo: fix

// Example usage to red
let blueHexColor = "#156289";
let darkBlueHexColor = "#072534";

console.log(shiftColorToRed(blueHexColor)); // #891515 Old Brick
console.log(shiftColorToRed(darkBlueHexColor)); // #3477...?

// Example usage to green
let shiftedGreenHexColor = shiftColorToGreen(blueHexColor);
console.log(shiftedGreenHexColor); // doesn't work
console.log(shiftColorToGreen(darkBlueHexColor)); // doesn't work
