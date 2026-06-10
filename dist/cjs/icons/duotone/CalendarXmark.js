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
var CalendarXmark_exports = {};
__export(CalendarXmark_exports, {
  default: () => CalendarXmark_default
});
module.exports = __toCommonJS(CalendarXmark_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CalendarXmarkDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 192V464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V192H0ZM304.969 399.031C314.344 408.406 314.344 423.594 304.969 432.969C295.595 442.343 280.411 442.349 271.031 432.969L224 385.938L176.969 432.969C167.595 442.343 152.411 442.349 143.031 432.969C133.656 423.594 133.656 408.406 143.031 399.031L190.062 352L143.031 304.969C133.656 295.594 133.656 280.406 143.031 271.031S167.594 261.656 176.969 271.031L224 318.062L271.031 271.031C280.406 261.656 295.594 261.656 304.969 271.031S314.344 295.594 304.969 304.969L257.938 352L304.969 399.031Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 64H352V32C352 14.327 337.673 0 320 0H320C302.327 0 288 14.327 288 32V64H160V32C160 14.327 145.673 0 128 0H128C110.327 0 96 14.327 96 32V64H48C21.49 64 0 85.49 0 112V192H448V112C448 85.49 426.51 64 400 64ZM304.969 271.031C295.594 261.656 280.406 261.656 271.031 271.031L224 318.062L176.969 271.031C167.594 261.656 152.406 261.656 143.031 271.031S133.656 295.594 143.031 304.969L190.062 352L143.031 399.031C133.656 408.406 133.656 423.594 143.031 432.969C152.405 442.343 167.589 442.349 176.969 432.969L224 385.938L271.031 432.969C280.405 442.343 295.589 442.349 304.969 432.969C314.344 423.594 314.344 408.406 304.969 399.031L257.938 352L304.969 304.969C314.344 295.594 314.344 280.406 304.969 271.031Z" })
    ]
  }
));
CalendarXmarkDuotone.displayName = "CalendarXmarkDuotone";
var CalendarXmark_default = CalendarXmarkDuotone;
