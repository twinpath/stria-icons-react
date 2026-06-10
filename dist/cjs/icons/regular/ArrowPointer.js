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
var ArrowPointer_exports = {};
__export(ArrowPointer_exports, {
  default: () => ArrowPointer_default
});
module.exports = __toCommonJS(ArrowPointer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowPointerRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M311.871 279.459L39.874 38.014C35.408 34.057 29.753 32 24.011 32C20.674 32 17.306 32.696 14.125 34.116C5.531 38.015 0 46.629 0 56.123V426.338C0 436.461 6.281 445.515 15.719 449.005C18.422 449.995 21.218 450.482 24 450.482C30.906 450.482 37.64 447.48 42.281 441.978L125.76 343.168L184.01 466.231C189.707 478.267 204.024 483.38 215.99 477.652L215.99 477.652C227.962 471.922 233.047 457.512 227.348 445.47L168.769 321.712H295.996C305.98 321.712 314.918 315.503 318.449 306.103C321.98 296.719 319.355 286.108 311.871 279.459ZM121.692 273.423L107.317 290.439L47.999 360.648V109.627L232.524 273.423H121.692Z" })
  }
));
ArrowPointerRegular.displayName = "ArrowPointerRegular";
var ArrowPointer_default = ArrowPointerRegular;
