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
var FileCsv_exports = {};
__export(FileCsv_exports, {
  default: () => FileCsv_default
});
module.exports = __toCommonJS(FileCsv_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileCsvLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M365.256 125.254L258.746 18.746C246.744 6.742 230.465 0 213.49 0H64C28.654 0 0 28.654 0 64V448C0 483.346 28.654 512 64 512H320C355.348 512 384 483.346 384 448V170.51C384 153.535 377.258 137.258 365.256 125.254ZM224 34.076C228.477 35.643 232.666 37.922 236.119 41.375L342.627 147.879C346.08 151.332 348.357 155.523 349.924 160H240C231.188 160 224 152.828 224 144V34.076ZM352 448C352 465.645 337.645 480 320 480H64C46.355 480 32 465.645 32 448V64C32 46.355 46.355 32 64 32H192V144C192 170.469 213.531 192 240 192H352V448ZM224.812 293.062L256.812 389.062C259 395.594 265.125 400 272 400S285 395.594 287.188 389.062L319.188 293.062C321.969 284.672 317.438 275.609 309.063 272.828C300.75 270.094 291.656 274.562 288.813 282.938L272 333.406L255.188 282.938C252.375 274.547 243.344 270.078 234.938 272.828C226.562 275.609 222.031 284.672 224.812 293.062ZM182.625 304H192C200.844 304 208 296.844 208 288S200.844 272 192 272H182.625C161.312 272 144 289.328 144 310.625C144 320.828 148.125 330.781 155.312 337.937L174.094 356.703C175.312 357.922 176 359.625 176 361.375C176 365.031 173.031 368 169.375 368H160C151.156 368 144 375.156 144 384S151.156 400 160 400H169.375C190.688 400 208 382.672 208 361.375C208 351.172 203.875 341.219 196.688 334.063L177.906 315.297C176.688 314.078 176 312.375 176 310.625C176 306.969 178.969 304 182.625 304ZM112 304C120.844 304 128 296.844 128 288S120.844 272 112 272C85.531 272 64 293.531 64 320V352C64 378.469 85.531 400 112 400C120.844 400 128 392.844 128 384S120.844 368 112 368C103.188 368 96 360.828 96 352V320C96 311.172 103.188 304 112 304Z" })
  }
));
FileCsvLight.displayName = "FileCsvLight";
var FileCsv_default = FileCsvLight;
