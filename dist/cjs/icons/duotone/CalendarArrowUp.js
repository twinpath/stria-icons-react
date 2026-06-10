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
var CalendarArrowUp_exports = {};
__export(CalendarArrowUp_exports, {
  default: () => CalendarArrowUp_default
});
module.exports = __toCommonJS(CalendarArrowUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CalendarArrowUpDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V192H0V464ZM127.031 327.031L207.031 247.031C216.406 237.656 231.594 237.656 240.969 247.031L320.969 327.031C330.344 336.406 330.344 351.594 320.969 360.969C316.281 365.656 310.156 368 304 368S291.719 365.656 287.031 360.969L248 321.938V424C248 437.25 237.25 448 224 448S200 437.25 200 424V321.938L160.969 360.969C151.594 370.344 136.406 370.344 127.031 360.969S117.656 336.406 127.031 327.031Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 64H352V32C352 14.4 337.6 0 320 0H320C302.4 0 288 14.4 288 32V64H160V32C160 14.4 145.6 0 128 0H128C110.4 0 96 14.4 96 32V64H48C21.49 64 0 85.49 0 112V192H448V112C448 85.49 426.51 64 400 64ZM240.969 247.031C231.594 237.656 216.406 237.656 207.031 247.031L127.031 327.031C117.656 336.406 117.656 351.594 127.031 360.969S151.594 370.344 160.969 360.969L200 321.938V424C200 437.25 210.75 448 224 448S248 437.25 248 424V321.938L287.031 360.969C291.719 365.656 297.844 368 304 368S316.281 365.656 320.969 360.969C330.344 351.594 330.344 336.406 320.969 327.031L240.969 247.031Z" })
    ]
  }
));
CalendarArrowUpDuotone.displayName = "CalendarArrowUpDuotone";
var CalendarArrowUp_default = CalendarArrowUpDuotone;
