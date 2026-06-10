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
var CarBattery_exports = {};
__export(CarBattery_exports, {
  default: () => CarBattery_default
});
module.exports = __toCommonJS(CarBattery_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CarBatteryRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 96H432V80C432 71.125 424.875 64 416 64H320C311.125 64 304 71.125 304 80V96H208V80C208 71.125 200.875 64 192 64H96C87.125 64 80 71.125 80 80V96H64C28.801 96 0 124.799 0 160V384C0 419.199 28.801 448 64 448H448C483.199 448 512 419.199 512 384V160C512 124.799 483.199 96 448 96ZM464 384C464 392.836 456.836 400 448 400H64C55.164 400 48 392.836 48 384V160C48 151.162 55.164 144 64 144H448C456.836 144 464 151.162 464 160V384ZM416 224H384V192C384 183.164 376.836 176 368 176S352 183.164 352 192V224H320C311.164 224 304 231.164 304 240S311.164 256 320 256H352V288C352 296.836 359.164 304 368 304S384 296.836 384 288V256H416C424.836 256 432 248.836 432 240S424.836 224 416 224ZM192 224H96C87.164 224 80 231.164 80 240S87.164 256 96 256H192C200.836 256 208 248.836 208 240S200.836 224 192 224Z" })
  }
));
CarBatteryRegular.displayName = "CarBatteryRegular";
var CarBattery_default = CarBatteryRegular;
