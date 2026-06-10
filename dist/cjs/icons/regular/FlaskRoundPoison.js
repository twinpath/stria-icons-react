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
var FlaskRoundPoison_exports = {};
__export(FlaskRoundPoison_exports, {
  default: () => FlaskRoundPoison_default
});
module.exports = __toCommonJS(FlaskRoundPoison_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FlaskRoundPoisonRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M319.965 169V48H327.961C341.219 48 351.961 37.254 351.961 24C351.961 10.742 341.219 0 327.961 0H119.992C106.734 0 95.992 10.742 95.992 24C95.992 37.254 106.734 48 119.992 48H127.984V168.125C61.617 202.875 16 271.875 16 352C16 405.75 36.375 454.75 69.992 491.75C81.867 504.875 99.117 512 116.988 512H330.961C348.961 512 366.461 504.5 378.461 491.125C410.703 455.375 430.703 408.375 431.953 356.625C433.703 276.75 387.207 205.125 319.965 169ZM342.732 459.07C339.963 462.156 335.562 464 330.961 464H116.988C112.371 464 108.109 462.334 105.518 459.473C78.744 430.004 64 391.836 64 352C64 292.668 97.049 238.504 150.25 210.648L175.984 197.174V48H271.965V197.701L297.248 211.283C351.211 240.275 385.25 296.912 383.967 355.467C383.041 393.82 368.426 430.582 342.732 459.07ZM224 256C174.875 256 135.125 287.875 135.125 327.125C135.125 350.25 149.25 370.75 170.625 383.625V398.25C170.625 408 178.625 416 188.5 416H259.5C269.375 416 277.375 408 277.375 398.25V383.625C298.75 370.75 312.875 350.25 312.875 327.125C312.875 287.875 273.125 256 224 256ZM188.5 344.875C178.625 344.875 170.625 336.875 170.625 327.125C170.625 317.25 178.625 309.375 188.5 309.375C198.25 309.375 206.25 317.25 206.25 327.125C206.25 336.875 198.25 344.875 188.5 344.875ZM259.5 344.875C249.75 344.875 241.75 336.875 241.75 327.125C241.75 317.25 249.75 309.375 259.5 309.375C269.375 309.375 277.375 317.25 277.375 327.125C277.375 336.875 269.375 344.875 259.5 344.875Z" })
  }
));
FlaskRoundPoisonRegular.displayName = "FlaskRoundPoisonRegular";
var FlaskRoundPoison_default = FlaskRoundPoisonRegular;
