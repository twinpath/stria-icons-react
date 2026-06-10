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
var PumpSoap_exports = {};
__export(PumpSoap_exports, {
  default: () => PumpSoap_default
});
module.exports = __toCommonJS(PumpSoap_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PumpSoapDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M299.369 218.205C296.371 185.24 268.733 160 235.631 160H84.369C51.268 160 23.629 185.24 20.631 218.205L0.268 442.205C-3.138 479.686 26.371 512 64.006 512H255.994C293.629 512 323.139 479.686 319.733 442.205L299.369 218.205ZM160 416C126.875 416 100 389.672 100 357.25C100 332.25 135.703 281.781 152.032 259.984C156.016 254.672 163.985 254.672 167.969 259.984C184.297 281.781 220 332.25 220 357.25C220 389.672 193.125 416 160 416Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M379.314 94.061L335.99 50.738C323.992 38.74 307.721 32 290.752 32H224C224 14.326 209.674 0 192 0H128C110.326 0 96 14.326 96 32V160H224V96H290.752L334.064 139.311C340.312 145.559 350.443 145.559 356.691 139.311L379.314 116.688C385.562 110.439 385.562 100.309 379.314 94.061ZM152.031 259.984C135.703 281.781 100 332.25 100 357.25C100 389.672 126.875 416 160 416S220 389.672 220 357.25C220 332.25 184.297 281.781 167.969 259.984C163.984 254.672 156.016 254.672 152.031 259.984Z" })
    ]
  }
));
PumpSoapDuotone.displayName = "PumpSoapDuotone";
var PumpSoap_default = PumpSoapDuotone;
