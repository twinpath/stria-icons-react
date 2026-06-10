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
var Gift_exports = {};
__export(Gift_exports, {
  default: () => Gift_default
});
module.exports = __toCommonJS(Gift_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GiftLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 128H447.596C459.43 112.363 465.967 92.516 463.473 70.883C460.803 47.713 446.453 27.436 427.193 14.283C357.498 -33.314 291.338 48.557 256 106.043C220.662 48.557 154.502 -33.314 84.807 14.283C65.547 27.436 51.197 47.713 48.527 70.883C46.033 92.516 52.57 112.363 64.404 128H64C28.654 128 0 156.654 0 192V256C0 273.672 14.326 288 32 288V448C32 483.346 60.654 512 96 512H416C451.346 512 480 483.346 480 448V288C497.674 288 512 273.672 512 256V192C512 156.654 483.346 128 448 128ZM384 32C410.469 32 432 53.531 432 80S410.469 128 384 128H280.133C315.332 69.012 354.781 32 384 32ZM128 32C157.219 32 196.668 69.012 231.867 128H128C101.531 128 80 106.469 80 80S101.531 32 128 32ZM32 255.867V192C32 174.355 46.355 160 64.404 160H240V255.867H32ZM96 480C78.326 480 64 465.672 64 448V288H240V480H96ZM448 448C448 465.672 433.674 480 416 480H272V288H448V448ZM480 255.867H272V160H448C465.645 160 480 174.355 480 192V255.867Z" })
  }
));
GiftLight.displayName = "GiftLight";
var Gift_default = GiftLight;
