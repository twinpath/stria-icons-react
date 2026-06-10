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
var ShekelSign_exports = {};
__export(ShekelSign_exports, {
  default: () => ShekelSign_default
});
module.exports = __toCommonJS(ShekelSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShekelSignLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 144V336C272 344.844 279.156 352 288 352S304 344.844 304 336V144C304 82.25 253.75 32 192 32H80C53.531 32 32 53.531 32 80V464C32 472.844 39.156 480 48 480S64 472.844 64 464V80C64 71.172 71.188 64 80 64H192C236.125 64 272 99.891 272 144ZM400 32C391.156 32 384 39.156 384 48V368C384 412.183 348.183 448 304 448H192C183.163 448 176 440.837 176 432V176C176 167.156 168.844 160 160 160S144 167.156 144 176V432C144 458.51 165.49 480 192 480H304C365.856 480 416 429.856 416 368V48C416 39.156 408.844 32 400 32Z" })
  }
));
ShekelSignLight.displayName = "ShekelSignLight";
var ShekelSign_default = ShekelSignLight;
