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
var UmbrellaSimple_exports = {};
__export(UmbrellaSimple_exports, {
  default: () => UmbrellaSimple_default
});
module.exports = __toCommonJS(UmbrellaSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UmbrellaSimpleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M232.001 440C232.001 453.219 221.219 464 208.001 464S184.001 453.219 184.001 440C184.001 426.75 173.251 416 160.001 416S136.001 426.75 136.001 440C136.001 479.688 168.313 512 208.001 512S280.001 479.688 280.001 440V320H232.001V440ZM280.001 33.096V23.662C280.001 10.594 269.407 0 256.337 0H255.665C242.594 0 232.001 10.594 232.001 23.662V33.096C112.78 43.984 17.03 135.188 0.319 251.625C-2.435 270.812 13.003 288 32.555 288H479.446C498.999 288 514.436 270.812 511.682 251.625C494.971 135.188 399.221 43.984 280.001 33.096ZM51.354 240C73.477 147.582 158.315 80 256.001 80S438.524 147.582 460.647 240H51.354Z" })
  }
));
UmbrellaSimpleRegular.displayName = "UmbrellaSimpleRegular";
var UmbrellaSimple_default = UmbrellaSimpleRegular;
