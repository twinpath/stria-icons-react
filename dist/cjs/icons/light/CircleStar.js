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
var CircleStar_exports = {};
__export(CircleStar_exports, {
  default: () => CircleStar_default
});
module.exports = __toCommonJS(CircleStar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleStarLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM391.299 200.463L308.971 188.484L272.166 114.016C268.863 107.357 262.41 103.998 255.961 104C249.551 104 243.143 107.318 239.834 114.016L203.029 188.484L120.701 200.463C105.926 202.598 100.01 220.764 110.717 231.168L170.291 289.1L156.203 370.934C154.199 382.631 163.523 392 173.982 392C176.756 392 179.611 391.34 182.354 389.891L256 351.248L329.646 389.891C332.383 391.326 335.229 391.979 337.998 391.979C348.463 391.979 357.803 382.639 355.797 370.934L341.709 289.1L401.283 231.168C411.99 220.764 406.074 202.598 391.299 200.463ZM313.356 272.035C309.574 275.713 307.848 281.02 308.743 286.22L319.447 348.4L263.434 319.01C258.779 316.568 253.221 316.568 248.566 319.01L192.553 348.4L203.257 286.22C204.152 281.02 202.427 275.713 198.644 272.035L153.404 228.041L215.953 218.94C221.16 218.183 225.662 214.914 227.993 210.196L256 153.529L284.007 210.196C286.338 214.914 290.84 218.183 296.047 218.94L358.598 228.041L313.356 272.035Z" })
  }
));
CircleStarLight.displayName = "CircleStarLight";
var CircleStar_default = CircleStarLight;
