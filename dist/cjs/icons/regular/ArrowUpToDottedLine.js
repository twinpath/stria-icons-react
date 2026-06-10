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
var ArrowUpToDottedLine_exports = {};
__export(ArrowUpToDottedLine_exports, {
  default: () => ArrowUpToDottedLine_default
});
module.exports = __toCommonJS(ArrowUpToDottedLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpToDottedLineRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 95.999C241.674 95.999 256 81.671 256 63.999S241.674 31.999 224 31.999S192 46.327 192 63.999S206.326 95.999 224 95.999ZM416 95.999C433.674 95.999 448 81.671 448 63.999S433.674 31.999 416 31.999S384 46.327 384 63.999S398.326 95.999 416 95.999ZM320 95.999C337.674 95.999 352 81.671 352 63.999S337.674 31.999 320 31.999S288 46.327 288 63.999S302.326 95.999 320 95.999ZM128 95.999C145.674 95.999 160 81.671 160 63.999S145.674 31.999 128 31.999S96 46.327 96 63.999S110.326 95.999 128 95.999ZM32 95.999C49.674 95.999 64 81.671 64 63.999S49.674 31.999 32 31.999S0 46.327 0 63.999S14.326 95.999 32 95.999ZM241.469 151.273C232.406 141.574 215.594 141.574 206.531 151.273L78.531 287.48C69.437 297.152 69.906 312.363 79.562 321.437C89.187 330.547 104.375 330.109 113.469 320.406L200 228.352V439.961C200 453.234 210.75 464 224 464S248 453.234 248 439.961V228.352L334.531 320.406C339.25 325.445 345.625 327.98 352 327.98C357.906 327.98 363.812 325.82 368.438 321.437C378.094 312.363 378.562 297.152 369.469 287.48L241.469 151.273Z" })
  }
));
ArrowUpToDottedLineRegular.displayName = "ArrowUpToDottedLineRegular";
var ArrowUpToDottedLine_default = ArrowUpToDottedLineRegular;
