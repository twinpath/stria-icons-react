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
var MonitorWaveform_exports = {};
__export(MonitorWaveform_exports, {
  default: () => MonitorWaveform_default
});
module.exports = __toCommonJS(MonitorWaveform_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MonitorWaveformSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 128H96V256H197C200 256 202.75 257.75 204.125 260.375L224 300.25L273.75 200.875C279.625 189 296.375 189 302.25 200.875L329.875 256H400C408.875 256 416 263.125 416 272S408.875 288 400 288H310.125L288 243.75L238.25 343.125C232.375 355 215.625 355 209.75 343.125L182.125 288H96V384H480V128ZM528 32H48C21.5 32 0 53.5 0 80V432C0 458.5 21.5 480 48 480H528C554.5 480 576 458.5 576 432V80C576 53.5 554.5 32 528 32ZM512 416H64V96H512V416Z" })
  }
));
MonitorWaveformSolid.displayName = "MonitorWaveformSolid";
var MonitorWaveform_default = MonitorWaveformSolid;
