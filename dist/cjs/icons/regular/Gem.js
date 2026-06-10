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
var Gem_exports = {};
__export(Gem_exports, {
  default: () => Gem_default
});
module.exports = __toCommonJS(Gem_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GemRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M507.874 196.406L403.874 42.562C399.405 35.953 391.968 32 383.999 32H127.999C120.03 32 112.593 35.953 108.124 42.562L4.126 196.406C-2.187 205.703 -1.155 218.125 6.532 226.297L238.53 472.453C243.061 477.266 249.374 480 255.999 480S268.936 477.266 273.468 472.453L505.468 226.297C513.155 218.125 514.186 205.703 507.874 196.406ZM382.462 96.588L446.96 192H306.854L382.462 96.588ZM255.999 178.891L177.64 80H334.358L255.999 178.891ZM129.536 96.588L205.143 192H65.04L129.536 96.588ZM255.999 421.016L85.417 240H426.583L255.999 421.016Z" })
  }
));
GemRegular.displayName = "GemRegular";
var Gem_default = GemRegular;
