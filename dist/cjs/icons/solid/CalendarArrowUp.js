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
const CalendarArrowUpSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.4 110.4 0 128 0H128C145.6 0 160 14.4 160 32V64H288V32C288 14.4 302.4 0 320 0H320C337.6 0 352 14.4 352 32V64H400C426.51 64 448 85.49 448 112ZM0 192H448V464C448 490.5 426.5 512 400 512H48C21.5 512 0 490.5 0 464V192ZM127.031 360.969C136.406 370.344 151.594 370.344 160.969 360.969L200 321.938V424C200 437.25 210.75 448 224 448S248 437.25 248 424V321.938L287.031 360.969C291.719 365.656 297.844 368 304 368S316.281 365.656 320.969 360.969C330.344 351.594 330.344 336.406 320.969 327.031L240.969 247.031C231.594 237.656 216.406 237.656 207.031 247.031L127.031 327.031C117.656 336.406 117.656 351.594 127.031 360.969Z" })
  }
));
CalendarArrowUpSolid.displayName = "CalendarArrowUpSolid";
var CalendarArrowUp_default = CalendarArrowUpSolid;
