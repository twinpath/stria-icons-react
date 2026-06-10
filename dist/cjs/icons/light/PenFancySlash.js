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
var PenFancySlash_exports = {};
__export(PenFancySlash_exports, {
  default: () => PenFancySlash_default
});
module.exports = __toCommonJS(PenFancySlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenFancySlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M276.862 417.75C276.737 418.375 131.495 467.125 131.495 467.125L190.757 407.75C191.189 407.773 191.554 408 191.991 408C205.245 408 215.991 397.254 215.991 384C215.991 370.744 205.245 360 191.991 360C178.739 360 167.993 370.744 167.993 384C167.993 384.373 168.189 384.686 168.206 385.055L108.872 444.5C108.872 444.5 157.618 299.125 158.243 299L237.644 272.531L207.564 248.781L148.107 268.629C137.962 272.016 130.003 279.979 126.62 290.125L65.995 460.803C61.337 474.779 64.976 490.189 75.392 500.605C85.812 511.025 101.222 514.662 115.2 510L285.737 449.375C295.888 445.988 303.853 438.021 307.237 427.869L333.728 348.395L306.942 327.244L276.862 417.75ZM449.103 49.875C459.103 38.5 473.601 32 488.851 32C517.974 32 544.722 57.5 543.722 88.625C543.347 103.375 536.972 116.875 525.599 127L401.851 239.076L427.325 259.188L547.097 150.75C608.468 96.375 564.095 0 488.851 0C465.351 0 441.978 9.625 425.105 28.75L304.374 162.113L329.532 181.977L449.103 49.875ZM633.921 483.436L25.921 3.42C18.984 -2.033 8.921 -0.83 3.437 6.061C-2.032 12.998 -0.845 23.061 6.077 28.545L614.077 508.562C617.015 510.875 620.515 512 623.984 512C628.718 512 633.405 509.906 636.562 505.922C642.03 498.984 640.843 488.92 633.921 483.436Z" })
  }
));
PenFancySlashLight.displayName = "PenFancySlashLight";
var PenFancySlash_default = PenFancySlashLight;
