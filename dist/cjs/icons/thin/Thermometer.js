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
const ThermometerThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M476.738 20.35C460.025 6.697 439.246 0 418.121 0C391.846 0 365.037 10.365 344.875 30.602L114.609 262.449C102.703 274.436 96.021 290.645 96.018 307.537L96.002 404.686L2.344 498.344C-0.781 501.469 -0.781 506.531 2.344 509.656C3.906 511.219 5.937 512 8 512S12.094 511.219 13.656 509.656L107.316 415.996L203.334 415.957C220.258 415.949 236.492 409.238 248.48 397.293L483.986 162.635C518.859 127.75 526.232 61.109 476.738 20.35ZM472.693 151.301L237.187 385.959C228.135 394.98 216.109 399.951 203.328 399.957L112.002 399.994L112.018 307.541C112.021 294.783 116.973 282.773 125.961 273.725L162.062 237.375L218.344 293.656C219.906 295.219 221.937 296 224 296S228.094 295.219 229.656 293.656C232.781 290.531 232.781 285.469 229.656 282.344L173.336 226.023L225.844 173.156L282.344 229.656C283.906 231.219 285.937 232 288 232S292.094 231.219 293.656 229.656C296.781 226.531 296.781 221.469 293.656 218.344L237.117 161.805L289.625 108.938L346.344 165.656C347.906 167.219 349.937 168 352 168S356.094 167.219 357.656 165.656C360.781 162.531 360.781 157.469 357.656 154.344L300.898 97.586L356.211 41.895C372.604 25.439 395.17 16 418.123 16C436.18 16 453.4 21.945 466.566 32.701C489.447 51.543 495.15 74.125 495.906 89.752C497.014 112.645 488.326 135.662 472.693 151.301Z" })
  }
));
ThermometerThin.displayName = "ThermometerThin";
var Thermometer_default = ThermometerThin;
