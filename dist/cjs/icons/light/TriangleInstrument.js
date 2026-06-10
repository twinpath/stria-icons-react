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
var TriangleInstrument_exports = {};
__export(TriangleInstrument_exports, {
  default: () => TriangleInstrument_default
});
module.exports = __toCommonJS(TriangleInstrument_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TriangleInstrumentLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256.096 256C226.597 255.625 200.723 275.25 192.973 303.625C185.223 332 197.598 362 222.972 376.75C248.471 391.375 280.72 387.125 301.344 366.125C321.969 345.25 325.968 313 310.969 287.625L503.962 94.625C510.168 88.419 510.196 78.366 504.025 72.125V72.125C497.786 65.817 487.549 65.789 481.276 72.062L288.345 265C278.595 259.125 267.47 256 256.096 256ZM256.096 352C238.346 352 224.097 337.625 224.097 320C224.097 302.375 238.346 288 256.096 288C273.72 288 288.095 302.375 288.095 320C288.095 337.625 273.72 352 256.096 352ZM412.965 230.875L389.716 254.125L470.589 385C482.463 403.875 482.963 427.874 471.963 447.374C460.589 467.624 439.09 480.124 415.84 479.999H96.101C72.852 480.124 51.353 467.624 39.978 447.249C28.978 427.874 29.478 403.875 41.353 384.875L201.223 126.25C213.097 107.375 233.722 96 255.971 96S298.844 107.375 310.719 126.25L337.968 170.25L361.092 147L337.968 109.375C323.218 85.625 299.219 70.5 271.97 66V15.999C271.97 7.163 264.807 0 255.972 0H255.97C247.171 0 239.971 7.2 239.971 15.999V66C212.847 70.5 188.723 85.625 173.974 109.375L14.229 368.125C-3.895 396.875 -4.77 433.249 11.979 462.874C29.103 493.374 61.227 512.124 96.101 511.999H415.84C450.714 512.124 482.838 493.374 499.963 462.874C516.712 433.374 515.962 396.875 497.838 368.125L412.965 230.875Z" })
  }
));
TriangleInstrumentLight.displayName = "TriangleInstrumentLight";
var TriangleInstrument_default = TriangleInstrumentLight;
