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
const ImagePolaroidRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M112 112C94.328 112 80 126.328 80 144S94.328 176 112 176C129.678 176 144.002 161.672 144.002 144S129.678 112 112 112ZM448 96C448 60.652 419.348 32 384 32H64C28.652 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416C448 349.355 448.059 164.947 448 96ZM400 416C400 424.822 392.822 432 384 432H64C55.178 432 48 424.822 48 416V368H400V416ZM400 320H371.238L274.654 175.125C271.686 170.672 266.689 168 261.342 168C255.99 168 250.994 170.672 248.029 175.125L185.285 269.234L162.934 238.574C159.918 234.441 155.113 232 150.002 232C144.893 232 140.088 234.441 137.072 238.574L77.697 320H48V96C48 87.178 55.178 80 64 80H384C392.822 80 400 87.178 400 96V320Z" })
  }
));
ImagePolaroidRegular.displayName = "ImagePolaroidRegular";
var ImagePolaroid_default = ImagePolaroidRegular;
