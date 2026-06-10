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
var ChessQueenPiece_exports = {};
__export(ChessQueenPiece_exports, {
  default: () => ChessQueenPiece_default
});
module.exports = __toCommonJS(ChessQueenPiece_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChessQueenPieceSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M67.375 192H64C55.125 192 48 199.125 48 208V224C48 232.875 55.125 240 64 240H80V254C80 297.875 74.625 341.5 64 384H192C181.375 341.5 176 297.875 176 254V240H192C200.875 240 208 232.875 208 224V208C208 199.125 200.875 192 192 192H188.625L233.125 96.25C234.625 93.25 233.625 89.5 230.875 87.625L220.75 81C217.625 78.875 213.625 80 211.375 83C206.75 89.125 199 92.125 191.5 90.625C181.75 88.75 175.125 79.625 175.125 69.625C175.125 66.5 172.625 64 169.5 64H153.25C150.625 64 148.375 65.625 147.75 68.125C145.75 77.5 137.5 84.25 128 84.25S110.25 77.5 108.25 68.125C107.625 65.625 105.375 64 102.75 64H86.5C83.375 64 80.875 66.5 80.875 69.625C80.875 80.5 72.875 90.125 62 90.875C55.25 91.375 48.625 88.375 44.5 82.875C42.5 79.75 38.375 79 35.25 80.875L25.125 87.625C22.375 89.5 21.375 93.25 22.875 96.25L67.375 192ZM128 48C141.25 48 152 37.25 152 24S141.25 0 128 0S104 10.75 104 24S114.75 48 128 48ZM247.125 459.625L224 448V432C224 423.125 216.875 416 208 416H48C39.125 416 32 423.125 32 432V448L8.875 459.625C3.375 462.25 0 467.875 0 473.875V496C0 504.875 7.125 512 16 512H240C248.875 512 256 504.875 256 496V473.875C256 467.875 252.625 462.25 247.125 459.625Z" })
  }
));
ChessQueenPieceSolid.displayName = "ChessQueenPieceSolid";
var ChessQueenPiece_default = ChessQueenPieceSolid;
