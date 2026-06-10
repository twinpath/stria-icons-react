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
var Vest_exports = {};
__export(Vest_exports, {
  default: () => Vest_default
});
module.exports = __toCommonJS(Vest_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VestThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M441.125 259.688L400 189.812V40C400 17.908 382.092 0 360 0H320C313.725 0 310.334 1.828 305.098 5.287C221.014 60.842 199.229 42.502 142.904 5.287C137.668 1.828 134.275 0 128 0H88C65.908 0 48 17.908 48 40V189.812L7.219 259.188C2.5 265.938 0 273.875 0 282.094V472C0 494.092 17.908 512 40 512H408C430.092 512 448 494.092 448 472V282.094C448 273.875 445.5 265.938 441.125 259.688ZM224 56.125C251 56.125 274.443 46.719 295.734 30.473L224 213.049L152.266 30.473C173.561 46.721 197.004 56.125 224 56.125ZM192 300.555V496H40C26.781 496 16 485.219 16 472V467.496L125.438 365.875C128.688 362.844 128.875 357.781 125.875 354.562C122.844 351.312 117.813 351.156 114.563 354.125L16 445.646V282.094C16 277.156 17.5 272.406 20.688 267.812L62.906 196.062C63.277 194.699 63.629 193.408 64 192.047V40C64 26.799 74.801 16 88 16H129.406L215.41 234.914L194.217 288.852C192.752 292.58 192 296.549 192 300.555ZM432 445.646L333.438 354.125C330.219 351.156 325.156 351.312 322.125 354.562C319.125 357.781 319.313 362.844 322.563 365.875L432 467.496V472C432 485.219 421.219 496 408 496H208V297.5L318.594 16H360C373.219 16 384 26.781 384 40V192C384 193.438 384.375 194.812 385.094 196.062L427.656 268.312C430.5 272.406 432 277.156 432 282.094V445.646Z" })
  }
));
VestThin.displayName = "VestThin";
var Vest_default = VestThin;
