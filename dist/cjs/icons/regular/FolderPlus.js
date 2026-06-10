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
var FolderPlus_exports = {};
__export(FolderPlus_exports, {
  default: () => FolderPlus_default
});
module.exports = __toCommonJS(FolderPlus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FolderPlusRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 96H275.883L226.746 50.746C214.742 38.742 198.465 32 181.492 32H64C28.656 32 0 60.656 0 96V416C0 451.344 28.656 480 64 480H448C483.344 480 512 451.344 512 416V160C512 124.656 483.344 96 448 96ZM464 416C464 424.824 456.82 432 448 432H64C55.18 432 48 424.824 48 416V96C48 87.176 55.18 80 64 80H181.492C185.766 80 189.781 81.664 192.805 84.688L256 144H448C456.82 144 464 151.176 464 160V416ZM336 264.002H280V207.998C280 194.738 269.258 184 256 184S232 194.738 232 207.998V264.002H176C162.738 264.002 152 274.742 152 288C152 301.256 162.73 311.998 176 311.998H232V368.002C232 381.258 242.734 392 256 392C269.258 392 280 381.262 280 368.002V311.998H336C349.262 311.998 360 301.258 360 288S349.262 264.002 336 264.002Z" })
  }
));
FolderPlusRegular.displayName = "FolderPlusRegular";
var FolderPlus_default = FolderPlusRegular;
