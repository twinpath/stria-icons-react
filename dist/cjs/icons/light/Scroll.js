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
var Scroll_exports = {};
__export(Scroll_exports, {
  default: () => Scroll_default
});
module.exports = __toCommonJS(Scroll_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScrollLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 320H480V144C480 82.25 429.75 32 368 32H80C35.875 32 0 67.875 0 112V192C0 209.625 14.375 224 32 224H128V384C128 435.125 168.25 476.625 218.625 479.5L466.625 480C527 480 576 431 576 370.625V352C576 334.375 561.625 320 544 320ZM128 192H32V112C32 85.5 53.5 64 80 64S128 85.5 128 112V192ZM288 384C288 419.25 259.25 448 224 448S160 419.25 160 384V112C160 94 154 77.375 144 64H368C412.125 64 448 99.875 448 144V320H320C302.375 320 288 334.375 288 352V384ZM544 370.625C544 413.25 509.25 448 466.625 448H295C310.375 431 320 408.625 320 384V352H544V370.625Z" })
  }
));
ScrollLight.displayName = "ScrollLight";
var Scroll_default = ScrollLight;
