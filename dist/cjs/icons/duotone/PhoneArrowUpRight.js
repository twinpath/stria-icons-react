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
var PhoneArrowUpRight_exports = {};
__export(PhoneArrowUpRight_exports, {
  default: () => PhoneArrowUpRight_default
});
module.exports = __toCommonJS(PhoneArrowUpRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PhoneArrowUpRightDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M297.375 169.375L402.75 64H384C366.328 64 352 49.672 352 32S366.328 0 384 0H480C497.672 0 512 14.328 512 32V128C512 145.672 497.672 160 480 160S448 145.672 448 128V109.25L342.625 214.625C330.125 227.125 309.875 227.125 297.375 214.625S284.875 181.875 297.375 169.375Z" })
    ]
  }
));
PhoneArrowUpRightDuotone.displayName = "PhoneArrowUpRightDuotone";
var PhoneArrowUpRight_default = PhoneArrowUpRightDuotone;
