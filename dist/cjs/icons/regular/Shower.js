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
var Shower_exports = {};
__export(Shower_exports, {
  default: () => Shower_default
});
module.exports = __toCommonJS(Shower_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShowerRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M344.969 87.031C335.594 77.656 320.406 77.656 311.031 87.031L310.227 87.836L303.195 80.805C281.326 58.936 252.664 48 224 48C202.43 48 180.873 54.211 162.197 66.598L145.312 52.531C129.406 39.281 109.266 32 88.609 32C39.75 32 0 71.75 0 120.594V456C0 469.25 10.75 480 24 480S48 469.25 48 456V120.594C48 98.219 66.219 80 88.609 80C98.078 80 107.313 83.344 114.609 89.406L128.902 101.32C102.234 144.496 107.359 201.75 144.805 239.195L151.836 246.227L151.031 247.031C141.656 256.406 141.656 271.594 151.031 280.969C155.719 285.656 161.859 288 168 288S180.281 285.656 184.969 280.969L344.969 120.969C354.344 111.594 354.344 96.406 344.969 87.031ZM185.777 212.285L178.744 205.254C153.791 180.301 153.791 139.699 178.746 114.746C190.834 102.656 206.904 96 224 96C241.094 96 257.166 102.656 269.256 114.746L276.287 121.775L185.777 212.285ZM480 192C462.326 192 448 206.326 448 224C448 241.672 462.326 256 480 256S512 241.672 512 224C512 206.326 497.674 192 480 192ZM288 384C270.326 384 256 398.326 256 416C256 433.672 270.326 448 288 448S320 433.672 320 416C320 398.326 305.674 384 288 384ZM352 320C334.326 320 320 334.326 320 352C320 369.672 334.326 384 352 384S384 369.672 384 352C384 334.326 369.674 320 352 320ZM416 256C398.326 256 384 270.326 384 288C384 305.672 398.326 320 416 320S448 305.672 448 288C448 270.326 433.674 256 416 256ZM288 320C288 302.326 273.674 288 256 288S224 302.326 224 320C224 337.672 238.326 352 256 352S288 337.672 288 320ZM320 224C302.326 224 288 238.326 288 256C288 273.672 302.326 288 320 288S352 273.672 352 256C352 238.326 337.674 224 320 224ZM384 224C401.674 224 416 209.672 416 192C416 174.326 401.674 160 384 160S352 174.326 352 192C352 209.672 366.326 224 384 224Z" })
  }
));
ShowerRegular.displayName = "ShowerRegular";
var Shower_default = ShowerRegular;
