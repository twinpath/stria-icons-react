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
var Thumbtack_exports = {};
__export(Thumbtack_exports, {
  default: () => Thumbtack_default
});
module.exports = __toCommonJS(Thumbtack_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ThumbtackSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 455.998C160 457.248 160.281 458.467 160.844 459.576L184.844 507.576C187.781 513.467 196.219 513.482 199.156 507.576L223.156 459.576C223.625 458.654 224 457.045 224 455.998V383.998H160V455.998ZM298.031 214.266L285.781 96H328C341.25 96 352 85.25 352 72V24C352 10.75 341.25 0 328 0H56C42.75 0 32 10.75 32 24V72C32 85.25 42.75 96 56 96H98.219L85.969 214.266C37.469 236.812 0 277.266 0 328C0 341.25 10.75 352 24 352H360C373.25 352 384 341.25 384 328C384 276.812 346.031 236.578 298.031 214.266Z" })
  }
));
ThumbtackSolid.displayName = "ThumbtackSolid";
var Thumbtack_default = ThumbtackSolid;
