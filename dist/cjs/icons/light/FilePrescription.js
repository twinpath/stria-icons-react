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
var FilePrescription_exports = {};
__export(FilePrescription_exports, {
  default: () => FilePrescription_default
});
module.exports = __toCommonJS(FilePrescription_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FilePrescriptionLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192.781 330.031C214.643 319.25 228.473 294.854 222.729 267.773C217.189 241.658 192.385 224.031 165.689 224.031H112.004C103.166 224.031 96.002 231.197 96.004 240.035L96.031 368.031C96.031 376.832 103.232 384.031 112.031 384.031C120.832 384.031 128.031 376.832 128.031 368.031V336.031H153.406L201.375 384L164.688 420.688C158.438 426.938 158.438 437.063 164.688 443.312C167.812 446.438 171.906 448 176 448S184.188 446.438 187.312 443.312L224 406.625L260.689 443.314C266.938 449.562 277.066 449.562 283.314 443.314S289.562 426.937 283.314 420.689L246.625 384L283.312 347.312C289.562 341.062 289.562 330.937 283.312 324.688S266.937 318.438 260.688 324.688L224 361.375L192.781 330.031ZM168.031 304.031H128.031V256.031H168.031C181.281 256.031 192.031 266.781 192.031 280.031S181.281 304.031 168.031 304.031ZM365.256 125.254L258.746 18.746C246.744 6.742 230.465 0 213.49 0H64C28.654 0 0 28.654 0 64V448C0 483.346 28.654 512 64 512H320C355.348 512 384 483.346 384 448V170.51C384 153.535 377.258 137.258 365.256 125.254ZM224 34.076C228.477 35.643 232.666 37.922 236.119 41.375L342.627 147.879C346.08 151.332 348.357 155.523 349.924 160H240C231.188 160 224 152.828 224 144V34.076ZM352 448C352 465.645 337.645 480 320 480H64C46.355 480 32 465.645 32 448V64C32 46.355 46.355 32 64 32H192V144C192 170.469 213.531 192 240 192H352V448Z" })
  }
));
FilePrescriptionLight.displayName = "FilePrescriptionLight";
var FilePrescription_default = FilePrescriptionLight;
