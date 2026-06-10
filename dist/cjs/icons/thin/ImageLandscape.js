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
var ImageLandscape_exports = {};
__export(ImageLandscape_exports, {
  default: () => ImageLandscape_default
});
module.exports = __toCommonJS(ImageLandscape_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ImageLandscapeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528 64H48C21.49 64 0 85.492 0 112V400C0 426.508 21.49 448 48 448H528C554.51 448 576 426.508 576 400V112C576 85.492 554.51 64 528 64ZM68.004 432L185.609 275.203C188.641 271.109 195.359 271.109 198.391 275.203L237.994 328.004L159.992 432H68.004ZM180 432L345.609 211.203C348.641 207.109 355.359 207.109 358.391 211.203L524 432H180ZM560 400C560 412.75 552.373 423.594 541.555 428.73L371.203 201.609C362.078 189.391 341.922 189.391 332.797 201.609L247.998 314.664L211.203 265.609C202.078 253.391 181.922 253.391 172.797 265.609L47.996 432C30.357 432 16 417.641 16 400V112C16 94.355 30.355 80 48 80H528C545.645 80 560 94.355 560 112V400ZM128 144C101.531 144 80 165.531 80 192S101.531 240 128 240S176 218.469 176 192S154.469 144 128 144ZM128 224C110.359 224 96 209.641 96 192S110.359 160 128 160S160 174.359 160 192S145.641 224 128 224Z" })
  }
));
ImageLandscapeThin.displayName = "ImageLandscapeThin";
var ImageLandscape_default = ImageLandscapeThin;
