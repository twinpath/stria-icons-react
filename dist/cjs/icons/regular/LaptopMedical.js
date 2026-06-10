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
var LaptopMedical_exports = {};
__export(LaptopMedical_exports, {
  default: () => LaptopMedical_default
});
module.exports = __toCommonJS(LaptopMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LaptopMedicalRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M112 88C112 83.594 115.594 80 120 80H520C524.406 80 528 83.594 528 88V320H576V88C576 57.125 550.875 32 520 32H120C89.125 32 64 57.125 64 88V320H112V88ZM616 352H24C10.75 352 0 362.75 0 376V392C0 440.531 39.469 480 88 480H552C600.531 480 640 440.531 640 392V376C640 362.75 629.25 352 616 352ZM552 432H88C68.688 432 52.516 418.234 48.797 400H591.203C587.484 418.234 571.312 432 552 432ZM304 320H336C344.801 320 352 312.797 352 303.996V255.996H400C408.801 255.996 416 248.797 416 240V207.996C416 199.195 408.801 192 400 192H352V144C352 135.199 344.801 128 336 128H304C295.199 128 288 135.199 288 144V192H240C231.199 192 224 199.195 224 207.996V240C224 248.797 231.199 255.996 240 255.996H288V303.996C288 312.797 295.199 320 304 320Z" })
  }
));
LaptopMedicalRegular.displayName = "LaptopMedicalRegular";
var LaptopMedical_default = LaptopMedicalRegular;
