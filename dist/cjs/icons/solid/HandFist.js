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
var HandFist_exports = {};
__export(HandFist_exports, {
  default: () => HandFist_default
});
module.exports = __toCommonJS(HandFist_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandFistSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 180.41V32C224 14.328 209.688 0 192 0S160 14.328 160 32V176H200C208.459 176 216.459 177.729 224 180.41ZM128 176V64C128 46.328 113.688 32 96 32S64 46.328 64 64V176.807C66.66 176.508 69.26 176 72 176H128ZM288 192C305.688 192 320 177.672 320 160V64C320 46.328 305.688 32 288 32S256 46.328 256 64V160C256 177.672 270.312 192 288 192ZM384 96C366.312 96 352 110.328 352 128V192C352 209.672 366.312 224 384 224S416 209.672 416 192V128C416 110.328 401.688 96 384 96ZM350.867 246.15C338.438 238.502 328.928 226.84 323.984 212.9C313.727 219.893 301.348 224 288 224C280.359 224 273.135 222.436 266.342 219.98C269.984 228.594 272 238.061 272 248C272 287.766 239.75 320 200 320H128C119.164 320 112 312.836 112 304C112 295.162 119.164 288 128 288H200C222.094 288 240 270.094 240 248S222.094 208 200 208H72C49.906 208 32 225.906 32 248V311.406C32 344.531 48 375.969 74.812 395.531L128 434.201V512H352V426.908C390.301 402.822 416 360.484 416 312V247.121C406.553 252.619 395.717 256 384 256C371.732 256 360.545 252.188 350.867 246.15Z" })
  }
));
HandFistSolid.displayName = "HandFistSolid";
var HandFist_default = HandFistSolid;
