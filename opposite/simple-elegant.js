// Simple and elegant.
function invertHex(hex) {
  return (Number(`0x1${hex}`) ^ 0xffffff)
    .toString(16)
    .substr(1)
    .toUpperCase();
}

let result = invertHex('fcf0da');
console.log(result)

// No idea what it does or how it works, but it's indeed simple and elegant :)
