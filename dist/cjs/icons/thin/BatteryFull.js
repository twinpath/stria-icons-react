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
var BatteryFull_exports = {};
__export(BatteryFull_exports, {
  default: () => BatteryFull_default
});
module.exports = __toCommonJS(BatteryFull_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BatteryFullThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 160H96C78.326 160 64 174.326 64 192V320C64 337.674 78.326 352 96 352H432C449.674 352 464 337.674 464 320V192C464 174.326 449.674 160 432 160ZM448 320C448 328.822 440.822 336 432 336H96C87.178 336 80 328.822 80 320V192C80 183.178 87.178 176 96 176H432C440.822 176 448 183.178 448 192V320ZM544 192H528V160C528 124.654 499.346 96 464 96H64C28.654 96 0 124.654 0 160V352C0 387.346 28.654 416 64 416H464C499.346 416 528 387.346 528 352V320H544C561.672 320 576 305.674 576 288V224C576 206.326 561.672 192 544 192ZM512 352C512 378.467 490.467 400 464 400H64C37.533 400 16 378.467 16 352V160C16 133.533 37.533 112 64 112H464C490.467 112 512 133.533 512 160V352ZM560 288C560 296.822 552.82 304 544 304H528V208H544C552.82 208 560 215.178 560 224V288Z" })
  }
));
BatteryFullThin.displayName = "BatteryFullThin";
var BatteryFull_default = BatteryFullThin;
