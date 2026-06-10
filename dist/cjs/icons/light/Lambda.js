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
var Lambda_exports = {};
__export(Lambda_exports, {
  default: () => Lambda_default
});
module.exports = __toCommonJS(Lambda_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LambdaLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 464C448 472.799 440.801 480 432 480H362.25C349.734 480 338.363 472.723 333.119 461.359L177.76 124.715L30.725 470.25C28.131 476.344 22.225 480 16.006 480C13.912 480 11.787 479.594 9.756 478.719C1.6 475.25 -2.182 465.875 1.287 457.75L159.678 85.531L151.891 68.658C150.586 65.818 147.748 64 144.625 64H16C7.199 64 0 56.799 0 48C0 39.199 7.199 32 16 32H149.75C162.266 32 173.639 39.277 178.883 50.641L360.125 443.375C361.375 446.25 364.25 448 367.375 448H432C440.801 448 448 455.199 448 464Z" })
  }
));
LambdaLight.displayName = "LambdaLight";
var Lambda_default = LambdaLight;
