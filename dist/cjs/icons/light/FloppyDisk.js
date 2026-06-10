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
var FloppyDisk_exports = {};
__export(FloppyDisk_exports, {
  default: () => FloppyDisk_default
});
module.exports = __toCommonJS(FloppyDisk_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FloppyDiskLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M350.062 55.438C334.938 40.328 314.875 32 293.5 32H80C35.875 32 0 67.891 0 112V400C0 444.109 35.875 480 80 480H368C412.125 480 448 444.109 448 400V186.516C448 165.141 439.688 145.047 424.562 129.938L350.062 55.438ZM96 64H288V160H96V64ZM416 400C416 426.469 394.469 448 368 448H80C53.531 448 32 426.469 32 400V112C32 91.168 45.416 73.574 64 66.947V160C64 177.672 78.326 192 96 192H288C305.674 192 320 177.672 320 160V72.02C322.664 73.777 325.166 75.791 327.438 78.063L401.938 152.563C411 161.641 416 173.688 416 186.516V400ZM224 240C179.875 240 144 275.891 144 320S179.875 400 224 400S304 364.109 304 320S268.125 240 224 240ZM224 368C197.531 368 176 346.469 176 320S197.531 272 224 272S272 293.531 272 320S250.469 368 224 368Z" })
  }
));
FloppyDiskLight.displayName = "FloppyDiskLight";
var FloppyDisk_default = FloppyDiskLight;
