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
var ArrowUpFromBracket_exports = {};
__export(ArrowUpFromBracket_exports, {
  default: () => ArrowUpFromBracket_default
});
module.exports = __toCommonJS(ArrowUpFromBracket_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpFromBracketThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 392V472C432 485.234 421.234 496 408 496H40C26.766 496 16 485.234 16 472V392C16 387.578 12.422 384 8 384S0 387.578 0 392V472C0 494.062 17.938 512 40 512H408C430.062 512 448 494.062 448 472V392C448 387.578 444.422 384 440 384S432 387.578 432 392ZM218.344 2.344L34.344 186.344C32.781 187.906 32 189.938 32 192S32.781 196.094 34.344 197.656C37.469 200.781 42.531 200.781 45.656 197.656L216 27.312V376C216 380.406 219.578 384 224 384S232 380.406 232 376V27.312L402.344 197.656C405.469 200.781 410.531 200.781 413.656 197.656C415.219 196.094 416 194.062 416 192S415.219 187.906 413.656 186.344L229.656 2.344C228.094 0.781 226.047 0 224 0S219.906 0.781 218.344 2.344Z" })
  }
));
ArrowUpFromBracketThin.displayName = "ArrowUpFromBracketThin";
var ArrowUpFromBracket_default = ArrowUpFromBracketThin;
