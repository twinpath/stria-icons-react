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
var TruckMedical_exports = {};
__export(TruckMedical_exports, {
  default: () => TruckMedical_default
});
module.exports = __toCommonJS(TruckMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TruckMedicalLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M624 384H608V247.672C608 228.594 601.156 210.109 588.75 195.625L517.734 112.766C508.594 102.109 495.312 96 481.281 96H416V64C416 28.654 387.346 0 352 0H64C28.654 0 0 28.654 0 64V352C0 387.346 28.654 416 64 416C64 468.938 107.062 512 160 512S256 468.938 256 416H384C384 468.938 427.062 512 480 512S576 468.938 576 416H624C632.844 416 640 408.844 640 400S632.844 384 624 384ZM416 128H481.281C485.969 128 490.391 130.031 493.422 133.578L564.453 216.438C566.463 218.79 568.18 221.339 569.688 224H416V128ZM160 480C124.703 480 96 451.297 96 416S124.703 352 160 352S224 380.703 224 416S195.297 480 160 480ZM480 480C444.703 480 416 451.297 416 416S444.703 352 480 352S544 380.703 544 416S515.297 480 480 480ZM576 384H570.4C557.18 346.774 521.705 320 480 320S402.82 346.774 389.6 384H250.4C237.18 346.774 201.705 320 160 320S82.82 346.774 69.6 384H64C46.327 384 32 369.673 32 352V64C32 46.327 46.327 32 64 32H352C369.673 32 384 46.327 384 64V288C384 296.836 391.164 304 400 304C408.837 304 416 296.836 416 288V256H576V384ZM288 120H264V96C264 78.359 249.656 64 232 64H184C166.344 64 152 78.359 152 96V120H128C110.344 120 96 134.359 96 152V200C96 217.641 110.344 232 128 232H152V256C152 273.641 166.344 288 184 288H232C249.656 288 264 273.641 264 256V232H288C305.656 232 320 217.641 320 200V152C320 134.359 305.656 120 288 120ZM288 200H232V256H184V200H128V152H184V96H232V152H288V200Z" })
  }
));
TruckMedicalLight.displayName = "TruckMedicalLight";
var TruckMedical_default = TruckMedicalLight;
