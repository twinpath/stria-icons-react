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
var ArrowDownToBracket_exports = {};
__export(ArrowDownToBracket_exports, {
  default: () => ArrowDownToBracket_default
});
module.exports = __toCommonJS(ArrowDownToBracket_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownToBracketThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 472V392C448 387.578 444.422 384 440 384S432 387.578 432 392V472C432 485.234 421.234 496 408 496H40C26.766 496 16 485.234 16 472V392C16 387.578 12.422 384 8 384S0 387.578 0 392V472C0 494.062 17.938 512 40 512H408C430.062 512 448 494.062 448 472ZM229.656 381.656L413.656 197.656C415.219 196.094 416 194.062 416 192S415.219 187.906 413.656 186.344C410.531 183.219 405.469 183.219 402.344 186.344L232 356.688V8C232 3.594 228.422 0 224 0S216 3.594 216 8V356.688L45.656 186.344C42.531 183.219 37.469 183.219 34.344 186.344C32.781 187.906 32 189.938 32 192S32.781 196.094 34.344 197.656L218.344 381.656C219.906 383.219 221.953 384 224 384S228.094 383.219 229.656 381.656Z" })
  }
));
ArrowDownToBracketThin.displayName = "ArrowDownToBracketThin";
var ArrowDownToBracket_default = ArrowDownToBracketThin;
