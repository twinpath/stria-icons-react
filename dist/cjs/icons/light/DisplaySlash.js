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
var DisplaySlash_exports = {};
__export(DisplaySlash_exports, {
  default: () => DisplaySlash_default
});
module.exports = __toCommonJS(DisplaySlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DisplaySlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M543.999 32C561.644 32 575.999 46.355 575.999 64V352C575.999 353.273 575.417 354.357 575.273 355.592L602.763 377.295C606.11 369.529 607.999 360.992 607.999 352V64C607.999 28.652 579.345 0 543.999 0H124.862L165.394 32H543.999ZM463.999 480H413.505L394.54 416.781L353.019 384H95.999C78.355 384 63.999 369.645 63.999 352V155.818L31.999 130.555V352C31.999 387.348 60.653 416 95.999 416H245.692L226.493 480H175.999C167.163 480 159.999 487.164 159.999 496S167.163 512 175.999 512H463.999C472.835 512 479.999 504.836 479.999 496S472.835 480 463.999 480ZM259.905 480L279.105 416H360.894L380.093 480H259.905ZM633.923 483.436L25.921 3.42C18.984 -2.033 8.921 -0.83 3.437 6.061C-2.032 12.998 -0.845 23.061 6.077 28.545L614.079 508.562C617.017 510.875 620.517 512 623.985 512C628.72 512 633.407 509.906 636.564 505.922C642.032 498.984 640.845 488.92 633.923 483.436Z" })
  }
));
DisplaySlashLight.displayName = "DisplaySlashLight";
var DisplaySlash_default = DisplaySlashLight;
