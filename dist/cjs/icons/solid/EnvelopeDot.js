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
var EnvelopeDot_exports = {};
__export(EnvelopeDot_exports, {
  default: () => EnvelopeDot_default
});
module.exports = __toCommonJS(EnvelopeDot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EnvelopeDotSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 0C476.654 0 448 28.654 448 64S476.654 128 512 128C547.348 128 576 99.346 576 64S547.348 0 512 0ZM48.287 145.305L260.469 310.359C276.662 322.955 299.338 322.955 315.531 310.359L509.186 159.717C457.498 158.191 416 116.057 416 64H80C53.49 64 32 85.49 32 112C32 125.02 38.01 137.311 48.287 145.305ZM288 352.078C271.469 352.078 254.938 346.594 240.844 335.609L32 173.15V400C32 426.51 53.49 448 80 448H496C522.51 448 544 426.51 544 400V173.15L335.156 335.609C321.062 346.594 304.531 352.078 288 352.078Z" })
  }
));
EnvelopeDotSolid.displayName = "EnvelopeDotSolid";
var EnvelopeDot_default = EnvelopeDotSolid;
