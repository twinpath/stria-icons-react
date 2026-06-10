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
var FloppyDisks_exports = {};
__export(FloppyDisks_exports, {
  default: () => FloppyDisks_default
});
module.exports = __toCommonJS(FloppyDisks_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FloppyDisksRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M48 432V96C21.49 96 0 117.492 0 144V448C0 483.344 28.654 512 64 512H368C394.51 512 416 490.508 416 464H80C62.326 464 48 449.672 48 432ZM497.945 97.945L414.055 14.053C405.055 5.055 392.852 0 380.125 0H160C124.654 0 96 28.652 96 64V352C96 387.346 124.654 416 160 416H448C483.346 416 512 387.346 512 352V131.875C512 119.148 506.945 106.943 497.945 97.945ZM224 48H336V96H224V48ZM464 352C464 360.836 456.836 368 448 368H160C151.164 368 144 360.836 144 352V64C144 55.162 151.164 48 160 48H176V120C176 133.254 186.746 144 200 144H360C373.254 144 384 133.254 384 120V51.875L462.232 130.107C463.363 131.238 464 132.773 464 134.375V352ZM304 192C268.799 192 240 220.799 240 256C240 291.199 268.799 320 304 320C339.199 320 368 291.199 368 256C368 220.799 339.199 192 304 192Z" })
  }
));
FloppyDisksRegular.displayName = "FloppyDisksRegular";
var FloppyDisks_default = FloppyDisksRegular;
