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
var StarAndCrescent_exports = {};
__export(StarAndCrescent_exports, {
  default: () => StarAndCrescent_default
});
module.exports = __toCommonJS(StarAndCrescent_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarAndCrescentDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M508.999 230.875L453.749 284.75L466.749 360.75C467.874 367.25 462.749 372.5 456.999 372.5C455.374 372.5 453.874 372.125 452.249 371.25L383.998 335.375L315.623 371.25C314.123 372.125 312.498 372.5 310.998 372.5C305.248 372.5 300.123 367.25 301.248 360.75L314.248 284.75L258.998 230.875C253.123 225.125 256.373 215 264.498 213.875L340.873 202.75L374.998 133.5C376.873 129.875 380.498 128 383.998 128C387.498 128 391.123 129.875 392.873 133.5L427.123 202.75L503.499 213.875C511.624 215 514.874 225.125 508.999 230.875Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M340.502 466.375C339.002 466.375 333.627 466.875 331.252 466.875C215.001 466.875 120.501 372.25 120.501 256S215.001 45.125 331.252 45.125C333.627 45.125 339.002 45.625 340.502 45.625C347.627 45.625 353.752 40.625 355.252 33.625C356.627 26.375 352.627 19.125 345.752 16.5C316.627 5.5 286.376 0 256.001 0C114.876 0 0 114.875 0 256S114.876 512 256.001 512C286.251 512 316.251 506.5 345.377 495.625C351.252 493.625 355.627 488 355.627 481.375C355.627 473.375 349.252 466.375 340.502 466.375Z" })
    ]
  }
));
StarAndCrescentDuotone.displayName = "StarAndCrescentDuotone";
var StarAndCrescent_default = StarAndCrescentDuotone;
