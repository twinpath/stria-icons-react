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
var BookTanakh_exports = {};
__export(BookTanakh_exports, {
  default: () => BookTanakh_default
});
module.exports = __toCommonJS(BookTanakh_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookTanakhDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 384C369.674 384 384 398.326 384 416C384 433.672 369.674 448 352 448H32V384H352Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M131.5 168.625L114 139.5H148.875L131.5 168.625ZM114 244.5H148.875L131.375 215.375L114 244.5ZM208 296.625L224.875 268.5H191.25L208 296.625ZM208 87.375L191.25 115.5H224.75L208 87.375ZM239.125 139.375H176.875L145.375 192L176.875 244.5H239.125L270.625 192L239.125 139.375ZM302 139.5H267.125L284.625 168.625L302 139.5ZM448 96V416C448 469.02 405.02 512 352 512H24C10.746 512 0 501.254 0 488V472C0 458.744 10.746 448 24 448H352C369.674 448 384 433.672 384 416C384 398.326 369.674 384 352 384H24C10.746 384 0 373.254 0 360V32C0 14.326 14.326 0 32 0H352C405.02 0 448 42.98 448 96ZM326.375 238.375L298.625 192L326.25 145.75C330 139.5 330 131.875 326.5 125.625C323 119.375 316.375 115.5 309.125 115.5H252.75L225 69.125C221.5 63.125 215 59.5 208 59.5S194.375 63.25 190.75 69.25L163.25 115.5H106.875C99.625 115.375 93 119.25 89.375 125.625C85.875 131.75 85.875 139.5 89.625 145.625L117.375 192L89.75 238.25C86.125 244.5 86 252.125 89.5 258.375C93 264.625 99.75 268.5 106.875 268.5H163.25L191 314.875C194.5 320.875 201 324.5 208 324.5C215.125 324.5 221.625 320.75 225.25 314.75L252.75 268.625H309.125C316.375 268.625 323 264.75 326.625 258.375C330.125 252.25 330.125 244.5 326.375 238.375ZM267.125 244.5H302L284.625 215.375L267.125 244.5Z" })
    ]
  }
));
BookTanakhDuotone.displayName = "BookTanakhDuotone";
var BookTanakh_default = BookTanakhDuotone;
