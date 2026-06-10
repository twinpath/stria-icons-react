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
var Icicles_exports = {};
__export(Icicles_exports, {
  default: () => Icicles_default
});
module.exports = __toCommonJS(Icicles_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IciclesThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M510.123 2.875C508.607 1.062 506.357 0 503.998 0H8.004C5.488 0 3.113 1.188 1.613 3.188C0.098 5.219 -0.387 7.812 0.316 10.219L88.315 314.219C89.3 317.625 92.409 319.969 95.94 320H96.003C99.518 320 102.628 317.719 103.659 314.344L139.237 197.906L184.236 377.938C186.017 385.062 197.986 385.062 199.767 377.938L244.767 197.906L280.344 314.344C282.407 321.031 293.594 321.031 295.657 314.344L344.047 155.938L408.124 505.438C408.827 509.25 412.14 512 415.999 512H416.015C419.89 512 423.202 509.219 423.874 505.406L511.873 9.406C512.295 7.062 511.654 4.688 510.123 2.875ZM415.874 458.938L353.875 120.75C353.203 117.125 350.14 114.406 346.453 114.188H346C342.5 114.188 339.375 116.469 338.344 119.844L288.001 284.625L251.657 165.656C250.61 162.219 247.157 159.844 243.798 160C240.204 160.094 237.111 162.562 236.236 166.062L192.002 343L147.768 166.062C146.893 162.562 143.799 160.094 140.205 160C137.049 159.75 133.393 162.219 132.346 165.656L96.206 283.938L18.644 16H494.451L415.874 458.938Z" })
  }
));
IciclesThin.displayName = "IciclesThin";
var Icicles_default = IciclesThin;
