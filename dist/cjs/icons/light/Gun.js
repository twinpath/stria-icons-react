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
var Gun_exports = {};
__export(Gun_exports, {
  default: () => Gun_default
});
module.exports = __toCommonJS(Gun_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GunLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 64H512V48C512 39.164 504.836 32 496 32S480 39.164 480 48V64H43.172C19.328 64 0 83.328 0 107.172V196.828C0 220.672 19.328 240 43.172 240H43.174C64.434 240 79.783 260.348 73.941 280.793L33.252 439.207C27.41 459.652 42.76 480 64.02 480H183.863C198.15 480 210.705 470.531 214.631 456.793L242.361 352H320.938C341.625 352 359.938 338.812 366.469 319.188L392.873 240H434.746C443.232 240 451.371 236.629 457.373 230.629L480 208H544C561.674 208 576 193.672 576 176V96C576 78.328 561.674 64 544 64ZM183.863 448L64.246 447.168L104.711 289.582C109.568 272.574 106.889 255 98.117 240H238.9L183.863 448ZM336.094 309.062C333.938 315.625 327.844 320 320.938 320H250.83L272 240H359.121L336.094 309.062ZM544 176H466.744L434.746 208H43.172C37.002 208 32 203 32 196.828V107.172C32 101 37.002 96 43.172 96H544V176Z" })
  }
));
GunLight.displayName = "GunLight";
var Gun_default = GunLight;
