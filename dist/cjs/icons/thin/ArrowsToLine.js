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
var ArrowsToLine_exports = {};
__export(ArrowsToLine_exports, {
  default: () => ArrowsToLine_default
});
module.exports = __toCommonJS(ArrowsToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsToLineThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M229.656 322.344C228.094 320.781 226.047 320 224 320S219.906 320.781 218.344 322.344L130.344 410.344C128.781 411.906 128 413.953 128 416C128 420.57 131.736 424 136 424C138.047 424 140.094 423.219 141.656 421.656L216 347.312V504C216 508.406 219.594 512 224 512S232 508.406 232 504V347.312L306.344 421.656C307.906 423.219 309.938 424 312 424C317.719 424 320 418.906 320 416C320 413.953 319.219 411.906 317.656 410.344L229.656 322.344ZM218.344 189.656C219.906 191.219 221.938 192 224 192S228.094 191.219 229.656 189.656L317.656 101.656C319.219 100.094 320 98.047 320 96C320 91.43 316.264 88 312 88C309.953 88 307.906 88.781 306.344 90.344L232 164.688V8C232 3.594 228.406 0 224 0S216 3.594 216 8V164.688L141.656 90.344C140.094 88.781 138.047 88 136 88C131.736 88 128 91.43 128 96C128 98.047 128.781 100.094 130.344 101.656L218.344 189.656ZM440 248H8C3.582 248 0 251.582 0 256S3.582 264 8 264H440C444.418 264 448 260.418 448 256S444.418 248 440 248Z" })
  }
));
ArrowsToLineThin.displayName = "ArrowsToLineThin";
var ArrowsToLine_default = ArrowsToLineThin;
