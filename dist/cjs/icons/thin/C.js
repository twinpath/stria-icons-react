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
var C_exports = {};
__export(C_exports, {
  default: () => C_default
});
module.exports = __toCommonJS(C_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M223.514 480C163.792 480 107.619 456.719 65.387 414.406C21.796 370.734 0 313.367 0 256C0 198.633 21.796 141.266 65.387 97.594C107.619 55.281 163.792 32 223.514 32C283.251 32 339.424 55.281 381.656 97.594C384.781 100.719 384.781 105.781 381.656 108.906C378.53 112.031 373.466 112.031 370.34 108.906C331.109 69.625 278.984 48 223.514 48C168.059 48 115.934 69.625 76.703 108.906C-4.243 190 -4.243 322 76.703 403.094C115.934 442.375 168.059 464 223.514 464C278.984 464 331.109 442.375 370.34 403.094C373.466 399.969 378.53 399.969 381.656 403.094C384.781 406.219 384.781 411.281 381.656 414.406C339.424 456.719 283.251 480 223.514 480Z" })
  }
));
CThin.displayName = "CThin";
var C_default = CThin;
