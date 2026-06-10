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
var GlassCitrus_exports = {};
__export(GlassCitrus_exports, {
  default: () => GlassCitrus_default
});
module.exports = __toCommonJS(GlassCitrus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GlassCitrusLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M511.126 128.27C506.907 90.039 488.048 55.744 458.032 31.684C428.001 7.623 390.267 -3.406 352.204 0.922C308.53 5.748 269.968 29.793 246.405 66.9C241.655 74.352 243.874 84.242 251.327 88.977C258.765 93.771 268.671 91.521 273.405 84.055C291.749 55.182 321.751 36.48 355.704 32.73C385.532 29.387 414.673 37.949 438.032 56.65C461.376 75.367 476.032 102.037 479.314 131.77C485.501 187.811 448.86 239.916 394.11 252.961C385.517 255.008 380.204 263.633 382.251 272.225C384.001 279.584 390.564 284.521 397.798 284.521C399.032 284.521 400.282 284.381 401.517 284.084C471.954 267.303 519.079 200.309 511.126 128.27ZM320.026 128.035H32.024C23.024 128.035 14.399 131.91 8.274 138.533C2.274 145.283 -0.726 154.158 0.149 163.156L32.149 483.127C33.774 499.502 47.524 512 64.024 512H288.024C304.524 512 318.276 499.502 319.901 483.127L351.901 163.156C352.776 154.158 349.776 145.283 343.776 138.533C337.651 131.91 329.026 128.035 320.026 128.035ZM288.024 480.002H64.024L44.774 288.02H307.274L288.024 480.002ZM310.399 256.023H41.649L32.024 160.031H320.026L310.399 256.023Z" })
  }
));
GlassCitrusLight.displayName = "GlassCitrusLight";
var GlassCitrus_default = GlassCitrusLight;
