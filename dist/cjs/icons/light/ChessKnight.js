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
const ChessKnightLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 164C64 175 73 184 84 184S104 175 104 164S95 144 84 144S64 153 64 164ZM35.5 301.625C73.5 318.5 72.25 318.125 75.875 319.375C28.774 351.344 32 387.363 32 400C32 408.836 39.164 416 48 416S64 408.836 64 400C64 360.389 75.33 356.678 144.625 316C158.75 309 167.625 294.5 167.625 278.75V216.5L151.5 226.125C146 228.875 142 233.75 140.625 239.75L132.625 266.25C130.168 274.389 124.117 280.955 116.203 284.066L105.01 288.469C98.108 291.184 90.403 291.014 83.625 288L48.5 272.375C38.5 268 32 258 32 247V128C32 117.625 38.5 113 45.875 105.5L33.5 81C28.875 71.625 35.125 64 42.375 64H128C234.039 64 320 149.961 320 256V400C320 408.836 327.164 416 336 416S352 408.836 352 400V256C352 132.287 251.711 32 128 32H44.336C22.918 32 3.344 47.027 0.42 68.244C-0.865 77.57 0.836 86.924 5 95.25L7.625 100.75C2.625 109 0 118.375 0 128.125V247.125C0 270.625 13.875 292 35.5 301.625ZM336 448H48C21.531 448 0 469.531 0 496C0 504.844 7.156 512 16 512S32 504.844 32 496C32 487.188 39.188 480 48 480H336C344.813 480 352 487.188 352 496C352 504.844 359.156 512 368 512S384 504.844 384 496C384 469.531 362.469 448 336 448Z" })
  }
));
ChessKnightLight.displayName = "ChessKnightLight";
var ChessKnight_default = ChessKnightLight;
