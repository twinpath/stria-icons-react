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
var PhoneFlip_exports = {};
__export(PhoneFlip_exports, {
  default: () => PhoneFlip_default
});
module.exports = __toCommonJS(PhoneFlip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PhoneFlipSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.907 351.25L127.392 304.749C140.173 299.218 155.188 302.937 163.876 313.718L207.923 367.531C277.173 333.531 333.47 277.249 367.454 208.029L313.626 163.935C302.876 155.154 299.204 140.279 304.642 127.497L351.173 18.934C357.267 5.027 372.345 -2.598 387.032 0.809L487.782 24.059C502.032 27.309 512.001 39.84 512.001 54.497C512.001 306.78 306.767 512.001 54.517 512.001C39.845 512.001 27.313 502.032 24.048 487.782L0.798 387C-2.577 372.406 5.001 357.25 18.907 351.25Z" })
  }
));
PhoneFlipSolid.displayName = "PhoneFlipSolid";
var PhoneFlip_default = PhoneFlipSolid;
