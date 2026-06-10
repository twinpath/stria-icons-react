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
var BookOpenCover_exports = {};
__export(BookOpenCover_exports, {
  default: () => BookOpenCover_default
});
module.exports = __toCommonJS(BookOpenCover_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookOpenCoverLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M89.059 398.07L306.117 446.471C310.689 447.49 315.344 448 320 448S329.312 447.49 333.883 446.471L550.941 398.07C565.582 394.805 576 381.773 576 366.725V39.557C576 17.408 558.01 0.027 536.693 0.027C536.191 0.027 535.938 0 535.574 0C532.654 0 522.584 1.744 320 33.205C117.129 1.701 107.375 0.002 104.412 0.002C104.055 0.002 103.795 0.027 103.307 0.027C81.988 0.025 64 17.406 64 39.557V366.725C64 381.773 74.418 394.805 89.059 398.07ZM336 63.102L454.305 44.707C510.035 36.033 531.404 32.707 536.613 32.027H536.693C540.207 32.027 544 34.906 544 39.557L543.977 366.838L336 413.213V63.102ZM96 39.557C96 36.934 97.203 35.189 98.211 34.188C98.949 33.453 100.459 32.266 103.475 32.039C108.803 32.74 130.234 36.074 185.742 44.715L304 63.102V413.209L96 366.725V39.557ZM624 32C615.156 32 608 39.156 608 48V383.625C608 406.5 591.703 426.312 569.266 430.719L320 479.688L70.75 430.719C48.297 426.312 32 406.5 32 383.625V48C32 39.156 24.844 32 16 32S0 39.156 0 48V383.625C0 421.75 27.156 454.766 64.578 462.125L316.922 511.703C317.938 511.906 318.969 512 320 512S322.062 511.906 323.078 511.703L575.438 462.125C612.844 454.766 640 421.75 640 383.625V48C640 39.156 632.844 32 624 32Z" })
  }
));
BookOpenCoverLight.displayName = "BookOpenCoverLight";
var BookOpenCover_default = BookOpenCoverLight;
