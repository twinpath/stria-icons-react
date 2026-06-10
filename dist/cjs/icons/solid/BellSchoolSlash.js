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
var BellSchoolSlash_exports = {};
__export(BellSchoolSlash_exports, {
  default: () => BellSchoolSlash_default
});
module.exports = __toCommonJS(BellSchoolSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BellSchoolSlashSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464.001 463.993H416.002V422.724L399.691 409.941C362.607 433.605 319.086 447.993 272.002 447.993C218.002 447.993 168.128 429.868 128.003 399.494V479.993C128.003 497.617 142.378 511.992 160.003 511.992H464.001C481.615 511.992 497.849 506.578 511.599 497.653L467.898 463.399C466.578 463.532 465.357 463.993 464.001 463.993ZM373.533 389.439L71.638 152.822C66.8 170.419 64.003 188.862 64.003 207.997C64.003 322.87 157.128 415.994 272.002 415.994C308.9 415.994 343.488 406.289 373.533 389.439ZM630.811 469.102L570.333 421.701C573.784 415.177 576.001 407.902 576.001 399.994C576.001 373.494 554.501 351.995 528.001 351.995C515.943 351.995 505.281 356.776 496.906 364.151L444.39 322.989C466.515 289.978 480.001 250.727 480.001 207.997C480.001 93.124 386.877 0 272.002 0C211.247 0 156.817 26.254 118.821 67.817L38.814 5.109C28.211 -3.162 13.174 -1.099 5.126 9.187C-3.061 19.625 -1.249 34.718 9.189 42.89L601.186 506.883C611.686 515.086 626.749 513.211 634.874 502.805C643.061 492.367 641.249 477.274 630.811 469.102ZM343.156 243.645L317.186 223.29C318.854 218.465 320.002 213.399 320.002 207.997C320.002 181.497 298.502 159.998 272.002 159.998C262.479 159.998 253.766 162.953 246.348 167.771L220.393 147.427C234.346 135.486 252.223 127.998 272.002 127.998C316.127 127.998 352.002 163.872 352.002 207.997C352.002 220.889 348.617 232.871 343.156 243.645Z" })
  }
));
BellSchoolSlashSolid.displayName = "BellSchoolSlashSolid";
var BellSchoolSlash_default = BellSchoolSlashSolid;
