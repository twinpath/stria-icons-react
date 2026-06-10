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
var Cherries_exports = {};
__export(Cherries_exports, {
  default: () => Cherries_default
});
module.exports = __toCommonJS(Cherries_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CherriesLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M532.198 224.274C512.683 224.274 489.38 228.022 461.797 237.695C425.65 89.263 297.328 0 287.974 0C254.278 0 280.773 110.215 179.727 238.232C151.477 228.158 127.676 224.27 107.803 224.27C6.523 224.27 0 317.035 0 334.025C0 359.78 24.555 512 192.006 512C358.551 512 384.013 362.214 384.013 334.026C384.013 273.718 346.973 224.225 276.051 224.225C261.498 224.225 244.845 226.306 225.889 231.369C246.893 200.504 277.641 142.186 298.627 44.563C332.692 73.188 401.114 140.861 427.723 235.447C422.908 233.885 420.181 232.247 415.983 232.247C409.108 232.247 402.704 236.784 400.653 243.719C400.206 245.234 399.992 246.762 399.992 248.266C399.992 264.147 413.443 262.559 441.713 274.609L447.995 277.281L454.276 274.609C483.53 262.147 509.628 255.89 531.784 255.89C533.6 255.89 608 252.307 608 334.054C608 355.897 586.596 480 447.995 480C408.682 480 391.129 469.566 383.993 469.566C375.088 469.566 367.994 476.819 367.994 485.614C367.994 492.219 372.127 498.392 378.715 500.688C400.247 508.188 423.557 512 447.995 512C614.539 512 640.001 362.214 640.001 334.025C640.001 316.813 633.355 224.274 532.198 224.274ZM275.798 255.89C277.614 255.89 352.011 252.305 352.011 334.055C352.011 355.898 330.612 480 192.006 480C52.799 480 32.001 356.33 32.001 334.054C32.001 264.643 85.069 255.891 108.229 255.891C130.385 255.891 156.477 262.141 185.725 274.609L192.006 277.281L198.288 274.609C227.543 262.147 253.642 255.89 275.798 255.89Z" })
  }
));
CherriesLight.displayName = "CherriesLight";
var Cherries_default = CherriesLight;
