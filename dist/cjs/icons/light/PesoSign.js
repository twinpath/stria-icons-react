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
var PesoSign_exports = {};
__export(PesoSign_exports, {
  default: () => PesoSign_default
});
module.exports = __toCommonJS(PesoSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PesoSignLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 240H348.943C350.863 229.605 352 218.939 352 208C352 202.6 351.668 197.277 351.189 192H368C376.844 192 384 184.844 384 176S376.844 160 368 160H345.18C324.223 86.248 256.428 32 176.078 32H72.01C49.915 32 32.005 49.915 32.01 72.01L32.033 160H16C7.156 160 0 167.156 0 176S7.156 192 16 192H32.074C32.098 207.66 32.121 223.715 32.146 240H16C7.156 240 0 247.156 0 256S7.156 272 16 272H32.195C32.244 304.688 32.285 336.939 32.297 365.719C32.188 366.469 32.141 367.219 32.141 368S32.203 369.531 32.297 370.281C32.328 413 32.297 447.563 32.141 463.844C32.062 472.688 39.156 479.906 47.984 480H48.141C56.906 480 64.062 472.938 64.141 464.156C64.281 449.594 64.312 420.469 64.312 384H176.078C250.492 384 314.113 337.451 339.779 272H368C376.844 272 384 264.844 384 256S376.844 240 368 240ZM64.015 79.788C64.026 70.958 71.187 64 80.017 64H176.078C238.535 64 291.291 104.25 311.158 160H64.039C64.005 128.751 63.99 100.805 64.015 79.788ZM64.078 192H318.383C318.98 197.322 320 202.521 320 208C320 219.033 318.492 229.672 316.133 240H64.146C64.123 223.756 64.1 207.619 64.078 192ZM176.078 352H64.281C64.27 326.881 64.23 299.551 64.191 272H304.326C280.678 319.209 232.354 352 176.078 352Z" })
  }
));
PesoSignLight.displayName = "PesoSignLight";
var PesoSign_default = PesoSignLight;
