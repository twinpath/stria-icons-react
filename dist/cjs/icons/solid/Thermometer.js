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
var Thermometer_exports = {};
__export(Thermometer_exports, {
  default: () => Thermometer_default
});
module.exports = __toCommonJS(Thermometer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ThermometerSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M483.987 162.634L229.76 415.946H129.894L40.903 504.967C31.653 514.344 16.405 514.344 7.031 504.967C-2.344 495.715 -2.344 480.461 7.031 471.084L96.022 382.062V281.163L145.077 231.772L196.669 283.382C199.794 286.508 203.888 288.071 207.981 288.071S216.168 286.508 219.292 283.382C225.542 277.131 225.542 267.003 219.292 260.752L167.625 209.067L208.862 167.548L260.664 219.367C263.788 222.493 267.882 224.055 271.975 224.055C276.068 224.055 280.162 222.493 283.287 219.367C289.536 213.115 289.536 202.988 283.287 196.736L231.412 144.845L272.649 103.325L324.658 155.351C327.782 158.477 331.876 160.04 335.969 160.04C340.063 160.04 344.156 158.477 347.281 155.351C353.53 149.1 353.53 138.972 347.281 132.721L295.198 80.62L344.875 30.603C381.246 -5.906 439.241 -10.282 476.738 20.35C526.233 61.11 518.859 127.751 483.987 162.634Z" })
  }
));
ThermometerSolid.displayName = "ThermometerSolid";
var Thermometer_default = ThermometerSolid;
