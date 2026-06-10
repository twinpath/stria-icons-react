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
const ArrowDownToBracketRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 512H96C42.98 512 0 469.02 0 416V344C0 330.746 10.746 320 24 320C37.258 320 48 330.746 48 344V416C48 442.4 69.602 464 96 464H352C378.398 464 400 442.4 400 416V344C400 330.746 410.746 320 424 320C437.258 320 448 330.746 448 344V416C448 469.02 405.02 512 352 512ZM240.438 345.469L376.438 217.469C386.125 208.375 386.562 193.187 377.469 183.562C368.406 173.906 353.219 173.438 343.563 182.531L248 272.449V24C248 10.75 237.25 0 224 0S200 10.75 200 24V272.449L104.438 182.531C94.781 173.438 79.594 173.906 70.531 183.562C66.156 188.188 64 194.094 64 200C64 206.375 66.531 212.75 71.562 217.469L207.562 345.469C216.781 354.188 231.219 354.188 240.438 345.469Z" })
  }
));
ArrowDownToBracketRegular.displayName = "ArrowDownToBracketRegular";
var ArrowDownToBracket_default = ArrowDownToBracketRegular;
