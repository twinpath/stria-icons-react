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
var ContainerStorage_exports = {};
__export(ContainerStorage_exports, {
  default: () => ContainerStorage_default
});
module.exports = __toCommonJS(ContainerStorage_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ContainerStorageLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 416C376.844 416 384 408.844 384 400V112C384 103.156 376.844 96 368 96S352 103.156 352 112V400C352 408.844 359.156 416 368 416ZM464 416C472.844 416 480 408.844 480 400V112C480 103.156 472.844 96 464 96S448 103.156 448 112V400C448 408.844 455.156 416 464 416ZM272 416C280.844 416 288 408.844 288 400V112C288 103.156 280.844 96 272 96S256 103.156 256 112V400C256 408.844 263.156 416 272 416ZM624 448H608V64H624C632.844 64 640 56.844 640 48S632.844 32 624 32H16C7.156 32 0 39.156 0 48S7.156 64 16 64H32V448H16C7.156 448 0 455.156 0 464S7.156 480 16 480H624C632.844 480 640 472.844 640 464S632.844 448 624 448ZM576 448H64V64H576V448ZM176 416C184.844 416 192 408.844 192 400V112C192 103.156 184.844 96 176 96S160 103.156 160 112V400C160 408.844 167.156 416 176 416Z" })
  }
));
ContainerStorageLight.displayName = "ContainerStorageLight";
var ContainerStorage_default = ContainerStorageLight;
