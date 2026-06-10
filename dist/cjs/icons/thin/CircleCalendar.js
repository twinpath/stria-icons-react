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
var CircleCalendar_exports = {};
__export(CircleCalendar_exports, {
  default: () => CircleCalendar_default
});
module.exports = __toCommonJS(CircleCalendar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleCalendarThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480ZM352 128H320V104C320 99.578 316.422 96 312 96S304 99.578 304 104V128H208V104C208 99.578 204.422 96 200 96S192 99.578 192 104V128H160C142.326 128 128 142.326 128 160V352C128 369.674 142.326 384 160 384H352C369.674 384 384 369.674 384 352V160C384 142.326 369.674 128 352 128ZM368 352C368 360.836 360.836 368 352 368H160C151.164 368 144 360.836 144 352V232H368V352ZM368 216H144V160C144 151.164 151.164 144 160 144H192V168C192 172.422 195.578 176 200 176S208 172.422 208 168V144H304V168C304 172.422 307.578 176 312 176S320 172.422 320 168V144H352C360.836 144 368 151.164 368 160V216Z" })
  }
));
CircleCalendarThin.displayName = "CircleCalendarThin";
var CircleCalendar_default = CircleCalendarThin;
