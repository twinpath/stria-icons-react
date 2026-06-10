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
var XRay_exports = {};
__export(XRay_exports, {
  default: () => XRay_default
});
module.exports = __toCommonJS(XRay_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const XRayLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 448H480V64H496C504.836 64 512 56.836 512 48S504.836 32 496 32H16C7.164 32 0 39.164 0 48S7.164 64 16 64H32V448H16C7.164 448 0 455.164 0 464S7.164 480 16 480H496C504.836 480 512 472.836 512 464S504.836 448 496 448ZM448 448H64V64H448V448ZM112 224H240V256H144C135.201 256 128 263.199 128 272S135.201 288 144 288H240V320H170.666C145.107 320 129.863 348.484 144.041 369.75L165.377 401.752C171.311 410.652 181.303 416 192 416H319.998C330.699 416 340.689 410.652 346.625 401.75L367.959 369.75C382.137 348.484 366.893 320 341.334 320H272V288H368C376.801 288 384 280.801 384 272S376.801 256 368 256H272V224H400C408.801 224 416 216.801 416 208S408.801 192 400 192H272V160H368C376.801 160 384 152.801 384 144S376.801 128 368 128H272V112C272 103.199 264.801 96 256 96C247.201 96 240 103.199 240 112V128H144C135.201 128 128 135.199 128 144S135.201 160 144 160H240V192H112C103.201 192 96 199.199 96 208S103.201 224 112 224ZM341.334 352L319.998 384L192.002 384.002L170.666 352H341.334Z" })
  }
));
XRayLight.displayName = "XRayLight";
var XRay_default = XRayLight;
