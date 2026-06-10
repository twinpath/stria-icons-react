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
var GreaterThanEqual_exports = {};
__export(GreaterThanEqual_exports, {
  default: () => GreaterThanEqual_default
});
module.exports = __toCommonJS(GreaterThanEqual_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GreaterThanEqualLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 192.021C416 185.523 412.078 179.679 406.062 177.21L54.062 33.222C45.922 29.816 36.547 33.785 33.188 41.97C29.844 50.158 33.766 59.501 41.938 62.843L357.75 192.021L41.938 321.199C33.766 324.542 29.844 333.886 33.188 342.072C35.719 348.259 41.703 352.009 48 352.009C50.031 352.009 52.078 351.634 54.062 350.822L406.062 206.833C412.078 204.365 416 198.521 416 192.021ZM0 464.001C0 472.843 7.156 479.999 16 479.999H432C440.844 479.999 448 472.843 448 464.001C448 455.158 440.844 448.001 432 448.001H16C7.156 448.001 0 455.158 0 464.001Z" })
  }
));
GreaterThanEqualLight.displayName = "GreaterThanEqualLight";
var GreaterThanEqual_default = GreaterThanEqualLight;
