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
var FilePlusMinus_exports = {};
__export(FilePlusMinus_exports, {
  default: () => FilePlusMinus_default
});
module.exports = __toCommonJS(FilePlusMinus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FilePlusMinusDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V128H256ZM256 432H128C119.156 432 112 424.844 112 416S119.156 400 128 400H256C264.844 400 272 407.156 272 416S264.844 432 256 432ZM256 288H208V336C208 344.844 200.844 352 192 352S176 344.844 176 336V288H128C119.156 288 112 280.844 112 272S119.156 256 128 256H176V208C176 199.156 183.156 192 192 192S208 199.156 208 208V256H256C264.844 256 272 263.156 272 272S264.844 288 256 288Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 0V128H384L256 0ZM256 400H128C119.156 400 112 407.156 112 416S119.156 432 128 432H256C264.844 432 272 424.844 272 416S264.844 400 256 400ZM256 256H208V208C208 199.156 200.844 192 192 192S176 199.156 176 208V256H128C119.156 256 112 263.156 112 272S119.156 288 128 288H176V336C176 344.844 183.156 352 192 352S208 344.844 208 336V288H256C264.844 288 272 280.844 272 272S264.844 256 256 256Z" })
    ]
  }
));
FilePlusMinusDuotone.displayName = "FilePlusMinusDuotone";
var FilePlusMinus_default = FilePlusMinusDuotone;
