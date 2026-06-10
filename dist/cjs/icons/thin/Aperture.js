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
var Aperture_exports = {};
__export(Aperture_exports, {
  default: () => Aperture_default
});
module.exports = __toCommonJS(Aperture_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ApertureThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM320.662 176H464.975C474.535 200.885 480 227.789 480 256C480 303.193 465.248 346.961 440.229 383.109L320.662 176ZM348.381 255.994L302.189 336H209.801L163.619 256.006L209.809 176H302.199L348.381 255.994ZM458.078 160H219.045L291.188 35.043C365.066 46.777 426.887 94.623 458.078 160ZM256 32C262.061 32 268.014 32.436 273.955 32.91L154.387 240.016L82.193 114.963C123.297 64.404 185.912 32 256 32ZM71.771 128.891L191.338 336H47.025C37.465 311.115 32 284.211 32 256C32 208.807 46.752 165.039 71.771 128.891ZM53.922 352H292.951L220.807 476.955C146.932 465.217 85.111 417.375 53.922 352ZM256 480C249.936 480 243.98 479.564 238.037 479.09L357.613 271.984L429.807 397.037C388.703 447.596 326.088 480 256 480Z" })
  }
));
ApertureThin.displayName = "ApertureThin";
var Aperture_default = ApertureThin;
