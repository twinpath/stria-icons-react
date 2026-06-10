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
const StarHalfRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M287.938 25.048C287.934 9.428 266.516 3.525 259.437 17.449C259.377 17.567 259.318 17.686 259.259 17.805L193.827 150.195L47.468 171.49C21.202 175.287 10.682 207.58 29.718 226.078L135.628 329.066L110.583 474.551C107.02 495.344 123.599 512 142.19 512C147.122 512 152.196 510.828 157.073 508.25L270.864 448.545C281.399 443.017 287.998 432.126 287.997 420.229C287.989 349.459 287.96 104.447 287.938 25.048ZM239.999 410.533L163.39 450.73L185.793 320.593C186.688 315.393 184.962 310.086 181.179 306.408L86.477 214.32L217.371 195.276C222.579 194.519 227.081 191.249 229.412 186.532L239.999 165.107V410.533Z" })
  }
));
StarHalfRegular.displayName = "StarHalfRegular";
var StarHalf_default = StarHalfRegular;
