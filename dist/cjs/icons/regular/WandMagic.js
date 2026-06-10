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
var WandMagic_exports = {};
__export(WandMagic_exports, {
  default: () => WandMagic_default
});
module.exports = __toCommonJS(WandMagic_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WandMagicRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M497.944 48L464.02 14.061C454.649 4.688 442.362 0 430.076 0S405.51 4.686 396.137 14.059L14.061 396.109C-4.685 414.854 -4.687 445.244 14.057 463.99L47.99 497.938C57.362 507.311 69.649 512 81.934 512S106.5 507.314 115.873 497.941L497.942 115.879C516.686 97.135 516.686 66.746 497.944 48ZM81.94 464.004L48 430.051L286.051 191.988L320.002 225.939L81.94 464.004ZM353.938 192L319.989 158.051L430.03 48.004C430.035 48.002 430.053 48 430.076 48L464 81.938L353.938 192Z" })
  }
));
WandMagicRegular.displayName = "WandMagicRegular";
var WandMagic_default = WandMagicRegular;
