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
var SignHanging_exports = {};
__export(SignHanging_exports, {
  default: () => SignHanging_default
});
module.exports = __toCommonJS(SignHanging_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SignHangingLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 64H96V16C96 7.156 88.844 0 80 0S64 7.156 64 16V64H16C7.156 64 0 71.156 0 80S7.156 96 16 96H64V496C64 504.844 71.156 512 80 512S96 504.844 96 496V96H192V144C165.531 144 144 165.531 144 192V352C144 378.469 165.531 400 192 400H448C474.469 400 496 378.469 496 352V192C496 165.531 474.469 144 448 144V96H496C504.844 96 512 88.844 512 80S504.844 64 496 64ZM464 192V352C464 360.812 456.828 368 448 368H192C183.172 368 176 360.812 176 352V192C176 183.188 183.172 176 192 176H448C456.828 176 464 183.188 464 192ZM416 144H224V96H416V144Z" })
  }
));
SignHangingLight.displayName = "SignHangingLight";
var SignHanging_default = SignHangingLight;
