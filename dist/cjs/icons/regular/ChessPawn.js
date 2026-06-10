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
var ChessPawn_exports = {};
__export(ChessPawn_exports, {
  default: () => ChessPawn_default
});
module.exports = __toCommonJS(ChessPawn_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChessPawnRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M296 464H24C10.745 464 0 474.745 0 488V488C0 501.255 10.745 512 24 512H296C309.255 512 320 501.255 320 488V488C320 474.745 309.255 464 296 464ZM56 288H80V317.5C80 357.75 76.5 398.75 56.625 432H110.125C125.125 395 128 354.625 128 317.5V288H192V317.5C192 354.625 194.875 395 209.875 432H263.375C243.5 398.75 240 357.75 240 317.5V288H264C277.255 288 288 277.255 288 264V264C288 250.745 277.255 240 264 240H241C271.147 212.233 287.598 169.361 276.549 123.144C265.77 78.052 228.404 42.512 182.811 34.106C106.545 20.046 40 78.285 40 152C40 186.875 55.125 218.125 79 240H56C42.745 240 32 250.745 32 264V264C32 277.255 42.745 288 56 288ZM160 80C199.75 80 232 112.25 232 152S199.75 224 160 224S88 191.75 88 152S120.25 80 160 80Z" })
  }
));
ChessPawnRegular.displayName = "ChessPawnRegular";
var ChessPawn_default = ChessPawnRegular;
