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
var LaptopCode_exports = {};
__export(LaptopCode_exports, {
  default: () => LaptopCode_default
});
module.exports = __toCommonJS(LaptopCode_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LaptopCodeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M372.688 299.312C375.812 302.438 379.906 304 384 304S392.188 302.438 395.312 299.312L459.312 235.312C465.562 229.062 465.562 218.937 459.312 212.688L395.312 148.688C389.062 142.438 378.937 142.438 372.688 148.688S366.438 165.063 372.688 171.312L425.375 224L372.688 276.688C366.438 282.938 366.438 293.062 372.688 299.312ZM267.312 148.688C261.062 142.438 250.937 142.438 244.688 148.688L180.688 212.688C174.438 218.938 174.438 229.063 180.688 235.312L244.688 299.312C247.812 302.438 251.906 304 256 304S264.188 302.438 267.312 299.312C273.562 293.062 273.562 282.937 267.312 276.688L214.625 224L267.312 171.312C273.562 165.062 273.562 154.938 267.312 148.688ZM80 352C88.844 352 96 344.844 96 336V96C96 78.344 110.359 64 128 64H512C529.641 64 544 78.344 544 96V336C544 344.844 551.156 352 560 352S576 344.844 576 336V96C576 60.719 547.297 32 512 32H128C92.703 32 64 60.719 64 96V336C64 344.844 71.156 352 80 352ZM624 384H16C7.25 384 0 391.25 0 400V416C0 451.25 28.75 480 64 480H576C611.25 480 640 451.25 640 416V400C640 391.25 632.75 384 624 384ZM576 448H64C46.355 448 32 433.645 32 416H608C608 433.645 593.645 448 576 448Z" })
  }
));
LaptopCodeLight.displayName = "LaptopCodeLight";
var LaptopCode_default = LaptopCodeLight;
