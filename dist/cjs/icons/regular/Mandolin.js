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
var Mandolin_exports = {};
__export(Mandolin_exports, {
  default: () => Mandolin_default
});
module.exports = __toCommonJS(Mandolin_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MandolinRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M507.261 50.645L461.261 4.647C456.011 -0.603 447.886 -1.478 441.511 2.397L377.511 42.52C370.511 46.895 365.511 53.645 363.511 61.644L345.136 133.016L285.886 192.264C96.761 188.639 49.636 237.387 30.761 256.261C-16.114 303.134 -8.739 406.63 48.261 463.752C80.261 495.626 126.761 512 169.761 512C203.511 512 235.136 501.875 255.761 481.251C271.261 465.627 323.511 420.129 319.761 226.137L379.011 166.89L450.386 148.516C458.261 146.391 465.136 141.391 469.511 134.516L509.511 70.519C513.511 64.144 512.636 56.02 507.261 50.645ZM221.761 447.378C211.386 457.752 191.886 464.002 169.761 464.002C136.886 464.002 103.386 450.878 82.261 429.754C42.511 390.005 38.636 316.258 64.636 290.259C112.511 241.887 221.136 241.262 237.511 240.637L188.261 289.76C166.886 283.885 144.261 293.009 133.011 312.259C121.886 331.383 125.011 355.632 140.636 371.381C156.386 387.005 180.636 390.13 199.761 379.006C219.011 367.756 228.136 345.132 222.261 323.758L271.386 274.51C270.886 289.51 270.261 399.13 221.761 447.378Z" })
  }
));
MandolinRegular.displayName = "MandolinRegular";
var Mandolin_default = MandolinRegular;
