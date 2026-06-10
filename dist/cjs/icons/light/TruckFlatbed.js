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
var TruckFlatbed_exports = {};
__export(TruckFlatbed_exports, {
  default: () => TruckFlatbed_default
});
module.exports = __toCommonJS(TruckFlatbed_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TruckFlatbedLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M624 384H608V247.672C608 228.58 601.17 210.117 588.746 195.621L517.736 112.768C508.615 102.125 495.299 96 481.281 96H416C398.326 96 384 110.326 384 128V288C384 296.836 391.164 304 400 304S416 296.836 416 288V256H576V384H570.4C557.18 346.773 521.705 320 480 320S402.82 346.773 389.6 384H250.4C237.18 346.773 201.705 320 160 320S82.82 346.773 69.6 384H16C7.164 384 0 391.162 0 400C0 408.836 7.164 416 16 416H64C64 468.938 107.062 512 160 512S256 468.938 256 416H384C384 468.938 427.062 512 480 512S576 468.938 576 416H624C632.844 416 640 408.844 640 400S632.844 384 624 384ZM416 224V128H481.281C485.969 128 490.391 130.031 493.422 133.578L564.453 216.438C566.463 218.789 568.18 221.34 569.688 224H416ZM160 480C124.703 480 96 451.297 96 416S124.703 352 160 352S224 380.703 224 416S195.297 480 160 480ZM480 480C444.703 480 416 451.297 416 416S444.703 352 480 352S544 380.703 544 416S515.297 480 480 480Z" })
  }
));
TruckFlatbedLight.displayName = "TruckFlatbedLight";
var TruckFlatbed_default = TruckFlatbedLight;
