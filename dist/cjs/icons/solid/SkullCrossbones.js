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
var SkullCrossbones_exports = {};
__export(SkullCrossbones_exports, {
  default: () => SkullCrossbones_default
});
module.exports = __toCommonJS(SkullCrossbones_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SkullCrossbonesSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M439.159 453.031L297.136 384.026L439.159 315.022C447.035 311.021 450.285 301.396 446.285 293.52L432.033 264.893C428.032 257.018 418.531 253.767 410.529 257.768L224 348.399L37.471 257.768C29.595 253.767 19.968 257.018 15.967 264.893L1.715 293.52C-2.285 301.396 0.965 311.021 8.841 315.022L150.864 384.026L8.841 453.031C0.965 457.031 -2.285 466.657 1.715 474.533L15.967 503.16C19.968 511.035 29.595 514.285 37.471 510.285L224 419.654L410.529 510.285C418.406 514.285 428.032 511.035 432.033 503.16L446.285 474.533C450.285 466.657 447.035 457.031 439.159 453.031ZM149.988 237.25L144.488 263.125C141.862 275.75 149.988 288 160.99 288H287.01C298.137 288 306.138 275.75 303.512 263.125L298.012 237.25C339.768 214.875 368.023 174.5 368.023 128C368.023 57.25 303.512 0 224 0S79.977 57.25 79.977 128C79.977 174.5 108.232 214.875 149.988 237.25ZM280.009 112.008C297.637 112.008 312.014 126.384 312.014 144.01S297.637 176.012 280.009 176.012C262.381 176.012 248.004 161.636 248.004 144.01S262.381 112.008 280.009 112.008ZM167.991 112.008C185.619 112.008 199.996 126.384 199.996 144.01S185.619 176.012 167.991 176.012S135.986 161.636 135.986 144.01S150.363 112.008 167.991 112.008Z" })
  }
));
SkullCrossbonesSolid.displayName = "SkullCrossbonesSolid";
var SkullCrossbones_default = SkullCrossbonesSolid;
