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
const ChessPawnPieceDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 473.909V496.014C256 504.881 248.875 512 240 512H16C7.125 512 0 504.881 0 496.014V473.909C0 467.915 3.375 462.295 8.875 459.672L32 448.058V400.101C32 391.234 39.125 384.115 48 384.115H208C216.875 384.115 224 391.234 224 400.101V448.058L247.125 459.672C252.625 462.295 256 467.915 256 473.909Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64.002 288.202H78.877C76.877 320.548 71.877 352.644 64.002 384.115H192.002C184.127 352.644 179.127 320.548 177.127 288.202H192.002C200.877 288.202 208.002 281.083 208.002 272.216V256.231C208.002 247.364 200.877 240.245 192.002 240.245H175.502C203.377 219.763 214.752 183.671 204.002 150.95C193.127 118.23 162.502 96 128.002 96S62.877 118.23 52.002 150.95C41.252 183.671 52.627 219.763 80.502 240.245H64.002C55.127 240.245 48.002 247.364 48.002 256.231V272.216C48.002 281.083 55.127 288.202 64.002 288.202Z" })
    ]
  }
));
ChessPawnPieceDuotone.displayName = "ChessPawnPieceDuotone";
var ChessPawnPiece_default = ChessPawnPieceDuotone;
