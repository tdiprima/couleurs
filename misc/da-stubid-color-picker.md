# Event listener firing on page load

See:[ Change Hook Running On Init](https://github.com/taufik-nurrohman/color-picker/issues/68)

Hi guys,
I have a weird issue. The change hook is running on plugin initializing. Here is the test I did:

```
// Initialization
let picker = new CP(element);

// change hook listener
picker.on('change', function(r, g, b, a) {
    // firing immediately 
    console.log(1);
});
```

That's intentional. The change hook will also run on init to tidy/validate the color value. You can disable this effect by adding a placeholder variable to store the initialization state once.

```
let init = true;

picker.on('change', function(r, g, b, a) {
    if (init) {
        init = false; // Update the state here!
        return;
    }
    console.log([r, g, b, a]);
});
```

Thanks, that's exactly how I solved the issue. 👍🏼

<!-- 
FYI, you can also make custom hook inside another hook. In your case, that would be something like this:

```
function onChangeOnce(r, g, b, a) {
    this.fire('start', [r, g, b, a]);
    this.off('change', onChangeOnce);
}

​picker​.​on​(​'change'​,​ ​onChangeOnce)​;
```

Later, you can trigger your initialization function via the `start` hook:

```
picker.on('start', function(r, g, b, a) {
    console.log('Once!');
});
```
-->