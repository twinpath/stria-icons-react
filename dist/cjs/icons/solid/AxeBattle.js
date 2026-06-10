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
var AxeBattle_exports = {};
__export(AxeBattle_exports, {
  default: () => AxeBattle_default
});
module.exports = __toCommonJS(AxeBattle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AxeBattleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 32C238.328 32 224 46.326 224 64V496C224 504.836 231.164 512 240 512H272C280.836 512 288 504.836 288 496V64C288 46.326 273.672 32 256 32ZM101 13.586C97.875 0.584 83.375 -4.543 74.25 4.709C28.625 50.844 0 117.609 0 192S28.625 333.156 74.25 379.291C83.375 388.543 97.875 383.416 101 370.414C112.875 320.652 147.75 282.145 192 269.143V114.857C147.75 101.855 112.875 63.348 101 13.586ZM512 160.869C505.125 99.105 478.375 44.219 439 4.709C429.75 -4.543 415 0.584 411.875 13.586C399.875 63.348 364.625 101.855 320 114.857V269.143C364.625 282.145 399.875 320.652 411.875 370.414C415 383.416 429.75 388.543 439 379.291C478.375 339.781 505.125 284.895 512 223.131L449.25 192L512 160.869Z" })
  }
));
AxeBattleSolid.displayName = "AxeBattleSolid";
var AxeBattle_default = AxeBattleSolid;
