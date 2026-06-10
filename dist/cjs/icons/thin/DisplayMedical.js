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
var DisplayMedical_exports = {};
__export(DisplayMedical_exports, {
  default: () => DisplayMedical_default
});
module.exports = __toCommonJS(DisplayMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DisplayMedicalThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 352H512V64H64V352ZM80 80H496V336H80V80ZM528 0H48C21.5 0 0 21.5 0 48V368C0 394.5 21.5 416 48 416H228.91L202.242 496H136C131.594 496 128 499.578 128 504S131.594 512 136 512H440C444.406 512 448 508.422 448 504S444.406 496 440 496H373.785L347.117 416H528C554.5 416 576 394.5 576 368V48C576 21.5 554.5 0 528 0ZM356.91 496H219.117L245.785 416H330.242L356.91 496ZM560 368C560 385.645 545.645 400 528 400H48C30.355 400 16 385.645 16 368V48C16 30.355 30.355 16 48 16H528C545.645 16 560 30.355 560 48V368ZM368 168H328V128C328 114.766 317.234 104 304 104H272C258.766 104 248 114.766 248 128V168H208C194.766 168 184 178.766 184 192V224C184 237.234 194.766 248 208 248H248V288C248 301.234 258.766 312 272 312H304C317.234 312 328 301.234 328 288V248H368C381.234 248 392 237.234 392 224V192C392 178.766 381.234 168 368 168ZM376 224C376 228.406 372.406 232 368 232H312V288C312 292.406 308.406 296 304 296H272C267.594 296 264 292.406 264 288V232H208C203.594 232 200 228.406 200 224V192C200 187.594 203.594 184 208 184H264V128C264 123.594 267.594 120 272 120H304C308.406 120 312 123.594 312 128V184H368C372.406 184 376 187.594 376 192V224Z" })
  }
));
DisplayMedicalThin.displayName = "DisplayMedicalThin";
var DisplayMedical_default = DisplayMedicalThin;
