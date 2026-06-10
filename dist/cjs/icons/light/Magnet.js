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
var Magnet_exports = {};
__export(Magnet_exports, {
  default: () => Magnet_default
});
module.exports = __toCommonJS(Magnet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MagnetLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M409.141 32H342.859C321.438 32 304 49.438 304 70.859V256C304 300.109 268.109 336 224 336S144 300.109 144 256V70.859C144 49.438 126.562 32 105.141 32H38.859C17.438 32 0 49.438 0 70.859V256C0 379.516 100.484 480 224 480S448 379.516 448 256V70.859C448 49.438 430.562 32 409.141 32ZM32 70.859C32 67.141 35.143 64 38.859 64H105.141C108.859 64 112 67.141 112 70.859V128H32V70.859ZM416 256C416 361.869 329.869 448 224 448S32 361.869 32 256V160H112V256C112 317.758 162.244 368 224 368C285.758 368 336 317.758 336 256V160H416V256ZM416 128H336V70.859C336 67.141 339.143 64 342.859 64H409.141C412.859 64 416 67.141 416 70.859V128Z" })
  }
));
MagnetLight.displayName = "MagnetLight";
var Magnet_default = MagnetLight;
