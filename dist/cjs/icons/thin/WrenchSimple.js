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
var WrenchSimple_exports = {};
__export(WrenchSimple_exports, {
  default: () => WrenchSimple_default
});
module.exports = __toCommonJS(WrenchSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WrenchSimpleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 172.449C384 243.461 345.303 305.23 288 338.453V504C288 508.418 284.418 512 280 512S272 508.418 272 504V338.453C272 332.602 275.271 327.352 280.328 324.398C334.418 292.875 368 234.688 368 172.449C368 106.32 331.359 46.398 272.377 16.055L272 159.969C272 164.211 270.314 168.281 267.314 171.281L203.314 235.289C200.189 238.414 196.094 239.977 192 239.977S183.811 238.414 180.686 235.289L116.686 171.281C113.686 168.281 112 164.211 112 159.969L111.623 16.055C52.641 46.398 16 106.32 16 172.449C16 234.688 49.582 292.875 103.672 324.398C108.729 327.352 112 332.602 112 338.453V504C112 508.418 108.418 512 104 512S96 508.418 96 504V338.453C38.697 305.23 0 243.461 0 172.449C0 64.852 90.059 0 111.768 0C120.258 0 128 6.73 128 16.102V159.969L192 223.973L256 159.969V16.102C256 6.73 263.742 0 272.232 0C293.941 0 384 64.852 384 172.449Z" })
  }
));
WrenchSimpleThin.displayName = "WrenchSimpleThin";
var WrenchSimple_default = WrenchSimpleThin;
