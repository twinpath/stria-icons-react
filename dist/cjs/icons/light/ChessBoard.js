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
const ChessBoardLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 112H96C87.164 112 80 119.162 80 128V384C80 392.836 87.164 400 96 400H352C360.836 400 368 392.836 368 384V128C368 119.162 360.836 112 352 112ZM144 368H112V336H144V368ZM144 304H112V272H144V304ZM144 240H112V208H144V240ZM144 176H112V144H144V176ZM208 368H176V336H208V368ZM208 304H176V272H208V304ZM208 240H176V208H208V240ZM208 176H176V144H208V176ZM272 368H240V336H272V368ZM272 304H240V272H272V304ZM272 240H240V208H272V240ZM272 176H240V144H272V176ZM336 368H304V336H336V368ZM336 304H304V272H336V304ZM336 240H304V208H336V240ZM336 176H304V144H336V176ZM384 32H64C28.654 32 0 60.652 0 96V416C0 451.348 28.654 480 64 480H384C419.346 480 448 451.348 448 416V96C448 60.652 419.346 32 384 32ZM416 416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416Z" })
  }
));
ChessBoardLight.displayName = "ChessBoardLight";
var ChessBoard_default = ChessBoardLight;
