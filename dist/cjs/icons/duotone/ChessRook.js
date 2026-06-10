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
const ChessRookDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 496C384 504.836 376.836 512 368 512H16C7.164 512 0 504.836 0 496C0 475.131 13.4 457.549 32 450.938V432C32 423.162 39.164 416 48 416H336C344.836 416 352 423.162 352 432V450.938C370.6 457.549 384 475.131 384 496Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 32H312C303.125 32 296 39.125 296 48V96H248V48C248 39.125 240.875 32 232 32H152C143.125 32 136 39.125 136 48V96H88.125V48C88.125 39.125 80.875 32 72.125 32H16C7.125 32 0 39.125 0 48V224L64 256C64 304.375 62.5 351 50.75 416H333.25C321.5 351 320 303.75 320 256L384 224V48C384 39.125 376.875 32 368 32ZM224 320H160V256C160 238.375 174.375 224 192 224S224 238.375 224 256V320Z" })
    ]
  }
));
ChessRookDuotone.displayName = "ChessRookDuotone";
var ChessRook_default = ChessRookDuotone;
