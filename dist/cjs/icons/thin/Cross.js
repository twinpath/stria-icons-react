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
var Cross_exports = {};
__export(Cross_exports, {
  default: () => Cross_default
});
module.exports = __toCommonJS(Cross_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CrossThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 128H256V32C256 14.375 241.625 0 224 0H160C142.375 0 128 14.375 128 32V128H32C14.375 128 0 142.375 0 160V224C0 241.625 14.375 256 32 256H128V480C128 497.625 142.375 512 160 512H224C241.625 512 256 497.625 256 480V256H352C369.625 256 384 241.625 384 224V160C384 142.375 369.625 128 352 128ZM368 224C368 232.822 360.822 240 352 240H240V480C240 488.822 232.822 496 224 496H160C151.178 496 144 488.822 144 480V240H32C23.178 240 16 232.822 16 224V160C16 151.178 23.178 144 32 144H144V32C144 23.178 151.178 16 160 16H224C232.822 16 240 23.178 240 32V144H352C360.822 144 368 151.178 368 160V224Z" })
  }
));
CrossThin.displayName = "CrossThin";
var Cross_default = CrossThin;
