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
var ChessKingPiece_exports = {};
__export(ChessKingPiece_exports, {
  default: () => ChessKingPiece_default
});
module.exports = __toCommonJS(ChessKingPiece_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChessKingPieceDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M247.125 459.625L224 448V400C224 391.125 216.875 384 208 384H48C39.125 384 32 391.125 32 400V448L8.875 459.625C3.375 462.25 0 467.875 0 473.875V496C0 504.875 7.125 512 16 512H240C248.875 512 256 504.875 256 496V473.875C256 467.875 252.625 462.25 247.125 459.625Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M73.936 208H63.936C55.061 208 47.936 215.125 47.936 224V240C47.936 248.875 55.061 256 63.936 256H79.936C79.686 299.125 74.436 342.125 63.936 384H191.936C181.436 342.125 176.186 299.125 175.936 256H191.936C200.811 256 207.936 248.875 207.936 240V224C207.936 215.125 200.811 208 191.936 208H181.936L215.811 117.625C217.686 112.75 216.936 107.25 213.936 102.875C210.936 98.625 206.061 96 200.811 96H143.936V64H167.936C172.311 64 175.936 60.375 175.936 56V40C175.936 35.625 172.311 32 167.936 32H143.936V8C143.936 3.625 140.311 0 135.936 0H119.936C115.561 0 111.936 3.625 111.936 8V32H87.936C83.561 32 79.936 35.625 79.936 40V56C79.936 60.375 83.561 64 87.936 64H111.936V96H55.061C49.811 96 44.811 98.625 41.811 102.875C38.811 107.25 38.186 112.75 40.061 117.625L73.936 208Z" })
    ]
  }
));
ChessKingPieceDuotone.displayName = "ChessKingPieceDuotone";
var ChessKingPiece_default = ChessKingPieceDuotone;
