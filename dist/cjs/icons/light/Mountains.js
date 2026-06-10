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
var Mountains_exports = {};
__export(Mountains_exports, {
  default: () => Mountains_default
});
module.exports = __toCommonJS(Mountains_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MountainsLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M629.842 381.557L503.769 184.045C497.479 174.189 487.138 169.262 476.794 169.262C466.453 169.262 456.112 174.189 449.82 184.045L409.568 247.105L409.527 247.176L279.975 44.217C279.961 44.195 279.875 44.061 279.86 44.037C274.611 36.018 265.258 32 255.913 32C246.511 32 237.115 36.068 231.915 44.217L8.918 393.572C-14.96 430.979 11.913 480 56.294 480H575.895C626.437 480 657.037 424.162 629.842 381.557ZM56.294 448C43.359 448 37.145 439.211 35.074 435.434C33.004 431.654 28.937 421.689 35.897 410.787L255.946 66.053L475.994 410.787C482.953 421.689 478.886 431.654 476.816 435.434C474.745 439.211 468.531 448 455.596 448H56.294ZM603.951 431.383C601.211 436.379 592.995 448 575.895 448H505.99C513.931 431.512 514.288 411.299 502.972 393.572L428.852 277.453L436.546 264.32L476.691 201.271C476.701 201.27 476.738 201.262 476.79 201.262V201.26L602.863 398.771C612.072 413.197 606.69 426.383 603.951 431.383Z" })
  }
));
MountainsLight.displayName = "MountainsLight";
var Mountains_default = MountainsLight;
