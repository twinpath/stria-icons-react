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
var HeadSide_exports = {};
__export(HeadSide_exports, {
  default: () => HeadSide_default
});
module.exports = __toCommonJS(HeadSide_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeadSideThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M508.545 271.969C500.904 254.844 492.373 230.969 483.326 205.719C467.309 161 450.762 114.75 434.559 91.719C394.073 34.281 328.009 0 257.851 0H200.208C89.815 0 0 89.812 0 200.219C0 255.656 23.282 308.844 64.002 346.781V504C64.002 508.406 67.58 512 72.002 512S80.002 508.406 80.002 504V339.688L77.346 337.312C38.36 302.25 16 252.312 16 200.219C16 98.625 98.643 16 200.208 16H257.851C322.806 16 383.979 47.75 421.48 100.938C436.418 122.188 453.34 169.438 468.263 211.125C477.403 236.656 486.044 260.813 493.919 278.469C497.279 286.031 496.607 294.375 492.076 301.344C487.56 308.281 480.216 312.281 471.95 312.281H432.074V376.281C432.074 407.188 406.917 432.344 376.01 432.344H304.008V504C304.008 508.406 307.586 512 312.008 512S320.009 508.406 320.009 504V448.344H376.01C415.746 448.344 448.075 416.031 448.075 376.281V328.281H471.95C485.529 328.281 498.076 321.469 505.498 310.063C512.92 298.625 514.061 284.406 508.545 271.969ZM400 192C400 169.938 382.062 152 359.999 152C337.936 152 319.998 169.938 319.998 192S337.936 232 359.999 232C382.062 232 400 214.062 400 192ZM335.998 192C335.998 178.781 346.764 168 359.999 168C373.234 168 384 178.781 384 192S373.234 216 359.999 216C346.764 216 335.998 205.219 335.998 192Z" })
  }
));
HeadSideThin.displayName = "HeadSideThin";
var HeadSide_default = HeadSideThin;
