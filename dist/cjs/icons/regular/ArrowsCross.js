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
var ArrowsCross_exports = {};
__export(ArrowsCross_exports, {
  default: () => ArrowsCross_default
});
module.exports = __toCommonJS(ArrowsCross_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsCrossRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M424 32H280C266.75 32 256 42.75 256 56S266.75 80 280 80H366.063L7.031 439.031C-2.344 448.406 -2.344 463.594 7.031 472.969S31.594 482.344 40.969 472.969L400 113.938V200C400 213.25 410.75 224 424 224S448 213.25 448 200V56C448 42.836 437.188 32 424 32ZM167.438 233.375L201.375 199.438L40.969 39.031C31.594 29.656 16.406 29.656 7.031 39.031S-2.344 63.594 7.031 72.969L167.438 233.375ZM424 288C410.75 288 400 298.75 400 312V398.062L280.563 278.625L246.625 312.562L366.063 432H280C266.75 432 256 442.75 256 456S266.75 480 280 480H424C437.164 480 448 469.188 448 456V312C448 298.75 437.25 288 424 288Z" })
  }
));
ArrowsCrossRegular.displayName = "ArrowsCrossRegular";
var ArrowsCross_default = ArrowsCrossRegular;
