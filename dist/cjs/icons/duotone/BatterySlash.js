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
const BatterySlashDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 352V171.918L40.605 128.5C35.283 137.834 32 148.486 32 160V352C32 387.346 60.654 416 96 416H407.416L325.76 352H96ZM576 192V160C576 124.654 547.346 96 512 96H154.779L236.434 160H512V352H481.398L548.117 404.293C564.869 392.842 576 373.859 576 352V320C593.674 320 608 305.674 608 288V224C608 206.326 593.674 192 576 192Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24.032 0.032C29.189 0.032 34.407 1.703 38.813 5.141L630.81 469.134C641.248 477.305 643.06 492.399 634.873 502.836C626.748 513.242 611.685 515.117 601.186 506.914L9.189 42.922C-1.249 34.75 -3.061 19.656 5.126 9.219C9.845 3.188 16.907 0.032 24.032 0.032Z" })
    ]
  }
));
BatterySlashDuotone.displayName = "BatterySlashDuotone";
var BatterySlash_default = BatterySlashDuotone;
