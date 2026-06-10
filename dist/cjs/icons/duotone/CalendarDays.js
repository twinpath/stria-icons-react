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
var CalendarDays_exports = {};
__export(CalendarDays_exports, {
  default: () => CalendarDays_default
});
module.exports = __toCommonJS(CalendarDays_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CalendarDaysDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 192V464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V192H0ZM128 432C128 440.836 120.838 448 112 448H80C71.164 448 64 440.836 64 432V400C64 391.164 71.164 384 80 384H112C120.838 384 128 391.164 128 400V432ZM128 304C128 312.836 120.838 320 112 320H80C71.164 320 64 312.836 64 304V272C64 263.164 71.164 256 80 256H112C120.838 256 128 263.164 128 272V304ZM256 432C256 440.836 248.838 448 240 448H208C199.164 448 192 440.836 192 432V400C192 391.164 199.164 384 208 384H240C248.838 384 256 391.164 256 400V432ZM256 304C256 312.836 248.838 320 240 320H208C199.164 320 192 312.836 192 304V272C192 263.164 199.164 256 208 256H240C248.838 256 256 263.164 256 272V304ZM384 432C384 440.836 376.838 448 368 448H336C327.164 448 320 440.836 320 432V400C320 391.164 327.164 384 336 384H368C376.838 384 384 391.164 384 400V432ZM384 304C384 312.836 376.838 320 368 320H336C327.164 320 320 312.836 320 304V272C320 263.164 327.164 256 336 256H368C376.838 256 384 263.164 384 272V304Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 64H352V32C352 14.327 337.673 0 320 0H320C302.327 0 288 14.327 288 32V64H160V32C160 14.327 145.673 0 128 0H128C110.327 0 96 14.327 96 32V64H48C21.49 64 0 85.49 0 112V192H448V112C448 85.49 426.51 64 400 64Z" })
    ]
  }
));
CalendarDaysDuotone.displayName = "CalendarDaysDuotone";
var CalendarDays_default = CalendarDaysDuotone;
