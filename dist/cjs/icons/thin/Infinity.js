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
var Infinity_exports = {};
__export(Infinity_exports, {
  default: () => Infinity_default
});
module.exports = __toCommonJS(Infinity_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const InfinityThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M482.219 120C411.371 120 349.078 198.133 320.016 241.414C286.773 191.84 226.695 120 157.781 120C84 120 24 181 24 256S84 392 157.781 392C228.629 392 290.922 313.867 319.984 270.586C353.227 320.16 413.305 392 482.219 392C556 392 616 331 616 256S556 120 482.219 120ZM157.781 376C92.844 376 40 322.156 40 256S92.844 136 157.781 136C223.969 136 284.781 216.687 310.469 256C284.875 295.344 224.188 376 157.781 376ZM482.219 376C416.031 376 355.219 295.312 329.531 256C355.125 216.656 415.812 136 482.219 136C547.156 136 600 189.844 600 256S547.156 376 482.219 376Z" })
  }
));
InfinityThin.displayName = "InfinityThin";
var Infinity_default = InfinityThin;
