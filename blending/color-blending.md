# 1 10v3 c1424

## How to blend colors in HTML

### DARKEN
* darken
* multiply
* color-burn

### LIGHTEN
* lighten
* screen
* color-dodge
* lighter

### CONTRAST
* overlay
* soft-light
* hard-light

### INVERSION

* difference
* exclusion

### COMPONENT

* hue
* saturation
* color
* luminosity


### From _Javascript, the Definitive Guide_ (p658):

> Browser vendors disagree on the implementation of 5 of the 11 compositing modes: "copy", "source-in", "source-out", "destination-atop", and "destination-in" behave differently in different browsers and cannot be used portably.

So `ctx.globalCompositeOperation` not suported by all browsers; test it on FireFox.

### These are the key commands: [globalCompositeOperation](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)

### [OSD setCompositeOperation](https://openseadragon.github.io/docs/OpenSeadragon.TiledImage.html#setCompositeOperation)


## How to compare between the two images and highlight the difference?

[Issue 1653](https://github.com/openseadragon/openseadragon/issues/1653)

If you have two images in the viewer, you can apply a composite operation to the top one to have it draw differently. For instance:

```
var topImage = viewer.world.getItemAt(1);
topImage.setCompositeOperation('difference');
```

## Color-channels with multiple tiled images in a viewer

### [significant otter](https://github.com/openseadragon/openseadragon/issues/1542)

## How to change blending mode for composite images in layering

[meihuisu] We want to have additive color blending of multiple microscopy channel datas. It looks like we need to be able to set globalCompositeOperation option to **lighter** in blendSketch function.


[avandecreme] To check if I understand correctly:

 - You have 3 grayscale channels that you want to merge.
 - You plan to use the filtering plugin to set each grayscale image to its corresponding color and then set the globalCompositeOperation?

Have you tested it (by hardcoding the parameter)?


[iangilman] Yes, sounds like a quick test would be a good start.

If we do add something like this, seems like it would go in TiledImage, like setOpacity. Maybe setCompositeOperation or something.


[meihuisu] I have tested it with our viewer and it does work as we expected except when opacity is 1 for all channels. The resulting image should still have some color but the 'opaqueness' of the last tiledImage seems to be special-cased into the result.

[iangilman] Yes, with opacity of 1, we don't go through the blendSketch function. The new setCompositeOperation would have to make sure that changes when the composite is something other than straight copy.

[meihuisu] just want to confirm about the special handling of the original logic. When compositeOperation is 'source-over' (the default) and opacity is 1, useSketch is false, otherwise, useSketch is true.

[iangilman] Yes, that would be correct.

[avandecreme] This can be closed :)

## Resources

[HTML Canvas Tricks - Global Composite Operation](https://youtu.be/BmEAJbAihFU)

[franksLaboratory](https://codepen.io/franksLaboratory)


[chriscoyier pen](https://codepen.io/chriscoyier/pen/Kkliq)

```
/* globalCompositeOperation :
      normal | multiply | screen | overlay |
      darken | lighten | color-dodge | color-burn | hard-light |
      soft-light | difference | exclusion | hue | saturation |
      color | luminosity
    */
```

[basics-css-blend-modes](https://css-tricks.com/basics-css-blend-modes/)


[Lamplighter animation](https://codepen.io/sbxcr/full/LsmAf)

[bg fill animation](https://codepen.io/davedehaan/pen/eKozb)

[my canvas blend modes](https://codepen.io/tdiprima1/pen/MWpxPBp)

[My osd blend modes](https://codepen.io/tdiprima1/pen/WNpmgvy)

[the-ultimate-visual-guide-to-understanding-blend-modes](https://www.slrlounge.com/workshop/the-ultimate-visual-guide-to-understanding-blend-modes/)

[https://github.com/Phrogz/context-blender](https://github.com/Phrogz/context-blender)

https://sodocumentation.net/html5-canvas/topic/5547/compositing

https://galactic.ink/journal/2011/04/globalcompositeoperation/
