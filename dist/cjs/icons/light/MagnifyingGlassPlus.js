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
var MagnifyingGlassPlus_exports = {};
__export(MagnifyingGlassPlus_exports, {
  default: () => MagnifyingGlassPlus_default
});
module.exports = __toCommonJS(MagnifyingGlassPlus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MagnifyingGlassPlusLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 192H224V128C224 119.156 216.844 112 208 112S192 119.156 192 128V192H128C119.156 192 112 199.156 112 208S119.156 224 128 224H192V288C192 296.844 199.156 304 208 304S224 296.844 224 288V224H288C296.844 224 304 216.844 304 208S296.844 192 288 192ZM507.312 484.688L365.85 343.227C397.041 306.848 416 259.676 416 208C416 93.125 322.875 0 208 0S0 93.125 0 208S93.125 416 208 416C259.676 416 306.848 397.039 343.225 365.852L484.687 507.312C487.812 510.438 491.906 512 496 512S504.188 510.438 507.312 507.312C513.562 501.062 513.562 490.938 507.312 484.688ZM208 384C110.953 384 32 305.047 32 208S110.953 32 208 32S384 110.953 384 208S305.047 384 208 384Z" })
  }
));
MagnifyingGlassPlusLight.displayName = "MagnifyingGlassPlusLight";
var MagnifyingGlassPlus_default = MagnifyingGlassPlusLight;
