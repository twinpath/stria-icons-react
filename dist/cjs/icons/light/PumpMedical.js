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
const PumpMedicalLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M379.313 100.688L331.313 52.688C328.313 49.688 324.25 48 320 48H240V32C240 14.326 225.674 0 208 0H112C94.326 0 80 14.326 80 32V128.414C48.897 130.551 23.494 154.727 20.631 186.205L0.268 442.205C-3.138 479.686 26.371 512 64.006 512H255.994C293.629 512 323.139 479.686 319.733 442.205L299.369 186.205C296.506 154.727 271.104 130.551 240 128.414V80H313.375L356.688 123.312C359.813 126.438 363.907 128 368 128S376.188 126.438 379.313 123.312C385.563 117.062 385.563 106.938 379.313 100.688ZM112 32H208V128H112V32ZM267.471 188.742L287.864 445.102C288.688 454.166 285.762 462.859 279.623 469.58C273.487 476.299 265.096 480 255.994 480H64.006C54.905 480 46.514 476.299 40.377 469.58C34.239 462.859 31.313 454.166 32.166 444.742L52.5 189.104C53.916 173.521 66.405 161.084 82.194 160H237.807C253.596 161.084 266.084 173.521 267.471 188.742ZM226.666 293.332H186.666V253.332C186.666 245.969 180.698 240 173.334 240H146.666C139.303 240 133.334 245.969 133.334 253.332V293.332H93.334C85.971 293.332 80 299.301 80 306.666V333.332C80 340.695 85.971 346.666 93.334 346.666H133.334V386.666C133.334 394.029 139.303 400 146.666 400H173.334C180.698 400 186.666 394.029 186.666 386.666V346.666H226.666C234.03 346.666 240 340.695 240 333.332V306.666C240 299.301 234.03 293.332 226.666 293.332Z" })
  }
));
PumpMedicalLight.displayName = "PumpMedicalLight";
var PumpMedical_default = PumpMedicalLight;
