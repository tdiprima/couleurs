// https://stackoverflow.com/questions/49974145/how-to-convert-rgba-to-hex-color-code-using-javascript
let colorcode = "rgba(0, 0, 0, 0.74)";
let finalCode = rgba2hex(colorcode)
console.log(finalCode)

function rgba2hex(orig) {
  let a,
    rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
    alpha = (rgb && rgb[4] || "").trim(),
    hex = rgb ?
      (rgb[1] | 1 << 8).toString(16).slice(1) +
      (rgb[2] | 1 << 8).toString(16).slice(1) +
      (rgb[3] | 1 << 8).toString(16).slice(1) : orig;

  if (alpha !== "") {
    a = alpha;
  } else {
    a = 0x0;
  }
  // multiply before convert to HEX
  a = ((a * 255) | 1 << 8).toString(16).slice(1);
  hex = hex + a;

  return hex;
}

function test(colorcode) {
  console.log(colorcode, rgba2hex(colorcode));
}

test("rgba(0, 0, 0, 0.74)");
test("rgba(0, 0, 0, 1)");
test("rgba(0, 0, 0, 0)");
test("rgba(0, 255, 0, 0.5)");

// rgba(0, 0, 0, 0.74) 000000bc
// rgba(0, 0, 0, 1) 000000ff
// rgba(0, 0, 0, 0) 00000000
// rgba(0, 255, 0, 0.5) 00ff007f
