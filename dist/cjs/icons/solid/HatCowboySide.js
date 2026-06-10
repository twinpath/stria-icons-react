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
var HatCowboySide_exports = {};
__export(HatCowboySide_exports, {
  default: () => HatCowboySide_default
});
module.exports = __toCommonJS(HatCowboySide_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HatCowboySideSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M260.776 260.023C232.151 237.148 198.776 225.023 164.401 225.023C87.026 225.023 21.526 287.773 1.401 381.023C-2.099 397.648 1.026 414.898 10.026 428.398C18.776 441.523 31.901 449.023 45.901 449.023H592.026C488.776 449.023 437.026 411.898 358.776 344.523L260.776 260.023ZM495.526 241.773L468.401 85.273C465.526 68.023 455.651 52.773 441.276 43.023C426.901 33.273 409.026 29.773 392.026 33.398L200.901 74.023C173.776 79.773 153.526 102.273 150.526 129.773L143.651 195.023C150.526 194.148 157.276 193.023 164.401 193.023C206.276 193.023 246.401 207.523 281.776 235.898L379.776 320.273C450.776 381.523 494.901 417.023 592.026 417.023C618.526 417.023 640.026 395.523 640.026 369.023C640.026 343.648 610.401 249.648 495.526 241.773Z" })
  }
));
HatCowboySideSolid.displayName = "HatCowboySideSolid";
var HatCowboySide_default = HatCowboySideSolid;
