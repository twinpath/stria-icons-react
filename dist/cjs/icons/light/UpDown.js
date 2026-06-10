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
var UpDown_exports = {};
__export(UpDown_exports, {
  default: () => UpDown_default
});
module.exports = __toCommonJS(UpDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UpDownLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M232.001 352H143.999L144.003 160H232.003C241.55 160 250.19 154.344 254.003 145.594S256.081 126.656 249.597 119.672L145.597 7.672C140.847 2.555 134.423 0 128.001 0S115.157 2.555 110.407 7.672L6.407 119.672C-0.077 126.656 -1.812 136.844 1.999 145.594C5.813 154.344 14.454 160 24.001 160H112.003L111.999 352H23.999C14.452 352 5.811 357.656 1.999 366.406S-0.079 385.344 6.405 392.328L110.405 504.328C115.155 509.445 121.579 512 128.001 512S140.845 509.445 145.595 504.328L249.595 392.328C256.079 385.344 257.813 375.156 254.003 366.406C250.188 357.656 241.548 352 232.001 352ZM42.343 128L128.001 35.75L213.661 128H42.343ZM128.001 476.25L42.341 384H213.659L128.001 476.25Z" })
  }
));
UpDownLight.displayName = "UpDownLight";
var UpDown_default = UpDownLight;
