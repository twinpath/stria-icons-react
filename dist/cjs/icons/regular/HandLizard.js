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
var HandLizard_exports = {};
__export(HandLizard_exports, {
  default: () => HandLizard_default
});
module.exports = __toCommonJS(HandLizard_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandLizardRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 331.828V424C512 437.25 501.25 448 488 448C474.75 448 464 437.25 464 424V331.828C464 321.734 460.968 312.031 455.234 303.75L336.608 133.297C327.358 119.953 312.186 112 295.999 112H53.325C50.825 112 48.075 114.453 48.012 116.172C47.716 125.672 51.169 134.641 57.762 141.453C64.356 148.25 73.2 152 82.669 152H244.639C261.733 152 277.905 160.281 287.905 174.141C297.889 188.016 300.639 205.969 295.233 222.187L285.452 251.531C278.17 273.344 257.842 288 234.857 288H138.669C129.2 288 120.357 291.75 113.763 298.547C107.169 305.359 103.716 314.328 104.013 323.828C104.075 325.547 106.825 328 109.325 328H265.78C270.967 328 276.03 329.688 280.186 332.797L358.405 391.469C364.436 396 367.999 403.125 367.999 410.672V424C367.999 437.25 357.249 448 343.999 448S319.999 437.25 319.999 424V422.672L257.779 376H109.325C80.841 376 56.934 353.281 56.044 325.359C55.325 302.75 63.575 281.375 79.278 265.156C94.997 248.938 116.091 240 138.669 240H234.857C237.154 240 239.186 238.531 239.92 236.344L249.701 207.016C250.404 204.875 249.686 203.219 248.967 202.219C248.233 201.203 246.889 200 244.639 200H82.669C60.091 200 38.997 191.062 23.278 174.844C7.575 158.625 -0.675 137.25 0.043 114.641C0.934 86.719 24.84 64 53.325 64H295.999C327.936 64 357.858 79.672 376.046 105.922L494.656 276.375C506.016 292.766 512 311.922 512 331.828Z" })
  }
));
HandLizardRegular.displayName = "HandLizardRegular";
var HandLizard_default = HandLizardRegular;
