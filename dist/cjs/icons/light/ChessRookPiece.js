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
const ChessRookPieceLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M306.641 428.438L288 419.062V408C288 394.766 277.234 384 264 384H56C42.766 384 32 394.766 32 408V419.062L13.422 428.406C5.266 432.297 0 440.719 0 449.875V488C0 501.234 10.766 512 24 512H296C309.234 512 320 501.234 320 488V449.875C320 440.75 314.766 432.344 306.641 428.438ZM288 480H32V454.881L64 438.787V416H256V438.787L288 454.877V480ZM71.281 232.438L64.031 334.875C63.406 343.688 70.063 351.344 78.875 351.969C79.25 352 79.625 352 80.031 352C88.344 352 95.375 345.562 95.969 337.125L104.219 220.312L68.562 183.938C65.625 181 64 177.062 64 172.875V96H112V128C112 136.836 119.164 144 128 144S144 136.836 144 128V96H176V128C176 136.836 183.164 144 192 144S208 136.836 208 128V96H256V172.75C256 177.031 254.375 181 251.344 184.031L215.781 220.188L224.031 337.125C224.656 345.969 233.031 352.75 241.125 351.969C249.938 351.344 256.594 343.688 255.969 334.875L248.719 232.313L274.063 206.563C283.062 197.562 288 185.562 288 172.75V88C288 74.781 277.219 64 264 64H56C42.781 64 32 74.781 32 88V172.875C32 185.625 36.938 197.563 45.812 206.438L71.281 232.438ZM144 224V256H176V224C176 215.162 168.836 208 160 208S144 215.162 144 224Z" })
  }
));
ChessRookPieceLight.displayName = "ChessRookPieceLight";
var ChessRookPiece_default = ChessRookPieceLight;
