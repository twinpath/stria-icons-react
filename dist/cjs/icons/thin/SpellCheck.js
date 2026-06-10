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
var SpellCheck_exports = {};
__export(SpellCheck_exports, {
  default: () => SpellCheck_default
});
module.exports = __toCommonJS(SpellCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SpellCheckThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M573.656 282.344C570.531 279.219 565.469 279.219 562.344 282.344L351.766 492.906L229.423 380.281C226.173 377.281 221.126 377.531 218.111 380.75C215.126 384 215.329 389.062 218.579 392.031L346.579 509.875C348.11 511.312 350.063 512 352.001 512C354.048 512 356.095 511.219 357.657 509.656L573.656 293.656C576.781 290.531 576.781 285.469 573.656 282.344ZM223.345 244.812L119.345 4.812C116.814 -1 107.189 -1 104.658 4.812L0.658 244.812C-1.092 248.875 0.768 253.594 4.814 255.344C8.861 257 13.58 255.188 15.346 251.188L47.937 175.973C47.963 175.973 47.976 176 48.002 176H176.001C176.027 176 176.04 175.973 176.066 175.973L208.658 251.188C209.97 254.188 212.907 256 216.001 256C217.064 256 218.142 255.781 219.189 255.344C223.236 253.594 225.095 248.875 223.345 244.812ZM54.859 160L112.002 28.125L169.144 160H54.859ZM272.001 256H376.001C415.766 256 448 223.766 448 184C448 149.645 423.897 121.018 391.706 113.834C406.401 102.107 416.001 84.262 416.001 64C416.001 28.654 387.348 0 352.001 0H272.001C263.165 0 256.001 7.162 256.001 16V240C256.001 248.836 263.165 256 272.001 256ZM272.001 16H352.001C378.467 16 400.001 37.533 400.001 64S378.467 112 352.001 112H272.001V16ZM272.001 128H376.001C406.879 128 432 153.121 432 184S406.879 240 376.001 240H272.001V128Z" })
  }
));
SpellCheckThin.displayName = "SpellCheckThin";
var SpellCheck_default = SpellCheckThin;
