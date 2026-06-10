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
var ChessBishopPiece_exports = {};
__export(ChessBishopPiece_exports, {
  default: () => ChessBishopPiece_default
});
module.exports = __toCommonJS(ChessBishopPiece_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChessBishopPieceSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 288H78.875C76.875 320.375 71.875 352.5 64 384H192C184.125 352.5 179.125 320.375 177.125 288H192C200.875 288 208 280.875 208 272V256C208 247.125 200.875 240 192 240H180.375C196.375 233.375 206.75 214.875 206.75 189.625C206.75 170.25 199.625 147.25 189.125 126.25L140.5 174.875C139.75 175.625 138.75 176 137.625 176C136.625 176 135.625 175.625 134.875 174.875L129.125 169.125C127.625 167.625 127.625 165.125 129.125 163.5L181 111.75C170.75 94.875 158.75 80.5 147.125 72.375C155.25 69.625 160 61.875 160 52.75C160 41.25 151.875 32 140.5 32H115.5C104.125 32 96 41.25 96 52.75C96 61.875 100.75 69.625 108.875 72.375C80.25 92.25 49.25 149.125 49.25 189.625C49.25 214.875 59.625 233.375 75.625 240H64C55.125 240 48 247.125 48 256V272C48 280.875 55.125 288 64 288ZM247.125 459.625L224 448V432C224 423.125 216.875 416 208 416H48C39.125 416 32 423.125 32 432V448L8.875 459.625C3.375 462.25 0 467.875 0 473.875V496C0 504.875 7.125 512 16 512H240C248.875 512 256 504.875 256 496V473.875C256 467.875 252.625 462.25 247.125 459.625Z" })
  }
));
ChessBishopPieceSolid.displayName = "ChessBishopPieceSolid";
var ChessBishopPiece_default = ChessBishopPieceSolid;
