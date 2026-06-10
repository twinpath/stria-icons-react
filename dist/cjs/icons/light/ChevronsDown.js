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
var ChevronsDown_exports = {};
__export(ChevronsDown_exports, {
  default: () => ChevronsDown_default
});
module.exports = __toCommonJS(ChevronsDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChevronsDownLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M421.14 244.233L223.999 426.202L26.858 244.233C23.78 241.389 19.89 239.983 15.999 239.983C11.686 239.983 7.39 241.702 4.249 245.139C-1.751 251.639 -1.345 261.733 5.14 267.733L213.14 459.733C219.296 465.42 228.702 465.42 234.858 459.733L442.858 267.733C449.343 261.733 449.749 251.639 443.749 245.139C437.78 238.608 427.64 238.233 421.14 244.233ZM213.14 267.758C219.296 273.446 228.702 273.446 234.858 267.758L442.858 75.758C449.343 69.758 449.749 59.665 443.749 53.165C437.78 46.633 427.64 46.258 421.14 52.258L223.999 234.227L26.858 52.258C23.78 49.415 19.89 48.008 15.999 48.008C11.686 48.008 7.39 49.727 4.249 53.165C-1.751 59.665 -1.345 69.758 5.14 75.758L213.14 267.758Z" })
  }
));
ChevronsDownLight.displayName = "ChevronsDownLight";
var ChevronsDown_default = ChevronsDownLight;
