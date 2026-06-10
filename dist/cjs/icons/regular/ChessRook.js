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
var ChessRook_exports = {};
__export(ChessRook_exports, {
  default: () => ChessRook_default
});
module.exports = __toCommonJS(ChessRook_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChessRookRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M360 464H24C10.745 464 0 474.745 0 488V488C0 501.255 10.745 512 24 512H360C373.255 512 384 501.255 384 488V488C384 474.745 373.255 464 360 464ZM346 32H38C17 32 0 49 0 70V209.375C0 218.75 4 227.5 11 233.625L48 265.75C48 314.25 49.5 358.75 36.125 432H85.125C98 356.375 96 309.5 96 238.25L48 196.5V80H112V128H160V80H224V128H272V80H336V196.5L288 238.25C288 309 286 356.625 298.875 432H347.875C334.5 358.75 336 314 336 265.75L373 233.625C380 227.5 384 218.75 384 209.375V70C384 49 367 32 346 32ZM192 224C174.375 224 160 238.375 160 256V320H224V256C224 238.375 209.625 224 192 224Z" })
  }
));
ChessRookRegular.displayName = "ChessRookRegular";
var ChessRook_default = ChessRookRegular;
