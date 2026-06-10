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
var CloudArrowUp_exports = {};
__export(CloudArrowUp_exports, {
  default: () => CloudArrowUp_default
});
module.exports = __toCommonJS(CloudArrowUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudArrowUpLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M571.75 238.75C574.5 228.875 576 218.625 576 208C576 146.125 525.875 96 464 96C447.25 96 431.125 99.625 416 106.75C384.375 61.75 331.75 32 272 32C177.625 32 100.25 106.5 96.25 200.25C39.25 220.25 0 274.25 0 336C0 415.625 64.375 480 144 480H512C582.75 480 640 422.75 640 352C640 305 614.25 261.25 571.75 238.75ZM507.541 448H149.473C91.164 448 38.564 405.836 32.609 347.832C26.795 291.215 63.266 241.938 114.271 227.975C122.639 225.684 128.051 217.715 128.002 209.039C128 208.705 128 208.369 128 208.033C127.99 147.34 165.129 91.375 222.709 72.186C294.18 48.365 361.916 78.912 394.988 133.078C400.973 142.881 413.342 145.07 423.207 139.189C440.092 129.125 460.986 125.121 483.15 130.201C509.998 136.355 532.596 157.201 540.406 183.615C546.205 203.227 544.713 222.357 537.898 238.775C533.762 248.744 539.959 259.525 549.883 263.771C587.223 279.746 612.301 318.83 607.387 363.018C601.902 412.318 557.146 448 507.541 448ZM251.312 267.312L304 214.625V384C304 392.844 311.156 400 320 400S336 392.844 336 384V214.625L388.688 267.312C394.938 273.562 405.063 273.562 411.312 267.312S417.562 250.937 411.312 244.688L331.312 164.688C328.188 161.562 324.094 160 320 160S311.812 161.562 308.688 164.688L228.688 244.688C222.438 250.938 222.438 261.063 228.688 267.312S245.062 273.562 251.312 267.312Z" })
  }
));
CloudArrowUpLight.displayName = "CloudArrowUpLight";
var CloudArrowUp_default = CloudArrowUpLight;
