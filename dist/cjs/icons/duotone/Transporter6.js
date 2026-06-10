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
var Transporter6_exports = {};
__export(Transporter6_exports, {
  default: () => Transporter6_default
});
module.exports = __toCommonJS(Transporter6_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Transporter6Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M509.75 396.375L480 384L467.625 354.25C466.875 352.875 465.5 352 464 352S461.125 352.875 460.375 354.25L448 384L418.25 396.375C416.875 397.125 416 398.5 416 400S416.875 402.875 418.25 403.625L448 416L460.375 445.75C461.125 447.125 462.5 448 464 448S466.875 447.125 467.625 445.75L480 416L509.75 403.625C511.125 402.875 512 401.5 512 400S511.125 397.125 509.75 396.375ZM93.75 44.375L64 32L51.625 2.25C50.875 0.875 49.5 0 48 0S45.125 0.875 44.375 2.25L32 32L2.25 44.375C0.875 45.125 0 46.5 0 48S0.875 50.875 2.25 51.625L32 64L44.375 93.75C45.125 95.125 46.5 96 48 96S50.875 95.125 51.625 93.75L64 64L93.75 51.625C95.125 50.875 96 49.5 96 48S95.125 45.125 93.75 44.375ZM224 32H288C296.844 32 304 24.844 304 16S296.844 0 288 0H224C215.156 0 208 7.156 208 16S215.156 32 224 32ZM400 256H112C103.156 256 96 263.156 96 272S103.156 288 112 288H400C408.844 288 416 280.844 416 272S408.844 256 400 256Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 448H128C110.375 448 96 462.375 96 480V512H416V480C416 462.375 401.625 448 384 448Z" })
    ]
  }
));
Transporter6Duotone.displayName = "Transporter6Duotone";
var Transporter6_default = Transporter6Duotone;
