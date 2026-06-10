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
const ArrowUpFromBracketLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M212.688 4.688L68.688 148.688C62.438 154.938 62.438 165.063 68.688 171.312S85.063 177.562 91.312 171.312L208 54.625V336C208 344.844 215.156 352 224 352S240 344.844 240 336V54.625L356.688 171.312C362.938 177.562 373.063 177.562 379.312 171.312S385.562 154.937 379.312 148.688L235.312 4.688C232.188 1.562 228.094 0 224 0S215.812 1.562 212.688 4.688ZM416 336V432C416 458.469 394.469 480 368 480H80C53.531 480 32 458.469 32 432V336C32 327.156 24.844 320 16 320S0 327.156 0 336V432C0 476.125 35.875 512 80 512H368C412.125 512 448 476.125 448 432V336C448 327.156 440.844 320 432 320S416 327.156 416 336Z" })
  }
));
ArrowUpFromBracketLight.displayName = "ArrowUpFromBracketLight";
var ArrowUpFromBracket_default = ArrowUpFromBracketLight;
