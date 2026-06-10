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
var CircleHalf_exports = {};
__export(CircleHalf_exports, {
  default: () => CircleHalf_default
});
module.exports = __toCommonJS(CircleHalf_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleHalfThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224.303 18.383C222.766 18.383 221.211 18.498 219.639 18.736C104.346 36.26 16 135.812 16 256S104.346 475.74 219.639 493.262C221.209 493.502 222.768 493.617 224.303 493.617C241.504 493.617 256 479.143 256 461.35V50.648C256 32.857 241.502 18.383 224.303 18.383ZM240 461.35C240 470.168 232.812 477.617 224.303 477.617C223.559 477.617 222.803 477.559 222.043 477.443C113.701 460.979 32 365.777 32 256C32 146.221 113.701 51.021 222.043 34.555C222.805 34.439 223.559 34.383 224.303 34.383C232.812 34.383 240 41.832 240 50.648V461.35Z" })
  }
));
CircleHalfThin.displayName = "CircleHalfThin";
var CircleHalf_default = CircleHalfThin;
