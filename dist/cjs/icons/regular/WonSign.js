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
var WonSign_exports = {};
__export(WonSign_exports, {
  default: () => WonSign_default
});
module.exports = __toCommonJS(WonSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WonSignRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488 256.008H433.207L487.125 62.457C490.672 49.692 483.203 36.459 470.437 32.896C457.656 29.334 444.453 36.818 440.875 49.583L383.373 256.008H328.979L279.328 50.38C276.734 39.615 267.078 32.021 256 32.021S235.266 39.615 232.672 50.38L183.021 256.008H128.627L71.125 49.583C67.547 36.771 54.234 29.318 41.562 32.896C28.797 36.459 21.328 49.692 24.875 62.457L78.793 256.008H24C10.75 256.008 0 266.757 0 280.006S10.75 304.005 24 304.005H92.164L136.297 462.433C139.234 472.964 148.844 480.229 159.844 479.994C170.766 479.807 180.188 472.245 182.75 461.636L220.811 304.005H291.189L329.25 461.636C331.812 472.245 341.234 479.807 352.156 479.994H352.578C363.344 479.994 372.797 472.823 375.703 462.433L419.836 304.005H488C501.25 304.005 512 293.256 512 280.006S501.25 256.008 488 256.008ZM157.766 360.611L141.998 304.005H171.434L157.766 360.611ZM232.4 256.008L256 158.264L279.6 256.008H232.4ZM354.234 360.611L340.566 304.005H370.002L354.234 360.611Z" })
  }
));
WonSignRegular.displayName = "WonSignRegular";
var WonSign_default = WonSignRegular;
