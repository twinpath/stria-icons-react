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
var Smog_exports = {};
__export(Smog_exports, {
  default: () => Smog_default
});
module.exports = __toCommonJS(Smog_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SmogLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 32C392.84 32 430.414 54.712 450.062 91.273C455.826 101.997 466.852 108.131 478.273 108.131C483.088 108.131 487.971 107.042 492.561 104.747C504.168 98.943 516.092 96 528 96C572.111 96 608 131.888 608 176S572.111 256 528 256H467.875C460.137 256 452.66 258.804 446.83 263.893C434.232 274.891 413.105 288 384 288C354.77 288 333.734 274.922 321.234 263.951C315.396 258.826 307.895 256 300.125 256H144C82.242 256 32 205.757 32 144S82.242 32 144 32C174.689 32 203.404 44.375 224.852 66.845C230.891 73.171 239.256 76.75 248 76.75S265.109 73.171 271.148 66.845C292.596 44.375 321.311 32 352 32M352 0C311 0 274.25 17.25 248 44.75C221.75 17.25 185 0 144 0C64.5 0 0 64.5 0 144C0 223.5 64.5 288 144 288H300.125C322.625 307.75 351.75 320 384 320S445.25 307.75 467.875 288H528C589.875 288 640 237.875 640 176S589.875 64 528 64C510 64 493.25 68.625 478.25 76.125C454 31 406.75 0 352 0L352 0ZM624 384H80C71.199 384 64 391.199 64 400C64 408.799 71.199 416 80 416H624C632.801 416 640 408.799 640 400C640 391.199 632.801 384 624 384L624 384ZM560 480H240C231.199 480 224 487.199 224 496C224 504.799 231.199 512 240 512H560C568.801 512 576 504.799 576 496C576 487.199 568.801 480 560 480L560 480ZM144 480H16C7.199 480 0 487.199 0 496C0 504.799 7.199 512 16 512H144C152.801 512 160 504.799 160 496C160 487.199 152.801 480 144 480L144 480Z" })
  }
));
SmogLight.displayName = "SmogLight";
var Smog_default = SmogLight;
