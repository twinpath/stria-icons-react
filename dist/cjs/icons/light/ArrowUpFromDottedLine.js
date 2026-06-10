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
var ArrowUpFromDottedLine_exports = {};
__export(ArrowUpFromDottedLine_exports, {
  default: () => ArrowUpFromDottedLine_default
});
module.exports = __toCommonJS(ArrowUpFromDottedLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpFromDottedLineLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 424C114.744 424 104 434.746 104 448S114.744 472 128 472S152 461.254 152 448S141.256 424 128 424ZM224 424C210.744 424 200 434.746 200 448S210.744 472 224 472S248 461.254 248 448S237.256 424 224 424ZM32 424C18.744 424 8 434.746 8 448S18.744 472 32 472S56 461.254 56 448S45.256 424 32 424ZM320 424C306.744 424 296 434.746 296 448S306.744 472 320 472S344 461.254 344 448S333.256 424 320 424ZM416 424C402.744 424 392 434.746 392 448S402.744 472 416 472S440 461.254 440 448S429.256 424 416 424ZM235.312 36.688C232.188 33.562 228.094 32 224 32S215.812 33.562 212.688 36.688L68.688 180.688C62.438 186.938 62.438 197.063 68.688 203.312S85.063 209.562 91.312 203.312L208 86.625V352C208 360.844 215.156 368 224 368S240 360.844 240 352V86.625L356.688 203.312C362.938 209.562 373.063 209.562 379.312 203.312S385.562 186.937 379.312 180.688L235.312 36.688Z" })
  }
));
ArrowUpFromDottedLineLight.displayName = "ArrowUpFromDottedLineLight";
var ArrowUpFromDottedLine_default = ArrowUpFromDottedLineLight;
