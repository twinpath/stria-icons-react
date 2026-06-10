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
var CalendarImage_exports = {};
__export(CalendarImage_exports, {
  default: () => CalendarImage_default
});
module.exports = __toCommonJS(CalendarImage_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CalendarImageDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 192V464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V192H0ZM128 256C145.625 256 160 270.375 160 288S145.625 320 128 320S96 305.625 96 288S110.375 256 128 256ZM350.107 439.551C347.322 444.754 341.9 448 336 448H112C105.979 448 100.467 444.621 97.738 439.25C95.008 433.883 95.523 427.438 99.072 422.574L145.738 358.574C148.75 354.441 153.555 352 158.666 352S168.582 354.441 171.594 358.574L183.85 375.383L237.354 295.125C240.32 290.672 245.316 288 250.666 288S261.012 290.672 263.979 295.125L349.312 423.125C352.586 428.035 352.891 434.348 350.107 439.551Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 64H352V32C352 14.4 337.6 0 320 0H320C302.4 0 288 14.4 288 32V64H160V32C160 14.4 145.6 0 128 0H128C110.4 0 96 14.4 96 32V64H48C21.49 64 0 85.49 0 112V192H448V112C448 85.49 426.51 64 400 64ZM183.85 375.383L237.354 295.125C240.32 290.672 245.316 288 250.666 288S261.012 290.672 263.979 295.125L349.312 423.125C352.586 428.035 352.891 434.348 350.107 439.551C347.322 444.754 341.9 448 336 448H112C105.979 448 100.467 444.621 97.738 439.25C95.008 433.883 95.523 427.438 99.072 422.574L145.738 358.574C148.75 354.441 153.555 352 158.666 352S168.582 354.441 171.594 358.574L183.85 375.383Z" })
    ]
  }
));
CalendarImageDuotone.displayName = "CalendarImageDuotone";
var CalendarImage_default = CalendarImageDuotone;
