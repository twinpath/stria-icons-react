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
var TextSlash_exports = {};
__export(TextSlash_exports, {
  default: () => TextSlash_default
});
module.exports = __toCommonJS(TextSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TextSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M347.885 64L322.029 176.041L349.813 197.977L380.731 64H544.001V112C544.001 120.799 551.2 128 560.001 128C568.801 128 576.001 120.799 576.001 112V48C576.001 39.163 568.837 32 560.001 32H144C142.751 32 141.648 32.442 140.482 32.711L180.115 64H347.885ZM352 448H292.115L317.975 335.944L290.191 314.008L259.269 448H192C183.199 448 176 455.199 176 464C176 472.799 183.199 480 192 480H352C360.801 480 368 472.799 368 464C368 455.199 360.801 448 352 448ZM633.923 483.436L25.921 3.42C18.984 -2.033 8.921 -0.83 3.437 6.061C-2.032 12.998 -0.845 23.061 6.077 28.545L614.079 508.563C617.016 510.875 620.516 512 623.985 512C628.72 512 633.407 509.906 636.563 505.922C642.032 498.984 640.845 488.92 633.923 483.436Z" })
  }
));
TextSlashLight.displayName = "TextSlashLight";
var TextSlash_default = TextSlashLight;
