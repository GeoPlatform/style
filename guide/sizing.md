
# Sizing

Available sizing options can be applied to margins, padding, and font-sizes.

## Syntax

`.u-[type][-dir]--[size]`

Sizing classes are prefixed as utility CSS (`.u-`).
- Margins: `.u-mg[-dir]--[size]`
- Padding: `.u-pd[-dir]--[size]`
- Font Size: `.u-text--[size]`

Margins and Padding allow for sizing on all 4 edges of an element or specifically on each edge individually as follows:

- `.u-[mg|pd]--md` : apply medium (1em) to all sides
- `.u-[mg|pd]-top--md` : apply medium to only top side
- `.u-[mg|pd]-bottom--md` : apply medium to only bottom side
- `.u-[mg|pd]-left--md` : apply medium to only left side
- `.u-[mg|pd]-right--md` : apply medium to only right side



## Examples
```html
<div class="u-mg--xxs"></div>

<div class="u-mg--xs u-pd--xs"></div>

<div class="u-mg-top--sm u-pd-bottom--sm"></div>

<div class="u-text--sm"></div>

<div class="u-text--huge"></div>
```
