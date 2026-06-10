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
var ArrowRightToLine_exports = {};
__export(ArrowRightToLine_exports, {
  default: () => ArrowRightToLine_default
});
module.exports = __toCommonJS(ArrowRightToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowRightToLineLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 64C423.156 64 416 71.156 416 80V432C416 440.844 423.156 448 432 448S448 440.844 448 432V80C448 71.156 440.844 64 432 64ZM219.312 100.688C213.062 94.438 202.937 94.438 196.688 100.688S190.438 117.063 196.688 123.312L313.375 240H16C7.156 240 0 247.156 0 256S7.156 272 16 272H313.375L196.688 388.688C190.438 394.938 190.438 405.063 196.688 411.312S213.063 417.562 219.312 411.312L363.312 267.312C366.438 264.188 368 260.094 368 256S366.438 247.812 363.312 244.688L219.312 100.688Z" })
  }
));
ArrowRightToLineLight.displayName = "ArrowRightToLineLight";
var ArrowRightToLine_default = ArrowRightToLineLight;
