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
var MugTeaSaucer_exports = {};
__export(MugTeaSaucer_exports, {
  default: () => MugTeaSaucer_default
});
module.exports = __toCommonJS(MugTeaSaucer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MugTeaSaucerDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M563.617 416H12.362C-12.639 416 0.736 480 48.362 480H527.742C575.368 480 588.618 416 563.617 416ZM191.99 256H255.992C273.617 256 287.993 241.625 287.993 224V157.25C287.993 148.75 284.617 140.625 278.617 134.625L239.992 96V32H207.991V96L169.365 134.625C163.365 140.625 159.99 148.75 159.99 157.25V224C159.99 241.625 174.365 256 191.99 256Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512.009 32H240.003V96L278.629 134.625C284.629 140.625 288.004 148.75 288.004 157.25V224C288.004 241.625 273.629 256 256.003 256H192.002C174.377 256 160.001 241.625 160.001 224V157.25C160.001 148.75 163.376 140.625 169.377 134.625L208.002 96V32H120.001C113.625 32 107.5 34.5 103 39C98.5 43.5 96 49.625 96 56V288C96 341 139.001 384 192.002 384H384.006C437.007 384 480.008 341 480.008 288H512.009C582.76 288 640.012 230.75 640.012 160S582.76 32 512.009 32ZM512.009 224H480.008V96H512.009C547.385 96 576.01 124.625 576.01 160S547.385 224 512.009 224Z" })
    ]
  }
));
MugTeaSaucerDuotone.displayName = "MugTeaSaucerDuotone";
var MugTeaSaucer_default = MugTeaSaucerDuotone;
