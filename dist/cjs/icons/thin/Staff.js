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
var Staff_exports = {};
__export(Staff_exports, {
  default: () => Staff_default
});
module.exports = __toCommonJS(Staff_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StaffThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432.004 0H355.76C325.512 0 297.764 17.123 284.264 44.248L268.266 76.246C264.266 84.119 267.516 93.744 275.389 97.619L332.637 126.242C334.93 127.406 337.371 127.957 339.779 127.957C345.639 127.957 351.301 124.699 354.135 119.117L365.635 95.994H416.006V171.74L258.766 216.736C230.018 224.986 203.77 240.359 182.645 261.484L156.146 287.982H112.023C103.15 287.982 96.025 295.107 96.025 303.982V348.104L7.031 437.098C-2.344 446.473 -2.344 461.598 7.031 470.971L41.029 504.969C45.717 509.656 51.84 512 57.965 512S70.215 509.656 74.902 504.969L250.516 329.355C260.141 319.73 272.014 312.73 285.139 308.98L369.883 284.732L402.131 303.357C404.664 304.852 407.445 305.561 410.191 305.561C415.711 305.561 421.084 302.697 424.006 297.607L443.504 263.734L454.004 260.734C488.252 250.984 512 219.611 512 183.863V79.996C512 35.873 476.127 0 432.004 0ZM496 183.863C496 212.412 477.074 237.504 449.621 245.346L432.873 250.131L410.133 289.502L372.008 267.482L280.717 293.604C265.029 298.092 250.742 306.502 239.203 318.041L63.59 493.654C60.484 496.76 55.449 496.76 52.344 493.654L18.344 459.654C15.24 456.551 15.24 451.516 18.344 448.412L112.025 354.73L112.023 303.982H162.775L193.959 272.799C213.059 253.697 236.996 239.629 263.168 232.119L420.408 187.123C427.273 185.158 432.006 178.883 432.006 171.74V95.994C432.006 87.158 424.842 79.994 416.006 79.994H365.621C359.557 79.994 354.012 83.424 351.305 88.854L339.793 111.932L282.576 83.4L298.619 51.314C309.441 29.672 331.563 16 355.76 16H432.004C467.348 16 496 44.652 496 79.996V183.863Z" })
  }
));
StaffThin.displayName = "StaffThin";
var Staff_default = StaffThin;
