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
var CalendarPen_exports = {};
__export(CalendarPen_exports, {
  default: () => CalendarPen_default
});
module.exports = __toCommonJS(CalendarPen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CalendarPenThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 64H336V8C336 3.578 332.406 0 328 0S320 3.578 320 8V64H128V8C128 3.578 124.406 0 120 0S112 3.578 112 8V64H48C21.5 64 0 85.5 0 112V464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V112C448 85.5 426.5 64 400 64ZM432 464C432 481.645 417.645 496 400 496H48C30.355 496 16 481.645 16 464V208H432V464ZM432 192H16V112C16 94.355 30.355 80 48 80H112V128C112 132.422 115.594 136 120 136S128 132.422 128 128V80H320V128C320 132.422 323.594 136 328 136S336 132.422 336 128V80H400C417.645 80 432 94.355 432 112V192ZM134.152 448C134.541 448 134.936 447.963 135.328 447.883L185.742 437.801C186.809 437.23 187.807 436.695 188.875 436.123L311.811 313.207C322.746 302.273 322.748 284.547 311.814 273.611L302.406 264.201C291.479 253.274 273.746 253.26 262.807 264.199L139.871 387.131C139.301 388.195 138.768 389.191 138.199 390.256L128.115 440.678C127.289 444.82 130.57 448 134.152 448ZM274.121 275.512C278.809 270.828 286.401 270.823 291.092 275.514L300.5 284.924C305.176 289.6 305.202 297.188 300.498 301.893L282.85 319.537L256.473 293.16L274.121 275.512ZM153.303 396.328L245.16 304.473L271.537 330.85L179.674 422.697L146.709 429.289L153.303 396.328Z" })
  }
));
CalendarPenThin.displayName = "CalendarPenThin";
var CalendarPen_default = CalendarPenThin;
