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
var UtilityPole_exports = {};
__export(UtilityPole_exports, {
  default: () => UtilityPole_default
});
module.exports = __toCommonJS(UtilityPole_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UtilityPoleLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 32C487.164 32 480 39.162 480 48V96H416V48C416 39.162 408.836 32 400 32S384 39.162 384 48V96H304V32C304 14.327 289.673 0 272 0H240C222.327 0 208 14.327 208 32V96H128V48C128 39.162 120.836 32 112 32S96 39.162 96 48V96H32V48C32 39.162 24.836 32 16 32S0 39.162 0 48V96C0 113.673 14.327 128 32 128H59.156L208 227.234V496C208 504.837 215.163 512 224 512H224C232.837 512 240 504.837 240 496V128H272V496C272 504.837 279.163 512 288 512H288C296.837 512 304 504.837 304 496V227.234L452.844 128H480C497.673 128 512 113.673 512 96V48C512 39.162 504.836 32 496 32ZM208 188.775L116.842 128H208V188.775ZM272 96H240V32H272V96ZM304 188.775V128H395.158L304 188.775Z" })
  }
));
UtilityPoleLight.displayName = "UtilityPoleLight";
var UtilityPole_default = UtilityPoleLight;
