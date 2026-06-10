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
var VrCardboard_exports = {};
__export(VrCardboard_exports, {
  default: () => VrCardboard_default
});
module.exports = __toCommonJS(VrCardboard_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VrCardboardRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 64H64C28.654 64 0 92.654 0 128V384C0 419.346 28.654 448 64 448H208.68C237.006 448 262.699 431.391 274.33 405.562L288.781 373.469C294.688 360.344 306.781 352 320 352S345.312 360.344 351.219 373.469L365.672 405.562C377.301 431.391 402.996 448 431.322 448H576C611.346 448 640 419.346 640 384V128C640 92.654 611.346 64 576 64ZM592 384C592 392.822 584.822 400 576 400H431.322C421.898 400 413.309 394.447 409.438 385.854L394.992 353.771C381.387 323.537 351.949 304 320 304S258.615 323.537 245.014 353.762L230.562 385.854C226.693 394.447 218.104 400 208.68 400H64C55.178 400 48 392.822 48 384V128C48 119.178 55.178 112 64 112H576C584.822 112 592 119.178 592 128V384ZM176 176C140.625 176 112 204.625 112 240S140.625 304 176 304S240 275.375 240 240S211.375 176 176 176ZM464 176C428.625 176 400 204.625 400 240S428.625 304 464 304S528 275.375 528 240S499.375 176 464 176Z" })
  }
));
VrCardboardRegular.displayName = "VrCardboardRegular";
var VrCardboard_default = VrCardboardRegular;
