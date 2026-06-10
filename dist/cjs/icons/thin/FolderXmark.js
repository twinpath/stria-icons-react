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
var FolderXmark_exports = {};
__export(FolderXmark_exports, {
  default: () => FolderXmark_default
});
module.exports = __toCommonJS(FolderXmark_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FolderXmarkThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 96H272L217.375 41.375C211.371 35.371 203.234 32 194.746 32H48C21.492 32 0 53.492 0 80V432C0 458.508 21.492 480 48 480H464C490.508 480 512 458.508 512 432V144C512 117.492 490.508 96 464 96ZM496 432C496 449.672 481.672 464 464 464H48C30.328 464 16 449.672 16 432V80C16 62.328 30.328 48 48 48H188.117C196.602 48 204.742 51.371 210.742 57.371L265.371 112H464C481.672 112 496 126.328 496 144V432ZM333.656 210.344C330.531 207.219 325.469 207.219 322.344 210.344L256 276.686L189.656 210.344C186.531 207.219 181.469 207.219 178.344 210.344S175.219 218.531 178.344 221.656L244.688 287.998L178.344 354.342C175.219 357.467 175.219 362.529 178.344 365.654C181.469 368.781 186.531 368.781 189.656 365.654L256 299.311L322.344 365.654C325.469 368.781 330.531 368.781 333.656 365.654C336.781 362.529 336.781 357.467 333.656 354.342L267.312 287.998L333.656 221.656C336.781 218.531 336.781 213.469 333.656 210.344Z" })
  }
));
FolderXmarkThin.displayName = "FolderXmarkThin";
var FolderXmark_default = FolderXmarkThin;
