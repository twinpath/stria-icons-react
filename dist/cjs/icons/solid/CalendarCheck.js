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
var CalendarCheck_exports = {};
__export(CalendarCheck_exports, {
  default: () => CalendarCheck_default
});
module.exports = __toCommonJS(CalendarCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CalendarCheckSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.4 110.4 0 128 0H128C145.6 0 160 14.4 160 32V64H288V32C288 14.4 302.4 0 320 0H320C337.6 0 352 14.4 352 32V64H400C426.51 64 448 85.49 448 112ZM0 192H448V464C448 490.5 426.5 512 400 512H48C21.5 512 0 490.5 0 464V192ZM135.031 376.953L183.031 424.953C187.531 429.453 193.656 431.984 200 431.984C200.312 431.984 200.625 431.984 200.906 431.953C207.594 431.703 213.875 428.672 218.219 423.609L314.219 311.609C322.844 301.547 321.687 286.391 311.625 277.766C301.594 269.172 286.437 270.297 277.781 280.359L198.656 372.703L168.969 343.016C159.594 333.641 144.406 333.641 135.031 343.016S125.656 367.578 135.031 376.953Z" })
  }
));
CalendarCheckSolid.displayName = "CalendarCheckSolid";
var CalendarCheck_default = CalendarCheckSolid;
