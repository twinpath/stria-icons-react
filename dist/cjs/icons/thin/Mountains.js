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
const MountainsThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M629.842 381.557L503.769 184.045C497.478 174.189 487.136 169.262 476.795 169.262S456.111 174.189 449.82 184.045L409.568 247.105L409.527 247.178L279.974 44.217C279.961 44.195 279.875 44.061 279.859 44.037C274.609 36.018 265.258 32 255.914 32C246.51 32 237.113 36.068 231.916 44.217L8.918 393.572C-14.959 430.979 11.912 480 56.295 480H575.894C626.437 480 657.037 424.162 629.842 381.557ZM56.295 464C41.383 464 28.203 456.193 21.037 443.119C13.873 430.049 14.385 414.744 22.404 402.18L245.404 52.822C247.672 49.268 252.322 48 255.916 48C259.5 48 264.156 49.262 266.488 52.826L489.486 402.18C497.506 414.744 498.015 430.049 490.853 443.119C483.687 456.193 470.508 464 455.595 464H56.295ZM617.988 439.066C609.431 454.68 593.695 464 575.894 464H494.572C512.482 446.48 518.375 417.701 502.972 393.572L419.187 262.312L423.054 255.713L463.306 192.654C466.304 187.955 471.222 185.262 476.795 185.262S487.283 187.955 490.283 192.652L616.355 390.164C625.933 405.172 626.545 423.453 617.988 439.066Z" })
  }
));
MountainsThin.displayName = "MountainsThin";
var Mountains_default = MountainsThin;
