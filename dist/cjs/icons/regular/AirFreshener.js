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
var AirFreshener_exports = {};
__export(AirFreshener_exports, {
  default: () => AirFreshener_default
});
module.exports = __toCommonJS(AirFreshener_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AirFreshenerRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M377.109 305.816L306.021 224H342.348C364.296 224 376.069 198.223 361.683 181.666L211.563 8.891C206.414 2.963 199.193 0 191.972 0C184.748 0 177.525 2.965 172.375 8.895L22.057 181.967C7.777 198.408 19.47 224 41.261 224H77.952L6.887 305.822C-8.801 323.885 4.044 352 27.984 352H159.97V384H79.876C53.336 384 31.82 405.49 31.82 432V464C31.82 490.51 53.336 512 79.876 512H304.138C330.678 512 352.194 490.51 352.194 464V432C352.194 405.49 330.678 384 304.138 384H224.044V352H356.016C379.958 352 392.803 323.879 377.109 305.816ZM304.138 432V464H79.876V432H304.138ZM72.09 304L160.257 202.484C169.256 192.125 161.888 176 148.157 176H90.858L191.974 59.578L293.131 176H235.798C222.065 176 214.699 192.127 223.7 202.486L311.902 304H72.09ZM192.007 112C178.738 112 167.979 122.746 167.979 136S178.738 160 192.007 160C205.276 160 216.035 149.254 216.035 136S205.276 112 192.007 112Z" })
  }
));
AirFreshenerRegular.displayName = "AirFreshenerRegular";
var AirFreshener_default = AirFreshenerRegular;
