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
var ImagePolaroid_exports = {};
__export(ImagePolaroid_exports, {
  default: () => ImagePolaroid_default
});
module.exports = __toCommonJS(ImagePolaroid_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ImagePolaroidThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 32H48C21.49 32 0 53.492 0 80V432C0 458.508 21.49 480 48 480H400C426.51 480 448 458.508 448 432V80C448 53.492 426.51 32 400 32ZM432 432C432 449.645 417.645 464 400 464H48C30.355 464 16 449.645 16 432V352H432V432ZM140.574 336H34.687L124.969 241.344C126.656 239.594 129.344 239.594 131.031 241.344L180.941 293.684L140.574 336ZM282.469 210.438C285.469 207.313 290.531 207.313 293.531 210.438L413.311 336H162.689L282.469 210.438ZM432 332.406L305.094 199.375C295.969 189.875 280.031 189.875 270.906 199.375L191.998 282.094L142.594 230.281C134.844 222.156 121.156 222.156 113.406 230.281L16 332.406V80C16 62.355 30.355 48 48 48H400C417.645 48 432 62.355 432 80V332.406ZM112 104C89.938 104 72 121.938 72 144S89.938 184 112 184S152 166.062 152 144S134.062 104 112 104ZM112 168C98.781 168 88 157.234 88 144S98.781 120 112 120S136 130.766 136 144S125.219 168 112 168Z" })
  }
));
ImagePolaroidThin.displayName = "ImagePolaroidThin";
var ImagePolaroid_default = ImagePolaroidThin;
