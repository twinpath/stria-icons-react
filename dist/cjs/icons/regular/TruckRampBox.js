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
var TruckRampBox_exports = {};
__export(TruckRampBox_exports, {
  default: () => TruckRampBox_default
});
module.exports = __toCommonJS(TruckRampBox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TruckRampBoxRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M50.264 375.615C52.514 384.115 61.264 389.24 69.764 386.865L286.264 328.865C294.764 326.615 299.764 317.74 297.514 309.24L247.764 123.74C245.514 115.24 236.764 110.24 228.264 112.49L151.014 133.24L175.764 225.99L114.014 242.49L89.264 149.74L11.889 170.49C3.389 172.74 -1.736 181.615 0.639 190.115L50.264 375.615ZM528 288C483.399 288 445.206 314.266 427.19 352H399.999V64C399.999 55.162 407.163 48 415.999 48H616C629.254 48 640 37.254 640 24C640 10.744 629.254 0 616 0H415.999C380.653 0 351.999 28.652 351.999 64V361.855L16.872 465.078C4.215 469.016 -2.847 482.469 1.09 495.125C4.278 505.406 13.747 512 23.997 512C26.34 512 28.747 511.656 31.122 510.922L387.655 400H415.999C415.999 461.855 466.145 512 528 512S640 461.855 640 400S589.856 288 528 288ZM528 464C492.655 464 464 435.346 464 400C464 364.652 492.655 336 528 336S592 364.652 592 400C592 435.346 563.346 464 528 464Z" })
  }
));
TruckRampBoxRegular.displayName = "TruckRampBoxRegular";
var TruckRampBox_default = TruckRampBoxRegular;
