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
var Sun_exports = {};
__export(Sun_exports, {
  default: () => Sun_default
});
module.exports = __toCommonJS(Sun_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SunSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 160C202.98 160 160 202.98 160 256S202.98 352 256 352S352 309.02 352 256S309.019 160 256 160ZM509.263 347.008L446.109 255.998L509.262 164.988C515.594 155.863 510.365 143.246 499.435 141.269L390.429 121.57L370.728 12.562C368.754 1.63 356.135 -3.595 347.008 2.737L256 65.888L164.99 2.735C155.865 -3.597 143.246 1.628 141.269 12.56L121.57 121.57L12.562 141.267C1.633 143.244 -3.596 155.863 2.736 164.986L65.89 256L2.738 347.01C-3.594 356.135 1.633 368.752 12.562 370.727L121.57 390.426L141.269 499.436C143.244 510.366 155.863 515.595 164.99 509.261L256 446.108L347.01 509.261C356.137 515.595 368.756 510.368 370.73 499.438L390.428 390.426L499.437 370.727C510.369 368.752 515.596 356.135 509.263 347.008ZM256 384C185.306 384 128 326.692 128 256C128 185.306 185.306 128 256 128S384 185.306 384 256C384 326.692 326.693 384 256 384Z" })
  }
));
SunSolid.displayName = "SunSolid";
var Sun_default = SunSolid;
