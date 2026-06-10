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
var Sack_exports = {};
__export(Sack_exports, {
  default: () => Sack_default
});
module.exports = __toCommonJS(Sack_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SackRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M325.948 115.875L381.321 34.75C385.071 27.25 384.696 18.5 380.321 11.375C375.946 4.375 368.196 0 359.947 0H151.955C143.58 0 135.955 4.25 131.581 11.375C127.206 18.5 126.706 27.25 130.456 34.75L185.953 115.875C-9.914 235.625 0.086 392 0.086 412C0.086 467.25 49.209 512 109.706 512H402.195C462.817 512 511.94 467.25 511.94 412C511.94 392.375 520.69 235 325.948 115.875ZM314.198 48L275.95 104H235.951L197.703 48H314.198ZM463.942 412C463.942 440.625 436.193 464 402.195 464H109.706C75.708 464 48.084 440.625 48.084 412C47.209 331 80.708 236.5 218.952 152H293.074C430.569 236.125 464.567 330.875 463.942 412Z" })
  }
));
SackRegular.displayName = "SackRegular";
var Sack_default = SackRegular;
