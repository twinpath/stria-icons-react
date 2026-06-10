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
var BoxOpen_exports = {};
__export(BoxOpen_exports, {
  default: () => BoxOpen_default
});
module.exports = __toCommonJS(BoxOpen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoxOpenLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M559.999 223.988C551.155 223.988 543.999 231.145 543.999 239.988V377.652C543.999 384.887 539.108 391.246 532.124 393.121L335.999 445.406V223.988C335.999 215.145 328.843 207.988 319.999 207.988S303.999 215.145 303.999 223.988V445.418L107.89 393.121C100.89 391.246 95.999 384.887 95.999 377.652V239.988C95.999 231.145 88.843 223.988 79.999 223.988S63.999 231.145 63.999 239.988V377.652C63.999 399.34 78.64 418.42 99.624 424.029L299.405 477.312C306.14 479.094 313.061 480 319.999 480S333.858 479.094 340.608 477.297L540.39 424.029C561.358 418.42 575.999 399.34 575.999 377.652V239.988C575.999 231.145 568.843 223.988 559.999 223.988ZM638.704 153.695L590.704 41.684C587.891 35.137 581.173 31.307 574.016 32.104L319.999 63.859L65.983 32.104C58.827 31.307 52.108 35.137 49.296 41.684L1.296 153.695C-0.579 158.039 -0.407 163.01 1.733 167.229C3.874 171.463 7.78 174.525 12.405 175.588L220.405 223.594C221.593 223.859 222.811 224 223.999 224C228.968 224 233.733 221.688 236.796 217.594L319.999 106.643L403.202 217.594C406.265 221.688 411.03 224 415.999 224C417.186 224 418.405 223.859 419.593 223.594L627.595 175.588C632.22 174.525 636.126 171.463 638.266 167.229C640.407 163.01 640.579 158.039 638.704 153.695ZM217.452 190.059L38.249 148.711L73.968 65.357L290.655 92.439L217.452 190.059ZM422.546 190.059L349.343 92.439L566.032 65.357L601.751 148.711L422.546 190.059Z" })
  }
));
BoxOpenLight.displayName = "BoxOpenLight";
var BoxOpen_default = BoxOpenLight;
