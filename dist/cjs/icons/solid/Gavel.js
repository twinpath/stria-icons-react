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
const GavelSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 216.329C512 210.204 509.656 204.08 504.969 199.395L482.346 176.77C477.658 172.084 471.502 169.741 465.347 169.741S453.035 172.084 448.348 176.77L442.723 182.395L329.605 69.277L335.23 63.652C339.917 58.965 342.26 52.81 342.26 46.654S339.917 34.344 335.23 29.656L312.605 7.031C307.919 2.344 301.794 0 295.67 0S283.42 2.344 278.732 7.031L154.24 131.523C149.553 136.211 147.209 142.336 147.209 148.461S149.553 160.711 154.24 165.398L176.863 188.02C181.551 192.707 187.707 195.051 193.863 195.051S206.175 192.707 210.861 188.02L216.486 182.395L329.605 295.516L323.98 301.137C319.293 305.824 316.949 311.98 316.949 318.136S319.293 330.447 323.98 335.133L346.604 357.758C351.291 362.445 357.416 364.789 363.54 364.789S375.789 362.445 380.477 357.758L504.969 233.266C509.656 228.578 512 222.453 512 216.329ZM227.793 238.957L169.363 297.387C163.113 291.139 154.927 288.015 146.74 288.015S130.367 291.139 124.117 297.387L9.375 412.133C3.125 418.381 0 426.567 0 434.754S3.125 451.127 9.375 457.375L54.621 502.625C60.871 508.875 69.058 512 77.245 512S93.619 508.875 99.869 502.625L214.611 387.883C220.862 381.632 223.987 373.446 223.987 365.259C223.987 357.074 220.863 348.888 214.613 342.637L273.043 284.207L227.793 238.957Z " })
  }
));
GavelSolid.displayName = "GavelSolid";
var Gavel_default = GavelSolid;
