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
var ChessBoard_exports = {};
__export(ChessBoard_exports, {
  default: () => ChessBoard_default
});
module.exports = __toCommonJS(ChessBoard_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChessBoardRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 96V160H128V96H64ZM256 96H192V160H256V96ZM192 416H256V352H192V416ZM64 416H128V352H64V416ZM64 224V288H128V224H64ZM384 288V224H320V288H384ZM384 416V352H320V416H384ZM320 160H384V96H320V160ZM256 224H320V160H256V224ZM384 32H64C28.801 32 0 60.801 0 96V416C0 451.199 28.801 480 64 480H384C419.201 480 448 451.199 448 416V96C448 60.801 419.201 32 384 32ZM400 416C400 424.674 392.674 432 384 432H64C55.328 432 48 424.674 48 416V96C48 87.326 55.328 80 64 80H384C392.674 80 400 87.326 400 96V416ZM192 160H128V224H192V160ZM192 288H256V224H192V288ZM128 288V352H192V288H128ZM256 352H320V288H256V352Z" })
  }
));
ChessBoardRegular.displayName = "ChessBoardRegular";
var ChessBoard_default = ChessBoardRegular;
