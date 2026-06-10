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
var CalendarClock_exports = {};
__export(CalendarClock_exports, {
  default: () => CalendarClock_default
});
module.exports = __toCommonJS(CalendarClock_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CalendarClockLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 224C352.375 224 288 288.375 288 368S352.375 512 432 512S576 447.625 576 368S511.625 224 432 224ZM432 480C370.25 480 320 429.75 320 368S370.25 256 432 256S544 306.25 544 368S493.75 480 432 480ZM480 352H448V304C448 295.164 440.836 288 432 288S416 295.164 416 304V368C416 376.836 423.164 384 432 384H480C488.836 384 496 376.836 496 368S488.836 352 480 352ZM300.883 485.393C297.855 482.027 293.643 480 289.117 480H64C46.326 480 32 465.674 32 448V192H432C440.836 192 448 184.836 448 176V128C448 92.654 419.346 64 384 64H352V16C352 7.164 344.836 0 336 0S320 7.164 320 16V64H128V16C128 7.164 120.836 0 112 0S96 7.164 96 16V64H64C28.654 64 0 92.654 0 128V448C0 483.346 28.654 512 64 512H289.432C303.074 512 310.354 495.861 301.201 485.744C301.094 485.627 300.988 485.51 300.883 485.393ZM32 128C32 110.326 46.326 96 64 96H384C401.674 96 416 110.326 416 128V160H32V128Z" })
  }
));
CalendarClockLight.displayName = "CalendarClockLight";
var CalendarClock_default = CalendarClockLight;
