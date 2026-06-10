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
const PrintMagnifyingGlassSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128.012 64H357.525L384.037 90.51V160H448.043V77.25C448.043 68.766 444.668 60.625 438.668 54.625L393.414 9.375C387.412 3.375 379.256 0 370.787 0H96.01C78.352 0 64.006 14.328 64.006 32V160H128.012V64ZM635.312 462.001L557.93 384.625C569.18 365.625 576.057 343.75 576.057 320C576.057 249.25 518.801 192 448.043 192C377.287 192 320.031 249.25 320.031 320S377.287 448 448.043 448C471.797 448 493.674 441.125 512.676 429.875L590.059 507.25C596.309 513.5 606.559 513.5 612.811 507.25L635.312 484.75C641.562 478.5 641.562 468.25 635.312 462.001ZM448.043 384C412.666 384 384.037 355.375 384.037 320S412.666 256 448.043 256C483.422 256 512.051 284.625 512.051 320S483.422 384 448.043 384ZM448 480C412.268 480 379.635 467.91 353.139 448H128.012V352H291.264C289.154 341.656 288.027 330.957 288.027 320C288.027 267.475 313.811 221.189 353.021 192H64.006C28.656 192 0 220.654 0 256V352C0 369.674 14.328 384 32.004 384H64.006V480C64.006 497.674 78.334 512 96.01 512H416.041C433.717 512 448.043 497.674 448.043 480L448.041 479.998C448.027 479.998 448.014 480 448 480Z" })
  }
));
PrintMagnifyingGlassSolid.displayName = "PrintMagnifyingGlassSolid";
var PrintMagnifyingGlass_default = PrintMagnifyingGlassSolid;
