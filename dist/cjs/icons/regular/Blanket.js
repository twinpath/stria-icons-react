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
var Blanket_exports = {};
__export(Blanket_exports, {
  default: () => Blanket_default
});
module.exports = __toCommonJS(Blanket_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BlanketRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 120C448 71.469 408.531 32 360 32H88C39.469 32 0 71.469 0 120V368C0 429.75 50.25 480 112 480H424C437.25 480 448 469.25 448 456S437.25 432 424 432H112C76.703 432 48 403.281 48 368S76.703 304 112 304H380C391.031 304 400 312.969 400 324S391.031 344 380 344H120C106.75 344 96 354.75 96 368S106.75 392 120 392H380C417.5 392 448 361.5 448 324C448 323.088 447.766 322.238 447.73 321.334C447.758 320.867 448 320.473 448 320V120ZM380 256H112C88.18 256 66.174 263.604 48 276.334V120C48 97.938 65.938 80 88 80H360C382.062 80 400 97.938 400 120V259.346C393.635 257.369 387.006 256 380 256Z" })
  }
));
BlanketRegular.displayName = "BlanketRegular";
var Blanket_default = BlanketRegular;
