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
var Taxi_exports = {};
__export(Taxi_exports, {
  default: () => Taxi_default
});
module.exports = __toCommonJS(Taxi_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TaxiThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M454.783 227.693L419.172 115.531C409.391 84.703 381.938 64 350.844 64H352V40C352 17.938 334.062 0 312 0H200C177.938 0 160 17.938 160 40V64H161.156C130.062 64 102.609 84.703 92.828 115.531L57.217 227.693C24.211 237.555 0 267.789 0 304V504C0 508.418 3.582 512 8 512S16 508.418 16 504V432H496V504C496 508.418 499.582 512 504 512S512 508.418 512 504V304C512 267.789 487.789 237.555 454.783 227.693ZM176 40C176 26.766 186.781 16 200 16H312C325.219 16 336 26.766 336 40V64H176V40ZM108.078 120.375C115.734 96.219 137.062 80 161.156 80H350.844C374.938 80 396.266 96.219 403.922 120.375L436.982 224.502C435.303 224.396 433.707 224 432 224H80C78.293 224 76.697 224.396 75.018 224.502L108.078 120.375ZM496 416H16V304C16 268.709 44.711 240 80 240H432C467.289 240 496 268.709 496 304V416ZM104 288C81.91 288 64 305.908 64 328C64 350.09 81.91 368 104 368S144 350.09 144 328C144 305.908 126.09 288 104 288ZM104 352C90.766 352 80 341.232 80 328C80 314.766 90.766 304 104 304S128 314.766 128 328C128 341.232 117.234 352 104 352ZM408 288C385.91 288 368 305.908 368 328C368 350.09 385.91 368 408 368S448 350.09 448 328C448 305.908 430.09 288 408 288ZM408 352C394.766 352 384 341.232 384 328C384 314.766 394.766 304 408 304S432 314.766 432 328C432 341.232 421.234 352 408 352Z" })
  }
));
TaxiThin.displayName = "TaxiThin";
var Taxi_default = TaxiThin;
