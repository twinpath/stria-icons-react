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
var GraduationCap_exports = {};
__export(GraduationCap_exports, {
  default: () => GraduationCap_default
});
module.exports = __toCommonJS(GraduationCap_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GraduationCapSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M623.953 136.914L341.215 35.684C327.482 30.773 312.518 30.773 298.785 35.684L16.047 136.914C6.438 140.352 0 149.617 0 160S6.438 179.648 16.047 183.086L76.008 204.555C64.121 220.359 55.811 238.734 51.518 258.531C40.047 263.395 32 274.758 32 288C32 297.953 36.814 306.488 43.939 312.359L19.105 461.367C17.48 471.121 25 480 34.887 480H93.113C103 480 110.52 471.121 108.895 461.367L84.061 312.359C91.186 306.488 96 297.953 96 288C96 277.707 90.826 268.969 83.277 263.113C87.529 245.352 96.154 229.289 108.213 216.086L298.785 284.316C312.518 289.227 327.482 289.227 341.215 284.316L623.953 183.086C633.562 179.648 640 170.383 640 160S633.562 140.352 623.953 136.914ZM351.988 314.449C341.688 318.133 330.926 320 320 320C309.076 320 298.312 318.133 287.998 314.445L142.781 262.453L128 405.328C128 446.602 213.999 480 320 480C425.999 480 512 446.602 512 405.328L497.219 262.453L351.988 314.449Z" })
  }
));
GraduationCapSolid.displayName = "GraduationCapSolid";
var GraduationCap_default = GraduationCapSolid;
