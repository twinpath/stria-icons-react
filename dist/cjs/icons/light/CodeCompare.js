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
var CodeCompare_exports = {};
__export(CodeCompare_exports, {
  default: () => CodeCompare_default
});
module.exports = __toCommonJS(CodeCompare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CodeCompareLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 16C387.818 16 352 51.816 352 96C352 134.703 379.486 166.973 416 174.387V352C416 378.469 394.469 400 368 400H284.197L346.25 348.281C353.031 342.625 353.953 332.531 348.297 325.75C342.641 319 332.562 318.062 325.75 323.719L229.75 403.719C226.109 406.75 224 411.25 224 416S226.109 425.25 229.75 428.281L325.75 508.281C328.75 510.781 332.375 512 335.984 512C340.578 512 345.125 510.031 348.297 506.25C353.953 499.469 353.031 489.375 346.25 483.719L284.197 432H368C412.109 432 448 396.125 448 352V174.387C484.516 166.973 512 134.703 512 96C512 51.816 476.184 16 432 16ZM432 144C405.533 144 384 122.469 384 96S405.533 48 432 48S480 69.531 480 96S458.467 144 432 144ZM288 96C288 91.25 285.891 86.75 282.25 83.719L186.25 3.719C179.438 -1.969 169.359 -1 163.703 5.75C158.047 12.531 158.969 22.625 165.75 28.281L227.803 80H144C99.891 80 64 115.875 64 160V337.613C27.486 345.027 0 377.297 0 416C0 460.184 35.818 496 80 496C124.184 496 160 460.184 160 416C160 377.297 132.516 345.027 96 337.613V160C96 133.531 117.531 112 144 112H227.803L165.75 163.719C158.969 169.375 158.047 179.469 163.703 186.25C166.875 190.031 171.422 192 176.016 192C179.625 192 183.25 190.781 186.25 188.281L282.25 108.281C285.891 105.25 288 100.75 288 96ZM128 416C128 442.469 106.467 464 80 464S32 442.469 32 416S53.533 368 80 368S128 389.531 128 416Z" })
  }
));
CodeCompareLight.displayName = "CodeCompareLight";
var CodeCompare_default = CodeCompareLight;
