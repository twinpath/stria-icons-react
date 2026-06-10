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
var ChessKing_exports = {};
__export(ChessKing_exports, {
  default: () => ChessKing_default
});
module.exports = __toCommonJS(ChessKing_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChessKingSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M367.937 448H79.937C53.428 448 31.937 469.49 31.937 496V496C31.937 504.837 39.101 512 47.937 512H399.937C408.774 512 415.937 504.837 415.937 496V496C415.937 469.49 394.447 448 367.937 448ZM415.937 160H255.937V112H295.937C300.312 112 303.937 108.375 303.937 104V56C303.937 51.625 300.312 48 295.937 48H255.937V8C255.937 3.625 252.312 0 247.937 0H199.937C195.562 0 191.937 3.625 191.937 8V48H151.937C147.562 48 143.937 51.625 143.937 56V104C143.937 108.375 147.562 112 151.937 112H191.937V160H31.937C21.812 160 12.187 164.875 6.187 173C0.187 181.25 -1.563 191.875 1.437 201.5L74.437 416H373.437L446.437 201.5C449.437 191.875 447.687 181.25 441.687 173C435.687 164.875 426.062 160 415.937 160Z" })
  }
));
ChessKingSolid.displayName = "ChessKingSolid";
var ChessKing_default = ChessKingSolid;
