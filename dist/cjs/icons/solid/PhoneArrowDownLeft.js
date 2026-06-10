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
const PhoneArrowDownLeftSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M493.094 351.247L384.609 304.747C371.828 299.215 356.813 302.934 348.125 313.715L304.078 367.528C234.828 333.528 178.531 277.247 144.547 208.028L198.375 163.932C209.125 155.151 212.797 140.276 207.359 127.495L160.828 18.932C154.734 5.026 139.656 -2.599 124.969 0.807L24.219 24.057C9.969 27.307 0 39.839 0 54.495C0 306.778 205.234 511.999 457.484 511.999C472.156 511.999 484.688 502.03 487.953 487.78L511.203 386.997C514.578 372.403 507 357.247 493.094 351.247ZM320 223.999H416C433.672 223.999 448 209.671 448 191.999S433.672 159.999 416 159.999H397.25L502.625 54.624C515.125 42.124 515.125 21.874 502.625 9.374S469.875 -3.126 457.375 9.374L352 114.749V95.999C352 78.327 337.672 63.999 320 63.999S288 78.327 288 95.999V191.999C288 209.671 302.328 223.999 320 223.999Z" })
  }
));
PhoneArrowDownLeftSolid.displayName = "PhoneArrowDownLeftSolid";
var PhoneArrowDownLeft_default = PhoneArrowDownLeftSolid;
