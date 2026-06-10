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
var RotateForward_exports = {};
__export(RotateForward_exports, {
  default: () => RotateForward_default
});
module.exports = __toCommonJS(RotateForward_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RotateForwardLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 256C32 379.5 132.5 480 256 480C325.375 480 389.75 448.594 432.562 393.875C438 386.906 436.781 376.844 429.844 371.406C422.875 365.906 412.844 367.156 407.375 374.125C370.656 421.094 315.469 448 256 448C150.125 448 64 361.875 64 256S150.125 64 256 64C300.75 64 344.312 79.719 378.688 108.312C379.152 108.703 379.732 108.82 380.229 109.148L324.688 164.687C320.125 169.25 318.75 176.156 321.219 182.125S329.531 192 336 192H464C472.844 192 480 184.844 480 176V48C480 41.531 476.094 35.688 470.125 33.219C464.187 30.812 457.25 32.125 452.687 36.687L402.055 87.32C401.207 86.031 400.375 84.727 399.125 83.688C359.062 50.375 308.219 32 256 32C132.5 32 32 132.5 32 256ZM374.625 160L448 86.625V160H374.625Z" })
  }
));
RotateForwardLight.displayName = "RotateForwardLight";
var RotateForward_default = RotateForwardLight;
