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
var S_exports = {};
__export(S_exports, {
  default: () => S_default
});
module.exports = __toCommonJS(S_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M180.192 480C110.934 480 37.633 454.064 10.242 443.314C2.013 440.064 -2.032 430.784 1.201 422.565C4.417 414.315 13.693 410.284 21.923 413.503C117.337 451.001 204.834 458.47 250.229 433.033C270.234 421.846 282.039 404.691 286.334 380.629C297.874 315.882 244.686 296.227 155.721 271.54C75.564 249.291 -15.306 224.074 2.184 125.984C7.306 97.235 23.984 72.455 49.142 56.237C95.334 26.488 168.479 24.113 266.751 49.175C275.309 51.362 280.478 60.081 278.291 68.643C276.09 77.174 267.376 82.361 258.849 80.174C147.632 51.8 92.82 66.112 66.476 83.111C43.895 97.673 36.18 117.516 33.666 131.609C22.126 196.356 75.314 216.011 164.279 240.698C244.436 262.947 335.306 288.165 317.816 386.254C311.819 419.878 294.329 445.033 265.845 460.97C241.032 474.875 211.018 480 180.192 480Z" })
  }
));
SLight.displayName = "SLight";
var S_default = SLight;
