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
var X_exports = {};
__export(X_exports, {
  default: () => X_default
});
module.exports = __toCommonJS(X_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const XSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M373.156 401.594C389.937 422.125 386.906 452.374 366.39 469.156C357.484 476.437 346.718 479.999 336.031 479.999C322.125 479.999 308.344 473.999 298.844 462.406L192 331.821L85.156 462.406C75.656 473.999 61.875 479.999 47.969 479.999C37.282 479.999 26.532 476.437 17.61 469.156C-2.906 452.374 -5.937 422.125 10.844 401.594L129.967 256.001L10.844 110.408C-5.937 89.877 -2.906 59.627 17.61 42.846C38.094 26.065 68.36 29.096 85.156 49.596L192 180.181L298.844 49.596C315.64 29.096 345.875 26.065 366.39 42.846S389.937 89.877 373.156 110.408L254.033 256.001L373.156 401.594Z" })
  }
));
XSolid.displayName = "XSolid";
var X_default = XSolid;
