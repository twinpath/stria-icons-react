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
var BatterySlash_exports = {};
__export(BatterySlash_exports, {
  default: () => BatterySlash_default
});
module.exports = __toCommonJS(BatterySlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BatterySlashSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 352V171.918L40.605 128.5C35.283 137.834 32 148.486 32 160V352C32 387.346 60.654 416 96 416H407.416L325.76 352H96ZM630.81 469.102L548.121 404.291C564.871 392.84 576 373.859 576 352V320C593.674 320 608 305.674 608 288V224C608 206.326 593.674 192 576 192V160C576 124.654 547.345 96 512 96H154.777L38.812 5.109C34.406 1.672 29.187 0 24.031 0C16.906 0 9.844 3.156 5.125 9.188C-3.061 19.625 -1.248 34.719 9.187 42.891L601.185 506.883C611.685 515.086 626.748 513.211 634.873 502.805C643.06 492.367 641.248 477.273 630.81 469.102ZM512 352H481.402L236.433 160H512V352Z" })
  }
));
BatterySlashSolid.displayName = "BatterySlashSolid";
var BatterySlash_default = BatterySlashSolid;
