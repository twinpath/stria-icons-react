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
var SdCard_exports = {};
__export(SdCard_exports, {
  default: () => SdCard_default
});
module.exports = __toCommonJS(SdCard_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SdCardRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 0H141.254C132.768 0 124.629 3.371 118.627 9.373L9.373 118.627C3.371 124.629 0 132.768 0 141.254V448C0 483.199 28.801 512 64 512H320C355.199 512 384 483.199 384 448V64C384 28.799 355.199 0 320 0ZM336 448C336 456.75 328.75 464 320 464H64C55.25 464 48 456.75 48 448V147.875L147.875 48H320C328.75 48 336 55.25 336 64V448ZM288 80C279.164 80 272 87.162 272 96V160C272 168.836 279.164 176 288 176S304 168.836 304 160V96C304 87.162 296.836 80 288 80ZM224 80C215.164 80 208 87.162 208 96V160C208 168.836 215.164 176 224 176S240 168.836 240 160V96C240 87.162 232.836 80 224 80ZM160 80C151.164 80 144 87.162 144 96V160C144 168.836 151.164 176 160 176S176 168.836 176 160V96C176 87.162 168.836 80 160 80Z" })
  }
));
SdCardRegular.displayName = "SdCardRegular";
var SdCard_default = SdCardRegular;
