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
const WandMagicLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M497.944 48L464.02 14.061C454.649 4.688 442.362 0 430.076 0S405.51 4.686 396.137 14.059L14.061 396.109C-4.685 414.854 -4.687 445.244 14.057 463.99L47.99 497.938C57.362 507.311 69.649 512 81.934 512S106.5 507.314 115.873 497.941L497.942 115.879C516.686 97.135 516.686 66.746 497.944 48ZM93.246 475.314C89.168 479.391 84.408 480 81.934 480S74.698 479.391 70.623 475.314L36.686 441.363C32.61 437.287 32 432.525 32 430.051S32.61 422.814 36.688 418.738L280.408 175.033L336.969 231.594L93.246 475.314ZM475.315 93.252L359.596 208.971L303.033 152.408L418.764 36.686C422.842 32.607 427.602 32 430.076 32C432.553 32 437.315 32.607 441.387 36.682L475.313 70.625C481.551 76.863 481.551 87.014 475.315 93.252Z" })
  }
));
WandMagicLight.displayName = "WandMagicLight";
var WandMagic_default = WandMagicLight;
