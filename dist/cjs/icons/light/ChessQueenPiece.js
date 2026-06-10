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
const ChessQueenPieceLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 48C141.25 48 152 37.25 152 24S141.25 0 128 0S104 10.75 104 24S114.75 48 128 48ZM242.641 428.438L224 419.062V408C224 394.766 213.234 384 200 384H56C42.766 384 32 394.766 32 408V419.062L13.422 428.406C5.266 432.297 0 440.719 0 449.875V488C0 501.234 10.766 512 24 512H232C245.234 512 256 501.234 256 488V449.875C256 440.75 250.766 432.344 242.641 428.438ZM224 480H32V454.881L64 438.787V416H192V438.787L224 454.877V480ZM62.375 224H48C39.199 224 32 231.199 32 240C32 248.799 39.199 256 48 256H64V284.5C63.938 301.139 62.693 317.67 60.734 334.115C59.6 343.641 67.057 352 76.648 352C84.855 352 91.67 345.805 92.623 337.654C94.688 320.029 96 302.322 96 284.5V256H160V284.5C160 302.322 161.312 320.029 163.377 337.654C164.33 345.805 171.145 352 179.352 352C188.943 352 196.4 343.641 195.266 334.115C193.307 317.67 192.062 301.139 192 284.5V256H208C216.801 256 224 248.799 224 240C224 231.199 216.801 224 208 224H193.625L244.5 99.75C246.25 96.375 245.125 92.25 242 90.25L230.875 82.75C226.271 79.988 222.062 82.785 220.5 85C207.738 101.891 180.25 93.504 180.25 70.25C180.25 66.342 176.82 64 174 64H155.875C153.125 63.875 150.625 65.875 149.875 68.625C147.75 79 138.625 86.375 128 86.375S108.25 79 106.125 68.625C105.375 65.875 102.875 63.875 100.125 64H82C78.432 64 75.789 66.965 75.748 70.533C75.482 93.344 48.055 101.994 35.5 84.875C34.443 83.465 30.412 79.576 25.125 82.75L14 90.25C10.875 92.25 9.75 96.375 11.5 99.75L62.375 224ZM57 125.75C71.5 124.75 85 117.875 94.375 106.75C114 122.375 141.875 122.375 161.5 106.875C173.686 121.344 189.832 125.352 199.25 125.875L159 224H97L56.75 125.75H57Z" })
  }
));
ChessQueenPieceLight.displayName = "ChessQueenPieceLight";
var ChessQueenPiece_default = ChessQueenPieceLight;
