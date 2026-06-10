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
var PersonSkiingNordic_exports = {};
__export(PersonSkiingNordic_exports, {
  default: () => PersonSkiingNordic_default
});
module.exports = __toCommonJS(PersonSkiingNordic_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonSkiingNordicRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 96C362.5 96 384 74.5 384 48S362.5 0 336 0S288 21.5 288 48S309.5 96 336 96ZM552 416C538.75 416 528 426.75 528 440S517.25 464 504 464H434.5L462.75 266.625C468.25 262.25 472 255.75 472 248.125C472 234.875 461.25 224.125 448 224.125H399L370.75 166.375C359.5 143.25 338.375 125.75 314.25 119.75L242.75 98.5C217.25 92.25 190.25 98.125 169.125 114.25L129.375 144.75C124.25 148.625 121 154.25 120.25 160.625C119.375 166.375 121 172.125 124.25 177L66.875 464H24C10.75 464 0 474.75 0 488S10.75 512 24 512H504C543.75 512 576 479.75 576 440C576 426.75 565.25 416 552 416ZM297.375 464H185.75L237.125 355.5L219.75 345.25C211.125 340.125 203.875 333.75 197.75 326.375L132.625 464H99.5L155.5 184.25C156.5 183.625 157.75 183.375 158.625 182.75L198.25 152.25C205.375 146.75 214.25 143.75 222.75 143.75C225.25 143.75 227.875 144.125 230.25 144.75L254.125 151.75L213.125 247.375C202.125 273.25 211.875 303.375 236.125 317.75L326.625 371.125L297.375 464ZM402.125 464H347.75L374.625 378.25C379.375 361.125 372 342.375 356.375 333L289.25 293.375L329.75 192L358 249.625C364.75 263.25 378.75 272 393.875 272H429.375L402.125 464Z" })
  }
));
PersonSkiingNordicRegular.displayName = "PersonSkiingNordicRegular";
var PersonSkiingNordic_default = PersonSkiingNordicRegular;
