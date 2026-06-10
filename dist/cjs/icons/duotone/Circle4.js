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
var Circle4_exports = {};
__export(Circle4_exports, {
  default: () => Circle4_default
});
module.exports = __toCommonJS(Circle4_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Circle4Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM328 320H320V360C320 373.25 309.25 384 296 384S272 373.25 272 360V320H170C161.922 320 154.391 315.938 149.953 309.188S144.766 293.938 147.953 286.5L209.953 142.5C215.188 130.344 229.266 124.656 241.484 129.969C253.672 135.187 259.281 149.312 254.047 161.5L206.469 272H272V221.344C272 208.094 282.75 197.344 296 197.344S320 208.094 320 221.344V272H328C341.25 272 352 282.75 352 296S341.25 320 328 320Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M351.999 296C351.999 309.25 341.249 320 327.999 320H319.999V360C319.999 373.25 309.249 384 295.999 384S271.999 373.25 271.999 360V320H169.999C161.921 320 154.39 315.938 149.952 309.188S144.765 293.938 147.952 286.5L209.952 142.5C215.187 130.344 229.265 124.656 241.483 129.969C253.671 135.187 259.28 149.312 254.046 161.5L206.468 272H271.999V221.344C271.999 208.094 282.749 197.344 295.999 197.344S319.999 208.094 319.999 221.344V272H327.999C341.249 272 351.999 282.75 351.999 296Z" })
    ]
  }
));
Circle4Duotone.displayName = "Circle4Duotone";
var Circle4_default = Circle4Duotone;
