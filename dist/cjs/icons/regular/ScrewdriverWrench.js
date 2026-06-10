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
var ScrewdriverWrench_exports = {};
__export(ScrewdriverWrench_exports, {
  default: () => ScrewdriverWrench_default
});
module.exports = __toCommonJS(ScrewdriverWrench_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScrewdriverWrenchRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M223.988 96.099L223.993 144.843L253.744 174.587C246.866 139.716 257.237 104.22 282.233 79.22C302.48 58.971 329.352 48.094 357.225 48.092L358.35 48.092L300.984 105.215L316.117 195.828L406.737 210.943L463.978 153.694C464.231 181.941 453.359 209.189 432.737 229.688C423.489 239.063 412.615 246.188 400.991 251.314C402.741 252.939 404.866 254.188 406.616 255.938L437.242 286.681C447.741 280.306 457.74 272.681 466.738 263.681C504.732 225.682 520.351 169.437 507.347 117.195C504.346 104.946 494.97 95.323 482.971 91.95C470.722 88.576 457.723 92.077 448.974 100.952L390.233 159.576L357.86 154.204L352.482 121.709L411.098 63.21C419.972 54.21 423.345 41.211 419.969 29.213C416.718 17.09 406.968 7.717 394.719 4.718C341.596 -8.525 286.851 6.728 248.232 45.227C237.983 55.477 229.735 66.977 222.862 79.226L223.987 79.976L223.988 96.099ZM106.029 453.943C93.282 466.692 70.783 466.695 57.908 453.947C51.533 447.574 47.907 438.95 47.906 429.951C47.905 420.827 51.404 412.328 57.903 405.953L192.257 271.581L158.381 237.713L24.027 371.96C8.53 387.46 0.032 408.083 0.034 429.955S8.538 472.45 24.038 487.946C39.539 503.443 60.163 511.94 82.036 511.938C103.91 511.936 124.533 503.435 140.031 487.936L240.89 387.063C231.264 371.191 225.762 353.193 225.261 334.946L106.029 453.943ZM501.123 395.663L383.995 278.562C360.869 255.442 326.371 250.946 298.624 264.697L191.996 158.094L191.99 95.977L63.99 0L0 63.998L96.006 191.974L158.127 191.969L264.755 298.571C251.133 326.319 255.511 360.815 278.637 383.935L395.765 501.035C410.265 515.657 433.889 515.655 448.387 501.03L501.128 448.281C515.626 433.657 515.624 410.159 501.123 395.663Z" })
  }
));
ScrewdriverWrenchRegular.displayName = "ScrewdriverWrenchRegular";
var ScrewdriverWrench_default = ScrewdriverWrenchRegular;
