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
var FlaskRoundPotion_exports = {};
__export(FlaskRoundPotion_exports, {
  default: () => FlaskRoundPotion_default
});
module.exports = __toCommonJS(FlaskRoundPotion_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FlaskRoundPotionRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M319.965 169V48H327.961C341.219 48 351.961 37.254 351.961 24C351.961 10.742 341.219 0 327.961 0H119.992C106.734 0 95.992 10.742 95.992 24C95.992 37.254 106.734 48 119.992 48H127.984V168.125C61.617 202.875 16 271.875 16 352C16 405.75 36.375 454.75 69.992 491.75C81.867 504.875 99.117 512 116.988 512H330.961C348.961 512 366.461 504.5 378.461 491.125C410.703 455.375 430.703 408.375 431.953 356.625C433.703 276.75 387.207 205.125 319.965 169ZM267.461 329.059C207.146 298.898 138.52 296.754 65.318 332.99C71.559 281.293 102.803 235.49 150.25 210.648L175.984 197.174V48H271.965V197.701L297.248 211.283C350.125 239.691 383.652 294.662 383.783 351.951C357.531 351.984 317.33 353.994 267.461 329.059Z" })
  }
));
FlaskRoundPotionRegular.displayName = "FlaskRoundPotionRegular";
var FlaskRoundPotion_default = FlaskRoundPotionRegular;
