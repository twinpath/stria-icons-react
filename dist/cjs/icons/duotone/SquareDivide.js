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
var SquareDivide_exports = {};
__export(SquareDivide_exports, {
  default: () => SquareDivide_default
});
module.exports = __toCommonJS(SquareDivide_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareDivideDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.656 419.346 32 384 32ZM224 128C241.674 128 256 142.326 256 160C256 177.672 241.674 192 224 192S192 177.672 192 160C192 142.326 206.326 128 224 128ZM224 384C206.326 384 192 369.672 192 352C192 334.326 206.326 320 224 320S256 334.326 256 352C256 369.672 241.674 384 224 384ZM319.998 280H127.998C114.797 280 103.996 269.197 103.996 256C103.996 242.799 114.797 232 127.998 232H319.998C333.195 232 343.996 242.799 343.996 256C343.996 269.197 333.195 280 319.998 280Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.002 232H128.002C114.801 232 104 242.799 104 256C104 269.197 114.801 280 128.002 280H320.002C333.199 280 344 269.197 344 256C344 242.799 333.199 232 320.002 232ZM224.004 192C241.678 192 256.004 177.672 256.004 160C256.004 142.326 241.678 128 224.004 128S192.004 142.326 192.004 160C192.004 177.672 206.33 192 224.004 192ZM224.004 320C206.33 320 192.004 334.326 192.004 352C192.004 369.672 206.33 384 224.004 384S256.004 369.672 256.004 352C256.004 334.326 241.678 320 224.004 320Z" })
    ]
  }
));
SquareDivideDuotone.displayName = "SquareDivideDuotone";
var SquareDivide_default = SquareDivideDuotone;
