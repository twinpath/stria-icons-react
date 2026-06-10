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
var Screwdriver_exports = {};
__export(Screwdriver_exports, {
  default: () => Screwdriver_default
});
module.exports = __toCommonJS(Screwdriver_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScrewdriverLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M405 192L501 64L437 0L309 96V169.375L210.5 267.875C198.25 260 184.25 256 170.25 256C151.125 256 132 263.25 117.375 277.875L0 395.375C-14.625 409.875 -14.625 433.625 0 448.25L52.75 501C60.125 508.375 69.625 512 79.25 512C88.75 512 98.375 508.375 105.625 501L223.125 383.625C248.375 358.375 251.75 319.375 233.125 290.5L331.625 192H405ZM341 112L434 42.25L458.75 67L389 160H341V112ZM200.375 360.875L83 478.375C82 479.375 80.625 479.875 79.25 479.875C78.25 479.875 76.75 479.625 75.5 478.375L22.625 425.5C20.625 423.375 20.625 420.125 22.625 418L140.125 300.625C148.125 292.5 158.875 288.125 170.25 288.125C181.625 288.125 192.375 292.5 200.375 300.625C217 317.25 217 344.25 200.375 360.875Z" })
  }
));
ScrewdriverLight.displayName = "ScrewdriverLight";
var Screwdriver_default = ScrewdriverLight;
