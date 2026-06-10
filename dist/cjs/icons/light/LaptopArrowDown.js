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
var LaptopArrowDown_exports = {};
__export(LaptopArrowDown_exports, {
  default: () => LaptopArrowDown_default
});
module.exports = __toCommonJS(LaptopArrowDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LaptopArrowDownLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240.014 208C235.92 208 231.826 209.562 228.701 212.688C222.451 218.938 222.451 229.063 228.701 235.312L308.701 315.312C314.951 321.562 325.076 321.562 331.326 315.312L411.326 235.312C417.576 229.062 417.576 218.937 411.326 212.688S394.951 206.438 388.701 212.688L336.014 265.375V48C336.014 39.156 328.857 32 320.014 32S304.014 39.156 304.014 48V265.375L251.326 212.688C248.201 209.562 244.107 208 240.014 208ZM400 64H512C529.674 64 544 78.326 544 96V336C544 344.844 551.156 352 560 352S576 344.844 576 336V96C576 60.652 547.346 32 512 32H400C391.164 32 384 39.162 384 48C384 56.836 391.164 64 400 64ZM80 352C88.844 352 96 344.844 96 336V96C96 78.326 110.326 64 128 64H240C248.836 64 256 56.836 256 48C256 39.162 248.836 32 240 32H128C92.654 32 64 60.652 64 96V336C64 344.844 71.156 352 80 352ZM624 384H16C7.25 384 0 391.25 0 400V416C0 451.25 28.75 480 64 480H576C611.25 480 640 451.25 640 416V400C640 391.25 632.75 384 624 384ZM576 448H64C46.355 448 32 433.645 32 416H608C608 433.645 593.645 448 576 448Z" })
  }
));
LaptopArrowDownLight.displayName = "LaptopArrowDownLight";
var LaptopArrowDown_default = LaptopArrowDownLight;
