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
var Pear_exports = {};
__export(Pear_exports, {
  default: () => Pear_default
});
module.exports = __toCommonJS(Pear_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PearSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 24C512 10.291 500.79 0 488 0C481.86 0 475.719 2.344 471.031 7.031L422.416 55.646C399.928 39.92 373.751 32.365 347.463 32.365C310.987 32.365 274.296 46.91 246.944 74.352C176.273 145.254 0 138.579 0 319.536C0 425.857 86.581 511.999 192.246 511.999C373.738 511.999 363.508 338.044 440.713 260.58C466.741 234.468 479.65 200.381 479.65 166.232C479.65 139.546 471.767 112.822 456.1 89.838L504.969 40.969C509.656 36.281 512 30.141 512 24ZM192 448C183.156 448 176 440.844 176 432S183.156 416 192 416C244.938 416 288 372.938 288 320C288 311.156 295.156 304 304 304S320 311.156 320 320C320 390.578 262.594 448 192 448Z" })
  }
));
PearSolid.displayName = "PearSolid";
var Pear_default = PearSolid;
