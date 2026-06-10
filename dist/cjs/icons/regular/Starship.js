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
var Starship_exports = {};
__export(Starship_exports, {
  default: () => Starship_default
});
module.exports = __toCommonJS(Starship_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarshipRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M491.247 68.738C394.989 47.666 307.348 99.116 272.25 178.75L201.125 185.25L163.25 160L188.663 160C220.539 160 250.047 138.18 255.132 106.713C261.616 66.59 230.886 32 192 32H48C21.6 32 0 53.6 0 80V112C0 138.4 21.6 160 48 160H76.75L125 192.125C86.25 195.625 64 224.5 64 256C64 286.875 85.5 316.25 125 319.875L76.75 352H48C21.6 352 0 373.6 0 400V432C0 458.4 21.6 480 48 480L188.663 480C220.539 480 250.047 458.18 255.132 426.712C261.616 386.59 230.886 352 192 352H163.25L201.125 326.75L272.25 333.25C302 400.75 369.5 448 448 448C567.542 448 661.649 338.622 635.651 214.529C620.601 142.695 562.943 84.434 491.247 68.738ZM48 112V80H192C200.875 80 208 87.125 208 96S200.875 112 192 112H48ZM192 400C200.875 400 208 407.125 208 416S200.875 432 192 432H48V400H192ZM258.25 283.75L126.375 271.75C118.25 271 112 264.125 112 256C112 247.75 118.25 241 126.375 240.25L258.25 228.25C256.875 237.5 256.125 246.75 256 256C256.125 265.25 256.875 274.5 258.25 283.75ZM448 400C368.625 400 304 335.375 304 256S368.625 112 448 112S592 176.625 592 256S527.375 400 448 400ZM448 176C403.875 176 368 211.875 368 256S403.875 336 448 336S528 300.125 528 256S492.125 176 448 176ZM448 288C430.375 288 416 273.625 416 256S430.375 224 448 224S480 238.375 480 256S465.625 288 448 288Z" })
  }
));
StarshipRegular.displayName = "StarshipRegular";
var Starship_default = StarshipRegular;
