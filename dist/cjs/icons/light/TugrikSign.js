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
var TugrikSign_exports = {};
__export(TugrikSign_exports, {
  default: () => TugrikSign_default
});
module.exports = __toCommonJS(TugrikSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TugrikSignLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 48C384 56.844 376.844 64 368 64H208V203.5L316.125 176.469C324.531 174.312 333.375 179.531 335.531 188.125C337.656 196.687 332.469 205.375 323.875 207.531L208 236.5V299.5L316.125 272.469C324.531 270.375 333.375 275.531 335.531 284.125C337.656 292.687 332.469 301.375 323.875 303.531L208 332.5V464C208 472.844 200.844 480 192 480S176 472.844 176 464V340.5L67.875 367.531C66.594 367.844 65.281 368 64 368C56.812 368 50.281 363.156 48.469 355.875C46.344 347.313 51.531 338.625 60.125 336.469L176 307.5V244.5L67.875 271.531C66.594 271.844 65.281 272 64 272C56.812 272 50.281 267.156 48.469 259.875C46.344 251.312 51.531 242.625 60.125 240.469L176 211.5V64H16C7.156 64 0 56.844 0 48S7.156 32 16 32H368C376.844 32 384 39.156 384 48Z" })
  }
));
TugrikSignLight.displayName = "TugrikSignLight";
var TugrikSign_default = TugrikSignLight;
