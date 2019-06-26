## GeoPlatform Style Repository

This repo contains platform-wide style artifacts.

### Requirements

This plugin installs locally the following dependencies in order to compile:

+ Bootstrap 4.x - needed for runtime usage
+ Gulp 4.x - needed for building
+ LessCSS 3.9.0 - needed for parsing `.less` stylesheets

### Artifacts

+ `dist/css/platform.css` - the compiled platform style sheet
+ `dist/css/platform.min.css` - the minified platform style sheet
+ `dist/css/platform.less` - the compiled platform style sheet in Less
+ `dist/css/portal.css` - the compiled style sheet usable by GeoPlatform portal interfaces
+ `dist/css/portal.min.css` - the minified style sheet usable by GeoPlatform portal interfaces
+ `dist/js/geoplatform.style.js` - the compiled javascript helpers for the style sheet
+ `dist/js/geoplatform.style.min.js` - the compiled, minified javascript helpers for the style sheet
+ `src/icons` - stylesheets for platform-specific icons
+ `src/font` - font files for platform-specific icons
+ `guide` - markdown documentation of how to best comply to GeoPlatform styling requirements


### Contributing
To contribute to this repository's source code, please follow standard GitHub procedures as well as
the steps detailed below.  

#### Build Locally
Run `gulp` to compile the stylesheets and Javascript artifacts mentioned above. This includes
running JS Hint on the source to catch any errors. If issues are found, you must resolve them
before continuing.

#### Pushing Changes to GitHub

**Note:** Do not proceed with this step until you have built locally and verified that no errors were encountered.

If you are a contributor with editing access, follow these steps:

1. Run `git checkout -b <branchName>` to ensure you are committing to a new branch (recommended that the branch is made off of "develop")
1. Make changes and build locally (as described previously)
1. Run `git status` and make sure any new files are being included in the commit
1. Run `git commit -a -m "<YOUR COMMIT MESSAGE>"`
1. Run `git push origin <branchName` to push your committed changes

Your changes will be reviewed and merged if appropriate soon after.

If you are a contributor with only read access, follow these steps:

1. Create a pull request from the `develop` branch
1. Make changes and build locally as described previously
1. Run `git status` and make sure any new files are being included in the commit
1. Submit the pull request

Your changes will be reviewed and merged if appropriate soon after.


### Using in an Application/Website

Resources in this library can be pulled directly from the front end via a CDN.

Example:
```html
<link href="http://dyk46gk69472z.cloudfront.net/geoplatform.style/_VERSION_/css/platform.min.css"></link>
<script src="http://dyk46gk69472z.cloudfront.net/geoplatform.style/_VERSION_/js/geoplatform.style.js"></script>
<script src="http://dyk46gk69472z.cloudfront.net/geoplatform.style/_VERSION_/src/font/geoplatform-icons-font.ttf"></script>
<script src="http://dyk46gk69472z.cloudfront.net/geoplatform.style/_VERSION_/src/icons/geoplatform-icons-font.css"></script>
```


#### As an NPM Dependency

The recommended way to use this project in another project is by adding it as an NPM dependency. However, as this
library has not yet been published to NPM, it must be added as follows:

1. Add `"geoplatform.style": "GeoPlatform/style#<version number>"` as a new dependency or devDependency of your application
1. Run `npm install`

Note: _version number_ should be that of the current release version of this project.  It is advised to __never__ reference any non-release tag or branch, such as "develop" or "master", when adding this project as a dependency in another.
