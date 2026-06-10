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
const PrintMagnifyingGlassLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M635.312 484.688L548.738 398.113C565.57 376.445 576 349.564 576 320C576 249.307 518.693 192 448 192C377.309 192 320 249.307 320 320S377.309 448 448 448C477.564 448 504.445 437.57 526.113 420.738L612.687 507.312C615.812 510.438 619.906 512 624 512S632.188 510.438 635.312 507.312C641.562 501.062 641.562 490.938 635.312 484.688ZM448 416C395.066 416 352 372.936 352 320S395.066 224 448 224C500.936 224 544 267.064 544 320S500.936 416 448 416ZM304 224C312.836 224 320 216.836 320 208C320 199.162 312.836 192 304 192H96V64C96 46.327 110.327 32 128 32H377.375L416 70.625V144C416 152.836 423.164 160 432 160S448 152.836 448 144V70.625C448 62.141 444.63 54.005 438.631 48.006L399.994 9.369C393.995 3.37 385.859 0 377.375 0H128C92.654 0 64 28.654 64 64V192C28.703 192 0 220.703 0 256V367.166C0 375.135 5.455 382.512 13.322 383.783C23.352 385.404 32 377.721 32 368V256C32 238.327 46.327 224 64 224H304ZM400 480H96V352H272C280.836 352 288 344.836 288 336C288 327.162 280.836 320 272 320H96C78.326 320 64 334.326 64 352V480C64 497.672 78.326 512 96 512H400C408.836 512 416 504.836 416 496C416 487.162 408.836 480 400 480Z" })
  }
));
PrintMagnifyingGlassLight.displayName = "PrintMagnifyingGlassLight";
var PrintMagnifyingGlass_default = PrintMagnifyingGlassLight;
