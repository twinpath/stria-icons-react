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
var BitcoinSign_exports = {};
__export(BitcoinSign_exports, {
  default: () => BitcoinSign_default
});
module.exports = __toCommonJS(BitcoinSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BitcoinSignSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 332C320 293.379 300.844 259.342 271.734 238.246C281.812 221.061 288 201.322 288 180C288 128.676 254.281 85.543 208 70.295V32C208 14.312 193.688 0 176 0S144 14.312 144 32V64H112V32C112 14.312 97.688 0 80 0S48 14.312 48 32V64H40C17.906 64 0 81.906 0 104V408C0 430.094 17.906 448 40 448H48V480C48 497.688 62.312 512 80 512S112 497.688 112 480V448H144V480C144 497.688 158.312 512 176 512S208 497.688 208 480V447.596C270.078 445.434 320 394.6 320 332ZM80 144H172C191.844 144 208 160.156 208 180S191.844 216 172 216H80V144ZM204 368H80V296H204C223.844 296 240 312.156 240 332S223.844 368 204 368Z" })
  }
));
BitcoinSignSolid.displayName = "BitcoinSignSolid";
var BitcoinSign_default = BitcoinSignSolid;
