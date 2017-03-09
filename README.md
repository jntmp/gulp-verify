# gulp-verify [![Build Status](https://travis-ci.org/jntmp/gulp-verify.svg?branch=master)](https://travis-ci.org/jntmp/gulp-verify)

Verify build outputs

## Usage

````js
var gulp = require('gulp')
   ,gv = require('gulp-verify');

const config = {
  assets: [ './scripts/*.js', './css/*.css' ],
  xmlConfig: './build/Web.config',
  xpaths: [
    '/configuration/connectionStrings/@configSource', 
    '/configuration/appSettings/@configSource'
    ]
}

gulp.task('verify', ['minify', 'transformXML'], () => {
  gv.hasMinified(config.assets, '.min');  
  gv.folderHasFiles('./build');
  gv.xmlAttr(config.xmlConfig, config.xpaths, 'Release');
}
````
