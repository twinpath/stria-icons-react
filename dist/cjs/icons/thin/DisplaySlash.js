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
var DisplaySlash_exports = {};
__export(DisplaySlash_exports, {
  default: () => DisplaySlash_default
});
module.exports = __toCommonJS(DisplaySlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DisplaySlashThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M543.999 342.074V64H194.159L214.288 80H527.999V329.355L543.999 342.074ZM559.999 16C577.644 16 591.999 30.355 591.999 48V368C591.999 371.734 591.048 375.197 589.867 378.531L602.988 388.961C606.097 382.604 607.999 375.553 607.999 368V48C607.999 21.5 586.499 0 559.999 0H113.642L133.771 16H559.999ZM471.999 496H405.784L379.117 416H405.57L385.441 400H79.999C62.355 400 47.999 385.645 47.999 368V131.775L31.999 119.057V368C31.999 394.5 53.499 416 79.999 416H260.909L234.242 496H167.999C163.593 496 159.999 499.578 159.999 504S163.593 512 167.999 512H471.999C476.406 512 479.999 508.422 479.999 504S476.406 496 471.999 496ZM251.117 496L277.784 416H362.242L388.909 496H251.117ZM95.999 169.93V352H325.054L304.925 336H111.999V182.646L95.999 169.93ZM636.98 497.734L12.988 1.73C11.525 0.566 9.771 0 8.025 0C5.673 0 3.335 1.027 1.738 3.012C-1.012 6.48 -0.434 11.512 3.019 14.262L627.011 510.266C628.495 511.438 630.245 512 631.995 512C634.339 512 636.683 510.969 638.261 508.984C641.011 505.516 640.433 500.484 636.98 497.734Z" })
  }
));
DisplaySlashThin.displayName = "DisplaySlashThin";
var DisplaySlash_default = DisplaySlashThin;
