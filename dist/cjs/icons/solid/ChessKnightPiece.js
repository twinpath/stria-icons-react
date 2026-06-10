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
var ChessKnightPiece_exports = {};
__export(ChessKnightPiece_exports, {
  default: () => ChessKnightPiece_default
});
module.exports = __toCommonJS(ChessKnightPiece_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChessKnightPieceSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M311.125 459.625L288 448V432C288 423.125 280.875 416 272 416H48C39.125 416 32 423.125 32 432V448L8.875 459.625C3.375 462.25 0 467.875 0 473.875V496C0 504.875 7.125 512 16 512H304C312.875 512 320 504.875 320 496V473.875C320 467.875 316.625 462.25 311.125 459.625ZM45.5 235.5L74.375 248.375C80 250.875 86.375 251 92 248.75L101.125 245.125C107.625 242.5 112.5 237.125 114.5 230.5L121 208.625C122.25 203.75 125.5 199.625 129.875 197.375L144.125 192V229.25C144.125 240.5 137.5 250.75 127.25 255.25L80.625 279C40.875 299.25 32.375 352.375 64 384H256C263 376.125 272 365.75 272 352V203.125C272 126.625 209.375 64 132.875 64H40.5C35.75 64 32 67.875 32 72.5C32 74.5 32.375 76.25 33.25 78L43.375 98.25L37 104.625C33.75 107.875 32 112.25 32 116.75V214.625C32 223.625 37.25 231.875 45.5 235.5ZM80.125 128C86.5 128 92.375 131.875 94.875 137.875C97.375 143.75 96 150.75 91.5 155.25C86.875 159.875 80 161.25 74 158.75C68 156.375 64.125 150.5 64.125 144C64.125 135.125 71.25 128 80.125 128Z" })
  }
));
ChessKnightPieceSolid.displayName = "ChessKnightPieceSolid";
var ChessKnightPiece_default = ChessKnightPieceSolid;
