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
var CalendarRange_exports = {};
__export(CalendarRange_exports, {
  default: () => CalendarRange_default
});
module.exports = __toCommonJS(CalendarRange_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CalendarRangeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 64H352V16C352 7.164 344.836 0 336 0S320 7.164 320 16V64H128V16C128 7.164 120.836 0 112 0S96 7.164 96 16V64H64C28.654 64 0 92.656 0 128V448C0 483.344 28.654 512 64 512H384C419.346 512 448 483.344 448 448V128C448 92.656 419.346 64 384 64ZM416 448C416 465.672 401.674 480 384 480H64C46.326 480 32 465.672 32 448V192H416V448ZM416 160H32V128C32 110.328 46.326 96 64 96H384C401.674 96 416 110.328 416 128V160ZM96 320H128C145.674 320 160 305.672 160 288V256C160 238.328 145.674 224 128 224H96C78.328 224 64 238.328 64 256V288C64 305.672 78.328 320 96 320ZM96 256H128V288H96V256ZM352 352H320C302.328 352 288 366.328 288 384V416C288 433.672 302.328 448 320 448H352C369.674 448 384 433.672 384 416V384C384 366.328 369.674 352 352 352ZM352 416H320V384H352V416ZM208 288H368C376.836 288 384 280.836 384 272S376.836 256 368 256H208C199.164 256 192 263.164 192 272S199.164 288 208 288ZM80 416H240C248.836 416 256 408.836 256 400S248.836 384 240 384H80C71.164 384 64 391.164 64 400S71.164 416 80 416Z" })
  }
));
CalendarRangeLight.displayName = "CalendarRangeLight";
var CalendarRange_default = CalendarRangeLight;
