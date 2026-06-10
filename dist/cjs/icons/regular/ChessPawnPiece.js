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
var ChessPawnPiece_exports = {};
__export(ChessPawnPiece_exports, {
  default: () => ChessPawnPiece_default
});
module.exports = __toCommonJS(ChessPawnPiece_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChessPawnPieceRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M249.625 435.386L224 416.17V392.212C224 378.986 213.25 368.255 200 368.255H202.625C201.125 352.283 200 336.311 200 320.34V288.396H208C216.875 288.396 224 281.284 224 272.425V256.453C223.875 248.592 218.125 242.103 210.375 240.98C219.25 226.381 223.875 209.661 224 192.566C224.25 152.013 199 115.702 160.875 101.852C122.625 87.877 79.875 99.481 54 130.801C28.125 161.995 24.75 206.167 45.625 240.98C37.875 242.103 32 248.592 32 256.453V272.425C32 281.284 39.125 288.396 48 288.396H56V320.34C56 336.311 54.875 352.283 53.375 368.255H56C42.75 368.255 32 378.986 32 392.212V416.17L6.375 435.386C2.375 438.38 0 443.122 0 448.113V496.028C0 504.888 7.125 512 16 512H240C248.875 512 256 504.888 256 496.028V448.113C256 443.122 253.625 438.38 249.625 435.386ZM152 288.396V318.343C152 335.064 153 351.659 154.5 368.255H101.5C103 351.659 104 335.064 104 318.343V288.396H152ZM128 144.651C154.5 144.651 176 166.113 176 192.566S154.5 240.481 128 240.481S80 219.019 80 192.566S101.5 144.651 128 144.651ZM48 464.085L80 440.127V416.17H176V440.127L208 464.085H48Z" })
  }
));
ChessPawnPieceRegular.displayName = "ChessPawnPieceRegular";
var ChessPawnPiece_default = ChessPawnPieceRegular;
