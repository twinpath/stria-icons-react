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
var CalendarStar_exports = {};
__export(CalendarStar_exports, {
  default: () => CalendarStar_default
});
module.exports = __toCommonJS(CalendarStar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CalendarStarDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 192V464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V192H0ZM320.625 324.75L281 363.375L290.375 418C292.125 427.875 281.75 435.25 273 430.625L224 404.75L175.125 430.625C166.375 435.25 156 427.75 157.75 418L167.125 363.375L127.5 324.75C120.25 317.75 124.25 305.75 134.125 304.25L188.75 296.25L213.25 246.75C217.75 237.75 230.375 237.875 234.75 246.75L259.25 296.25L313.999 304.25C323.75 305.75 327.75 317.75 320.625 324.75Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 64H352V32C352 14.327 337.673 0 320 0H320C302.327 0 288 14.327 288 32V64H160V32C160 14.327 145.673 0 128 0H128C110.327 0 96 14.327 96 32V64H48C21.49 64 0 85.49 0 112V192H448V112C448 85.49 426.51 64 400 64ZM313.999 304.25L259.25 296.25L234.75 246.75C230.375 237.875 217.75 237.75 213.25 246.75L188.75 296.25L134.125 304.25C124.25 305.75 120.25 317.75 127.5 324.75L167.125 363.375L157.75 418C156 427.75 166.375 435.25 175.125 430.625L224 404.75L273 430.625C281.75 435.25 292.125 427.875 290.375 418L281 363.375L320.625 324.75C327.75 317.75 323.75 305.75 313.999 304.25Z" })
    ]
  }
));
CalendarStarDuotone.displayName = "CalendarStarDuotone";
var CalendarStar_default = CalendarStarDuotone;
