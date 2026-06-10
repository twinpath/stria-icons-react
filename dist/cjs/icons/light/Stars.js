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
var Stars_exports = {};
__export(Stars_exports, {
  default: () => Stars_default
});
module.exports = __toCommonJS(Stars_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarsLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M364.216 267.125L259.341 251.75L212.466 156.5C208.591 148.625 200.591 143.75 191.841 143.75C183.091 143.625 175.091 148.625 171.341 156.5L124.466 251.75L19.591 267.125C0.841 269.75 -6.659 293 6.966 306.375L82.841 380.375L64.841 485C63.591 491.75 65.466 498.625 69.841 503.75C74.216 509 80.591 512 87.466 512C91.091 512 94.841 511.125 98.091 509.375L191.966 460L285.716 509.375C288.966 511 292.716 512 296.341 512C303.091 512 309.591 509 313.966 503.75C318.216 498.625 320.216 491.75 319.091 485.125L301.091 380.5L377.091 306.5C390.591 293 383.091 269.875 364.216 267.125ZM266.716 369.25L284.341 472.375L191.841 423.625L99.341 472.375L116.966 369.25L42.216 296.125L145.591 281.125L191.966 187.25L238.091 281.125L341.591 296.125L266.716 369.25ZM255.999 112H319.999V176C319.999 184.844 327.156 192 335.999 192S351.999 184.844 351.999 176V112H415.999C424.843 112 431.999 104.844 431.999 96S424.843 80 415.999 80H351.999V16C351.999 7.156 344.843 0 335.999 0S319.999 7.156 319.999 16V80H255.999C247.156 80 239.999 87.156 239.999 96S247.156 112 255.999 112ZM495.999 208H463.999V176C463.999 167.156 456.843 160 447.999 160S431.999 167.156 431.999 176V208H399.999C391.156 208 383.999 215.156 383.999 224S391.156 240 399.999 240H431.999V272C431.999 280.844 439.156 288 447.999 288S463.999 280.844 463.999 272V240H495.999C504.843 240 511.999 232.844 511.999 224S504.843 208 495.999 208Z" })
  }
));
StarsLight.displayName = "StarsLight";
var Stars_default = StarsLight;
