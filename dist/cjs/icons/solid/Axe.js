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
var Axe_exports = {};
__export(Axe_exports, {
  default: () => Axe_default
});
module.exports = __toCommonJS(Axe_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AxeSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240.19 203.562L308.065 271.438L76.891 502.626C64.395 515.124 44.132 515.125 31.635 502.627L9 479.992C-3.497 467.496 -3.497 447.234 9 434.738L240.19 203.562ZM639.627 160V192C639.627 315.712 539.339 416 415.627 416H383.627V301.734L233.002 151.109C220.506 138.613 220.507 118.353 233.004 105.858L329.502 9.375C335.752 3.125 343.94 0 352.127 0S368.502 3.125 374.752 9.375L404.565 39.188L434.38 9.373C446.877 -3.124 467.138 -3.124 479.635 9.373L502.255 31.993C514.752 44.49 514.752 64.751 502.255 77.248L472.44 107.063L525.377 160H639.627ZM572.409 224.016H534.471C518.221 263.297 486.909 294.594 447.627 310.844V348.797C510.221 336.031 559.659 286.594 572.409 224.016Z" })
  }
));
AxeSolid.displayName = "AxeSolid";
var Axe_default = AxeSolid;
