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
var ChessKing_exports = {};
__export(ChessKing_exports, {
  default: () => ChessKing_default
});
module.exports = __toCommonJS(ChessKing_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChessKingDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416.108 496C416.108 504.836 408.942 512 400.103 512H48.004C39.166 512 32 504.836 32 496C32 475.107 45.433 457.516 64.071 450.92V432C64.071 423.162 71.238 416 80.076 416H368.157C376.995 416 384.161 423.162 384.161 432V450.957C402.735 457.588 416.108 475.154 416.108 496Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416.054 160H256.009V112H296.02C300.396 112 304.022 108.375 304.022 104V56C304.022 51.625 300.396 48 296.02 48H256.009V8C256.009 3.625 252.383 0 248.007 0H199.993C195.617 0 191.991 3.625 191.991 8V48H151.98C147.604 48 143.978 51.625 143.978 56V104C143.978 108.375 147.604 112 151.98 112H191.991V160H31.946C21.818 160 12.191 164.875 6.189 173C0.187 181.25 -1.563 191.875 1.438 201.5L74.458 416H373.542L446.562 201.5C449.563 191.875 447.813 181.25 441.811 173C435.809 164.875 426.182 160 416.054 160Z" })
    ]
  }
));
ChessKingDuotone.displayName = "ChessKingDuotone";
var ChessKing_default = ChessKingDuotone;
