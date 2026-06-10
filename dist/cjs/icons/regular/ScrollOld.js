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
var ScrollOld_exports = {};
__export(ScrollOld_exports, {
  default: () => ScrollOld_default
});
module.exports = __toCommonJS(ScrollOld_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScrollOldRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528 304H480V112C480 67.887 444.111 32 400 32H80C35.889 32 0 67.887 0 112V160C0 186.508 21.49 208 48 208H80V160H48V112C48 94.375 62.375 80 80 80S112 94.375 112 112V400C112 444.113 147.889 480 192 480H458.625C523.346 480 576 427.348 576 362.625V352C576 325.492 554.51 304 528 304ZM224 336V400C224 417.625 209.625 432 192 432S160 417.625 160 400V256H208C216.844 256 224 248.844 224 240S216.844 224 208 224H160V112C160 100.609 157.527 89.816 153.219 80H400C417.6 80 432 94.398 432 112V128H400C391.156 128 384 135.156 384 144S391.156 160 400 160H432V224H400C391.156 224 384 231.156 384 240S391.156 256 400 256H432V304H256C238.326 304 224 318.328 224 336ZM528 362.625C528 400.875 496.875 432 458.625 432H265.219C269.527 422.184 272 411.391 272 400V352H368V384C368 392.844 375.156 400 384 400S400 392.844 400 384V352H528V362.625Z" })
  }
));
ScrollOldRegular.displayName = "ScrollOldRegular";
var ScrollOld_default = ScrollOldRegular;
