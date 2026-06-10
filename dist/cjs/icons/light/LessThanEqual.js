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
var LessThanEqual_exports = {};
__export(LessThanEqual_exports, {
  default: () => LessThanEqual_default
});
module.exports = __toCommonJS(LessThanEqual_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LessThanEqualLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M41.938 206.834L393.938 350.822C395.922 351.635 397.969 352.01 400 352.01C406.297 352.01 412.281 348.26 414.812 342.072C418.156 333.887 414.234 324.543 406.062 321.199L90.25 192.021L406.062 62.844C414.234 59.502 418.156 50.158 414.812 41.971C411.453 33.785 402.078 29.816 393.937 33.223L41.937 177.211C35.922 179.68 32 185.523 32 192.021C32 198.521 35.922 204.365 41.938 206.834ZM432 448.002H16C7.156 448.002 0 455.158 0 464.002C0 472.844 7.156 480 16 480H432C440.844 480 448 472.844 448 464.002C448 455.158 440.844 448.002 432 448.002Z" })
  }
));
LessThanEqualLight.displayName = "LessThanEqualLight";
var LessThanEqual_default = LessThanEqualLight;
