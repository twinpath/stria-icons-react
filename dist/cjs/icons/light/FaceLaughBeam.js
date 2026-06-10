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
var FaceLaughBeam_exports = {};
__export(FaceLaughBeam_exports, {
  default: () => FaceLaughBeam_default
});
module.exports = __toCommonJS(FaceLaughBeam_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceLaughBeamLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M135.027 211.875L144.473 194.875C152.223 181.25 163.727 173.25 175.957 173.25C188.309 173.25 199.812 181.25 207.441 194.875L217.008 211.875C221.125 219.25 232.629 215.875 231.902 207.375C228.633 165.25 199.691 136 175.957 136C152.102 136 123.16 165.25 119.891 207.375C119.285 215.875 130.789 219.25 135.027 211.875ZM294.992 211.875L304.559 194.875C312.188 181.25 323.691 173.25 336.043 173.25C348.273 173.25 359.777 181.25 367.527 194.875L376.973 211.875C381.09 219.25 392.594 215.875 391.867 207.375C388.598 165.25 359.656 136 335.922 136C312.066 136 283.246 165.25 279.855 207.375C279.25 216 290.875 219.25 294.992 211.875ZM391.02 272H120.98C111.414 272 103.906 280.375 105.117 290C113.957 361 174.504 416 248.008 416H263.992C337.375 416 398.043 361 406.883 290C408.094 280.375 400.586 272 391.02 272ZM263.992 384H248.008C197.754 384 154.523 350.75 140.598 304H371.402C357.477 350.75 314.246 384 263.992 384ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464Z" })
  }
));
FaceLaughBeamLight.displayName = "FaceLaughBeamLight";
var FaceLaughBeam_default = FaceLaughBeamLight;
