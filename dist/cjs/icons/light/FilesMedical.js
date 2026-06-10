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
var FilesMedical_exports = {};
__export(FilesMedical_exports, {
  default: () => FilesMedical_default
});
module.exports = __toCommonJS(FilesMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FilesMedicalLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 480H96C60.654 480 32 451.344 32 416V112C32 103.164 24.836 96 16 96S0 103.164 0 112V416C0 469.02 42.98 512 96 512H336C344.836 512 352 504.836 352 496S344.836 480 336 480ZM429.256 113.25L334.746 18.742C322.742 6.742 306.465 0 289.49 0H160C124.654 0 96 28.656 96 64V352C96 387.344 124.654 416 160 416H384C419.348 416 448 387.344 448 352V158.508C448 141.531 441.258 125.258 429.256 113.25ZM320 49.25L398.75 128H336C327.172 128 320 120.828 320 112V49.25ZM416 352C416 369.645 401.645 384 384 384H160C142.355 384 128 369.645 128 352V64C128 46.355 142.355 32 160 32H288V112C288 138.469 309.531 160 336 160H416V352ZM298.666 189.332C298.666 181.969 292.697 176 285.334 176H258.666C251.303 176 245.334 181.969 245.334 189.332V229.332H205.334C197.971 229.332 192 235.301 192 242.664V269.332C192 276.695 197.971 282.664 205.334 282.664H245.334V322.664C245.334 330.031 251.303 336 258.666 336H285.334C292.697 336 298.666 330.031 298.666 322.664V282.664H338.666C346.029 282.664 352 276.695 352 269.332V242.664C352 235.301 346.029 229.332 338.666 229.332H298.666V189.332Z" })
  }
));
FilesMedicalLight.displayName = "FilesMedicalLight";
var FilesMedical_default = FilesMedicalLight;
