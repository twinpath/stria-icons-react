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
var PumpMedical_exports = {};
__export(PumpMedical_exports, {
  default: () => PumpMedical_default
});
module.exports = __toCommonJS(PumpMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PumpMedicalSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M379.315 94.061L335.991 50.738C323.993 38.74 307.721 32 290.752 32H224C224 14.326 209.674 0 192 0H128C110.326 0 96 14.326 96 32V128H224V96H290.752L334.065 139.311C340.313 145.559 350.444 145.559 356.692 139.311L379.315 116.688C385.563 110.439 385.563 100.309 379.315 94.061ZM235.631 160H84.369C51.268 160 23.629 185.24 20.631 218.205L0.268 442.205C-3.138 479.686 26.371 512 64.006 512H255.994C293.629 512 323.139 479.686 319.733 442.205L299.369 218.205C296.371 185.24 268.733 160 235.631 160ZM240 333.332C240 340.695 234.03 346.666 226.666 346.666H186.666V386.666C186.666 394.029 180.698 400 173.334 400H146.666C139.303 400 133.334 394.029 133.334 386.666V346.666H93.334C85.971 346.666 80 340.695 80 333.332V306.666C80 299.301 85.971 293.332 93.334 293.332H133.334V253.332C133.334 245.969 139.303 240 146.666 240H173.334C180.698 240 186.666 245.969 186.666 253.332V293.332H226.666C234.03 293.332 240 299.301 240 306.666V333.332Z" })
  }
));
PumpMedicalSolid.displayName = "PumpMedicalSolid";
var PumpMedical_default = PumpMedicalSolid;
