
# GeoPlatform Style Guide

This guide is meant to serve as a standard baseline for styling UI elements within GeoPlatform interfaces. It is a living document and a work in progress; meaning it is not complete and will be updated as necessary to reflect current style needs and best practices. It is recommended that GeoPlatform interfaces implement the rules outlined within this guide, but it is acceptable to deviate within a reasonable tolerance as needed.


## Principles

### Consistency
One of the principles embodied by this style guide is that of consistency, with regards to naming conventions, usage patterns, and conventions used across the GeoPlatform.

Consistency builds trust with the user and allows users to quickly perform tasks without having to learn multiple ways of interacting with the same workflow or feature.

- Maintain proper usage of typography to help users orient
- Use margins and padding effectively to prevent clutter and enforce emphasis
- Use colors appropriately to convey importance and emphasis
- Be consistent in usage of iconography across applications and sites (don’t use different icons for the same thing)
 - Be consistent in usage of buttons
 - Don’t overuse primary buttons – limit to one per page
- Use danger, info, warning, and success buttons in their appropriate situations
 - Use the appropriate component or paradigm for similar content or workflows
 - Use the GeoPlatform header
 - Use cards or tiles to display search results and other sets of things
 - Use navigation controls consistently
 - Use consistent pagination controls

### Purpose
User interfaces should allow users to efficiently and effectively perform tasks. Always design and implement UI to help users accomplish these tasks as opposed to just displaying data.

### Clarity
Display information and data clearly and concisely as much as possible.

- Avoid Using Confusing Labels Or Descriptions And Overly-Worded Blocks Of Text
- Utilize Whitespace And Emphasis To Call Attention To Areas.
- Utilize Proper Spacing Between And Within Items To Call Attention To Areas.



### Tips & Guidelines
The following should be followed when extending the GeoPlatform Theme or when creating your own theme:

#### Always Use Classes To Style Standard HTML5 Elements
It is recommended you namespace your CSS classes to prevent conflicts with 3rd party styles as well as to help maintain higher readability when looking at the HTML the classes are applied to. Block-Element-Modifier (BEM) and Atomic CSS are great resources that show differing ways of namespacing CSS more clearly.
```html
<div class="my-app-heading"> Title </div>
<p class="my-app-about"> description </p>
```
```css
div.my-app-heading { color: blue; }
p.my-app-about { font-style: italic; }
```


#### Use Namespacing When Defining Custom Elements (Angular/React)
While it’s also possible to use a class to uniquely identify an element for styling, your CSS will need to override any legacy styles from other sources that also provide styles for the same elements.

```html
<my-app-simple-list>
  <my-app-list-item> item label </my-app-list-item>
  <my-app-list-item> item label </my-app-list-item>
  <my-app-list-item> item label </my-app-list-item>
</my-app-simple-list>
```



## Using In Your Application

```html
<html>
    <head>
        <!--
        your page metadata
        -->
        <link rel="stylesheet" href="platform.css">
    </head>
    <body>
        <!--
        your page content
        -->
        <script src="geoplatform.style.min.js"></script>
    </body>
</html>
```


## Topics
...

1. [Branding](branding.md)
1. [Typography](typography.md)
1. [Iconography](iconography.md)
1. [Colors](color.md)
1. [Sizing & Spacing](sizing.md)
1. [Buttons](button.md)
1. Messages
1. [Articles](article.md)
1. Cards
1. Tiles
1. Search Results




## Other
...
