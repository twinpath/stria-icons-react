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
var Sigma_exports = {};
__export(Sigma_exports, {
  default: () => Sigma_default
});
module.exports = __toCommonJS(Sigma_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SigmaThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352.001 136V64H25.309L198.092 250.812C200.624 253.812 200.624 258.188 198.092 261.188L25.309 448H352.001V376C352.001 371.594 355.594 368 360.001 368S368.001 371.594 368.001 376V456C368.001 460.406 364.407 464 360.001 464H7.997C4.872 464 2.028 462.188 0.747 459.344C-0.566 456.531 -0.128 453.188 1.903 450.812L181.499 256L1.903 61.188C-0.128 58.812 -0.566 55.469 0.747 52.656C2.028 49.812 4.872 48 7.997 48H360.001C364.407 48 368.001 51.594 368.001 56V136C368.001 140.406 364.407 144 360.001 144S352.001 140.406 352.001 136Z" })
  }
));
SigmaThin.displayName = "SigmaThin";
var Sigma_default = SigmaThin;
