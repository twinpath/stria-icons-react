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
const GlassCitrusSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M319.98 128H32.019C23.021 128 14.398 131.875 8.273 138.5C2.273 145.25 -0.725 154.125 0.15 163.125L32.144 483.125C33.769 499.5 47.517 512 64.015 512H287.984C304.482 512 318.23 499.5 319.855 483.125L351.849 163.125C352.724 154.125 349.726 145.25 343.726 138.5C337.601 131.875 328.978 128 319.98 128ZM277.661 256H74.337L67.999 192H283.999L277.661 256ZM368.011 0C305.392 0 252.648 40.25 232.9 96H285.394C302.017 67.5 332.64 48 368.011 48C421.007 48 464.003 91 464.003 144C464.003 194.125 425.382 234.875 376.386 239.125L371.511 287.625C449.38 285.75 511.999 222.375 511.999 144C511.999 64.5 447.505 0 368.011 0Z" })
  }
));
GlassCitrusSolid.displayName = "GlassCitrusSolid";
var GlassCitrus_default = GlassCitrusSolid;
