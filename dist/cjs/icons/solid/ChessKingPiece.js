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
const ChessKingPieceSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M73.999 208H64C55.125 208 48 215.125 48 224V240C48 248.875 55.125 256 64 256H80C79.75 299.125 74.5 342.125 64 384H192C181.5 342.125 176.25 299.125 176 256H192C200.875 256 208 248.875 208 240V224C208 215.125 200.875 208 192 208H181.999L215.875 117.625C217.75 112.75 217 107.25 213.999 102.875C211 98.625 206.125 96 200.875 96H144V64H168C172.375 64 176 60.375 176 56V40C176 35.625 172.375 32 168 32H144V8C144 3.625 140.375 0 136 0H120C115.625 0 112 3.625 112 8V32H88C83.625 32 80 35.625 80 40V56C80 60.375 83.625 64 88 64H112V96H55.125C49.875 96 44.875 98.625 41.875 102.875C38.875 107.25 38.25 112.75 40.125 117.625L73.999 208ZM247.125 459.625L224 448V432C224 423.125 216.875 416 208 416H48C39.125 416 32 423.125 32 432V448L8.875 459.625C3.375 462.25 0 467.875 0 473.875V496C0 504.875 7.125 512 16 512H240C248.875 512 256 504.875 256 496V473.875C256 467.875 252.625 462.25 247.125 459.625Z" })
  }
));
ChessKingPieceSolid.displayName = "ChessKingPieceSolid";
var ChessKingPiece_default = ChessKingPieceSolid;
