var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var PlaneUp_exports = {};
__export(PlaneUp_exports, {
  default: () => PlaneUp_default
});
module.exports = __toCommonJS(PlaneUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlaneUpLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 111.998V153.419L16.078 253.495C6.609 258.948 0 270.37 0 281.276V346.79C0 356.931 4.641 366.259 12.75 372.352C20.844 378.446 31.078 380.336 41.203 377.43L176 334.931V376.008L124.797 414.414C116.781 420.429 112 429.992 112 440.007V480.006C112 489.928 116.484 499.115 124.312 505.225C132.125 511.318 142.141 513.443 152.344 510.865L256 480.678L360.234 511.021C369.859 513.443 379.875 511.318 387.688 505.225C395.516 499.115 400 489.928 400 480.006V440.007C400 429.992 395.219 420.429 387.188 414.398L336 376.008V334.931L471.172 377.54C480.922 380.336 491.141 378.446 499.25 372.352C507.359 366.243 512 356.931 512 346.79V281.276C512 269.823 505.812 259.182 496.422 253.839L336 153.419V111.998C336 73.545 304.844 0 256 0S176 73.545 176 111.998ZM304 111.998V171.137L480 281.276L480.406 346.9L304 291.307V392.008L368 440.007L368.594 480.147L256 447.335L144 480.006V439.991L208 392.008V291.307L32 346.79V281.276L208 171.137V111.998C208 80.405 233.75 31.999 256 31.999S304 80.405 304 111.998Z" })
  }
));
PlaneUpLight.displayName = "PlaneUpLight";
var PlaneUp_default = PlaneUpLight;
