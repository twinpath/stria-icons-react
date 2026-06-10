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
var ArrowLeftToLine_exports = {};
__export(ArrowLeftToLine_exports, {
  default: () => ArrowLeftToLine_default
});
module.exports = __toCommonJS(ArrowLeftToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowLeftToLineThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M98.344 250.344C95.219 253.469 95.219 258.531 98.344 261.656L250.344 413.656C251.906 415.219 253.938 416 256 416S260.094 415.219 261.656 413.656C264.781 410.531 264.781 405.469 261.656 402.344L123.312 264H440C444.406 264 448 260.422 448 256S444.406 248 440 248H123.312L261.656 109.656C264.781 106.531 264.781 101.469 261.656 98.344S253.469 95.219 250.344 98.344L98.344 250.344ZM0 72V440C0 444.418 3.582 448 8 448S16 444.418 16 440V72C16 67.582 12.418 64 8 64S0 67.582 0 72Z" })
  }
));
ArrowLeftToLineThin.displayName = "ArrowLeftToLineThin";
var ArrowLeftToLine_default = ArrowLeftToLineThin;
