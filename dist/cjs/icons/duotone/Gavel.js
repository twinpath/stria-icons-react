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
var Gavel_exports = {};
__export(Gavel_exports, {
  default: () => Gavel_default
});
module.exports = __toCommonJS(Gavel_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GavelDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M214.613 342.637C220.863 348.888 223.987 357.074 223.987 365.259C223.987 373.446 220.862 381.632 214.611 387.883L99.869 502.625C93.619 508.875 85.432 512 77.245 512S60.871 508.875 54.621 502.625L9.375 457.375C3.125 451.127 0 442.94 0 434.754S3.125 418.381 9.375 412.133L124.117 297.387C130.367 291.139 138.554 288.015 146.74 288.015S163.113 291.139 169.363 297.387L250.42 216.33L295.67 261.58L214.613 342.637Z ", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M511.791 216.329C511.791 210.204 509.447 204.08 504.76 199.395L482.137 176.77C477.449 172.084 471.293 169.741 465.138 169.741S452.826 172.084 448.139 176.77L442.514 182.395L329.396 69.277L335.021 63.652C339.708 58.965 342.051 52.81 342.051 46.654S339.708 34.344 335.021 29.656L312.396 7.031C307.71 2.344 301.585 0 295.461 0S283.211 2.344 278.523 7.031L154.031 131.523C149.344 136.211 147 142.336 147 148.461S149.344 160.711 154.031 165.398L176.654 188.02C181.342 192.707 187.498 195.051 193.654 195.051C199.81 195.051 205.966 192.707 210.652 188.02L216.277 182.395L329.396 295.516L323.771 301.137C319.084 305.824 316.74 311.98 316.74 318.136S319.084 330.447 323.771 335.133L346.395 357.758C351.082 362.445 357.207 364.789 363.331 364.789S375.58 362.445 380.268 357.758L504.76 233.266C509.447 228.578 511.791 222.453 511.791 216.329Z " })
    ]
  }
));
GavelDuotone.displayName = "GavelDuotone";
var Gavel_default = GavelDuotone;
