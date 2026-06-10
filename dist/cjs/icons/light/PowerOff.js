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
var PowerOff_exports = {};
__export(PowerOff_exports, {
  default: () => PowerOff_default
});
module.exports = __toCommonJS(PowerOff_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PowerOffLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M359.391 57.25C351.516 53.156 341.875 56.219 337.812 64.031C333.734 71.875 336.766 81.531 344.609 85.625C408.375 118.875 448 184.156 448 256C448 361.875 361.875 448 256 448S64 361.875 64 256C64 184.156 103.625 118.875 167.391 85.625C175.234 81.531 178.266 71.875 174.187 64.031C170.141 56.219 160.438 53.156 152.609 57.25C78.219 96.031 32 172.188 32 256C32 379.5 132.484 480 256 480S480 379.5 480 256C480 172.188 433.781 96.031 359.391 57.25ZM256 288C264.844 288 272 280.844 272 272V16C272 7.156 264.844 0 256 0S240 7.156 240 16V272C240 280.844 247.156 288 256 288Z" })
  }
));
PowerOffLight.displayName = "PowerOffLight";
var PowerOff_default = PowerOffLight;
