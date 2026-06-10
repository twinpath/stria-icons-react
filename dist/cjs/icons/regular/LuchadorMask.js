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
var LuchadorMask_exports = {};
__export(LuchadorMask_exports, {
  default: () => LuchadorMask_default
});
module.exports = __toCommonJS(LuchadorMask_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LuchadorMaskRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 0C100.25 0 0 100.25 0 224V352C0 440.375 71.625 512 160 512H288C376.375 512 448 440.375 448 352V224C448 100.25 347.75 0 224 0ZM400 352C400 413.75 349.75 464 288 464H160C98.25 464 48 413.75 48 352V224C48 127 127 48 224 48S400 127 400 224V352ZM226.5 226.25C225.625 225.5 222.25 225.5 221.375 226.25C213.25 188.25 182 160 144 160H76C69.375 160 64 165.375 64 172V202.75C64 249.75 99.75 288 144 288H166.375C159 300.25 153.875 311.5 150.625 320.875C119.75 325.5 96 351.875 96 384C96 419.5 125.375 448 160.875 448H287C322.5 448 351.875 419.5 351.875 384C351.875 351.875 328.25 325.5 297.25 320.875C294 311.375 288.875 300.25 281.5 288H304C348.25 288 384 249.75 384 202.75V172C384 165.375 378.625 160 372 160H304C266.125 160 234.75 188.25 226.5 226.25ZM224 266.75C244.25 286.625 255.875 305.25 262.75 320H185.25C192.125 305.25 203.75 286.625 224 266.75ZM144 256C117.5 256 96 232.125 96 202.75V192H144C170.5 192 192 215.875 192 245.25V254C191.375 254.75 190.75 255.25 190.25 256H144ZM288 352C305.625 352 320 366.375 320 384S305.625 416 288 416H160C142.375 416 128 401.625 128 384S142.375 352 160 352H288ZM352 202.75C352 232.125 330.5 256 304 256H257.75C257.25 255.25 256.625 254.75 256 254V245.25C256 215.875 277.5 192 304 192H352V202.75Z" })
  }
));
LuchadorMaskRegular.displayName = "LuchadorMaskRegular";
var LuchadorMask_default = LuchadorMaskRegular;
