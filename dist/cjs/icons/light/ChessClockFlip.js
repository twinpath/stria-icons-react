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
const ChessClockFlipLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 80C256 71.156 248.844 64 240 64H112C103.156 64 96 71.156 96 80S103.156 96 112 96H240C248.844 96 256 88.844 256 80ZM464 192C402.145 192 352 242.145 352 304S402.145 416 464 416S576 365.855 576 304S525.855 192 464 192ZM464 384C419.889 384 384 348.111 384 304C384 265.367 411.529 233.053 448 225.619V304C448 312.844 455.156 320 464 320S480 312.844 480 304V225.619C516.471 233.053 544 265.367 544 304C544 348.111 508.111 384 464 384ZM0 192L0 416C0 451.346 28.654 480 64 480H576C611.346 480 640 451.346 640 416V192C640 156.654 611.346 128 576 128H480V64H528C536.844 64 544 56.844 544 48S536.844 32 528 32H400C391.156 32 384 39.156 384 48S391.156 64 400 64H448V128H64C28.654 128 0 156.654 0 192ZM32 192C32 174.355 46.355 160 64 160H576C593.645 160 608 174.355 608 192V416C608 433.645 593.645 448 576 448H64C46.355 448 32 433.645 32 416V192ZM176 192C114.145 192 64 242.145 64 304S114.145 416 176 416S288 365.855 288 304S237.855 192 176 192ZM232.568 360.568C201.377 391.76 150.623 391.76 119.432 360.568S88.24 278.623 119.432 247.432C146.748 220.113 189.064 216.73 220.109 237.262L164.686 292.686C158.434 298.939 158.434 309.061 164.686 315.312C170.939 321.566 181.061 321.566 187.314 315.312L242.738 259.889C263.27 290.936 259.887 333.25 232.568 360.568Z" })
  }
));
ChessClockFlipLight.displayName = "ChessClockFlipLight";
var ChessClockFlip_default = ChessClockFlipLight;
