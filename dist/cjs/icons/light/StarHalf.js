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
var StarHalf_exports = {};
__export(StarHalf_exports, {
  default: () => StarHalf_default
});
module.exports = __toCommonJS(StarHalf_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarHalfLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M259.259 17.805L193.827 150.195L47.468 171.49C21.202 175.287 10.682 207.58 29.718 226.078L135.628 329.066L110.583 474.551C107.02 495.344 123.599 512 142.19 512C147.122 512 152.196 510.828 157.073 508.25L270.867 448.544C281.4 443.017 287.999 432.103 287.999 420.207V24.605C287.999 8.601 266.431 3.498 259.259 17.805L259.259 17.805ZM255.999 420.211L142.118 479.979L168.594 326.186C169.489 320.987 167.764 315.68 163.982 312.002L52.075 203.158L206.754 180.651C211.959 179.894 216.46 176.626 218.792 171.912L255.999 96.693V420.211Z" })
  }
));
StarHalfLight.displayName = "StarHalfLight";
var StarHalf_default = StarHalfLight;
