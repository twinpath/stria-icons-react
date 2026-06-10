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
const ChessKingRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M391.926 464H55.95C42.696 464 31.952 474.745 31.952 488V488C31.952 501.255 42.696 512 55.95 512H391.926C405.18 512 415.925 501.255 415.925 488V488C415.925 474.745 405.18 464 391.926 464ZM436.923 182.875C426.549 168.375 409.675 159.875 391.801 160H247.937V104H279.934C293.133 104 303.933 93.2 303.933 80V80C303.933 66.8 293.133 56 279.934 56H247.937V24C247.937 10.8 237.137 0 223.938 0H223.938C210.739 0 199.94 10.8 199.94 24V56H167.942C154.743 56 143.944 66.8 143.944 80V80C143.944 93.2 154.743 104 167.942 104H199.94V160H55.95C38.076 160 21.202 168.5 10.703 183C0.204 197.375 -2.796 216 2.704 233L68.449 432H118.946L48.326 218.375C47.576 216 48.076 213.375 49.575 211.25C51.075 209.25 53.45 208 55.95 208H391.801C394.301 208 396.676 209.125 398.176 211.125C399.676 213 400.301 215.625 399.676 218L328.806 432H379.427L445.423 232.75C450.797 215.75 447.673 197.125 436.923 182.875Z" })
  }
));
ChessKingRegular.displayName = "ChessKingRegular";
var ChessKing_default = ChessKingRegular;
