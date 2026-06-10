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
var DropletSlash_exports = {};
__export(DropletSlash_exports, {
  default: () => DropletSlash_default
});
module.exports = __toCommonJS(DropletSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DropletSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M633.921 483.436L25.921 3.42C18.984 -2.033 8.921 -0.83 3.437 6.061C-2.032 12.998 -0.845 23.061 6.077 28.545L614.077 508.562C617.015 510.875 620.515 512 623.984 512C628.718 512 633.405 509.906 636.562 505.922C642.03 498.984 640.843 488.92 633.921 483.436ZM319.999 448C328.874 448 335.999 440.875 335.999 432S328.874 416 319.999 416C275.874 416 239.999 380.125 239.999 336C239.999 327.125 232.874 320 223.999 320S207.999 327.125 207.999 336C207.999 397.75 258.249 448 319.999 448ZM319.999 36C343.874 113.625 380.124 165.375 409.374 207.125C427.827 233.602 443.169 255.816 452.894 279.357L494.628 312.307C482.776 216.07 393.095 169.986 349.249 22.125C345.249 7.5 332.624 0 319.999 0C307.624 0 295.249 7.25 290.749 22.125C279.446 60.266 265.005 91.594 249.642 118.893L274.993 138.906C291.511 110.113 307.452 76.66 319.999 36ZM319.999 480C240.624 480 175.999 414.5 175.999 333.875C175.999 300.416 187.157 274.324 204.489 246.348L179.169 226.357C158.583 259.041 143.999 291.498 143.999 333.875C143.999 432.375 222.749 512 319.999 512C375.39 512 424.716 486.119 456.97 445.682L431.319 425.43C404.892 458.447 365.073 480 319.999 480Z" })
  }
));
DropletSlashLight.displayName = "DropletSlashLight";
var DropletSlash_default = DropletSlashLight;
