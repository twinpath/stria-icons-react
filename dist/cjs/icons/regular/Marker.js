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
var Marker_exports = {};
__export(Marker_exports, {
  default: () => Marker_default
});
module.exports = __toCommonJS(Marker_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MarkerRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M485.53 26.5C467.78 8.875 444.655 0 421.53 0C398.28 0 375.155 8.875 357.53 26.5L321.014 63.016L295.655 37.656C274.53 16.5 237.592 16.5 216.467 37.656L111.092 143.031C101.717 152.406 101.717 167.594 111.092 176.969C115.78 181.656 121.905 184 128.061 184S140.342 181.656 145.03 176.969L250.405 71.594C253.53 68.469 258.592 68.469 261.717 71.594L287.077 96.953L94.03 290C41.53 342.5 8.405 411.375 0.155 485.125V485.375C-1.47 499.75 9.905 512 24.03 512C29.655 512 135.03 505 222.03 418L485.53 154.5C520.905 119.125 520.905 61.875 485.53 26.5ZM188.03 384.125C151.03 421.125 104.03 447 53.28 458.75C65.03 408 90.905 361 127.905 324L201.03 250.875L261.155 311L188.03 384.125ZM451.53 120.625L295.03 277.125L234.905 217L391.405 60.5C399.53 52.375 410.155 48 421.53 48S443.53 52.375 451.53 60.5C459.655 68.5 464.03 79.125 464.03 90.5S459.655 112.5 451.53 120.625Z" })
  }
));
MarkerRegular.displayName = "MarkerRegular";
var Marker_default = MarkerRegular;
