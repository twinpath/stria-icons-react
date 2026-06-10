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
var FileXmark_exports = {};
__export(FileXmark_exports, {
  default: () => FileXmark_default
});
module.exports = __toCommonJS(FileXmark_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileXmarkLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M365.258 125.254L258.746 18.746C246.742 6.742 230.465 0 213.492 0H64C28.656 0 0 28.654 0 64V448C0 483.346 28.656 512 64 512H320C355.348 512 384 483.346 384 448V170.51C384 153.535 377.258 137.258 365.258 125.254ZM224 34.076C228.477 35.643 232.664 37.922 236.117 41.375L342.625 147.879C346.078 151.332 348.359 155.523 349.922 160H240C231.188 160 224 152.828 224 144V34.076ZM352 448C352 465.645 337.645 480 320 480H64C46.355 480 32 465.645 32 448V64C32 46.355 46.355 32 64 32H192V144C192 170.469 213.531 192 240 192H352V448ZM139.312 260.688C133.062 254.438 122.937 254.438 116.688 260.688S110.438 277.063 116.688 283.312L169.375 336L116.688 388.688C110.438 394.938 110.438 405.063 116.688 411.312C122.93 417.559 133.055 417.566 139.312 411.312L192 358.625L244.688 411.312C250.93 417.559 261.055 417.566 267.312 411.312C273.562 405.062 273.562 394.937 267.312 388.688L214.625 336L267.312 283.312C273.562 277.062 273.562 266.937 267.312 260.688S250.937 254.438 244.688 260.688L192 313.375L139.312 260.688Z" })
  }
));
FileXmarkLight.displayName = "FileXmarkLight";
var FileXmark_default = FileXmarkLight;
