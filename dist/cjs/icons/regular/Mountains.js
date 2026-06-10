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
const MountainsRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M629.842 381.557L503.77 184.045C491.188 164.334 462.405 164.334 449.821 184.045L409.569 247.105L409.573 247.248L279.975 44.217C279.962 44.195 279.876 44.061 279.86 44.037C274.612 36.018 265.258 32 255.913 32C246.512 32 237.116 36.068 231.917 44.217L8.919 393.572C-14.96 430.979 11.913 480 56.296 480H575.895C626.438 480 657.038 424.162 629.842 381.557ZM462.784 427.742C461.237 430.568 458.817 432 455.596 432H56.296C53.073 432 50.655 430.568 49.108 427.742C47.559 424.918 47.653 422.111 49.387 419.395L255.946 95.793L462.506 419.395C464.239 422.109 464.333 424.918 462.784 427.742Z" })
  }
));
MountainsRegular.displayName = "MountainsRegular";
var Mountains_default = MountainsRegular;
