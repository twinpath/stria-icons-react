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
var DiagramStankey_exports = {};
__export(DiagramStankey_exports, {
  default: () => DiagramStankey_default
});
module.exports = __toCommonJS(DiagramStankey_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiagramStankeyLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M48 224H288C293.625 224 298.812 221.047 301.719 216.234L388.406 71.766C391.281 66.969 396.531 64 402.125 64H592C600.844 64 608 56.844 608 48S600.844 32 592 32H402.125C385.344 32 369.594 40.922 360.969 55.297L278.938 192H48C39.156 192 32 199.156 32 208S39.156 224 48 224ZM608 304C608 295.156 600.844 288 592 288H48C39.156 288 32 295.156 32 304S39.156 320 48 320H198.938L280.969 456.703C289.594 471.078 305.344 480 322.125 480H592C600.844 480 608 472.844 608 464S600.844 448 592 448H322.125C316.531 448 311.281 445.031 308.406 440.234L236.26 320H592C600.844 320 608 312.844 608 304Z" })
  }
));
DiagramStankeyLight.displayName = "DiagramStankeyLight";
var DiagramStankey_default = DiagramStankeyLight;
