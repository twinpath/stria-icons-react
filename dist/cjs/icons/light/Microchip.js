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
var Microchip_exports = {};
__export(Microchip_exports, {
  default: () => Microchip_default
});
module.exports = __toCommonJS(Microchip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MicrochipLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 128H160C142.328 128 128 142.326 128 160V352C128 369.674 142.328 384 160 384H352C369.674 384 384 369.674 384 352V160C384 142.326 369.674 128 352 128ZM352 352H160V160H352V352ZM496 272C504.844 272 512 264.844 512 256S504.844 240 496 240H448V176H496C504.844 176 512 168.844 512 160S504.844 144 496 144H448V128C448 92.654 419.348 64 384 64H368V16C368 7.156 360.844 0 352 0S336 7.156 336 16V64H272V16C272 7.156 264.844 0 256 0S240 7.156 240 16V64H176V16C176 7.156 168.844 0 160 0S144 7.156 144 16V64H128C92.654 64 64 92.654 64 128V144H16C7.156 144 0 151.156 0 160S7.156 176 16 176H64V240H16C7.156 240 0 247.156 0 256S7.156 272 16 272H64V336H16C7.156 336 0 343.156 0 352S7.156 368 16 368H64V384C64 419.346 92.654 448 128 448H144V496C144 504.844 151.156 512 160 512S176 504.844 176 496V448H240V496C240 504.844 247.156 512 256 512S272 504.844 272 496V448H336V496C336 504.844 343.156 512 352 512S368 504.844 368 496V448H384C419.348 448 448 419.346 448 384V368H496C504.844 368 512 360.844 512 352S504.844 336 496 336H448V272H496ZM416 384C416 401.645 401.645 416 384 416H128C110.355 416 96 401.645 96 384V128C96 110.355 110.355 96 128 96H384C401.645 96 416 110.355 416 128V384Z" })
  }
));
MicrochipLight.displayName = "MicrochipLight";
var Microchip_default = MicrochipLight;
