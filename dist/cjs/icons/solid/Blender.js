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
var Blender_exports = {};
__export(Blender_exports, {
  default: () => Blender_default
});
module.exports = __toCommonJS(Blender_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BlenderSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 64H494.5L512 0H48C21.49 0 0 21.49 0 48V208C0 234.51 21.49 256 48 256H151.25L160 352H416L433.5 288H336C327.199 288 320 280.801 320 272S327.199 256 336 256H442.125L459.625 192H336C327.199 192 320 184.801 320 176S327.199 160 336 160H468.375L485.875 96H336C327.199 96 320 88.801 320 80S327.199 64 336 64ZM64 192V64H133.875L145.5 192H64ZM416 384H160C124.625 384 96 412.625 96 448V480C96 497.625 110.375 512 128 512H448C465.625 512 480 497.625 480 480V448C480 412.625 451.375 384 416 384ZM288 480C270.375 480 256 465.625 256 448S270.375 416 288 416S320 430.375 320 448S305.625 480 288 480Z" })
  }
));
BlenderSolid.displayName = "BlenderSolid";
var Blender_default = BlenderSolid;
