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
var SterlingSign_exports = {};
__export(SterlingSign_exports, {
  default: () => SterlingSign_default
});
module.exports = __toCommonJS(SterlingSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SterlingSignRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 456C320 469.25 309.25 480 296 480H24C14.906 480 6.594 474.859 2.531 466.734S-0.656 448.875 4.813 441.594C32.656 404.453 48 358.422 48 312V280H24C10.75 280 0 269.25 0 256S10.75 232 24 232H48V159.25C48 89.078 105.094 32 175.25 32C188.969 32 202.531 34.203 215.5 38.531L295.594 65.234C308.156 69.422 314.969 83.016 310.781 95.594C306.563 108.141 293.063 114.969 280.406 110.766L200.313 84.063C192.219 81.359 183.813 80 175.25 80C131.563 80 96 115.547 96 159.25V232H232C245.25 232 256 242.75 256 256S245.25 280 232 280H96V312C96 353.625 85.906 394.984 67.094 432H296C309.25 432 320 442.75 320 456Z" })
  }
));
SterlingSignRegular.displayName = "SterlingSignRegular";
var SterlingSign_default = SterlingSignRegular;
