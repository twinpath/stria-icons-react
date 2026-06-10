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
var WifiSlash_exports = {};
__export(WifiSlash_exports, {
  default: () => WifiSlash_default
});
module.exports = __toCommonJS(WifiSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WifiSlashRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M119.377 286.688C109.814 295.906 109.502 311.094 118.689 320.625C127.908 330.25 143.095 330.469 152.627 321.312C173.959 300.789 199.054 284.848 226.556 273.805L184.062 240.5C160.47 252.703 138.664 268.133 119.377 286.688ZM7.472 150.625C-2.153 159.75 -2.528 174.937 6.629 184.531C15.691 194.125 30.941 194.531 40.535 185.375C51.656 174.801 63.802 165.215 76.386 156.102L37.089 125.305C26.789 133.309 16.851 141.703 7.472 150.625ZM320 368C289.072 368 264 393.07 264 424S289.072 480 320 480S376 454.93 376 424S350.927 368 320 368ZM363.8 259.832C410.902 267.93 453.769 288.98 487.373 321.312C492.029 325.781 497.998 328 503.998 328C510.279 328 516.591 325.531 521.31 320.625C530.498 311.094 530.185 295.906 520.623 286.687C467.873 235.938 396.625 208 320 208C313.06 208 306.345 208.98 299.505 209.438L169.035 107.18C216.015 89.656 267.254 80 320 80C427.185 80 529.029 118.406 599.464 185.375C604.089 189.812 610.058 192 615.996 192C622.339 192 628.683 189.5 633.371 184.531C642.527 174.938 642.152 159.75 632.527 150.625C553.279 75.219 439.373 32 320 32C251.437 32 184.894 46.586 125.513 73.07L38.812 5.113C28.343 -3.059 13.312 -1.246 5.109 9.191C-3.063 19.629 -1.235 34.723 9.187 42.895L601.187 506.891C605.593 510.328 610.796 512 615.984 512C623.109 512 630.156 508.844 634.89 502.812C643.062 492.375 641.234 477.281 630.812 469.109L363.8 259.832Z" })
  }
));
WifiSlashRegular.displayName = "WifiSlashRegular";
var WifiSlash_default = WifiSlashRegular;
