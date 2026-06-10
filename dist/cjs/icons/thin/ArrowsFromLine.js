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
var ArrowsFromLine_exports = {};
__export(ArrowsFromLine_exports, {
  default: () => ArrowsFromLine_default
});
module.exports = __toCommonJS(ArrowsFromLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsFromLineThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M136 104C138.047 104 140.094 103.219 141.656 101.656L216 27.312V184C216 188.406 219.594 192 224 192S232 188.406 232 184V27.312L306.344 101.656C307.906 103.219 309.938 104 312 104C317.719 104 320 98.906 320 96C320 93.953 319.219 91.906 317.656 90.344L229.656 2.344C228.094 0.781 226.047 0 224 0S219.906 0.781 218.344 2.344L130.344 90.344C128.781 91.906 128 93.953 128 96C128 100.57 131.736 104 136 104ZM312 408C309.953 408 307.906 408.781 306.344 410.344L232 484.688V328C232 323.594 228.406 320 224 320S216 323.594 216 328V484.688L141.656 410.344C140.094 408.781 138.047 408 136 408C131.736 408 128 411.43 128 416C128 418.047 128.781 420.094 130.344 421.656L218.344 509.656C219.906 511.219 221.938 512 224 512S228.094 511.219 229.656 509.656L317.656 421.656C319.219 420.094 320 418.047 320 416C320 411.43 316.264 408 312 408ZM440 248H8C3.582 248 0 251.582 0 256S3.582 264 8 264H440C444.418 264 448 260.418 448 256S444.418 248 440 248Z" })
  }
));
ArrowsFromLineThin.displayName = "ArrowsFromLineThin";
var ArrowsFromLine_default = ArrowsFromLineThin;
