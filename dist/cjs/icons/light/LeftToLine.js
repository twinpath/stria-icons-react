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
var LeftToLine_exports = {};
__export(LeftToLine_exports, {
  default: () => LeftToLine_default
});
module.exports = __toCommonJS(LeftToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LeftToLineLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M91.5 228.656C84.188 235.531 80 245.5 80 256S84.188 276.469 91.656 283.5L224.547 405.719C235.469 416.062 251.453 418.875 265.312 412.937C279.094 406.938 288 393.406 288 378.406V320H403.172C427.891 320 448 299.906 448 275.188V236.812C448 212.094 427.891 192 403.172 192H288V133.594C288 118.594 279.094 105.062 265.25 99.062C251.453 93.125 235.469 95.938 224.703 106.125L91.5 228.656ZM252.562 128.438C254.656 129.344 256 131.375 256 133.594V224H403.172C410.25 224 416 229.75 416 236.812V275.188C416 282.25 410.25 288 403.172 288H256V378.406C256 380.625 254.656 382.656 252.625 383.562C250.547 384.438 248.156 384 246.359 382.312L113.469 260.094C111.656 258.344 111.812 253.5 113.312 252.062L246.516 129.531C248.156 128 250.547 127.562 252.562 128.438ZM32 432V80C32 71.156 24.844 64 16 64S0 71.156 0 80V432C0 440.844 7.156 448 16 448S32 440.844 32 432Z" })
  }
));
LeftToLineLight.displayName = "LeftToLineLight";
var LeftToLine_default = LeftToLineLight;
