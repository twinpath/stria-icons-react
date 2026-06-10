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
const ChessPawnPieceLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M242.641 428.438L224 419.062V408C224 394.766 213.234 384 200 384H56C42.766 384 32 394.766 32 408V419.062L13.422 428.406C5.266 432.297 0 440.719 0 449.875V488C0 501.234 10.766 512 24 512H232C245.234 512 256 501.234 256 488V449.875C256 440.75 250.766 432.344 242.641 428.438ZM224 480H32V454.881L64 438.787V416H192V438.787L224 454.877V480ZM48 240C48 248.836 55.164 256 64 256H77.115L64.219 333.375C62.75 342.094 68.656 350.344 77.375 351.781C78.25 351.938 79.156 352 80.031 352C87.688 352 94.469 346.469 95.781 338.625L109.553 256H146.447L160.219 338.625C161.531 346.469 168.312 352 175.969 352C176.844 352 177.75 351.938 178.625 351.781C187.344 350.344 193.25 342.094 191.781 333.375L178.885 256H192C200.838 256 208 248.836 208 240S200.838 224 192 224H191.639C201.768 210.598 208 194.094 208 176C208 131.816 172.184 96 128 96C83.818 96 48 131.816 48 176C48 194.094 54.232 210.598 64.361 224H64C55.164 224 48 231.164 48 240ZM128 128C154.467 128 176 149.533 176 176S154.467 224 128 224S80 202.467 80 176S101.533 128 128 128Z" })
  }
));
ChessPawnPieceLight.displayName = "ChessPawnPieceLight";
var ChessPawnPiece_default = ChessPawnPieceLight;
