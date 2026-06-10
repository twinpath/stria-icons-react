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
var Cloud_exports = {};
__export(Cloud_exports, {
  default: () => Cloud_default
});
module.exports = __toCommonJS(Cloud_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M571.75 238.75C574.5 228.875 576 218.625 576 208C576 146.125 525.875 96 464 96C447.25 96 431.125 99.625 416 106.75C384.375 61.75 331.75 32 272 32C177.625 32 100.25 106.5 96.25 200.25C39.25 220.25 0 274.25 0 336C0 415.625 64.375 480 144 480H512C582.75 480 640 422.75 640 352C640 305 614.25 261.25 571.75 238.75ZM507.54 448H149.472C91.163 448 38.564 405.837 32.609 347.832C26.796 291.216 63.265 241.937 114.272 227.975C122.639 225.685 128.05 217.715 128.003 209.04C128.001 208.705 128 208.37 128 208.034C127.989 147.34 165.129 91.376 222.709 72.185C294.18 48.365 361.917 78.913 394.988 133.078C400.972 142.88 413.342 145.07 423.207 139.19C440.092 129.126 460.987 125.122 483.15 130.202C509.999 136.357 532.596 157.202 540.406 183.617C546.205 203.227 544.712 222.357 537.899 238.775C533.761 248.745 539.958 259.526 549.882 263.771C587.222 279.746 612.3 318.83 607.386 363.017C601.903 412.32 557.147 448 507.54 448Z" })
  }
));
CloudLight.displayName = "CloudLight";
var Cloud_default = CloudLight;
