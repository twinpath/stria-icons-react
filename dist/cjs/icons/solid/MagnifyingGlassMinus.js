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
var MagnifyingGlassMinus_exports = {};
__export(MagnifyingGlassMinus_exports, {
  default: () => MagnifyingGlassMinus_default
});
module.exports = __toCommonJS(MagnifyingGlassMinus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MagnifyingGlassMinusSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M500.284 443.717L380.623 324.055C407.845 283.64 421.271 233.159 414.082 179.355C401.848 87.802 326.803 13.327 235.167 1.724C99.014 -15.515 -15.509 99.004 1.722 235.155C13.32 326.794 87.793 401.844 179.349 414.081C233.154 421.272 283.638 407.846 324.052 380.625L443.717 500.285C459.337 515.905 484.662 515.905 500.283 500.286L500.283 500.286C515.905 484.665 515.905 459.338 500.284 443.717ZM288.002 232H127.998C114.73 232 104 221.258 104 208S114.738 184 127.998 184H288.002C301.261 184 312 194.742 312 208S301.261 232 288.002 232Z" })
  }
));
MagnifyingGlassMinusSolid.displayName = "MagnifyingGlassMinusSolid";
var MagnifyingGlassMinus_default = MagnifyingGlassMinusSolid;
