/**
 * Blue to red color-map
 * How I did it: create a 1 x 256 image in gimp, apply gradient, then read it using python,
 * and print to console.  Looking at it, explained what it was doing.
 * Easier (accurate) way - node:
 */
// blue goes down; red goes up
let a = 0; let b = 255; for (let i = 0; i < 256; i++) { process.stdout.write(`[${a}, 0, ${b}, 255],`); a++; b--; }
// Then wrap it in: []
