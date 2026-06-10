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
var ArrowsFromDottedLine_exports = {};
__export(ArrowsFromDottedLine_exports, {
  default: () => ArrowsFromDottedLine_default
});
module.exports = __toCommonJS(ArrowsFromDottedLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsFromDottedLineThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 240C23.164 240 16 247.164 16 256S23.164 272 32 272S48 264.836 48 256S40.836 240 32 240ZM144 256C144 247.164 136.836 240 128 240S112 247.164 112 256S119.164 272 128 272S144 264.836 144 256ZM208 256C208 264.836 215.164 272 224 272S240 264.836 240 256S232.836 240 224 240S208 247.164 208 256ZM320 240C311.164 240 304 247.164 304 256S311.164 272 320 272S336 264.836 336 256S328.836 240 320 240ZM416 240C407.164 240 400 247.164 400 256S407.164 272 416 272S432 264.836 432 256S424.836 240 416 240ZM136 104C138.047 104 140.094 103.219 141.656 101.656L216 27.312V184C216 188.406 219.594 192 224 192S232 188.406 232 184V27.312L306.344 101.656C307.906 103.219 309.938 104 312 104C317.719 104 320 98.906 320 96C320 93.953 319.219 91.906 317.656 90.344L229.656 2.344C228.094 0.781 226.047 0 224 0S219.906 0.781 218.344 2.344L130.344 90.344C128.781 91.906 128 93.953 128 96C128 100.57 131.737 104 136 104ZM312 408C309.953 408 307.906 408.781 306.344 410.344L232 484.688V328C232 323.594 228.406 320 224 320S216 323.594 216 328V484.688L141.656 410.344C140.094 408.781 138.047 408 136 408C131.737 408 128 411.433 128 416C128 418.047 128.781 420.094 130.344 421.656L218.344 509.656C219.906 511.219 221.938 512 224 512S228.094 511.219 229.656 509.656L317.656 421.656C319.219 420.094 320 418.047 320 416C320 411.43 316.263 408 312 408Z" })
  }
));
ArrowsFromDottedLineThin.displayName = "ArrowsFromDottedLineThin";
var ArrowsFromDottedLine_default = ArrowsFromDottedLineThin;
