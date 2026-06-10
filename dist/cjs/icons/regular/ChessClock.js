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
var ChessClock_exports = {};
__export(ChessClock_exports, {
  default: () => ChessClock_default
});
module.exports = __toCommonJS(ChessClock_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChessClockRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 112H544V104C544 90.746 533.256 80 520 80H408C394.746 80 384 90.746 384 104V112H200V80H232C245.256 80 256 69.254 256 56S245.256 32 232 32H120C106.746 32 96 42.746 96 56S106.746 80 120 80H152V112H64C28.654 112 0 140.654 0 176V416C0 451.346 28.654 480 64 480H576C611.348 480 640 451.346 640 416V176C640 140.654 611.348 112 576 112ZM592 416C592 424.822 584.822 432 576 432H64C55.178 432 48 424.822 48 416V176C48 167.178 55.178 160 64 160H576C584.822 160 592 167.178 592 176V416ZM200 192C142.562 192 96 238.562 96 296S142.562 400 200 400S304 353.438 304 296S257.438 192 200 192ZM216 288C216 296.844 208.844 304 200 304S184 296.844 184 288V240C184 231.156 191.156 224 200 224S216 231.156 216 240V288ZM366.461 222.461C325.846 263.074 325.846 328.924 366.461 369.539C407.076 410.152 472.924 410.152 513.539 369.539C554.154 328.924 554.154 263.074 513.539 222.461C472.924 181.846 407.076 181.846 366.461 222.461ZM490.912 267.715L456.971 301.656C450.717 307.91 440.598 307.91 434.344 301.656S428.09 285.283 434.344 279.029L468.285 245.088C474.537 238.834 484.658 238.834 490.912 245.088S497.166 261.461 490.912 267.715Z" })
  }
));
ChessClockRegular.displayName = "ChessClockRegular";
var ChessClock_default = ChessClockRegular;
