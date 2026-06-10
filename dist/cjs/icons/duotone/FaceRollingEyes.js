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
var FaceRollingEyes_exports = {};
__export(FaceRollingEyes_exports, {
  default: () => FaceRollingEyes_default
});
module.exports = __toCommonJS(FaceRollingEyes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceRollingEyesDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.461 16 16 123.422 16 256S123.461 496 256 496S496 388.578 496 256S388.539 16 256 16ZM96 224C96 188.656 124.654 160 160 160S224 188.656 224 224S195.346 288 160 288S96 259.344 96 224ZM320.059 400H191.941C170.75 400 170.75 368 191.941 368H320.059C341.25 368 341.25 400 320.059 400ZM352 288C316.654 288 288 259.344 288 224S316.654 160 352 160S416 188.656 416 224S387.346 288 352 288Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M382.385 168C373.309 163.062 363.061 160 352 160S330.691 163.062 321.615 168C320.922 170.617 320 173.164 320 176C320 193.672 334.326 208 352 208S384 193.672 384 176C384 173.164 383.078 170.617 382.385 168ZM160 160C148.939 160 138.691 163.062 129.615 168C128.922 170.617 128 173.164 128 176C128 193.672 142.326 208 160 208S192 193.672 192 176C192 173.164 191.078 170.617 190.385 168C181.309 163.062 171.061 160 160 160Z" })
    ]
  }
));
FaceRollingEyesDuotone.displayName = "FaceRollingEyesDuotone";
var FaceRollingEyes_default = FaceRollingEyesDuotone;
