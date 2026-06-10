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
var GasPump_exports = {};
__export(GasPump_exports, {
  default: () => GasPump_default
});
module.exports = __toCommonJS(GasPump_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GasPumpThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M500.281 112.969L413.656 26.344C410.531 23.219 405.469 23.219 402.344 26.344S399.219 34.531 402.344 37.656L432 67.312V168C432 190.062 449.937 208 472 208H496V392C496 414.062 478.062 432 456 432C433.938 432 416 414.062 416 392V328C416 288.312 383.688 256 344 256H320V72C320 32.312 287.688 0 248 0H104C64.313 0 32 32.312 32 72V496H8C3.594 496 0 499.594 0 504S3.594 512 8 512H344C348.406 512 352 508.406 352 504S348.406 496 344 496H320V272H344C374.875 272 400 297.125 400 328V392C400 422.875 425.125 448 456 448S512 422.875 512 392V141.25C512 130.719 507.719 120.406 500.281 112.969ZM304 496H48V432H304V496ZM304 416H48V72C48 41.125 73.125 16 104 16H248C278.875 16 304 41.125 304 72V416ZM496 192H472C458.781 192 448 181.219 448 168V83.312L488.969 124.281C493.437 128.75 496 134.937 496 141.25V192ZM232 64H120C106.781 64 96 74.781 96 88V216C96 220.406 99.594 224 104 224H248C252.406 224 256 220.406 256 216V88C256 74.781 245.219 64 232 64ZM240 208H112V88C112 83.594 115.594 80 120 80H232C236.406 80 240 83.594 240 88V208Z" })
  }
));
GasPumpThin.displayName = "GasPumpThin";
var GasPump_default = GasPumpThin;
