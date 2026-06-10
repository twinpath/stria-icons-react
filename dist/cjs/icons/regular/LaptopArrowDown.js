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
var LaptopArrowDown_exports = {};
__export(LaptopArrowDown_exports, {
  default: () => LaptopArrowDown_default
});
module.exports = __toCommonJS(LaptopArrowDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LaptopArrowDownRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528 88V320H576V88C576 57.125 550.875 32 520 32H384V80H520C524.406 80 528 83.594 528 88ZM223.031 199.031C213.656 208.406 213.656 223.594 223.031 232.969L303.031 312.969C312.406 322.344 327.594 322.344 336.969 312.969L416.969 232.969C426.344 223.594 426.344 208.406 416.969 199.031S392.406 189.656 383.031 199.031L344 238.062V56C344 42.75 333.25 32 320 32S296 42.75 296 56V238.062L256.969 199.031C252.281 194.344 246.156 192 240 192S227.719 194.344 223.031 199.031ZM616 352H24C10.75 352 0 362.75 0 376V392C0 440.531 39.469 480 88 480H552C600.531 480 640 440.531 640 392V376C640 362.75 629.25 352 616 352ZM552 432H88C68.688 432 52.516 418.234 48.797 400H591.203C587.484 418.234 571.312 432 552 432ZM112 88C112 83.594 115.594 80 120 80H249.502V32H120C89.125 32 64 57.125 64 88V320H112V88Z" })
  }
));
LaptopArrowDownRegular.displayName = "LaptopArrowDownRegular";
var LaptopArrowDown_default = LaptopArrowDownRegular;
