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
var Image_exports = {};
__export(Image_exports, {
  default: () => Image_default
});
module.exports = __toCommonJS(Image_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ImageRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M152.014 120C125.504 120 104.014 141.492 104.014 168S125.504 216 152.014 216S200.014 194.508 200.014 168S178.523 120 152.014 120ZM448 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H448C483.348 480 512 451.346 512 416V96C512 60.652 483.348 32 448 32ZM464 409.303L327.229 223.379C323.838 218.768 318.129 216 312.014 216C305.9 216 300.191 218.768 296.801 223.379L190.166 368.338L153.074 322.236C149.633 317.957 144.141 315.428 138.301 315.428C132.459 315.428 126.967 317.957 123.525 322.236L48.018 416.084C48.018 416.055 48 416.029 48 416V96C48 87.178 55.178 80 64 80H448C456.822 80 464 87.178 464 96V409.303Z" })
  }
));
ImageRegular.displayName = "ImageRegular";
var Image_default = ImageRegular;
