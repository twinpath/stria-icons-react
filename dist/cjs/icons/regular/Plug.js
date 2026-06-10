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
var Plug_exports = {};
__export(Plug_exports, {
  default: () => Plug_default
});
module.exports = __toCommonJS(Plug_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlugRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M312 24C312 10.75 301.25 0 288 0S264 10.75 264 24V112H312V24ZM120 24C120 10.75 109.25 0 96 0S72 10.75 72 24V112H120V24ZM360 144H24C10.745 144 0 154.745 0 168V168C0 181.255 10.745 192 24 192H32V256C32 336.125 91.125 401.875 168 413.625V488C168 501.255 178.745 512 192 512H192C205.255 512 216 501.255 216 488V413.625C292.875 401.875 352 336.125 352 256V192H360C373.255 192 384 181.255 384 168V168C384 154.745 373.255 144 360 144ZM304 256C304 317.875 253.875 368 192 368S80 317.875 80 256V192H304V256Z" })
  }
));
PlugRegular.displayName = "PlugRegular";
var Plug_default = PlugRegular;
