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
var CalendarWeek_exports = {};
__export(CalendarWeek_exports, {
  default: () => CalendarWeek_default
});
module.exports = __toCommonJS(CalendarWeek_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CalendarWeekThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 64H336V8C336 3.578 332.406 0 328 0S320 3.578 320 8V64H128V8C128 3.578 124.406 0 120 0S112 3.578 112 8V64H48C21.5 64 0 85.5 0 112V464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V112C448 85.5 426.5 64 400 64ZM432 464C432 481.645 417.645 496 400 496H48C30.355 496 16 481.645 16 464V208H432V464ZM432 192H16V112C16 94.355 30.355 80 48 80H112V128C112 132.422 115.594 136 120 136S128 132.422 128 128V80H320V128C320 132.422 323.594 136 328 136S336 132.422 336 128V80H400C417.645 80 432 94.355 432 112V192ZM96 384H352C369.674 384 384 369.674 384 352V288C384 270.326 369.674 256 352 256H96C78.326 256 64 270.326 64 288V352C64 369.674 78.326 384 96 384ZM80 288C80 279.178 87.178 272 96 272H352C360.822 272 368 279.178 368 288V352C368 360.822 360.822 368 352 368H96C87.178 368 80 360.822 80 352V288Z" })
  }
));
CalendarWeekThin.displayName = "CalendarWeekThin";
var CalendarWeek_default = CalendarWeekThin;
