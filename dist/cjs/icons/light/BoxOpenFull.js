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
var BoxOpenFull_exports = {};
__export(BoxOpenFull_exports, {
  default: () => BoxOpenFull_default
});
module.exports = __toCommonJS(BoxOpenFull_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoxOpenFullLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M559.999 351.988C551.155 351.988 543.999 359.145 543.999 367.988V409.652C543.999 416.887 539.108 423.246 532.124 425.121L335.999 477.406V351.988C335.999 343.145 328.843 335.988 319.999 335.988S303.999 343.145 303.999 351.988V477.418L107.89 425.121C100.89 423.246 95.999 416.887 95.999 409.652V367.988C95.999 359.145 88.843 351.988 79.999 351.988S63.999 359.145 63.999 367.988V409.652C63.999 431.34 78.64 450.42 99.624 456.029L299.405 509.313C306.14 511.094 313.061 512 319.999 512S333.858 511.094 340.608 509.297L540.39 456.029C561.358 450.42 575.999 431.34 575.999 409.652V367.988C575.999 359.145 568.843 351.988 559.999 351.988ZM638.704 281.695L590.704 169.684C587.891 163.137 581.173 159.307 574.016 160.104L319.999 191.859L65.983 160.104C58.827 159.307 52.108 163.137 49.296 169.684L1.296 281.695C-0.579 286.039 -0.407 291.01 1.733 295.229C3.874 299.463 7.78 302.525 12.405 303.588L220.405 351.594C221.593 351.859 222.811 352 223.999 352C228.968 352 233.733 349.688 236.796 345.594L319.999 234.643L403.202 345.594C406.265 349.688 411.03 352 415.999 352C417.186 352 418.405 351.859 419.593 351.594L627.595 303.588C632.22 302.525 636.126 299.463 638.266 295.229C640.407 291.01 640.579 286.039 638.704 281.695ZM217.452 318.059L38.249 276.711L73.968 193.357L290.655 220.439L217.452 318.059ZM422.546 318.059L349.343 220.439L566.032 193.357L601.751 276.711L422.546 318.059ZM144.001 144C152.845 144 160.001 136.844 160.001 128C160.001 75.062 203.063 32 256.001 32S352.001 75.062 352.001 128C352.001 136.844 359.157 144 368.001 144S384.001 136.844 384.001 128C384.001 57.422 326.595 0 256.001 0S128.001 57.422 128.001 128C128.001 136.844 135.157 144 144.001 144ZM442.938 143.172C444.626 143.734 446.313 144 448.001 144C454.688 144 460.938 139.766 463.188 133.062L495.188 37.062C497.97 28.672 493.438 19.609 485.063 16.828C476.751 14.109 467.657 18.547 464.813 26.938L432.813 122.938C430.032 131.328 434.563 140.391 442.938 143.172Z" })
  }
));
BoxOpenFullLight.displayName = "BoxOpenFullLight";
var BoxOpenFull_default = BoxOpenFullLight;
