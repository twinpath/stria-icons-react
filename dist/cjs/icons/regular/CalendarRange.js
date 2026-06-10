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
const CalendarRangeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M216 312H328.002C341.256 312 352 301.254 352 288V287.996C352 274.742 341.256 264 328.004 264H215.998C202.744 264 192 274.742 192 288C192 301.254 202.746 312 216 312ZM341.334 352H298.666C292.775 352 288 356.773 288 362.664V405.332C288 411.223 292.775 416 298.666 416H341.334C347.225 416 352 411.223 352 405.332V362.664C352 356.773 347.225 352 341.334 352ZM106.666 320H149.334C155.225 320 160 315.223 160 309.332V266.664C160 260.773 155.225 256 149.334 256H106.666C100.775 256 96 260.773 96 266.664V309.332C96 315.223 100.775 320 106.666 320ZM384 64H344V24C344 10.75 333.25 0 320 0S296 10.75 296 24V64H152V24C152 10.75 141.25 0 128 0S104 10.75 104 24V64H64C28.654 64 0 92.652 0 128V448C0 483.348 28.654 512 64 512H384C419.346 512 448 483.348 448 448V128C448 92.652 419.346 64 384 64ZM400 448C400 456.824 392.822 464 384 464H64C55.178 464 48 456.824 48 448V192H400V448ZM120 408H232.002C245.256 408 256 397.254 256 384V383.996C256 370.742 245.256 360 232.004 360H119.998C106.744 360 96 370.742 96 384C96 397.254 106.746 408 120 408Z" })
  }
));
CalendarRangeRegular.displayName = "CalendarRangeRegular";
var CalendarRange_default = CalendarRangeRegular;
