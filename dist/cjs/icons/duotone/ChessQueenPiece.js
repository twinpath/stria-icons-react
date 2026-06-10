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
const ChessQueenPieceDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M230.697 87.625L220.572 81C217.447 78.875 213.447 80 211.197 83C206.572 89.125 198.822 92.125 191.322 90.625C181.572 88.75 174.947 79.625 174.947 69.625C174.947 66.5 172.447 64 169.322 64H153.072C150.447 64 148.197 65.625 147.572 68.125C145.572 77.5 137.322 84.25 127.822 84.25S110.072 77.5 108.072 68.125C107.447 65.625 105.197 64 102.572 64H86.322C83.197 64 80.697 66.5 80.697 69.625C80.697 80.5 72.697 90.125 61.822 90.875C55.072 91.375 48.447 88.375 44.322 82.875C42.322 79.75 38.197 79 35.072 80.875L24.947 87.625C22.197 89.5 21.197 93.25 22.697 96.25L67.197 192H63.822C54.947 192 47.822 199.125 47.822 208V224C47.822 232.875 54.947 240 63.822 240H79.822V254C79.822 297.875 74.447 341.5 63.822 384H191.822C181.197 341.5 175.822 297.875 175.822 254V240H191.822C200.697 240 207.822 232.875 207.822 224V208C207.822 199.125 200.697 192 191.822 192H188.447L232.947 96.25C234.447 93.25 233.447 89.5 230.697 87.625ZM127.822 48C141.072 48 151.822 37.25 151.822 24S141.072 0 127.822 0S103.822 10.75 103.822 24S114.572 48 127.822 48Z" })
    ]
  }
));
ChessQueenPieceDuotone.displayName = "ChessQueenPieceDuotone";
var ChessQueenPiece_default = ChessQueenPieceDuotone;
