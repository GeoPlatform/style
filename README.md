## GeoPlatform Style Repository

This repo contains platform-wide style artifacts.  

### Overview

**Note:** Requires Twitter Bootstrap 3.x (and jQuery).


+ `dist/css/platform.css` - the compiled platform style sheet
+ `dist/js/geoplatform.style.js` - the compiled javascript helpers for the style sheet
+ `dist/js/geoplatform.style.min.js` - the compiled, minified javascript helpers for the style sheet
+ `static/img` - static image files for use with the style sheet
+ `static/examples` - examples of various style components


### Compiling
Run `grunt` or `grunt default` to compile the source LESS stylesheets.

#### Committing
**Note:** Be sure to run `grunt` *before* committing changes to ensure the pre-compiled `dist/css/platform.css` and `dist/js/geoplatform.style.js` files are up to date with your changes.

1. Make changes to LESS files under src/less
2. Run `grunt`
3. Run `git status` and make sure to include any new source files that should be committed using `git add FILENAME`
4. Run `git commit -a -m "<YOUR COMMIT MESSAGE>"
5. Run `git pull origin master` to fetch remote changes and merge conflicts (be sure to run `grunt` again after resolving conflicts but before merging conflict resolutions)
6. Run `git push origin master` to push your committed changes


#### As a Bower Dependency

The recommended way to use this project in another project is by adding it as a Bower dependency. Since this project is a private repository, this requires a few initial steps to make sure Bower can access the repository:

1. Create a personal access token in the GitHub account that you use to access GeoPlatform projects.

2. Create a `.netrc` file in your user's home directory which contains your GitHub username and the token you created in step 1. 

```
#.netrc file contents
machine github.com
  login GitHub_username
  password token_value
```

3. Update your `.gitconfig` to use HTTPS instead of git:// when accessing repositories. Run the following command from your prompt.

`git config --global url."https://github".insteadOf git://github`

4. Update the `bower.json` file in your downstream project to reference the style project.

```json
"dependencies" : {
    
    /* other dependencies...*/

    "gp.style": "GeoPlatform/style"
},
```

Note: you can reference specific versions of the style project using tags, but the style project doesn't have any tags just yet.  When it does, reference like so:

```json
"dependencies" : {
    
    /* other dependencies...*/
    
    "gp.style": "GeoPlatform/style#-TAGNAME"
}
```


5. Ensure Bower is configured to run install before NPM by adding it as a preinstall step inside `package.json` in your project's home dir:

```json
"scripts": {
    
    "preinstall": "bower install",

    /* other scripts */        
}
```

6. Run `npm install` (which will invoke `bower install`).  Verify the style project was checked out into the `bower_components/gp.style` directory (or wherever you configured it).


**Note:** The style project will be checked out into the configured bower component directory whenever you run `npm install` (if bower is set to install via npm) or `bower install`, but you may need to update the dependency if this project has been updated since you installed it. Do this by running `bower update gp.style`.



#### As a Manual Dependency

**Note:** The recommended approach is to use Bower (see above).  

Clone the project and copy the `dist/css/platform.css` into your project.  It's not advisable to copy the LESS src files into your project as there are many of them and doing so requires a significant amount of effort to keep the copied files up to date with the repository.