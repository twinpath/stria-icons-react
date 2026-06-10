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
const MugTeaSaucerSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M563.618 416H12.362C-12.639 416 0.736 480 48.362 480H527.742C575.368 480 588.618 416 563.618 416ZM511.997 32H239.992V96L278.617 134.625C284.617 140.625 287.993 148.75 287.993 157.25V224C287.993 241.625 273.617 256 255.992 256H191.991C174.365 256 159.99 241.625 159.99 224V157.25C159.99 148.75 163.365 140.625 169.365 134.625L207.991 96V32H119.989C113.614 32 107.489 34.5 102.989 39C98.489 43.5 95.988 49.625 95.988 56V288C95.988 341 138.989 384 191.991 384H383.995C436.996 384 479.997 341 479.997 288H511.997C582.749 288 640 230.75 640 160S582.749 32 511.997 32ZM511.997 224H479.997V96H511.997C547.373 96 575.999 124.625 575.999 160S547.373 224 511.997 224Z" })
  }
));
MugTeaSaucerSolid.displayName = "MugTeaSaucerSolid";
var MugTeaSaucer_default = MugTeaSaucerSolid;
