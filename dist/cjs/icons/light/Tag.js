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
var Tag_exports = {};
__export(Tag_exports, {
  default: () => Tag_default
});
module.exports = __toCommonJS(Tag_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TagLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M431.598 225.604L254.402 48.402C245.381 39.381 227.562 32 214.805 32H28C12.537 32 0 44.535 0 60V246.803C0 259.561 7.381 277.381 16.402 286.402L193.592 463.598C204.527 474.533 218.857 480 233.189 480C247.52 480 261.854 474.531 272.787 463.6L431.598 304.801C453.467 282.932 453.469 247.473 431.598 225.604ZM408.971 282.174L250.16 440.971C245.627 445.504 239.6 448 233.191 448C226.779 448 220.752 445.504 216.221 440.971L39.029 263.775C36.008 260.752 32 251.078 32 246.803V64H214.805C219.078 64 228.752 68.006 231.773 71.029L408.971 248.232C413.504 252.764 416 258.791 416 265.201C416 271.613 413.504 277.641 408.971 282.174ZM112 120C98.75 120 88 130.742 88 144S98.75 168 112 168S136 157.258 136 144S125.25 120 112 120Z" })
  }
));
TagLight.displayName = "TagLight";
var Tag_default = TagLight;
