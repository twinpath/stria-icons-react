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
var CodeSimple_exports = {};
__export(CodeSimple_exports, {
  default: () => CodeSimple_default
});
module.exports = __toCommonJS(CodeSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CodeSimpleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M565.032 228.506L421.032 76.51C405.829 60.448 380.485 59.761 364.485 74.979C348.454 90.166 347.767 115.478 362.97 131.509L480.907 256.005L362.97 380.502C347.767 396.533 348.454 421.844 364.485 437.032C372.22 444.375 382.126 448 392.001 448C402.595 448 413.173 443.813 421.032 435.5L565.032 283.505C579.657 268.099 579.657 243.912 565.032 228.506Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M200.547 74.979C184.516 59.761 159.188 60.448 144 76.51L0 228.506C-14.625 243.912 -14.625 268.099 0 283.505L144 435.5C151.859 443.813 162.438 448 173.031 448C182.906 448 192.813 444.375 200.547 437.032C216.578 421.844 217.266 396.533 202.063 380.502L84.125 256.005L202.063 131.509C217.266 115.478 216.578 90.166 200.547 74.979Z" })
    ]
  }
));
CodeSimpleDuotone.displayName = "CodeSimpleDuotone";
var CodeSimple_default = CodeSimpleDuotone;
