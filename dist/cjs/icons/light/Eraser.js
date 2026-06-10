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
var Eraser_exports = {};
__export(Eraser_exports, {
  default: () => Eraser_default
});
module.exports = __toCommonJS(Eraser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EraserLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496.005 448V447.969H323.746L497.819 273.969C507.128 264.594 511.783 252.281 511.783 239.969S507.128 215.344 497.819 205.969L337.867 45.969C328.495 36.656 316.186 32 303.877 32C291.568 32 279.26 36.656 269.887 45.969L13.965 301.969C4.655 311.344 0 323.656 0 335.969S4.655 360.594 13.965 369.969L109.936 465.969C118.933 474.969 131.179 479.969 143.925 479.969H495.851C495.905 479.969 495.95 480 496.005 480C504.838 480 512 472.836 512 464C512 455.162 504.838 448 496.005 448ZM292.631 68.719C295.755 65.594 299.816 64.031 303.877 64.031S312 65.594 315.124 68.719L475.076 228.719C478.2 231.844 479.762 235.906 479.762 239.969S478.2 248.094 475.076 251.219L358.486 367.969L175.916 185.344L292.631 68.719ZM271.887 447.969H143.925C139.677 447.969 135.553 446.344 132.679 443.219L36.708 347.219C33.584 344.094 32.022 340.031 32.022 335.969S33.584 327.844 36.708 324.719L153.298 207.969L335.868 390.594L283.133 443.219C280.259 446.344 276.136 447.969 271.887 447.969Z" })
  }
));
EraserLight.displayName = "EraserLight";
var Eraser_default = EraserLight;
