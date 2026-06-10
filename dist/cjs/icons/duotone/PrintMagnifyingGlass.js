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
var PrintMagnifyingGlass_exports = {};
__export(PrintMagnifyingGlass_exports, {
  default: () => PrintMagnifyingGlass_default
});
module.exports = __toCommonJS(PrintMagnifyingGlass_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PrintMagnifyingGlassDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 173.508V90.51L357.49 64H128V192H352.879C313.713 221.166 288 267.414 288 320C288 330.98 289.197 341.662 291.342 352H128V448H352.879C379.527 467.844 412.221 480 448 480C448 497.674 433.674 512 416 512H96C78.326 512 64 497.674 64 480V384H32C14.326 384 0 369.674 0 352V256C0 220.654 28.654 192 64 192V32C64 14.328 78.344 0 96 0H370.75C379.219 0 387.375 3.375 393.375 9.375L438.625 54.625C444.625 60.625 448 68.766 448 77.25V160C425.209 160 403.623 164.92 384 173.508Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M635.281 462.001L557.898 384.625C569.148 365.625 576.025 343.75 576.025 320C576.025 249.25 518.77 192 448.012 192C377.256 192 320 249.25 320 320S377.256 448 448.012 448C471.766 448 493.643 441.125 512.645 429.875L590.027 507.25C596.277 513.5 606.527 513.5 612.779 507.25L635.281 484.75C641.531 478.5 641.531 468.25 635.281 462.001ZM448.012 384C412.635 384 384.006 355.375 384.006 320S412.635 256 448.012 256C483.391 256 512.02 284.625 512.02 320S483.391 384 448.012 384Z" })
    ]
  }
));
PrintMagnifyingGlassDuotone.displayName = "PrintMagnifyingGlassDuotone";
var PrintMagnifyingGlass_default = PrintMagnifyingGlassDuotone;
