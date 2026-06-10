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
var CalendarArrowDown_exports = {};
__export(CalendarArrowDown_exports, {
  default: () => CalendarArrowDown_default
});
module.exports = __toCommonJS(CalendarArrowDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CalendarArrowDownLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 64H352V16C352 7.164 344.836 0 336 0S320 7.164 320 16V64H128V16C128 7.164 120.836 0 112 0S96 7.164 96 16V64H64C28.654 64 0 92.654 0 128V448C0 483.346 28.654 512 64 512H384C419.346 512 448 483.346 448 448V128C448 92.654 419.346 64 384 64ZM416 448C416 465.674 401.674 480 384 480H64C46.326 480 32 465.674 32 448V192H416V448ZM416 160H32V128C32 110.326 46.326 96 64 96H384C401.674 96 416 110.326 416 128V160ZM285.375 324.031L240 364.369V256C240 247.156 232.844 240 224 240S208 247.156 208 256V364.369L162.625 324.031C159.594 321.344 155.781 320 152 320C147.594 320 143.188 321.812 140.031 325.375C134.156 331.969 134.781 342.094 141.375 347.969L213.375 411.953C219.438 417.359 228.563 417.359 234.625 411.953L306.625 347.969C313.219 342.094 313.844 331.969 307.969 325.375C302.125 318.781 291.969 318.219 285.375 324.031Z" })
  }
));
CalendarArrowDownLight.displayName = "CalendarArrowDownLight";
var CalendarArrowDown_default = CalendarArrowDownLight;
