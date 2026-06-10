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
const CarBatteryLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 128H64C28.654 128 0 156.652 0 192V384C0 419.346 28.654 448 64 448H448C483.346 448 512 419.346 512 384V192C512 156.652 483.346 128 448 128ZM480 384C480 401.645 465.645 416 448 416H64C46.355 416 32 401.645 32 384V192C32 174.355 46.355 160 64 160H448C465.645 160 480 174.355 480 192V384ZM336 96H432C440.836 96 448 88.836 448 80C448 71.162 440.836 64 432 64H336C327.164 64 320 71.162 320 80C320 88.836 327.164 96 336 96ZM80 96H176C184.836 96 192 88.836 192 80C192 71.162 184.836 64 176 64H80C71.164 64 64 71.162 64 80C64 88.836 71.164 96 80 96ZM416 240H384V208C384 199.156 376.844 192 368 192S352 199.156 352 208V240H320C311.156 240 304 247.156 304 256S311.156 272 320 272H352V304C352 312.844 359.156 320 368 320S384 312.844 384 304V272H416C424.844 272 432 264.844 432 256S424.844 240 416 240ZM192 240H96C87.156 240 80 247.156 80 256S87.156 272 96 272H192C200.844 272 208 264.844 208 256S200.844 240 192 240Z" })
  }
));
CarBatteryLight.displayName = "CarBatteryLight";
var CarBattery_default = CarBatteryLight;
