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
var Headphones_exports = {};
__export(Headphones_exports, {
  default: () => Headphones_default
});
module.exports = __toCommonJS(Headphones_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeadphonesRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 32C112.906 32 4.562 151.125 0 288V400C0 400.838 0.354 401.559 0.477 402.361C2.969 445.605 38.488 480 82.357 480C107.566 480 128 459.564 128 434.357V301.75C128 276.482 107.518 256 82.25 256C70.672 256 59.684 258.441 49.691 262.758C62.219 159.992 149.904 80.201 256 80.188C362.096 80.201 449.781 159.992 462.309 262.758C452.316 258.441 441.328 256 429.75 256C404.484 256 384 276.482 384 301.75V434.357C384 459.564 404.436 480 429.643 480C473.514 480 509.031 445.605 511.523 402.361C511.646 401.559 512 400.838 512 400V288C507.438 151.125 399.094 32 256 32ZM80 304.072V431.92C62.15 430.705 48 415.795 48 397.643V338.25C48 320.121 62.16 305.236 80 304.072ZM432 431.92V304.072C449.842 305.236 464 320.121 464 338.25V397.643C464 415.795 449.85 430.705 432 431.92Z" })
  }
));
HeadphonesRegular.displayName = "HeadphonesRegular";
var Headphones_default = HeadphonesRegular;
