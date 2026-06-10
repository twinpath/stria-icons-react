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
var TruckRamp_exports = {};
__export(TruckRamp_exports, {
  default: () => TruckRamp_default
});
module.exports = __toCommonJS(TruckRamp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TruckRampRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M527.999 288C483.398 288 445.206 314.266 427.19 352H399.999V64C399.999 55.162 407.163 48 415.999 48H616C629.254 48 640 37.254 640 24C640 10.744 629.254 0 616 0H415.999C380.653 0 351.998 28.652 351.998 64V361.855L16.872 465.078C4.215 469.016 -2.847 482.469 1.09 495.125C4.278 505.406 13.747 512 23.997 512C26.34 512 28.747 511.656 31.122 510.922L387.655 400H415.999C415.999 461.855 466.144 512 527.999 512S640 461.855 640 400S589.855 288 527.999 288ZM527.999 464C492.653 464 463.999 435.346 463.999 400C463.999 364.652 492.653 336 527.999 336S592 364.652 592 400C592 435.346 563.345 464 527.999 464Z" })
  }
));
TruckRampRegular.displayName = "TruckRampRegular";
var TruckRamp_default = TruckRampRegular;
