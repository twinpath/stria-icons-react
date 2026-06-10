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
var HouseCrack_exports = {};
__export(HouseCrack_exports, {
  default: () => HouseCrack_default
});
module.exports = __toCommonJS(HouseCrack_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HouseCrackThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M575.997 255.989C575.997 253.787 575.092 251.594 573.312 250.016L512.001 195.711V48C512.001 39.163 504.838 32 496.001 32H400.001C391.164 32 384.001 39.164 384.001 48V82.336L293.311 2.015C291.795 0.673 289.896 0.001 287.998 0.001C286.1 0.001 284.202 0.673 282.686 2.016L2.685 250.016C0.905 251.594 0 253.787 0 255.989C0 260.311 3.479 263.987 7.969 263.987C9.865 263.987 11.773 263.319 13.31 261.984L63.998 217.812V448C63.998 483.346 92.651 512 127.997 512H447.999C483.345 512 511.999 483.346 511.999 448V217.812L562.687 261.984C564.218 263.328 566.093 264 567.999 264C572.458 264 575.997 260.361 575.997 255.989ZM304.098 371.521C304.098 370.04 303.687 368.576 302.875 367.281L256.938 293.656L370.126 387.406L275.75 443.594C275.006 444.038 271.846 446.143 271.846 450.479C271.846 452.185 272.386 453.864 273.438 455.25L303.791 496H234.035L202.594 436.5L300.188 378.406C302.281 377.165 304.098 374.714 304.098 371.521ZM495.999 448C495.999 474.51 474.509 496 447.999 496H323.727L291.563 452.812L388.063 395.344C390.395 393.932 391.966 391.42 391.966 388.439C391.966 386.079 390.894 383.829 389.063 382.312L229.094 249.844C227.617 248.613 225.807 247.996 223.991 247.996C217.812 247.996 215.996 253.667 215.996 256.001C215.996 257.461 216.394 258.933 217.219 260.25L284.969 368.844L187.893 426.646C185.383 428.14 183.976 430.8 183.976 433.541C183.976 434.806 184.276 436.089 184.906 437.281L215.944 496H127.998C101.488 496 79.998 474.51 79.998 448V203.594L287.998 18.703L495.999 203.594V448ZM496.001 181.539L400.001 96.508V48H496.001V181.539Z " })
  }
));
HouseCrackThin.displayName = "HouseCrackThin";
var HouseCrack_default = HouseCrackThin;
