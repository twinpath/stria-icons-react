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
var ArrowTurnDown_exports = {};
__export(ArrowTurnDown_exports, {
  default: () => ArrowTurnDown_default
});
module.exports = __toCommonJS(ArrowTurnDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowTurnDownDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192.002 417.289L152 379.945V80H40C17.906 80 0 62.094 0 40S17.906 0 40 0L192 0C214.094 0 232 17.906 232 40V379.953L192.002 417.289Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M339.298 389.256L219.297 501.265C203.922 515.578 180.078 515.578 164.703 501.265L44.702 389.256C28.561 374.161 27.686 348.846 42.749 332.72C57.827 316.562 83.108 315.687 99.296 330.751L192 417.289L284.704 330.751C292.423 323.563 302.22 320 311.985 320C322.689 320 333.361 324.282 341.251 332.72C356.314 348.846 355.439 374.161 339.298 389.256Z" })
    ]
  }
));
ArrowTurnDownDuotone.displayName = "ArrowTurnDownDuotone";
var ArrowTurnDown_default = ArrowTurnDownDuotone;
