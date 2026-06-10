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
const ArrowUpFromBracketRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M424 320C437.254 320 448 330.746 448 344V416C448 469.02 405.02 512 352 512H96C42.98 512 0 469.02 0 416V344C0 330.746 10.742 320 24 320C37.254 320 48 330.746 48 344V416C48 442.4 69.602 464 96 464H352C378.398 464 400 442.4 400 416V344C400 330.746 410.742 320 424 320ZM207.562 6.539L71.562 134.536C61.875 143.63 61.438 158.817 70.531 168.442C79.594 178.098 94.781 178.566 104.438 169.473L200 79.557V328.001C200 341.25 210.75 352 224 352S248 341.25 248 328.001V79.557L343.562 169.473C353.219 178.566 368.406 178.098 377.469 168.442C381.844 163.817 384 157.911 384 152.004C384 145.63 381.469 139.255 376.438 134.536L240.438 6.539C231.219 -2.18 216.781 -2.18 207.562 6.539Z" })
  }
));
ArrowUpFromBracketRegular.displayName = "ArrowUpFromBracketRegular";
var ArrowUpFromBracket_default = ArrowUpFromBracketRegular;
