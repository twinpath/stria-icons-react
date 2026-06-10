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
var Right_exports = {};
__export(Right_exports, {
  default: () => Right_default
});
module.exports = __toCommonJS(Right_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RightThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 320H224V416C224 428.938 231.797 440.609 243.75 445.562C247.713 447.203 251.873 448 255.996 448C264.322 448 272.502 444.75 278.625 438.625L438.625 278.625C444.875 272.375 448 264.188 448 256S444.875 239.625 438.625 233.375L278.625 73.375C272.502 67.252 264.322 64 255.996 64C251.873 64 247.715 64.797 243.75 66.438C231.797 71.391 224 83.062 224 96V192H32C14.326 192 0 206.326 0 224V288C0 305.672 14.326 320 32 320ZM16 224C16 215.178 23.178 208 32 208H240V96C240 89.508 243.877 83.705 249.867 81.223C251.826 80.412 253.889 80 255.996 80C260.27 80 264.287 81.666 267.311 84.689L427.311 244.689C430.334 247.713 432 251.73 432 256C432 260.271 430.334 264.289 427.311 267.312L267.311 427.312C264.287 430.336 260.27 432 255.996 432C253.889 432 251.826 431.59 249.875 430.781C243.877 428.295 240 422.494 240 416V304H32C23.178 304 16 296.822 16 288V224Z" })
  }
));
RightThin.displayName = "RightThin";
var Right_default = RightThin;
