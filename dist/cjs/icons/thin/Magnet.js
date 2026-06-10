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
const MagnetThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M409.141 32H342.859C321.438 32 304 49.438 304 70.859V256C304 300.109 268.109 336 224 336S144 300.109 144 256V70.859C144 49.438 126.562 32 105.141 32H38.859C17.438 32 0 49.438 0 70.859V256C0 379.516 100.484 480 224 480S448 379.516 448 256V70.859C448 49.438 430.562 32 409.141 32ZM342.859 48H409.141C421.75 48 432 58.25 432 70.859V144H320V70.859C320 58.25 330.25 48 342.859 48ZM38.859 48H105.141C117.75 48 128 58.25 128 70.859V144H16V70.859C16 58.25 26.25 48 38.859 48ZM224 464C109.312 464 16 370.688 16 256V160H128V256C128 308.938 171.062 352 224 352S320 308.938 320 256V160H432V256C432 370.688 338.688 464 224 464Z" })
  }
));
MagnetThin.displayName = "MagnetThin";
var Magnet_default = MagnetThin;
