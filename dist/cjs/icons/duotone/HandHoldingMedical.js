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
var HandHoldingMedical_exports = {};
__export(HandHoldingMedical_exports, {
  default: () => HandHoldingMedical_default
});
module.exports = __toCommonJS(HandHoldingMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandHoldingMedicalDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M559.729 392.211L424.676 491.727C406.896 504.812 385.006 512 362.977 512H15.998C7.25 512 0 504.75 0 496V400.023C0 391.273 7.25 384.023 15.998 384.023H71.369L117.867 346.281C138.865 329.281 164.988 320.031 191.986 320.031H351.977C371.475 320.031 386.848 337.406 383.598 357.406C380.975 373.148 366.225 384.023 350.227 384.023H271.98C263.232 384.023 255.982 391.273 255.982 400.023C255.982 408.766 263.232 416.016 271.98 416.016H392.592L512.264 327.844C530.059 314.656 555.072 318.5 568.197 336.312C581.305 354.094 577.51 379.117 559.729 392.211Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 96V160C400 168.836 392.836 176 384 176H320V240C320 248.836 312.836 256 304 256H240C231.164 256 224 248.836 224 240V176H160C151.164 176 144 168.836 144 160V96C144 87.162 151.164 80 160 80H224V16C224 7.162 231.164 0 240 0H304C312.836 0 320 7.162 320 16V80H384C392.836 80 400 87.162 400 96Z" })
    ]
  }
));
HandHoldingMedicalDuotone.displayName = "HandHoldingMedicalDuotone";
var HandHoldingMedical_default = HandHoldingMedicalDuotone;
