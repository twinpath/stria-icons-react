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
var ChessRookPiece_exports = {};
__export(ChessRookPiece_exports, {
  default: () => ChessRookPiece_default
});
module.exports = __toCommonJS(ChessRookPiece_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChessRookPieceRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M313.625 435.25L288 416V392C288 380.875 280.25 371.875 269.875 369.25L264.5 251.5L291.25 231.375C299.25 225.375 304 215.875 304 205.875V96C304 78.375 289.625 64 272 64H48C30.375 64 16 78.375 16 96V206C16 216 20.75 225.5 28.75 231.625L55.5 251.625L50.125 369.25C39.75 371.875 32 380.875 32 392V416L6.375 435.25C2.375 438.25 0 443 0 448V496C0 504.875 7.125 512 16 512H304C312.875 512 320 504.875 320 496V448C320 443 317.625 438.25 313.625 435.25ZM64 112H104V144H136V112H184V144H216V112H256V197.875L215.5 228.5L221.5 368H98.5L104.5 228.375L64 198V112ZM48 464L80 440V416H240V440L272 464H48ZM184 247.625C184 234.5 173.5 224 160.375 224C147.375 224 136.875 234.5 136.875 247.625V288H184V247.625Z" })
  }
));
ChessRookPieceRegular.displayName = "ChessRookPieceRegular";
var ChessRookPiece_default = ChessRookPieceRegular;
