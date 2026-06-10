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
var Lips_exports = {};
__export(Lips_exports, {
  default: () => Lips_default
});
module.exports = __toCommonJS(Lips_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LipsRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M568.015 201.664C521.552 124.598 419.626 64 375.974 64C375.974 64 346.613 64 287.999 109C229.386 64 200.023 64 200.023 64C156.372 64 54.445 124.598 7.984 201.664C-1.354 217.074 -2.479 235.859 4.495 252.398C29.697 312.25 105.859 448 251.324 448H324.673C470.138 448 546.302 312.25 571.503 252.398C578.478 235.859 577.353 217.074 568.015 201.664ZM324.673 400H251.324C128.286 400 65.152 272.768 48.722 233.748C47.665 231.238 47.779 228.611 49.089 226.447C86.925 163.691 171.054 115.061 197.761 112.139C203.224 113.529 223.667 120.125 258.769 147.074L287.999 169.516L317.23 147.074C352.329 120.127 372.773 113.529 378.236 112.139C404.945 115.061 489.074 163.693 526.964 226.539C528.22 228.611 528.333 231.238 527.265 233.771C510.847 272.768 447.71 400 324.673 400ZM333.468 215.766C319.312 219.812 303.749 222 287.999 222S256.687 219.812 242.531 215.766L215.999 208C143.999 208 95.999 236 95.999 236S160.031 320 287.999 320S479.999 236 479.999 236S431.999 208 359.999 208L333.468 215.766Z" })
  }
));
LipsRegular.displayName = "LipsRegular";
var Lips_default = LipsRegular;
