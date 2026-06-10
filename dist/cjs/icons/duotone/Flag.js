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
var Flag_exports = {};
__export(Flag_exports, {
  default: () => Flag_default
});
module.exports = __toCommonJS(Flag_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FlagDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M511.521 30.727V332.102C511.521 344.352 503.574 355.852 490.887 360.852C446.941 377.973 410.838 383.941 378.924 383.941C305.297 383.941 254 352.16 180.371 352.16C147.398 352.16 109.461 359.219 63.521 377.676V32C63.521 29.305 62.619 26.914 62 24.414C110.338 7.207 154.771 0.301 184.711 0.301H184.738C253.812 0.309 288.654 32.168 348.615 32.168C376.891 32.168 410.762 25.082 456.449 4.227C462.777 1.344 469.391 0 475.756 0C494.768 0 511.521 11.996 511.521 30.727Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 0C14.25 0 0 14.25 0 32V496C0 504.75 7.25 512 16 512H48C56.75 512 64 504.75 64 496V32C64 14.25 49.75 0 32 0Z" })
    ]
  }
));
FlagDuotone.displayName = "FlagDuotone";
var Flag_default = FlagDuotone;
