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
const FloppyDiskPenRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M48 416V96C48 87.162 55.164 80 64 80H80V184C80 197.254 90.746 208 104 208H296C309.254 208 320 197.254 320 184V83.875L398.25 162.125C399.371 163.244 400 164.766 400 166.35V282.734L448 234.734V163.799C448 151.123 442.965 138.963 433.999 130L350.053 46.053C341.055 37.055 328.85 32 316.125 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H259.807L269.4 432H64C55.164 432 48 424.836 48 416ZM128 80H272V160H128V80ZM307.385 420.609C304.871 423.121 303.158 426.324 302.461 429.813L288.18 501.227C286.922 507.516 292.473 513.07 298.77 511.813L370.189 497.527C373.672 496.828 376.871 495.121 379.385 492.605L478.307 393.695H478.312L504.697 367.313L432.689 295.305L307.385 420.609ZM224 256C188.799 256 160 284.799 160 320C160 355.199 188.799 384 224 384C259.199 384 288 355.199 288 320C288 284.799 259.199 256 224 256ZM565.457 255.648L544.355 234.543C530.297 220.484 507.504 220.484 493.447 234.543L455.313 272.68L527.322 344.688L565.453 306.559C579.514 292.5 579.516 269.707 565.457 255.648Z" })
  }
));
FloppyDiskPenRegular.displayName = "FloppyDiskPenRegular";
var FloppyDiskPen_default = FloppyDiskPenRegular;
