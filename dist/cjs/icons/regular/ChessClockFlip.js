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
var ChessClockFlip_exports = {};
__export(ChessClockFlip_exports, {
  default: () => ChessClockFlip_default
});
module.exports = __toCommonJS(ChessClockFlip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChessClockFlipRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M440 192C382.562 192 336 238.562 336 296S382.562 400 440 400S544 353.438 544 296S497.438 192 440 192ZM456 288C456 296.844 448.844 304 440 304S424 296.844 424 288V240C424 231.156 431.156 224 440 224S456 231.156 456 240V288ZM0 176L0 416C0 451.346 28.652 480 64 480H576C611.346 480 640 451.346 640 416V176C640 140.654 611.346 112 576 112H488V80H520C533.254 80 544 69.254 544 56S533.254 32 520 32H408C394.744 32 384 42.746 384 56S394.744 80 408 80H440V112H256V104C256 90.746 245.254 80 232 80H120C106.744 80 96 90.746 96 104V112H64C28.652 112 0 140.654 0 176ZM48 176C48 167.178 55.178 160 64 160H576C584.822 160 592 167.178 592 176V416C592 424.822 584.822 432 576 432H64C55.178 432 48 424.822 48 416V176ZM126.461 222.461C85.846 263.074 85.846 328.924 126.461 369.539C167.076 410.152 232.924 410.152 273.539 369.539C314.154 328.924 314.154 263.074 273.539 222.461C232.924 181.846 167.076 181.846 126.461 222.461ZM250.912 267.715L216.971 301.656C210.717 307.91 200.596 307.91 194.344 301.656C188.09 295.402 188.09 285.283 194.344 279.029L228.285 245.088C234.537 238.834 244.658 238.834 250.912 245.088S257.166 261.461 250.912 267.715Z" })
  }
));
ChessClockFlipRegular.displayName = "ChessClockFlipRegular";
var ChessClockFlip_default = ChessClockFlipRegular;
