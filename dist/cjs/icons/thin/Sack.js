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
var Sack_exports = {};
__export(Sack_exports, {
  default: () => Sack_default
});
module.exports = __toCommonJS(Sack_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SackThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M332.15 120H352.001C356.423 120 360.001 116.406 360.001 112S356.423 104 352.001 104H159.995C155.574 104 151.995 107.594 151.995 112S155.574 120 159.995 120H179.742C-9.35 239.195 0.078 392.227 0.078 412C0.078 467.25 49.203 512 109.701 512H402.199C462.822 512 511.947 467.25 511.947 412C511.947 392.598 520.156 238.611 332.15 120ZM495.947 412C495.947 458.316 453.89 496 402.199 496H109.701C58.078 496 16.078 458.316 16.078 412C15.287 335.001 28.047 243.753 208.16 120H303.759C483.18 243.458 496.657 331.991 495.947 412ZM181.515 84.688C184.109 88.25 189.078 89 192.687 86.5C196.265 83.906 197.078 78.906 194.484 75.312L160.812 28.688C159.015 26.188 158.765 23.094 160.171 20.344C161.562 17.625 164.218 16 167.296 16H344.703C347.781 16 350.437 17.625 351.828 20.344C353.234 23.094 352.984 26.188 351.187 28.688L317.515 75.312C314.921 78.906 315.734 83.906 319.312 86.5C322.979 89.079 327.913 88.234 330.484 84.688L364.156 38.063C369.468 30.719 370.203 21.125 366.078 13.063S353.765 0 344.703 0H167.296C158.234 0 150.046 5 145.921 13.062S142.531 30.719 147.843 38.062L181.515 84.688Z" })
  }
));
SackThin.displayName = "SackThin";
var Sack_default = SackThin;
