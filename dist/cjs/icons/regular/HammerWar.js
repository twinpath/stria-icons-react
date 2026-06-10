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
var HammerWar_exports = {};
__export(HammerWar_exports, {
  default: () => HammerWar_default
});
module.exports = __toCommonJS(HammerWar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HammerWarRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352.125 32C348.25 32 357.125 30.75 216 54.25V24C216 10.745 205.255 0 192 0H192C178.745 0 168 10.745 168 24V54.25C26.25 30.625 35.75 32 31.875 32C14.625 32 0 46 0 64V256C0 274 14.625 288 32 288C35.75 288 26.875 289.25 168 265.75V488C168 501.255 178.745 512 192 512H192C205.255 512 216 501.255 216 488V265.75C357.75 289.375 348.25 288 352 288C369.375 288 384 274 384 256V64C384 46 369.375 32 352.125 32ZM336 237.125L192 213.125L48 237.125V82.875L192 106.875L336 82.875V237.125Z" })
  }
));
HammerWarRegular.displayName = "HammerWarRegular";
var HammerWar_default = HammerWarRegular;
