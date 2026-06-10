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
var NotEqual_exports = {};
__export(NotEqual_exports, {
  default: () => NotEqual_default
});
module.exports = __toCommonJS(NotEqual_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const NotEqualLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 352.003C448 360.847 440.844 368.003 432 368.003H165.914L93.156 473.094C90.062 477.594 85.062 480 80 480C76.844 480 73.656 479.094 70.906 477.156C63.625 472.125 61.812 462.157 66.844 454.907L127.01 368.003H16C7.156 368.003 0 360.847 0 352.003C0 343.16 7.156 336.004 16 336.004H149.164L259.934 176.008H16C7.156 176.008 0 168.852 0 160.008C0 151.164 7.156 144.008 16 144.008H282.086L354.844 38.917C359.844 31.605 369.937 29.824 377.094 34.855C384.375 39.886 386.187 49.854 381.156 57.104L320.99 144.008H432C440.844 144.008 448 151.164 448 160.008C448 168.852 440.844 176.008 432 176.008H298.836L188.066 336.004H432C440.844 336.004 448 343.16 448 352.003Z" })
  }
));
NotEqualLight.displayName = "NotEqualLight";
var NotEqual_default = NotEqualLight;
