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
var Moon_exports = {};
__export(Moon_exports, {
  default: () => Moon_default
});
module.exports = __toCommonJS(Moon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MoonRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M421.562 379.918C420.898 379.918 420.213 379.98 419.514 380.113C408.275 382.256 397.139 383.283 386.189 383.283C291.381 383.283 211.236 306.139 211.236 207.793C211.236 144.602 245.029 86.496 299.969 55.188C308.436 50.375 306.307 37.523 296.689 35.746C285.488 33.668 267.158 32 255.793 32C132.26 32 32 132.188 32 256C32 379.648 132.096 480 255.793 480C324.828 480 387.852 448.555 429.621 397.066C435.344 389.994 429.99 379.918 421.562 379.918ZM255.793 432C158.861 432 80 353.047 80 256C80 179.684 128.773 114.555 196.746 90.213C175.229 125.006 163.236 165.611 163.236 207.793C163.236 307.234 228.363 391.717 318.107 420.629C298.471 428.072 277.414 432 255.793 432Z" })
  }
));
MoonRegular.displayName = "MoonRegular";
var Moon_default = MoonRegular;
