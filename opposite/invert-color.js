// https://stackoverflow.com/questions/35969656/how-can-i-generate-the-opposite-color-according-to-current-color
function invertColor(hex) {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }

  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }

  // invert color components
  const r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16);
  const g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16);
  const b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
  // pad each with zeros and return
  return `#${padZero(r)}${padZero(g)}${padZero(b)}`;
}

function padZero(str, len) {
  len = len || 2;
  const zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
}

let result = invertColor("#fcf0da")
console.log(result)
