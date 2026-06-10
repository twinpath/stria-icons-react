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
const HryvniaSignDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 240H141.68L238.391 180.484C240.465 179.209 242.217 177.604 243.961 176H32C14.328 176 0 190.328 0 208S14.328 240 32 240ZM384 208C384 190.328 369.672 176 352 176H332.641C326.617 201.002 312.553 223.709 292.457 240H352C369.672 240 384 225.672 384 208ZM352 272H242.32L145.609 331.516C143.535 332.791 141.785 334.396 140.041 336H352C369.672 336 384 321.672 384 304S369.672 272 352 272ZM0 304C0 321.672 14.328 336 32 336H51.359C57.383 310.998 71.447 288.291 91.543 272H32C14.328 272 0 286.328 0 304Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M202.75 480H164.984C100.484 480 48 427.531 48 363.016C48 322.703 69.328 284.531 103.672 263.391L238.391 180.484C249.422 173.703 256 161.922 256 148.984C256 128.594 239.406 112 219.016 112H181.25C163.016 112 145.172 119.391 132.281 132.281C116.656 147.906 91.344 147.906 75.719 132.281S60.094 91.344 75.719 75.719C103.906 47.531 141.391 32 181.25 32H219.016C283.516 32 336 84.484 336 148.984C336 189.297 314.672 227.469 280.328 248.609L145.609 331.516C134.578 338.297 128 350.078 128 363.016C128 383.406 144.594 400 164.984 400H202.75C221.25 400 238.641 392.812 251.703 379.719C267.328 364.094 292.656 364.094 308.281 379.719C323.906 395.312 323.906 420.656 308.297 436.281C280.125 464.469 242.641 480 202.75 480Z" })
    ]
  }
));
HryvniaSignDuotone.displayName = "HryvniaSignDuotone";
var HryvniaSign_default = HryvniaSignDuotone;
