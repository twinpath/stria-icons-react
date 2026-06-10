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
var Calendars_exports = {};
__export(Calendars_exports, {
  default: () => Calendars_default
});
module.exports = __toCommonJS(Calendars_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CalendarsLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 64H416V16C416 7.164 408.836 0 400 0S384 7.164 384 16V64H224V16C224 7.164 216.836 0 208 0S192 7.164 192 16V64H160C124.654 64 96 92.654 96 128V352C96 387.346 124.654 416 160 416H448C483.346 416 512 387.346 512 352V128C512 92.654 483.346 64 448 64ZM480 352C480 369.674 465.674 384 448 384H160C142.326 384 128 369.674 128 352V192H480V352ZM480 160H128V128C128 110.326 142.326 96 160 96H448C465.674 96 480 110.326 480 128V160ZM400 480H96C60.654 480 32 451.346 32 416V176C32 167.164 24.836 160 16 160S0 167.164 0 176V416C0 469.02 42.98 512 96 512H400C408.836 512 416 504.836 416 496S408.836 480 400 480Z" })
  }
));
CalendarsLight.displayName = "CalendarsLight";
var Calendars_default = CalendarsLight;
