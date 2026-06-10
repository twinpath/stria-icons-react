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
var FloppyDiskPen_exports = {};
__export(FloppyDiskPen_exports, {
  default: () => FloppyDiskPen_default
});
module.exports = __toCommonJS(FloppyDiskPen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FloppyDiskPenDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M433.938 129.938L350.062 46.062C342.328 38.328 327.051 32 316.113 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H259.807L271.094 423.531C273 413.922 277.688 405.078 284.688 398.047L448 234.734V163.887C448 152.949 441.672 137.672 433.938 129.938ZM224 416C188.656 416 160 387.344 160 352S188.656 288 224 288S288 316.656 288 352S259.344 416 224 416ZM320 208C320 216.836 312.836 224 304 224H80C71.164 224 64 216.836 64 208V112C64 103.162 71.164 96 80 96H304C312.836 96 320 103.162 320 112V208Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M565.457 255.648L544.355 234.543C530.297 220.484 507.504 220.484 493.447 234.543L455.312 272.68L527.322 344.688L565.453 306.559C579.513 292.5 579.515 269.707 565.457 255.648ZM307.384 420.609C304.871 423.121 303.158 426.324 302.461 429.813L288.179 501.227C286.922 507.516 292.472 513.07 298.769 511.813L370.189 497.527C373.672 496.828 376.871 495.121 379.384 492.605L478.306 393.695H478.312L504.697 367.313L432.689 295.305L307.384 420.609Z" })
    ]
  }
));
FloppyDiskPenDuotone.displayName = "FloppyDiskPenDuotone";
var FloppyDiskPen_default = FloppyDiskPenDuotone;
