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
var Vial_exports = {};
__export(Vial_exports, {
  default: () => Vial_default
});
module.exports = __toCommonJS(Vial_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VialSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M502.625 169.375L342.625 9.375C336.375 3.125 328.188 0 320 0S303.625 3.125 297.375 9.375C284.875 21.875 284.875 42.125 297.375 54.625L304.35 61.602L32.936 332.625C-5.814 371.375 -12.189 434.625 23.561 476.125C44.078 500 72.764 512 101.488 512H101.936C128.311 512 154.686 502 174.811 481.875L450.01 207.258L457.375 214.625C463.625 220.875 471.813 224 480 224S496.375 220.875 502.625 214.625C515.125 202.125 515.125 181.875 502.625 169.375ZM310.559 256H200.248L349.572 106.891L349.602 106.859L404.75 162.008L310.559 256Z" })
  }
));
VialSolid.displayName = "VialSolid";
var Vial_default = VialSolid;
