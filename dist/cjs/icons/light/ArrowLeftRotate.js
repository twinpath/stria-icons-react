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
var ArrowLeftRotate_exports = {};
__export(ArrowLeftRotate_exports, {
  default: () => ArrowLeftRotate_default
});
module.exports = __toCommonJS(ArrowLeftRotate_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowLeftRotateLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 256C480 379.5 379.516 480 256 480C186.594 480 122.234 448.594 79.438 393.844C74 386.906 75.234 376.844 82.188 371.406C89.172 365.875 99.219 367.156 104.656 374.156C141.344 421.094 196.516 448 256 448C361.875 448 448 361.875 448 256S361.875 64 256 64C187.064 64 124.498 100.727 90.154 160H176C184.844 160 192 167.156 192 176S184.844 192 176 192H48C39.156 192 32 184.844 32 176V48C32 39.156 39.156 32 48 32S64 39.156 64 48V141.559C104.359 73.867 176.529 32 256 32C379.516 32 480 132.5 480 256Z" })
  }
));
ArrowLeftRotateLight.displayName = "ArrowLeftRotateLight";
var ArrowLeftRotate_default = ArrowLeftRotateLight;
