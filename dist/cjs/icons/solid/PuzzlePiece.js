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
var PuzzlePiece_exports = {};
__export(PuzzlePiece_exports, {
  default: () => PuzzlePiece_default
});
module.exports = __toCommonJS(PuzzlePiece_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PuzzlePieceSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 288C512 323.346 490.51 352 464 352C450.119 352 437.721 344.055 429.004 331.459C424.225 324.555 416.756 320 408.359 320C394.906 320 384 330.904 384 344.357V480C384 497.673 369.673 512 352 512H280.359C266.906 512 256 501.094 256 487.641C256 479.242 260.555 471.775 267.459 466.996C280.057 458.277 288 445.879 288 432C288 405.49 259.346 384 224 384S160 405.49 160 432C160 445.879 167.943 458.277 180.541 466.996C187.445 471.775 192 479.242 192 487.641C192 501.094 181.094 512 167.641 512H32C14.327 512 0 497.673 0 480V344.357C0 330.904 10.906 320 24.359 320C32.756 320 40.225 324.555 45.004 331.459C53.721 344.055 66.119 352 80 352C106.51 352 128 323.346 128 288S106.51 224 80 224C66.119 224 53.721 231.943 45.004 244.539C40.225 251.445 32.756 256 24.359 256C10.906 256 0 245.094 0 231.641V160C0 142.327 14.327 128 32 128H167.641C181.094 128 192 117.094 192 103.641C192 95.242 187.445 87.775 180.541 82.996C167.943 74.277 160 61.879 160 48C160 21.49 188.654 0 224 0S288 21.49 288 48C288 61.879 280.057 74.277 267.459 82.996C260.555 87.775 256 95.242 256 103.641C256 117.094 266.906 128 280.359 128H352C369.673 128 384 142.327 384 160V231.641C384 245.094 394.906 256 408.359 256C416.756 256 424.225 251.445 429.004 244.539C437.721 231.943 450.119 224 464 224C490.51 224 512 252.654 512 288Z" })
  }
));
PuzzlePieceSolid.displayName = "PuzzlePieceSolid";
var PuzzlePiece_default = PuzzlePieceSolid;
