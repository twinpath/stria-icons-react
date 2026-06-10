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
var Siren_exports = {};
__export(Siren_exports, {
  default: () => Siren_default
});
module.exports = __toCommonJS(Siren_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SirenLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 384H32C14.328 384 0 398.328 0 416V448C0 465.672 14.328 480 32 480H416C433.674 480 448 465.672 448 448V416C448 398.328 433.674 384 416 384ZM416 448H32V416H416V448ZM52 352C60.07 352 66.877 345.992 67.877 337.984L88.869 170.047C91.871 146.023 112.291 128 136.5 128H311.5C335.709 128 356.129 146.023 359.131 170.047L380.123 337.984C381.123 345.992 387.93 352 396 352C405.623 352 413.07 343.562 411.875 334.016L390.867 166.055C385.859 126.031 351.836 96 311.5 96H136.5C96.164 96 62.141 126.031 57.133 166.055L36.125 334.016C34.93 343.562 42.377 352 52 352ZM128.188 173.625L104.188 333.625C102.875 342.375 108.875 350.5 117.625 351.812C118.438 351.938 119.219 352 120.031 352C127.813 352 134.625 346.312 135.813 338.375L159.813 178.375C161.125 169.625 155.125 161.5 146.375 160.188C137.75 158.781 129.5 164.844 128.188 173.625Z" })
  }
));
SirenLight.displayName = "SirenLight";
var Siren_default = SirenLight;
