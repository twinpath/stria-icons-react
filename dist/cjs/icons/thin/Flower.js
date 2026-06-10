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
var Flower_exports = {};
__export(Flower_exports, {
  default: () => Flower_default
});
module.exports = __toCommonJS(Flower_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FlowerThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 160C480 89.25 422.75 32 352 32C313.5 32 279.5 49.25 256 76.125C232.5 49.25 198.5 32 160 32C89.25 32 32 89.25 32 160C32 198.5 49.25 232.5 76.125 256C49.25 279.5 32 313.5 32 352C32 422.75 89.25 480 160 480C198.5 480 232.5 462.75 256 435.875C279.5 462.75 313.5 480 352 480C422.75 480 480 422.75 480 352C480 313.5 462.75 279.5 435.875 256C462.75 232.5 480 198.5 480 160ZM464 352C464 413.758 413.758 464 352 464C319.658 464 289.844 450.27 268.045 425.344L256 411.566L243.955 425.344C222.158 450.27 192.342 464 160 464C98.244 464 48 413.758 48 352C48 319.66 61.729 289.844 86.658 268.043L100.432 256L86.658 243.957C61.729 222.156 48 192.34 48 160C48 98.242 98.244 48 160 48C192.342 48 222.158 61.73 243.955 86.656L256 100.434L268.045 86.656C289.844 61.73 319.658 48 352 48C413.758 48 464 98.242 464 160C464 192.34 450.271 222.156 425.344 243.957L411.568 256L425.344 268.043C450.271 289.844 464 319.66 464 352ZM256 176C211.875 176 176 211.875 176 256S211.875 336 256 336S336 300.125 336 256S300.125 176 256 176ZM256 320C220.711 320 192 291.289 192 256S220.711 192 256 192C291.291 192 320 220.711 320 256S291.291 320 256 320Z" })
  }
));
FlowerThin.displayName = "FlowerThin";
var Flower_default = FlowerThin;
