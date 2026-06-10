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
const CalendarRangeDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 192V464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V192H0ZM64 272C64 263.164 71.164 256 80 256H112C120.838 256 128 263.164 128 272V304C128 312.836 120.838 320 112 320H80C71.164 320 64 312.836 64 304V272ZM264 440H88C74.745 440 64 429.254 64 416S74.745 392 88 392H264C277.255 392 288 402.746 288 416S277.255 440 264 440ZM384 432C384 440.836 376.838 448 368 448H336C327.164 448 320 440.836 320 432V400C320 391.164 327.164 384 336 384H368C376.838 384 384 391.164 384 400V432ZM360 312H184C170.745 312 160 301.254 160 288S170.745 264 184 264H360C373.255 264 384 274.746 384 288S373.255 312 360 312Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 64H352V32C352 14.4 337.6 0 320 0H320C302.4 0 288 14.4 288 32V64H160V32C160 14.4 145.6 0 128 0H128C110.4 0 96 14.4 96 32V64H48C21.49 64 0 85.49 0 112V192H448V112C448 85.49 426.51 64 400 64ZM112 320C120.838 320 128 312.836 128 304V272C128 263.164 120.838 256 112 256H80C71.164 256 64 263.164 64 272V304C64 312.836 71.164 320 80 320H112ZM368 384H336C327.164 384 320 391.164 320 400V432C320 440.836 327.164 448 336 448H368C376.838 448 384 440.836 384 432V400C384 391.164 376.838 384 368 384ZM360 264H184C170.745 264 160 274.746 160 288S170.745 312 184 312H360C373.255 312 384 301.254 384 288S373.255 264 360 264ZM264 392H88C74.745 392 64 402.746 64 416S74.745 440 88 440H264C277.255 440 288 429.254 288 416S277.255 392 264 392Z" })
    ]
  }
));
CalendarRangeDuotone.displayName = "CalendarRangeDuotone";
var CalendarRange_default = CalendarRangeDuotone;
