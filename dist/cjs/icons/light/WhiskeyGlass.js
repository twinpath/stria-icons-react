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
var WhiskeyGlass_exports = {};
__export(WhiskeyGlass_exports, {
  default: () => WhiskeyGlass_default
});
module.exports = __toCommonJS(WhiskeyGlass_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WhiskeyGlassLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M447.955 64H64.045C44.548 64 29.676 81.255 32.301 100.51L88.29 393.11C92.789 424.618 119.784 448 151.777 448H360.723C392.466 448 419.586 424.618 424.085 393.11L479.699 100.51C482.324 81.255 467.451 64 447.955 64ZM392.341 388.608C390.217 404.363 376.47 416.116 360.723 416.116H151.777C135.905 416.116 122.283 404.363 120.033 388.233L99.288 288.071H412.962L392.341 388.608ZM417.961 256.063H94.289L64.045 96.009H447.955L417.961 256.063Z" })
  }
));
WhiskeyGlassLight.displayName = "WhiskeyGlassLight";
var WhiskeyGlass_default = WhiskeyGlassLight;
