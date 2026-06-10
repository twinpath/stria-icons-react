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
var ArrowUpRightAndArrowDownLeftFromCenter_exports = {};
__export(ArrowUpRightAndArrowDownLeftFromCenter_exports, {
  default: () => ArrowUpRightAndArrowDownLeftFromCenter_default
});
module.exports = __toCommonJS(ArrowUpRightAndArrowDownLeftFromCenter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpRightAndArrowDownLeftFromCenterDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M177.375 289.375L64 402.75V352C64 334.312 49.688 320 32 320S0 334.312 0 352V480C0 484.164 0.848 488.312 2.465 492.223C5.705 500.055 11.943 506.297 19.777 509.535C23.688 511.152 27.836 512 32 512H160C177.688 512 192 497.688 192 480S177.688 448 160 448H109.25L222.625 334.625C235.125 322.125 235.125 301.875 222.625 289.375S189.875 276.875 177.375 289.375Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M509.537 19.781C506.295 11.941 500.059 5.703 492.217 2.461C488.311 0.848 484.162 0 480 0H352C334.313 0 320 14.312 320 32S334.313 64 352 64H402.75L289.375 177.375C276.875 189.875 276.875 210.125 289.375 222.625C301.868 235.118 322.118 235.132 334.625 222.625L448 109.25V160C448 177.688 462.313 192 480 192S512 177.688 512 160V32C512 27.836 511.152 23.688 509.537 19.781Z" })
    ]
  }
));
ArrowUpRightAndArrowDownLeftFromCenterDuotone.displayName = "ArrowUpRightAndArrowDownLeftFromCenterDuotone";
var ArrowUpRightAndArrowDownLeftFromCenter_default = ArrowUpRightAndArrowDownLeftFromCenterDuotone;
