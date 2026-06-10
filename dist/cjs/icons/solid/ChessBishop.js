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
var ChessBishop_exports = {};
__export(ChessBishop_exports, {
  default: () => ChessBishop_default
});
module.exports = __toCommonJS(ChessBishop_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChessBishopSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 448H48C21.49 448 0 469.49 0 496C0 504.836 7.164 512 16 512H304C312.836 512 320 504.836 320 496C320 469.49 298.51 448 272 448ZM8 287.875C8 339.5 30.125 361.75 64 372.5V416H256V372.5C289.875 361.75 312 339.5 312 287.875C312 257.25 301.25 220.75 285.25 185.375L185 285.625C181.875 288.75 176.875 288.75 173.75 285.625L162.375 274.375C159.25 271.25 159.25 266.125 162.375 263L270.25 155.125C249.5 117.25 223.75 83 199.375 62.5C213.375 59.125 224 47 224 32C224 14.375 209.625 0 192 0H128C110.375 0 96 14.375 96 32C96 47 106.625 59.125 120.625 62.5C67.75 106.75 8 214.5 8 287.875Z" })
  }
));
ChessBishopSolid.displayName = "ChessBishopSolid";
var ChessBishop_default = ChessBishopSolid;
