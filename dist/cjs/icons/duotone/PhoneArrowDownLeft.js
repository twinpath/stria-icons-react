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
var PhoneArrowDownLeft_exports = {};
__export(PhoneArrowDownLeft_exports, {
  default: () => PhoneArrowDownLeft_default
});
module.exports = __toCommonJS(PhoneArrowDownLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PhoneArrowDownLeftDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M493.094 351.249L384.609 304.748C371.828 299.217 356.813 302.936 348.125 313.717L304.078 367.53C234.828 333.53 178.531 277.248 144.547 208.029L198.375 163.935C209.125 155.154 212.797 140.278 207.359 127.497L160.828 18.934C154.734 5.027 139.656 -2.598 124.969 0.809L24.219 24.059C9.969 27.309 0 39.84 0 54.497C0 306.78 205.234 512 457.484 512C472.156 512 484.688 502.031 487.953 487.781L511.203 386.999C514.578 372.405 507 357.249 493.094 351.249Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M502.625 45.25L397.25 150.625H416C433.672 150.625 448 164.953 448 182.625S433.672 214.625 416 214.625H320C302.328 214.625 288 200.297 288 182.625V86.625C288 68.953 302.328 54.625 320 54.625S352 68.953 352 86.625V105.375L457.375 0C469.875 -12.5 490.125 -12.5 502.625 0S515.125 32.75 502.625 45.25Z" })
    ]
  }
));
PhoneArrowDownLeftDuotone.displayName = "PhoneArrowDownLeftDuotone";
var PhoneArrowDownLeft_default = PhoneArrowDownLeftDuotone;
