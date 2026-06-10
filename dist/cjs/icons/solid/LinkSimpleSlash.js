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
var LinkSimpleSlash_exports = {};
__export(LinkSimpleSlash_exports, {
  default: () => LinkSimpleSlash_default
});
module.exports = __toCommonJS(LinkSimpleSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LinkSimpleSlashSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 352H160C107.062 352 64 308.938 64 256C64 223.965 79.92 195.727 104.104 178.279L52.795 138.066C20.6 167.355 0 209.154 0 256C0 344.219 71.781 416 160 416H256C273.688 416 288 401.672 288 384S273.688 352 256 352ZM544.953 401.809C600.877 376.945 640 321.068 640 256C640 167.781 568.219 96 480 96H384C366.312 96 352 110.328 352 128S366.312 160 384 160H480C532.938 160 576 203.062 576 256C576 308.512 533.596 351.189 481.244 351.875L399.748 288H416C433.688 288 448 273.672 448 256S433.688 224 416 224H318.092L236.436 160H256C273.688 160 288 145.672 288 128S273.688 96 256 96H160C158.352 96 156.76 96.219 155.125 96.271L38.814 5.109C34.408 1.672 29.189 0 24.033 0C16.908 0 9.846 3.156 5.127 9.188C-3.061 19.625 -1.248 34.717 9.189 42.889L601.186 506.883C611.686 515.086 626.748 513.211 634.873 502.805C643.061 492.367 641.248 477.273 630.811 469.102L544.953 401.809Z" })
  }
));
LinkSimpleSlashSolid.displayName = "LinkSimpleSlashSolid";
var LinkSimpleSlash_default = LinkSimpleSlashSolid;
