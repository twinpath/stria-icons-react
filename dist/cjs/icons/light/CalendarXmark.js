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
var CalendarXmark_exports = {};
__export(CalendarXmark_exports, {
  default: () => CalendarXmark_default
});
module.exports = __toCommonJS(CalendarXmark_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CalendarXmarkLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 64H352V16C352 7.164 344.836 0 336 0S320 7.164 320 16V64H128V16C128 7.164 120.836 0 112 0S96 7.164 96 16V64H64C28.654 64 0 92.656 0 128V448C0 483.344 28.654 512 64 512H384C419.346 512 448 483.344 448 448V128C448 92.656 419.346 64 384 64ZM416 448C416 465.672 401.674 480 384 480H64C46.326 480 32 465.672 32 448V192H416V448ZM416 160H32V128C32 110.328 46.326 96 64 96H384C401.674 96 416 110.328 416 128V160ZM148.688 411.312C154.934 417.559 165.059 417.566 171.312 411.312L224 358.625L276.688 411.312C282.934 417.559 293.059 417.566 299.312 411.312C305.562 405.062 305.562 394.937 299.312 388.688L246.625 336L299.312 283.312C305.562 277.062 305.562 266.937 299.312 260.688S282.937 254.438 276.688 260.688L224 313.375L171.312 260.688C165.062 254.438 154.937 254.438 148.688 260.688S142.438 277.063 148.688 283.312L201.375 336L148.688 388.688C142.438 394.938 142.438 405.062 148.688 411.312Z" })
  }
));
CalendarXmarkLight.displayName = "CalendarXmarkLight";
var CalendarXmark_default = CalendarXmarkLight;
