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
const ChessBishopRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M296 464H24C10.745 464 0 474.745 0 488V488C0 501.255 10.745 512 24 512H296C309.255 512 320 501.255 320 488V488C320 474.745 309.255 464 296 464ZM0 304C0 355.625 30.125 389.25 64 400V432H112V364.875L78.5 354.25C63.75 349.5 48 333.875 48 304C48 229.375 114.125 138.25 149.375 102.125C155.375 96 165.375 95.875 171.625 101.875C184.25 113.75 205.625 137.5 230.875 183.25L164.75 249.375C158.5 255.625 158.5 265.75 164.75 272L176 283.25C182.25 289.5 192.375 289.5 198.625 283.25L253 229C264.375 256.75 272 283.5 272 304C272 333.875 256.25 349.5 241.5 354.25L208 364.875V432H256V400C289.875 389.25 320 355.625 320 304C320 230.625 252.25 106.75 199.375 62.5C213.375 59.125 224 47 224 32C224 14.375 209.625 0 192 0H128C110.375 0 96 14.375 96 32C96 47 106.625 59.125 120.625 62.5C67.75 106.75 0 230.625 0 304Z" })
  }
));
ChessBishopRegular.displayName = "ChessBishopRegular";
var ChessBishop_default = ChessBishopRegular;
