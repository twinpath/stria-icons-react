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
const FlowerLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M461.5 256C492.25 229.25 512 190.25 512 146.25C512 65.5 446.5 0 365.75 0C321.75 0 282.75 19.75 256 50.5C229.25 19.75 190.25 0 146.25 0C65.5 0 0 65.5 0 146.25C0 190.25 19.75 229.25 50.5 256C19.75 282.75 0 321.75 0 365.75C0 446.5 65.5 512 146.25 512C190.25 512 229.25 492.25 256 461.5C282.75 492.25 321.75 512 365.75 512C446.5 512 512 446.5 512 365.75C512 321.75 492.25 282.75 461.5 256ZM365.75 480C332.75 480 302.375 466.001 280.125 440.5L256 412.875L231.875 440.5C209.625 466.001 179.25 480 146.25 480C83.25 480 32 428.75 32 365.75C32 332.75 46 302.375 71.5 280.125L99.125 256L71.5 231.875C46 209.625 32 179.25 32 146.25C32 83.25 83.25 32 146.25 32C179.25 32 209.625 46.001 231.875 71.5L256 99.125L280.125 71.5C302.375 46.001 332.75 32 365.75 32C428.75 32 480 83.25 480 146.25C480 179.25 466 209.625 440.5 231.875L412.875 256L440.5 280.125C466 302.375 480 332.75 480 365.75C480 428.75 428.75 480 365.75 480ZM256 160C203.125 160 160 203.125 160 256S203.125 352 256 352S352 308.875 352 256S308.875 160 256 160ZM256 320C220.75 320 192 291.25 192 256S220.75 192 256 192S320 220.75 320 256S291.25 320 256 320Z" })
  }
));
FlowerLight.displayName = "FlowerLight";
var Flower_default = FlowerLight;
