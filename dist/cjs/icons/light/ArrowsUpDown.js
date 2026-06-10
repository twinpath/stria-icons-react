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
var ArrowsUpDown_exports = {};
__export(ArrowsUpDown_exports, {
  default: () => ArrowsUpDown_default
});
module.exports = __toCommonJS(ArrowsUpDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsUpDownLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M139.312 4.65L251.312 116.65C254.438 119.775 256 123.869 256 127.963S254.438 136.15 251.312 139.275C245.062 145.525 234.937 145.525 228.688 139.275L144 54.588V457.338L228.688 372.65C234.938 366.4 245.063 366.4 251.312 372.65C254.438 375.775 256 379.869 256 383.963S254.438 392.15 251.312 395.275L139.312 507.275C133.062 513.525 122.937 513.525 116.688 507.275L4.688 395.275C-1.563 389.025 -1.563 378.9 4.688 372.65S21.063 366.4 27.312 372.65L112 457.338V54.588L27.312 139.275C21.062 145.525 10.937 145.525 4.687 139.275S-1.563 122.9 4.687 116.65L116.687 4.65C122.937 -1.6 133.062 -1.6 139.312 4.65Z" })
  }
));
ArrowsUpDownLight.displayName = "ArrowsUpDownLight";
var ArrowsUpDown_default = ArrowsUpDownLight;
