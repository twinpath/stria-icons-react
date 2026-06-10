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
var Thumbtack_exports = {};
__export(Thumbtack_exports, {
  default: () => Thumbtack_default
});
module.exports = __toCommonJS(Thumbtack_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ThumbtackRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M308.172 192.484L302.119 48H328C341.256 48 352 37.254 352 24C352 10.744 341.256 0 328 0H56C42.744 0 32 10.744 32 24C32 37.254 42.744 48 56 48H87.105L76.297 192.234C28.25 218.844 0 260.938 0 307C0 331.812 20.188 352 45 352H168V488C168 501.25 178.75 512 192 512S216 501.25 216 488V352H339C363.812 352 384 331.812 384 307C384 261.094 355.938 219.125 308.172 192.484ZM216 304V232C216 218.75 205.25 208 192 208S168 218.75 168 232V304H48.078C49.5 274.281 72.172 246.516 109.328 229.25L122.094 223.312L135.234 48H254.078L261.422 223.094L274.672 229.25C311.828 246.516 334.5 274.281 335.922 304H216Z" })
  }
));
ThumbtackRegular.displayName = "ThumbtackRegular";
var Thumbtack_default = ThumbtackRegular;
