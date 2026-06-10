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
var ExpandWide_exports = {};
__export(ExpandWide_exports, {
  default: () => ExpandWide_default
});
module.exports = __toCommonJS(ExpandWide_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ExpandWideLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 64H16C7.156 64 0 71.156 0 80V208C0 216.844 7.156 224 16 224S32 216.844 32 208V96H144C152.844 96 160 88.844 160 80S152.844 64 144 64ZM144 416H32V304C32 295.156 24.844 288 16 288S0 295.156 0 304V432C0 440.844 7.156 448 16 448H144C152.844 448 160 440.844 160 432S152.844 416 144 416ZM496 288C487.156 288 480 295.156 480 304V416H368C359.156 416 352 423.156 352 432S359.156 448 368 448H496C504.844 448 512 440.844 512 432V304C512 295.156 504.844 288 496 288ZM496 64H368C359.156 64 352 71.156 352 80S359.156 96 368 96H480V208C480 216.844 487.156 224 496 224S512 216.844 512 208V80C512 71.156 504.844 64 496 64Z" })
  }
));
ExpandWideLight.displayName = "ExpandWideLight";
var ExpandWide_default = ExpandWideLight;
