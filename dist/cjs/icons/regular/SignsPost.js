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
var SignsPost_exports = {};
__export(SignsPost_exports, {
  default: () => SignsPost_default
});
module.exports = __toCommonJS(SignsPost_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SignsPostRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M441.42 192C449.922 192 458.049 187.75 464.051 180.25L507.311 126.125C513.563 118.375 513.563 105.625 507.311 97.875L464.051 43.75C458.049 36.25 449.922 32 441.42 32H280.006V24C280.006 10.745 269.258 0 256 0H256C242.742 0 231.994 10.745 231.994 24V32H55.951C42.698 32 31.945 45.375 31.945 62V162C31.945 178.625 42.698 192 55.951 192H231.994V224H70.58C62.078 224 53.951 228.25 47.949 235.75L4.689 289.875C-1.563 297.625 -1.563 310.375 4.689 318.125L47.949 372.25C53.951 379.75 62.078 384 70.58 384H231.994V488C231.994 501.255 242.742 512 256 512H256C269.258 512 280.006 501.255 280.006 488V384H456.049C469.302 384 480.055 370.625 480.055 354V254C480.055 237.375 469.302 224 456.049 224H280.006V192H441.42ZM432.043 336H80.457L54.826 304L80.457 272H432.043V336ZM79.957 80H431.543L457.174 112L431.543 144H79.957V80Z" })
  }
));
SignsPostRegular.displayName = "SignsPostRegular";
var SignsPost_default = SignsPostRegular;
