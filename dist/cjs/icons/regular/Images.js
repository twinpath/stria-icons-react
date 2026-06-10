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
var Images_exports = {};
__export(Images_exports, {
  default: () => Images_default
});
module.exports = __toCommonJS(Images_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ImagesRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32H160.004C124.656 32 96.004 60.652 96.004 96V320C96.004 355.346 124.656 384 160.004 384H512C547.348 384 576 355.346 576 320V96C576 60.652 547.348 32 512 32ZM528 320C528 328.822 520.822 336 512 336H496L386.654 175.125C383.686 170.672 378.689 168 373.342 168C367.99 168 362.994 170.672 360.029 175.125L297.285 269.234L274.934 238.574C271.918 234.441 267.113 232 262.002 232C256.893 232 252.088 234.441 249.072 238.574L176 336H160.004C151.182 336 144.004 328.822 144.004 320V96C144.004 87.178 151.182 80 160.004 80H512C520.822 80 528 87.178 528 96V320ZM48.002 400V96C21.49 96 0 117.492 0 144V416C0 451.344 28.654 480 64.002 480H432.012C458.521 480 480.014 458.508 480.014 432H80.002C62.328 432 48.002 417.672 48.002 400ZM224 112C206.328 112 192 126.328 192 144S206.328 176 224 176C241.678 176 256.002 161.672 256.002 144S241.678 112 224 112Z" })
  }
));
ImagesRegular.displayName = "ImagesRegular";
var Images_default = ImagesRegular;
