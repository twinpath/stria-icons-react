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
const ChessKingLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M367.986 448H79.986C53.518 448 31.986 469.531 31.986 496C31.986 504.844 39.143 512 47.986 512S63.986 504.844 63.986 496C63.986 487.188 71.158 480 79.986 480H367.986C376.814 480 383.986 487.188 383.986 496C383.986 504.844 391.143 512 399.986 512S415.986 504.844 415.986 496C415.986 469.531 394.455 448 367.986 448ZM423.158 180.219C414.205 167.562 399.643 160 384.174 160H239.986V96H287.986C296.83 96 303.986 88.844 303.986 80S296.83 64 287.986 64H239.986V16C239.986 7.156 232.83 0 223.986 0S207.986 7.156 207.986 16V64H159.986C151.143 64 143.986 71.156 143.986 80S151.143 96 159.986 96H207.986V160H63.799C48.33 160 33.768 167.562 24.814 180.219C15.814 193 13.564 209.375 18.721 223.906L80.439 405.156C83.299 413.531 92.377 417.906 100.736 415.156C109.096 412.312 113.58 403.219 110.721 394.844L48.939 213.406C45.112 202.595 53.255 192 63.799 192H384.174C394.774 192 402.837 202.661 399.033 213.406L334.752 394.656C331.799 402.969 336.158 412.125 344.486 415.094C355.721 419.07 363.134 410.345 364.908 405.344L429.189 224.094C434.408 209.375 432.158 193 423.158 180.219Z" })
  }
));
ChessKingLight.displayName = "ChessKingLight";
var ChessKing_default = ChessKingLight;
