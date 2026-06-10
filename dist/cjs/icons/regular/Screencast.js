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
var Screencast_exports = {};
__export(Screencast_exports, {
  default: () => Screencast_default
});
module.exports = __toCommonJS(Screencast_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScreencastRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M502.5 32H73.5C32.969 32 0 65.188 0 106V168C0 181.25 10.75 192 24 192S48 181.25 48 168V106C48 91.656 59.438 80 73.5 80H502.5C516.562 80 528 91.656 528 106V406C528 420.344 516.562 432 502.5 432H312C298.75 432 288 442.75 288 456S298.75 480 312 480H502.5C543.031 480 576 446.812 576 406V106C576 65.188 543.031 32 502.5 32ZM32 416C14.326 416 0 430.328 0 448S14.326 480 32 480S64 465.672 64 448S49.674 416 32 416ZM24 320C10.75 320 0 330.75 0 344S10.75 368 24 368C72.531 368 112 407.469 112 456C112 469.25 122.75 480 136 480S160 469.25 160 456C160 381 99 320 24 320ZM24 224C10.75 224 0 234.75 0 248S10.75 272 24 272C125.469 272 208 354.531 208 456C208 469.25 218.75 480 232 480S256 469.25 256 456C256 328.062 151.938 224 24 224Z" })
  }
));
ScreencastRegular.displayName = "ScreencastRegular";
var Screencast_default = ScreencastRegular;
