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
var FaceGrin_exports = {};
__export(FaceGrin_exports, {
  default: () => FaceGrin_default
});
module.exports = __toCommonJS(FaceGrin_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceGrinThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.453 16 16 123.453 16 256S123.453 496 256 496S496 388.547 496 256S388.547 16 256 16ZM256 480C132.484 480 32 379.516 32 256S132.484 32 256 32S480 132.484 480 256S379.516 480 256 480ZM336 192C344.844 192 352 199.148 352 208S344.844 224 336 224S320 216.852 320 208S327.156 192 336 192ZM176 192C184.844 192 192 199.148 192 208S184.844 224 176 224S160 216.852 160 208S167.156 192 176 192ZM384.027 319.977C382.43 319.977 380.791 320.223 379.152 320.75C348.879 330.5 303.953 336 256 336S163.121 330.5 132.848 320.75C131.191 320.223 129.539 319.977 127.928 319.977C118.469 319.977 110.484 328.496 112.141 338.75C121.465 393.75 195.453 432 256 432S390.656 393.75 399.859 338.75C401.412 328.496 393.414 319.977 384.027 319.977ZM256 416C201.934 416 135.67 381.82 127.943 335.98C159.555 346.16 206.23 352 256 352C305.742 352 352.391 346.168 384.031 335.988L384.078 336.109C376.428 381.836 310.148 416 256 416Z" })
  }
));
FaceGrinThin.displayName = "FaceGrinThin";
var FaceGrin_default = FaceGrinThin;
