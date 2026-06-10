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
var PresentationScreen_exports = {};
__export(PresentationScreen_exports, {
  default: () => PresentationScreen_default
});
module.exports = __toCommonJS(PresentationScreen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PresentationScreenLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528 64C519.164 64 512 71.164 512 80V288C512 305.672 497.674 320 480 320H96C78.326 320 64 305.672 64 288V80C64 71.164 56.836 64 48 64S32 71.164 32 80V288C32 323.199 60.801 352 96 352H272V393.375L180.688 484.688C174.438 490.938 174.438 501.063 180.688 507.312S197.063 513.562 203.312 507.312L288 422.625L372.688 507.312C375.812 510.438 379.906 512 384 512S392.188 510.438 395.312 507.312C401.562 501.062 401.562 490.937 395.312 484.688L304 393.375V352H480C515.199 352 544 323.199 544 288V80C544 71.164 536.836 64 528 64ZM560 0H16C7.156 0 0 7.156 0 16S7.156 32 16 32H560C568.844 32 576 24.844 576 16S568.844 0 560 0Z" })
  }
));
PresentationScreenLight.displayName = "PresentationScreenLight";
var PresentationScreen_default = PresentationScreenLight;
