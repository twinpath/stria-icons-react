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
const ChessKnightPieceRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M89.793 195.25C95.293 195.25 100.418 191.875 102.543 186.625C104.793 181.5 103.543 175.5 99.668 171.5C95.668 167.625 89.668 166.375 84.543 168.5C79.293 170.625 75.918 175.75 75.918 181.375C75.918 189 82.043 195.125 89.793 195.25ZM313.668 435.25L288.043 416V385.875C298.293 372.25 303.918 355.75 304.043 338.75V232.625C304.043 139.625 228.418 64 135.418 64H55.418C37.418 64 20.543 72.875 10.168 87.625C-0.207 102.25 -2.832 121.125 3.168 138.125C1.043 144.5 0.043 151.125 0.043 157.75V242.5C0.043 268 14.418 291.375 37.043 303C26.543 317.75 19.793 334.875 16.918 354.5C14.043 374.75 19.418 395.375 32.043 411.625V416L6.418 435.25C2.418 438.25 0.043 443 0.043 448V496C0.043 504.875 7.168 512 16.043 512H304.043C312.918 512 320.043 504.875 320.043 496V448C320.043 443 317.668 438.25 313.668 435.25ZM55.418 112H135.418C201.793 112 256.043 166.25 256.043 232.625V338.75C256.043 347.25 252.668 355.375 246.668 361.375L240.043 368H64.793C64.668 365.875 64.043 363.75 64.418 361.625C68.793 332.625 85.918 315.75 110.543 304.625L145.418 293.75C154.293 289.75 160.043 280.875 160.043 271.25V222.875L132.918 227.625C129.043 229.625 126.293 233.125 125.168 237.25L119.543 256.25C117.793 262 113.543 266.625 108.043 268.875S97.793 273.5 92.543 273.5C89.918 273.5 87.293 272.875 84.793 271.75L59.793 260.625C52.668 257.5 48.043 250.375 48.043 242.5V157.75C48.043 150.375 52.418 147.125 57.918 141.75L49.168 124.125C45.918 117.5 50.293 112 55.418 112ZM48.043 464L80.043 440V416H240.043V440L272.043 464H48.043Z" })
  }
));
ChessKnightPieceRegular.displayName = "ChessKnightPieceRegular";
var ChessKnightPiece_default = ChessKnightPieceRegular;
