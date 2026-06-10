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
var DiagramProject_exports = {};
__export(DiagramProject_exports, {
  default: () => DiagramProject_default
});
module.exports = __toCommonJS(DiagramProject_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiagramProjectRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 320H272C245.49 320 224 341.49 224 368V464C224 490.51 245.49 512 272 512H368C394.51 512 416 490.51 416 464V368C416 341.49 394.51 320 368 320ZM368 464H272V368H368V464ZM591.832 0H495.832C469.322 0 447.832 21.49 447.832 48V144C447.832 170.51 469.322 192 495.832 192H591.832C618.342 192 639.832 170.51 639.832 144V48C639.832 21.49 618.342 0 591.832 0ZM591.832 144H495.832V48H591.832V144ZM392 72H192V48C192 21.49 170.51 0 144 0H48C21.49 0 0 21.49 0 48V144C0 170.51 21.49 192 48 192H138.066L195.156 291.906C199.594 299.656 207.688 304 216.031 304C220.063 304 224.156 302.969 227.906 300.844C239.406 294.25 243.406 279.594 236.844 268.094L182.307 172.652C188.314 164.637 192 154.787 192 144V120H392C405.25 120 416 109.25 416 96S405.25 72 392 72ZM144 144H48V48H144V144Z" })
  }
));
DiagramProjectRegular.displayName = "DiagramProjectRegular";
var DiagramProject_default = DiagramProjectRegular;
