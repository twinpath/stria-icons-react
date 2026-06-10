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
var EarthAfrica_exports = {};
__export(EarthAfrica_exports, {
  default: () => EarthAfrica_default
});
module.exports = __toCommonJS(EarthAfrica_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EarthAfricaSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM415.992 223.5V230.375C415.992 236.25 412.723 241.625 407.516 244.25L392.016 252C387.051 254.5 381.117 254.125 376.516 251L358.352 238.875C354.355 236.25 349.391 235.5 344.789 237.125L342.125 238C332.437 241.125 328.562 252.75 334.133 261.25L347.453 281.125C350.238 285.375 355.082 288 360.289 288H368.523C377.121 288 384.023 295 384.023 303.5V314.875C384.023 318.25 382.934 321.5 380.875 324.125L362.227 349.125C360.773 351 359.805 353.25 359.32 355.5L355.082 378.375C354.477 381.625 352.781 384.625 350.238 387C340.793 395.625 332.437 405.375 325.293 416.125L312.215 435.625C310.68 437.961 308.312 439.383 306.203 441.113C297.727 443.418 289.043 445.188 280.141 446.313C273.43 443.984 267.687 439.266 264.383 432.625C258.934 421.75 256.027 409.625 256.027 397.375V367.5C256.027 359 249.125 352 240.527 352H214.613C200.203 352 186.277 346.25 175.984 336C165.812 325.75 160 311.875 160 297.375V283.25C160 266.125 168.113 249.875 181.918 239.625L209.406 218.875C218.852 211.875 230.355 208 242.223 208H243.07C251.547 208 260.023 210 267.531 213.75L282.305 221.125C285.938 223 290.176 223.25 294.051 222L341.398 206.25C347.695 204.125 352.055 198.125 352.055 191.5C352.055 182.875 345.031 176 336.555 176H326.383C322.266 176 318.391 174.375 315.484 171.5L308.582 164.5C305.676 161.625 301.68 160 297.562 160H207.469C198.992 160 191.969 153 191.969 144.5V140.125C191.969 133 196.812 126.75 203.715 125L218.246 121.5C222 120.5 225.27 118.25 227.328 115L235.441 102.875C238.348 98.625 243.191 96 248.277 96H272.496C281.094 96 287.996 89 287.996 80.5V66.891C362.805 79.523 422.898 135.441 441.68 208H431.492C423.016 208 415.992 215 415.992 223.5Z" })
  }
));
EarthAfricaSolid.displayName = "EarthAfricaSolid";
var EarthAfrica_default = EarthAfricaSolid;
