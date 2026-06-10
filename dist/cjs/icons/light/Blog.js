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
var Blog_exports = {};
__export(Blog_exports, {
  default: () => Blog_default
});
module.exports = __toCommonJS(Blog_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BlogLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 224C151.156 224 144 231.156 144 240S151.156 256 160 256C212.938 256 256 299.062 256 352S212.938 448 160 448S64 404.938 64 352V112C64 103.156 56.844 96 48 96S32 103.156 32 112V352C32 422.578 89.406 480 160 480S288 422.578 288 352S230.594 224 160 224ZM208 32C199.156 32 192 39.156 192 48S199.156 64 208 64C340.344 64 448 171.656 448 304C448 312.844 455.156 320 464 320S480 312.844 480 304C480 154.016 357.969 32 208 32ZM208 128C199.156 128 192 135.156 192 144S199.156 160 208 160C287.406 160 352 224.594 352 304C352 312.844 359.156 320 368 320S384 312.844 384 304C384 206.953 305.031 128 208 128Z" })
  }
));
BlogLight.displayName = "BlogLight";
var Blog_default = BlogLight;
