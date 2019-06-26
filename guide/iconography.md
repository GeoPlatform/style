
# Iconography

## GeoPlatform Icons
GeoPlatform provides specific iconography for usage within its applications and sites. Most come from freely-available icon libraries such as Font Awesome.

### Item Icons
The following icons are available to visually represent the objects supported by the GeoPlatform Model.

- `.icon-dataset`
- `.icon-service`
- `.icon-layer`
- `.icon-map`
- `.icon-community`
- `.icon-gallery`
- `.icon-application`
- `.icon-website`
- `.icon-topic`
- `.icon-imageproduct`
- `.icon-organization`
- `.icon-contact`
- `.icon-concept`
- `.icon-conceptscheme`


To include these icons in an app or page, include the `geoplatform-icons-font.css` stylesheet. If bundling this Style repository in your application via NPM, use the following to include.

```html
<link href="node_modules/geoplatform.style/src/icons/geoplatform-icons-font.css" />
```

If manually bundling the icons, use an appropriately modified `link` but be sure to also co-locate the associated font files needed by the CSS.


### Common Icons
GeoPlatform's ng-common library provides a mapping to commonly used icons for various actions, behaviors, and states within GeoPlatform applications and sites.  These mapped icons are accessible within the `gpicons` CSS class namespace, as in `<span class="gpicons icon-name"></span>`.

Note that you still need either Font Awesome (Free) or Glyphicons (Free) stylesheets and font files for the mappings to be resolved.

If bundling ng-common in your application via NPM, use the following to include.

```html
<link href="node_modules/@fortawesome/fontawesome-free/css/all.css" />
<link href="node_modules/geoplatform.common/src/icons/fontawesome.css" />
```

If manually bundling the icons, use an appropriately modified `link` elements but be sure to also co-locate the associated font files needed by the CSS.


## Page Interactions
Icons used to indicate available interactions with the page itself.

### Close
```html
<span class="gpicons times"></span>
```

### Menu
```html
<span class="gpicons bars"></span>
```

### ...
```html

```

## Item Interactions
Icons used to indicate available interactions with content within the page, such as search results.

### Remove
```html
<span class="gpicons trash"></span>
```

### Selection
```html
<span class="gpicons checked"></span>
```

### Options
```html
<span class="gpicons ellipsis"></span>
```

## Content
Icons representing specific types of content within a page.

### User
```html
<span class="gpicons user"></span>
```

### Search
```html
<span class="gpicons search"></span>
```

### Dates
```html
<span class="gpicons calendar"></span>
```

## Informational
Icons used to indicate informational pieces, such as instructions, warnings, and errors.

### General Info / Tips
```html
<span class="gpicons info-circle t-fg--info"></span>
```

### Warnings
```html
<span class="gpicons warning-triangle t-fg--warning"></span>
```

### Error
```html
<span class="gpicons exclamation-circle t-fg--danger"></span>
```
