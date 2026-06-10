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
const ChessKingPieceRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M249.635 435.257L224 416V392C223.875 381.625 217.125 372.5 207.125 369.5C203.375 344.5 200.75 319.25 200.75 294V256H208C216.837 256 224 248.837 224 240V224C224 215.125 216.875 208 208 208H204.875L231.875 127.625C234.25 120.25 233 112.25 228.5 106C224 99.625 216.75 96 209 96H144.75V64H160.75C169.55 64 176.75 56.8 176.75 48V48C176.75 39.2 169.55 32 160.75 32H144.75V16C144.75 7.2 137.55 0 128.75 0H128.75C119.95 0 112.75 7.2 112.75 16V32H96.75C87.95 32 80.75 39.2 80.75 48V48C80.75 56.8 87.95 64 96.75 64H112.75V96H48.5C40.75 96 33.5 99.75 29 106C24.5 112.25 23.25 120.25 25.75 127.625L52.75 208H48C39.125 208 32 215.125 32 224V240C32 248.837 39.163 256 48 256H56.75V294C56.75 319.125 54.25 344.25 50.375 369.125C39.875 371.75 32 380.75 32 392V416L6.365 435.257C2.358 438.268 0 442.988 0 448V496C0 504.837 7.163 512 16 512H240C248.837 512 256 504.837 256 496V448C256 442.988 253.642 438.268 249.635 435.257ZM175.75 144L154.25 208H103.375L81.875 144H175.75ZM158.375 368H99.125C102.5 343.5 104.75 318.75 104.75 294V256H152.75V294C152.75 318.75 155 343.5 158.375 368ZM48 464L80 440V416H176V440L208 464H48Z" })
  }
));
ChessKingPieceRegular.displayName = "ChessKingPieceRegular";
var ChessKingPiece_default = ChessKingPieceRegular;
