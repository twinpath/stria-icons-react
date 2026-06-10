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
var WashingMachine_exports = {};
__export(WashingMachine_exports, {
  default: () => WashingMachine_default
});
module.exports = __toCommonJS(WashingMachine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WashingMachineSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M260.836 284.25V284.375C251.254 294.375 237.938 300 224 300S196.746 294.375 187.164 284.375C167.129 304.875 134.4 305.25 113.867 285.375C112.746 291.5 112.125 297.75 112 304C112 365.875 162.15 416 224 416S336 365.875 336 304C335.877 297.75 335.254 291.5 334.133 285.25C313.6 305.25 280.871 304.875 260.836 284.25ZM384.035 0H63.965C28.623 0 0 28.625 0 64V480C0 497.625 14.311 512 31.982 512H416.018C433.689 512 448 497.625 448 480V64C448 28.625 419.379 0 384.035 0ZM184.062 64C197.277 64 208 74.75 208 88S197.277 112 184.062 112C170.723 112 160 101.25 160 88S170.723 64 184.062 64ZM64 88C64 74.75 74.818 64 88 64C101.307 64 112 74.75 112 88S101.307 112 88 112C74.818 112 64 101.25 64 88ZM224 448C144.48 448 80.018 383.5 80.018 304S144.48 160 224 160S367.982 224.5 367.982 304S303.52 448 224 448Z" })
  }
));
WashingMachineSolid.displayName = "WashingMachineSolid";
var WashingMachine_default = WashingMachineSolid;
