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
const ChessRookPieceDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M311.125 459.625L288 448V400C288 391.125 280.875 384 272 384H48C39.125 384 32 391.125 32 400V448L8.875 459.625C3.375 462.25 0 467.875 0 473.875V496C0 504.875 7.125 512 16 512H304C312.875 512 320 504.875 320 496V473.875C320 467.875 316.625 462.25 311.125 459.625Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M280 64H244.875C240.375 64 236.875 67.625 236.875 72V112H203.875V72C203.875 67.625 200.25 64 195.875 64H124.125C119.75 64 116.125 67.625 116.125 72V112H83.25V72C83.25 67.625 79.625 64 75.25 64H40C35.625 64 32 67.625 32 72V156.875C32 165.25 35.25 173.25 41.25 179.25L71.75 210.375L57.375 384H262.625L248.25 210.25L278.75 179.25C284.75 173.25 288 165.125 288 156.75V72C288 67.625 284.375 64 280 64ZM183.625 278.75H136.375V231.625C136.375 218.5 147 208 160 208S183.625 218.5 183.625 231.625V278.75Z" })
    ]
  }
));
ChessRookPieceDuotone.displayName = "ChessRookPieceDuotone";
var ChessRookPiece_default = ChessRookPieceDuotone;
