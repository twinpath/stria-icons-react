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
var WavePulse_exports = {};
__export(WavePulse_exports, {
  default: () => WavePulse_default
});
module.exports = __toCommonJS(WavePulse_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WavePulseDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 240.01V272.009C640 280.883 632.875 288.008 624 288.008H499.75L444.625 398.254C438.75 410.129 425.999 417.003 412.875 415.878C399.625 414.503 388.625 405.254 385.125 392.379L323.75 167.262L255.25 486.751C252.25 501 239.75 511.5 225.125 512C224.75 512 224.375 512 224 512C209.75 512 197.125 502.5 193.25 488.751L135.875 288.008H16C7.125 288.008 0 280.883 0 272.009V240.01C0 231.135 7.125 224.01 16 224.01H160C174.25 224.01 186.875 233.51 190.75 247.259L219.5 348.006L288.75 25.267C291.75 10.893 304.375 0.393 319.125 0.018C333.875 -0.482 347 9.393 350.875 23.642L424.875 294.758L451.375 241.76C456.75 230.885 467.875 224.01 480 224.01H624C632.875 224.01 640 231.135 640 240.01Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
WavePulseDuotone.displayName = "WavePulseDuotone";
var WavePulse_default = WavePulseDuotone;
