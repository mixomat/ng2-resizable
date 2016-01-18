# Angular2 Resizable
This is an **work-in-progress** implementation of an Angular 2 component for resizable containers. 


## Setup

* Run `npm install ng2-resizable --save` in your project directory.
* See `examples/webpack` for an example how to bundle this library with webpack.

### Custom Styles (optional)

You can create your custom styles for the grabber. The `Resizable` component adds the CSS class `resizable` 
and the classes `left, right, top, bottom` for each given direction.

## Build

To build, first run  `npm install` to get all the dev dependencies. Then you can use the `npm run build` script to
compile the TypeScript files, and generate the dist output.

## TODO

* Autoprefixed CSS.
* Full Karma test suite.

## License

MIT