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
var Transporter7_exports = {};
__export(Transporter7_exports, {
  default: () => Transporter7_default
});
module.exports = __toCommonJS(Transporter7_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Transporter7Regular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M93.75 300.375L64 288L51.625 258.25C50.875 256.875 49.5 256 48 256S45.125 256.875 44.375 258.25L32 288L2.25 300.375C0.875 301.125 0 302.5 0 304S0.875 306.875 2.25 307.625L32 320L44.375 349.75C45.125 351.125 46.5 352 48 352S50.875 351.125 51.625 349.75L64 320L93.75 307.625C95.125 306.875 96 305.5 96 304S95.125 301.125 93.75 300.375ZM392 464H120C106.746 464 96 474.744 96 488C96 501.254 106.746 512 120 512H392C405.254 512 416 501.254 416 488C416 474.744 405.254 464 392 464ZM509.75 76.375L480 64L467.625 34.25C466.875 32.875 465.5 32 464 32S461.125 32.875 460.375 34.25L448 64L418.25 76.375C416.875 77.125 416 78.5 416 80S416.875 82.875 418.25 83.625L448 96L460.375 125.75C461.125 127.125 462.5 128 464 128S466.875 127.125 467.625 125.75L480 96L509.75 83.625C511.125 82.875 512 81.5 512 80S511.125 77.125 509.75 76.375Z" })
  }
));
Transporter7Regular.displayName = "Transporter7Regular";
var Transporter7_default = Transporter7Regular;
