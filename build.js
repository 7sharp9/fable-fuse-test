var fable = require("fable-compiler")
var args = process.argv.splice(2);

var fableOptions = {
  sourceMaps: true,
  projFile: "src/test1.fsx",
  watch: args.indexOf("-w") > -1 || args.indexOf("--watch") > -1,
  rollup: {
      format: "cjs",
      dest: "App/js/bundle.js",
      external: path => path.startsWith("FuseJS")
  }
}

fable.compile(fableOptions);