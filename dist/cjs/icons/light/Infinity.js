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
var Infinity_exports = {};
__export(Infinity_exports, {
  default: () => Infinity_default
});
module.exports = __toCommonJS(Infinity_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const InfinityLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488.875 96C406.25 96 346.25 178.5 320 222.5C293.75 178.5 233.75 96 151.125 96C67.75 96 0 167.75 0 256S67.75 416 151.125 416C233.625 416 293.75 333.5 320 289.5C346.25 333.5 406.25 416 488.875 416C572.25 416 640 344.25 640 256S572.25 96 488.875 96ZM151.125 384C85.5 384 32 326.625 32 256S85.5 128 151.125 128C229.125 128 287.625 228.625 301.999 256C287.625 283.375 229.125 384 151.125 384ZM488.875 384C410.875 384 352.375 283.375 337.999 256C352.375 228.625 410.875 128 488.875 128C554.5 128 608 185.375 608 256S554.5 384 488.875 384Z" })
  }
));
InfinityLight.displayName = "InfinityLight";
var Infinity_default = InfinityLight;
