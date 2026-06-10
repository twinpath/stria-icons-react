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
var Campfire_exports = {};
__export(Campfire_exports, {
  default: () => Campfire_default
});
module.exports = __toCommonJS(Campfire_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CampfireLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256.031 320C335.531 320 400.031 255.5 400.031 176C400.031 142.75 366.656 74 320.031 32C306.656 44 294.531 56.75 283.906 69.5C266.406 46 244.656 22.25 220.031 0C156.906 57 112.031 131.25 112.031 176C112.031 255.5 176.531 320 256.031 320ZM220.156 44.375C234.281 58.75 247.156 73.75 258.281 88.625L282.406 121L308.406 90C311.906 85.75 315.656 81.625 319.406 77.625C350.031 114.5 368.031 159.25 368.031 176C368.031 237.75 317.781 288 256.031 288S144.031 237.75 144.031 176C144.031 148.25 172.031 94.375 220.156 44.375ZM501.516 480.969L302.51 408L501.516 335.031C509.797 331.969 514.062 322.781 511.016 314.5C507.969 306.188 498.844 301.969 490.484 304.969L256 390.947L21.516 304.969C13.219 301.969 4.031 306.187 0.984 314.5C-2.063 322.781 2.203 331.969 10.484 335.031L209.49 408L10.484 480.969C2.203 484.031 -2.063 493.219 0.984 501.5C3.359 508 9.484 512 16 512C17.828 512 19.687 511.688 21.516 511.031L256 425.053L490.484 511.031C492.312 511.688 494.172 512 496 512C502.516 512 508.641 508 511.016 501.5C514.062 493.219 509.797 484.031 501.516 480.969Z" })
  }
));
CampfireLight.displayName = "CampfireLight";
var Campfire_default = CampfireLight;
