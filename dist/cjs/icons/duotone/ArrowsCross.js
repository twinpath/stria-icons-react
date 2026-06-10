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
var ArrowsCross_exports = {};
__export(ArrowsCross_exports, {
  default: () => ArrowsCross_default
});
module.exports = __toCommonJS(ArrowsCross_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsCrossDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M54.625 41.375C42.125 28.875 21.875 28.875 9.375 41.375C-3.117 53.867 -3.133 74.117 9.375 86.625L178.75 256L224 210.75L54.625 41.375ZM416 288C398.313 288 384 302.312 384 320V370.75L269.25 256L224 301.25L338.75 416H288C270.313 416 256 430.312 256 448S270.313 480 288 480H416C420.164 480 424.313 479.152 428.219 477.539C436.059 474.297 442.297 468.059 445.539 460.219C447.152 456.312 448 452.164 448 448V320C448 302.312 433.688 288 416 288Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M445.537 51.781C442.295 43.941 436.059 37.703 428.217 34.461C424.311 32.848 420.162 32 416 32H288C270.312 32 256 46.312 256 64S270.312 96 288 96H338.75L9.375 425.375C-3.125 437.875 -3.125 458.125 9.375 470.625C21.867 483.117 42.117 483.133 54.625 470.625L384 141.25V192C384 209.688 398.312 224 416 224S448 209.688 448 192V64C448 59.836 447.152 55.688 445.537 51.781Z" })
    ]
  }
));
ArrowsCrossDuotone.displayName = "ArrowsCrossDuotone";
var ArrowsCross_default = ArrowsCrossDuotone;
