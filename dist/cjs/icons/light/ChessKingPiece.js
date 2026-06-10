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
const ChessKingPieceLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M56.875 224H48.975C40.996 224 33.555 229.398 32.23 237.264C30.549 247.256 38.303 256 48 256H64V284.5C63.938 301.123 62.693 317.662 60.734 334.119C59.602 343.645 67.059 352 76.65 352C84.855 352 91.67 345.805 92.623 337.654C94.688 320.029 96 302.322 96 284.5V256H160V284.5C160 302.322 161.312 320.029 163.377 337.654C164.33 345.805 171.145 352 179.35 352C188.941 352 196.398 343.645 195.266 334.119C193.307 317.662 192.062 301.123 192 284.5V256H207.029C215.008 256 222.447 250.6 223.77 242.73C225.449 232.74 217.697 224 208 224H199.125L230.875 139.25C236.072 125.562 231.424 109.715 218.266 101.025C212.967 97.525 206.582 96 200.232 96H144V64H159.029C167.008 64 174.447 58.6 175.77 50.73C177.449 40.74 169.697 32 160 32H144V16.971C144 8.992 138.6 1.551 130.732 0.229C120.74 -1.449 112 6.303 112 16V32H96.975C88.996 32 81.555 37.398 80.23 45.264C78.549 55.256 86.303 64 96 64H112V96H55.768C49.418 96 43.033 97.525 37.734 101.025C24.576 109.715 19.928 125.563 25.125 139.25L56.875 224ZM201 128L165 224H91.125L55.125 128H201ZM242.641 428.438L224 419.062V408C224 394.766 213.234 384 200 384H56C42.766 384 32 394.766 32 408V419.062L13.422 428.406C5.266 432.297 0 440.719 0 449.875V488C0 501.234 10.766 512 24 512H232C245.234 512 256 501.234 256 488V449.875C256 440.75 250.766 432.344 242.641 428.438ZM224 480H32V454.881L64 438.787V416H192V438.787L224 454.877V480Z" })
  }
));
ChessKingPieceLight.displayName = "ChessKingPieceLight";
var ChessKingPiece_default = ChessKingPieceLight;
