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
var HandHolding_exports = {};
__export(HandHolding_exports, {
  default: () => HandHolding_default
});
module.exports = __toCommonJS(HandHolding_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandHoldingDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M559.729 392.208L424.676 491.722C406.896 504.814 385.007 512 362.977 512H15.999C7.249 512 0 504.751 0 496.003V400.02C0 391.271 7.25 384.022 15.999 384.022H71.37L117.867 346.279C138.865 329.282 164.989 320.034 191.987 320.034H351.976C371.474 320.034 386.848 337.406 383.599 357.402C380.974 373.149 366.225 384.022 350.226 384.022H271.981C263.232 384.022 255.982 391.271 255.982 400.02S263.232 416.017 271.981 416.017H392.592L512.264 327.845C530.059 314.66 555.073 318.503 568.197 336.312C581.306 354.09 577.509 379.117 559.729 392.208Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
HandHoldingDuotone.displayName = "HandHoldingDuotone";
var HandHolding_default = HandHoldingDuotone;
