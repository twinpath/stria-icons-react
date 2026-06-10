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
const GraduationCapDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M323.991 143.516L161.116 184.234C121.749 194.09 92.515 225.01 83.393 263.113L83.393 263.113C90.942 268.969 96.116 277.707 96.116 288C96.116 297.953 91.302 306.488 84.177 312.359L109.011 461.367C110.636 471.121 103.116 480 93.229 480H35.003C25.116 480 17.597 471.121 19.222 461.367L44.056 312.359C36.931 306.488 32.116 297.953 32.116 288C32.116 274.758 40.163 263.395 51.634 258.531L51.634 258.531C62.657 207.693 101.216 166.248 153.366 153.203L316.241 112.484C324.679 110.234 333.522 115.531 335.647 124.125C337.772 132.688 332.585 141.375 323.991 143.516Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 160C640 170.383 633.562 179.648 623.953 183.086L341.215 284.316C327.482 289.227 312.518 289.227 298.785 284.316L108.234 216.092C121.963 200.908 139.961 189.502 161 184.234L323.875 143.516C332.469 141.375 337.656 132.688 335.531 124.125C333.406 115.531 324.563 110.234 316.125 112.484L153.25 153.203C121.406 161.168 94.732 179.807 76.199 204.623L16.047 183.086C6.438 179.648 0 170.383 0 160S6.438 140.352 16.047 136.914L298.785 35.684C312.518 30.773 327.482 30.773 341.215 35.684L623.953 136.914C633.562 140.352 640 149.617 640 160ZM351.988 314.449C341.688 318.133 330.926 320 320 320C309.076 320 298.312 318.133 287.998 314.445L142.781 262.453L128 405.328C128 446.602 213.999 480 320 480C425.999 480 512 446.602 512 405.328L497.219 262.453L351.988 314.449Z" })
    ]
  }
));
GraduationCapDuotone.displayName = "GraduationCapDuotone";
var GraduationCap_default = GraduationCapDuotone;
