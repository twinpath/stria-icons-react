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
var ShareAll_exports = {};
__export(ShareAll_exports, {
  default: () => ShareAll_default
});
module.exports = __toCommonJS(ShareAll_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShareAllDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M567.688 189.846L391.688 37.846C376.281 24.549 352 35.346 352 56.018V71.834L509.668 208.002L352 344.168V360.002C352 380.705 376.312 391.455 391.688 378.158L567.688 226.158C578.768 216.59 578.768 199.414 567.688 189.846Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M439.691 189.846L263.691 37.846C248.285 24.549 224.004 35.346 224.004 56.018V138.857C94.863 149.102 0 191.014 0 322.33C0 383.768 39.594 444.643 83.344 476.455C97 486.393 116.438 473.924 111.406 457.83C72.924 334.758 115.508 288.539 224.004 275.963V360.002C224.004 380.705 248.316 391.455 263.691 378.158L439.691 226.158C450.754 216.596 450.785 199.408 439.691 189.846Z" })
    ]
  }
));
ShareAllDuotone.displayName = "ShareAllDuotone";
var ShareAll_default = ShareAllDuotone;
