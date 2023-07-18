// https://thenewstack.io/tutorial-getting-creative-with-console-statements/
const mad = String.fromCodePoint(0x1f621);
const scream = String.fromCodePoint(0x1f631);
const wave = String.fromCodePoint(0x1f44b);
const bug = String.fromCodePoint(0x1f41e);
const flame = String.fromCodePoint(0x1f525);
console.log(mad, scream, wave, bug, flame);
console.log(`Don't ${flame} me, bro`);

console.log('%cHello World!', 'color: darkseagreen; background: darkslateblue; font—size: 30px; font—family: Optima');

// Create an array to hold the CSS style properties
const style1 = [
  'color: powderBlue',
  'text-shadow: 2px 2px purple',
  'background: plum',
  'font-size: 3em',
  'border: 1px solid purple',
  'padding: 20px',
  'font-family: fantasy'
].join(';');
// Add join(';') to the end of the array, then pass the style1 variable into console.log()
console.log('%cWelcome Home!', style1);

console.log(
  "Plain old text %cNow I'm red %cBlue here!", // text to be displayed
  'color: firebrick',
  'color: RoyalBlue', // CSS styles for each %c, in order
);

/*
⚠️ WARNING!!
Changing this code breaks the build!
*/

// 💣💥
