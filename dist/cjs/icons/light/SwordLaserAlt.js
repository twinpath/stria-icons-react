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
var SwordLaserAlt_exports = {};
__export(SwordLaserAlt_exports, {
  default: () => SwordLaserAlt_default
});
module.exports = __toCommonJS(SwordLaserAlt_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SwordLaserAltLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M502.375 12.012C495.875 4.762 486.752 0.512 477.002 0.012C467.377 -0.238 458.004 3.137 450.754 9.512L246.1 196.219C235.321 206.055 242.278 224.004 256.872 224.004H256.901C260.883 224.004 264.723 222.516 267.668 219.828L472.252 33.258C474.252 31.758 477.002 31.883 478.752 33.508C480.377 35.258 480.377 37.883 478.877 39.633L333.602 197.191C324.163 207.43 331.424 224.004 345.352 224.004C349.813 224.004 354.071 222.141 357.096 218.859L502.5 61.258C515.25 47.258 515.125 25.883 502.375 12.012ZM322.262 256.617L322.831 256H159.596C155.364 256.012 151.26 257.625 148.272 260.617L16.03 392.977C-5.343 414.352 -5.343 448.852 16.03 470.223L41.78 495.969C63.153 517.344 97.651 517.344 119.024 495.969L331.637 283.238C341.135 273.738 335.01 258.242 322.262 256.617ZM38.655 447.602C29.78 438.727 29.78 424.477 38.655 415.602L103.901 350.484L125.649 372.23L44.405 453.348L38.655 447.602ZM96.401 473.344C87.526 482.219 73.278 482.219 64.403 473.344L58.653 467.598L139.774 386.352L161.522 408.102L96.401 473.344ZM184.145 385.477L126.524 327.859L166.272 287.988H281.764L184.145 385.477Z" })
  }
));
SwordLaserAltLight.displayName = "SwordLaserAltLight";
var SwordLaserAlt_default = SwordLaserAltLight;
