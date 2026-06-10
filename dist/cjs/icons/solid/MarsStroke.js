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
var MarsStroke_exports = {};
__export(MarsStroke_exports, {
  default: () => MarsStroke_default
});
module.exports = __toCommonJS(MarsStroke_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MarsStrokeSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M444.451 0H332.082C310.699 0 299.992 25.852 315.111 40.971L344.668 70.528L320.334 94.864L286.393 60.922C280.145 54.672 270.014 54.674 263.766 60.922L241.139 83.549C234.889 89.799 234.889 99.926 241.139 106.176L275.08 140.117L256.121 159.076C187.553 111.817 92.994 118.555 32 179.549C-36.732 248.281 -36.732 359.717 32 428.451C100.732 497.182 212.17 497.184 280.902 428.451C341.896 367.457 348.635 272.897 301.375 204.33L320.334 185.371L354.275 219.313C360.523 225.561 370.654 225.563 376.902 219.313L399.529 196.686C405.777 190.438 405.777 180.307 399.529 174.059L365.588 140.117L389.924 115.783L419.48 145.34C434.6 160.459 460.451 149.75 460.451 128.369V16C460.451 7.162 453.287 0 444.451 0ZM224.334 371.881C186.902 409.313 126 409.311 88.57 371.881C51.139 334.451 51.139 273.549 88.57 236.117C126 198.688 186.902 198.686 224.334 236.117C261.764 273.547 261.764 334.451 224.334 371.881Z" })
  }
));
MarsStrokeSolid.displayName = "MarsStrokeSolid";
var MarsStroke_default = MarsStrokeSolid;
