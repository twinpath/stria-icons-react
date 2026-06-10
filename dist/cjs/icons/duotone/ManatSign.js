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
var ManatSign_exports = {};
__export(ManatSign_exports, {
  default: () => ManatSign_default
});
module.exports = __toCommonJS(ManatSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ManatSignDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 181.869V448C160 465.688 174.328 480 192 480S224 465.688 224 448V181.666C213.08 177.797 201.496 175.689 189.484 176.062C179.066 176.336 169.289 178.615 160 181.869ZM192 32C174.328 32 160 46.312 160 64V99.465C168.957 97.836 177.967 96.311 187.375 96.062C199.816 95.859 212.049 97.002 224 99.205V64C224 46.312 209.672 32 192 32Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M328 480C305.906 480 288 462.094 288 440V272C288 245.875 277.688 221.469 258.969 203.219C240.266 185.031 215.687 175.25 189.484 176.062C137.062 177.438 96 219.562 96 272V440C96 462.094 78.094 480 56 480S16 462.094 16 440V272C16 175.875 91.281 98.594 187.375 96.062C235.188 95.281 280.469 112.5 314.781 145.906C349.109 179.344 368 224.094 368 272V440C368 462.094 350.094 480 328 480Z" })
    ]
  }
));
ManatSignDuotone.displayName = "ManatSignDuotone";
var ManatSign_default = ManatSignDuotone;
