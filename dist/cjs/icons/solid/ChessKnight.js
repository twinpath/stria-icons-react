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
var ChessKnight_exports = {};
__export(ChessKnight_exports, {
  default: () => ChessKnight_default
});
module.exports = __toCommonJS(ChessKnight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChessKnightSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 272.5L59.625 290.5C67.5 294 76.5 294.25 84.5 291L97.25 285.875C106.375 282.25 113.25 274.75 116 265.375L125.25 234.75C127 227.875 131.5 222.25 137.875 219.125L160 208V258.375C160 276.5 149.625 293.125 133.375 301.25L76.25 329.875C49.125 343.5 32 371.125 32 401.5V416H351.875V224C351.875 118 266 32 160 32H12C5.375 32 0 37.375 0 44C0 46.625 0.625 49.25 1.75 51.625L16 80L7 89C2.5 93.5 0 99.625 0 106V243.25C0 255.875 7.5 267.375 19 272.5ZM52 128C63 128 72 137 72 148S63 168 52 168S32 159 32 148S41 128 52 128ZM336 448H48C21.49 448 0 469.49 0 496V496C0 504.837 7.163 512 16 512H368C376.837 512 384 504.837 384 496V496C384 469.49 362.51 448 336 448Z" })
  }
));
ChessKnightSolid.displayName = "ChessKnightSolid";
var ChessKnight_default = ChessKnightSolid;
