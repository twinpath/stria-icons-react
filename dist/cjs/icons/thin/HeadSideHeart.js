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
var HeadSideHeart_exports = {};
__export(HeadSideHeart_exports, {
  default: () => HeadSideHeart_default
});
module.exports = __toCommonJS(HeadSideHeart_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeadSideHeartThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M508.545 271.969C500.904 254.844 492.373 230.969 483.326 205.719C467.309 161 450.762 114.75 434.559 91.719C394.073 34.281 328.009 0 257.851 0H200.208C89.815 0 0 89.812 0 200.219C0 255.656 23.282 308.844 64.002 346.781V504C64.002 508.406 67.58 512 72.002 512S80.002 508.406 80.002 504V339.688L77.346 337.312C38.36 302.25 16 252.312 16 200.219C16 98.625 98.643 16 200.208 16H257.851C322.806 16 383.979 47.75 421.48 100.938C436.418 122.188 453.34 169.438 468.263 211.125C477.403 236.656 486.044 260.813 493.919 278.469C497.279 286.031 496.607 294.375 492.076 301.344C487.56 308.281 480.216 312.281 471.95 312.281H432.074V376.281C432.074 407.188 406.917 432.344 376.01 432.344H304.008V504C304.008 508.406 307.586 512 312.008 512S320.009 508.406 320.009 504V448.344H376.01C415.746 448.344 448.075 416.031 448.075 376.281V328.281H471.95C485.529 328.281 498.076 321.469 505.498 310.063C512.92 298.625 514.061 284.406 508.545 271.969ZM355.353 152.344C354.4 133 345.822 115.5 331.181 103.031C305.258 80.906 265.351 83.594 240.303 109.313L237.6 112.094L234.913 109.312C210.068 83.656 170.176 80.875 144.144 103.031C129.566 115.531 121.019 133.031 120.097 152.344C119.175 171.469 126.175 190.25 139.316 203.875L222.334 289.469C226.459 293.688 231.928 296 237.725 296S248.991 293.688 253.147 289.438L336.134 203.875C349.291 190.25 356.291 171.469 355.353 152.344ZM241.678 278.281C239.522 280.469 235.897 280.438 233.803 278.312L150.832 192.75C140.738 182.312 135.363 167.844 136.066 153.125C136.785 138.25 143.348 124.781 154.535 115.219C163.333 107.719 174.27 104.062 185.38 104.062C199.021 104.062 212.928 109.625 223.397 120.438L237.6 135.156L251.788 120.469C270.945 100.781 301.242 98.5 320.79 115.219C332.04 124.781 338.65 138.25 339.368 153.125C340.103 167.844 334.728 182.281 324.634 192.75L241.678 278.281Z" })
  }
));
HeadSideHeartThin.displayName = "HeadSideHeartThin";
var HeadSideHeart_default = HeadSideHeartThin;
