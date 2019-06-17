
# Articles

The recommended manner in which textual content should be presented to the user within
the GeoPlatform is using `.m-article` elements. Articles may also contain varying
amounts of graphical and interactive content such as images, videos, and maps.

Articles may contain a `.m-article__thumbnail` image but do not require them.
However, each article should have only one thumbnail.

Articles may contain many `.m-article__icon` images. Be mindful that icons are
different from an article’s thumbnail image.

```html
<div class="m-article">
    <div class="m-article__icon"><img src="article_img.png"></div>
    <div class="m-article__heading">Article Heading</div>
    <div class="m-article__timestamp">Jan 1, 2019</div>
    <div class="m-article__desc">
        This is the description of an article that spans an entire paragraph.
    </div>
    <div class="m-article__desc">
        Articles can contain multiple paragraphs as long as the content is related
        to the central theme represented by the article's heading.  Separate
        topics should be separated into multiple `.m-article` elements.
    </div>
    <div class="m-article__actions">
        <button type="button" class="btn btn-light">Action</button>
    </div>
</div>
```

## Groups of Articles
When a group of articles relate to a single, higher-level theme they can be wrapped
by `.m-section-group` elements to visually distinguish them from other groups of
articles.

```html
<div class="m-section-group">
    <div class="m-article">
        <div class="m-article__heading">Article One Heading</div>
        <div class="m-article__desc">
            This article covers a topic that is separate from any articles below it.
        </div>
    </div>
</div>
<div class="m-section-group">
    <div class="m-article">
        <div class="m-article__heading">Article Two Heading</div>
        <div class="m-article__desc">
            This article is separated from the previous article via a distinguishing visual line
            indicating a change of context in the informational content.
        </div>
    </div>
</div>
```
