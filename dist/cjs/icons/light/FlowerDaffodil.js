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
var FlowerDaffodil_exports = {};
__export(FlowerDaffodil_exports, {
  default: () => FlowerDaffodil_default
});
module.exports = __toCommonJS(FlowerDaffodil_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FlowerDaffodilLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288.005 144C288.005 126.375 273.628 112 256 112S223.995 126.375 223.995 144S238.372 176 256 176S288.005 161.625 288.005 144ZM495.912 288H448.654C379.644 288 314.509 319.625 272.002 374.001V277.5C284.504 284.375 298.632 288 312.884 288C361.016 288 400.022 249 400.022 200.875C400.022 180 392.521 159.75 378.644 144C392.521 128.25 400.022 108 400.022 87.125C400.022 39 361.016 0 312.884 0C292.005 0 271.752 7.5 256 21.375C240.248 7.5 219.995 0 199.116 0C150.984 0 111.978 39 111.978 87.125C111.978 108 119.479 128.25 133.356 144C119.479 159.75 111.978 180 111.978 200.875C111.978 249 150.984 288 199.116 288C213.369 288 227.496 284.375 239.998 277.5V374.001C197.491 319.625 132.356 288 63.346 288H16.088C6.962 288 -0.914 297 0.086 307.625C9.962 422.125 106.352 512 223.87 512H288.13C405.648 512 502.038 422.125 511.914 307.625C512.914 297 505.038 288 495.912 288ZM239.998 480H223.87C129.981 480 49.218 410.875 33.841 320H63.346C130.981 320 193.615 355.375 228.371 413.375C241.998 436.125 239.998 454.001 239.998 480ZM256 216.375L243.123 233.625C232.871 247.625 216.494 256 199.116 256C168.737 256 143.983 231.375 143.983 200.875C143.983 183.5 152.359 167.125 166.361 156.875L183.614 144L166.361 131.125C152.359 120.875 143.983 104.5 143.983 87.125C143.983 56.625 168.737 32 199.116 32C216.494 32 232.871 40.375 243.123 54.375L256 71.625L268.877 54.375C279.129 40.375 295.506 32 312.884 32C343.263 32 368.017 56.625 368.017 87.125C368.017 104.5 359.641 120.875 345.639 131.125L328.386 144L345.639 156.875C359.641 167.125 368.017 183.5 368.017 200.875C368.017 231.375 343.263 256 312.884 256C295.506 256 279.129 247.625 268.877 233.625L256 216.375ZM288.005 480H272.002C272.002 454.001 270.002 436.125 283.629 413.375C318.385 355.375 381.019 320 448.654 320H478.159C462.782 410.875 382.019 480 288.005 480Z" })
  }
));
FlowerDaffodilLight.displayName = "FlowerDaffodilLight";
var FlowerDaffodil_default = FlowerDaffodilLight;
