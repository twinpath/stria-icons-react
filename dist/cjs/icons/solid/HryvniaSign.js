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
var HryvniaSign_exports = {};
__export(HryvniaSign_exports, {
  default: () => HryvniaSign_default
});
module.exports = __toCommonJS(HryvniaSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HryvniaSignSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 304C384 321.672 369.672 336 352 336H140.041C132.504 342.922 128 352.51 128 363.016C128 383.406 144.594 400 164.984 400H202.75C220.984 400 238.828 392.609 251.719 379.719C267.344 364.094 292.656 364.094 308.281 379.719S323.906 420.656 308.281 436.281C280.094 464.469 242.609 480 202.75 480H164.984C100.484 480 48 427.516 48 363.016C48 353.828 49.242 344.789 51.359 336H32C14.328 336 0 321.672 0 304S14.328 272 32 272H91.543C95.379 268.891 99.422 266.006 103.672 263.391L141.68 240H32C14.328 240 0 225.672 0 208S14.328 176 32 176H243.961C251.498 169.078 256 159.49 256 148.984C256 128.594 239.406 112 219.016 112H181.25C163.016 112 145.172 119.391 132.281 132.281C116.656 147.906 91.344 147.906 75.719 132.281S60.094 91.344 75.719 75.719C103.906 47.531 141.391 32 181.25 32H219.016C283.516 32 336 84.484 336 148.984C336 158.172 334.758 167.211 332.641 176H352C369.672 176 384 190.328 384 208S369.672 240 352 240H292.457C288.621 243.109 284.578 245.994 280.328 248.609L242.32 272H352C369.672 272 384 286.328 384 304Z" })
  }
));
HryvniaSignSolid.displayName = "HryvniaSignSolid";
var HryvniaSign_default = HryvniaSignSolid;
