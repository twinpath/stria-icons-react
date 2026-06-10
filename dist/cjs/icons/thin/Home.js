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
var Home_exports = {};
__export(Home_exports, {
  default: () => Home_default
});
module.exports = __toCommonJS(Home_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HomeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 255.989C576 253.787 575.095 251.594 573.315 250.016L293.313 2.016C291.796 0.673 289.898 0.001 288 0.001C286.102 0.001 284.204 0.673 282.687 2.016L2.685 250.016C0.905 251.594 0 253.787 0 255.989C0 260.311 3.479 263.987 7.969 263.987C9.865 263.987 11.773 263.319 13.31 261.984L63.998 217.816V480C63.998 497.673 78.325 512 95.998 512H191.999C209.672 512 223.999 497.673 223.999 480V336H352.001V480C352.001 497.673 366.328 512 384.001 512H480.002C497.675 512 512.002 497.673 512.002 480V217.816L562.69 261.984C564.221 263.328 566.096 264 568.002 264C572.461 264 576 260.361 576 255.989ZM480.002 496H384.001C375.164 496 368.001 488.837 368.001 480V336C368.001 327.163 360.837 320 352.001 320H223.999C215.163 320 207.999 327.163 207.999 336V480C207.999 488.837 200.836 496 191.999 496H95.998C87.162 496 79.998 488.837 79.998 480V203.594L288 18.703L496.002 203.594V480C496.002 488.837 488.838 496 480.002 496Z " })
  }
));
HomeThin.displayName = "HomeThin";
var Home_default = HomeThin;
