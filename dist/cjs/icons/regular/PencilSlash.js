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
var PencilSlash_exports = {};
__export(PencilSlash_exports, {
  default: () => PencilSlash_default
});
module.exports = __toCommonJS(PencilSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PencilSlashRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M630.81 469.102L408.847 295.133C464.132 239.844 519.892 184.084 557.3 146.676C582.292 121.684 582.2 81.256 557.21 56.262L519.702 18.748C507.208 6.252 490.829 0 474.45 0C458.07 0 441.695 6.25 429.195 18.75L265.325 182.645L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.188C-3.061 19.625 -1.249 34.717 9.189 42.889L601.185 506.883C611.685 515.086 626.747 513.211 634.872 502.805C643.06 492.367 641.247 477.273 630.81 469.102ZM303.378 212.469L384.935 130.902L445.064 191.035L370.794 265.307L303.378 212.469ZM302.407 333.705L268.114 368H207.999V307.871L234.997 280.871L196.939 251.041V251.039L95.036 352.955C92.802 355.189 91.28 358.033 90.659 361.131L64.32 492.854C62.296 502.967 70.155 512 79.945 512C80.993 512 82.062 511.896 83.144 511.68L214.855 485.336C217.952 484.717 220.796 483.195 223.03 480.963C223.03 480.963 276.392 427.598 340.458 363.527L340.454 363.525L302.407 333.705ZM195.945 440.168L120.8 455.197L135.827 380.047L159.999 355.875V416H220.114L195.945 440.168Z" })
  }
));
PencilSlashRegular.displayName = "PencilSlashRegular";
var PencilSlash_default = PencilSlashRegular;
