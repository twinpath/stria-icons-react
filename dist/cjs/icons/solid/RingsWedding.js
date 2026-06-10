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
var RingsWedding_exports = {};
__export(RingsWedding_exports, {
  default: () => RingsWedding_default
});
module.exports = __toCommonJS(RingsWedding_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RingsWeddingSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M351.25 160.738C365.25 182.861 375 207.359 379.875 232.982C431.5 254.98 458.875 311.726 444 365.722C429.125 419.842 376.5 454.465 321 446.965C265.375 439.466 224 392.095 224 335.974C224 293.727 247.75 257.355 282.25 238.481C285.625 249.106 288 260.23 288 271.979C288 300.477 277 327.974 257.25 348.598C260.875 371.096 273.875 390.97 293 403.219C330.5 369.972 352 322.1 352 271.979C352 190.36 296.375 121.866 221 101.992L256 31.998L224 0H128L96 31.998L131 101.992C55.625 121.866 0 190.36 0 271.979C0 369.221 78.75 447.965 176 447.965C183.625 447.965 191.375 447.34 199 446.215C245.75 504.461 324.125 526.834 394.5 501.961C465 477.213 512 410.593 512 335.974C512 243.981 441.25 168.487 351.25 160.738ZM64 271.979C64.125 210.109 114.125 160.113 176 159.988C202.875 159.988 227.25 169.862 246.5 185.736C195 216.233 160 271.604 160 335.974C160 351.848 162.25 367.721 166.5 382.97C109.25 378.096 64 330.474 64 271.979Z" })
  }
));
RingsWeddingSolid.displayName = "RingsWeddingSolid";
var RingsWedding_default = RingsWeddingSolid;
