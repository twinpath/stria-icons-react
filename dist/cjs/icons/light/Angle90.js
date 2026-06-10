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
var Angle90_exports = {};
__export(Angle90_exports, {
  default: () => Angle90_default
});
module.exports = __toCommonJS(Angle90_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Angle90Light = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M267.312 268.422C270.469 272.531 275.234 274.703 280.047 274.703C283.437 274.703 286.844 273.625 289.75 271.422C296.766 266.047 298.109 256.016 292.75 248.984C275.062 225.844 254.359 205.125 231.188 187.375C224.188 182.016 214.141 183.359 208.75 190.344C203.375 197.359 204.703 207.406 211.719 212.781C232.656 228.812 251.359 247.531 267.312 268.422ZM324.516 402.438C325.734 410.344 332.547 416 340.312 416C341.125 416 341.937 415.938 342.766 415.812C351.5 414.469 357.484 406.281 356.141 397.562C352.297 372.625 345.531 348.125 336.031 324.687C332.703 316.5 323.328 312.437 315.188 315.875C307 319.187 303.063 328.5 306.375 336.687C314.953 357.844 321.047 379.969 324.516 402.438ZM432 448H32V48C32 39.156 24.844 32 16 32S0 39.156 0 48V464C0 472.844 7.156 480 16 480H432C440.844 480 448 472.844 448 464S440.844 448 432 448ZM77.562 155.484C100.047 158.953 122.156 165.047 143.281 173.625C145.25 174.422 147.281 174.797 149.297 174.797C155.609 174.797 161.594 171.031 164.125 164.812C167.438 156.625 163.5 147.297 155.312 143.969C131.891 134.469 107.375 127.703 82.437 123.859C73.703 122.562 65.547 128.5 64.188 137.234C62.844 145.969 68.828 154.141 77.562 155.484Z" })
  }
));
Angle90Light.displayName = "Angle90Light";
var Angle90_default = Angle90Light;
