# React / Webpack / Rails build
 - By default; localized, programmatically BEM'd CSS to avoid namespace collisions
   - Regular old CSS modules, no hacks
   - Easy sharing of global CSS (will localize custom styles based on global styles for you)

## What it does
 - Using Webpack
   - HAML entry -> Generates CSS files from within Webpack based on the imported stylesheet
     - It takes the classes from the stylesheet and generates unique class names with BEM naming convention
     - TODO: Abstract this further to make it even easier
   - React entry -> Does the same thing as HAML, but does not need to generate a css file
     - Styles are localized by default
```
$ npm run build
$ bin/rails server
$ open http://localhost:3000
```
