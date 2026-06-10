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
var CalendarArrowDown_exports = {};
__export(CalendarArrowDown_exports, {
  default: () => CalendarArrowDown_default
});
module.exports = __toCommonJS(CalendarArrowDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CalendarArrowDownThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 64H336V8C336 3.578 332.406 0 328 0S320 3.578 320 8V64H128V8C128 3.578 124.406 0 120 0S112 3.578 112 8V64H48C21.5 64 0 85.5 0 112V464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V112C448 85.5 426.5 64 400 64ZM432 464C432 481.645 417.645 496 400 496H48C30.355 496 16 481.645 16 464V208H432V464ZM432 192H16V112C16 94.355 30.355 80 48 80H112V128C112 132.422 115.594 136 120 136S128 132.422 128 128V80H320V128C320 132.422 323.594 136 328 136S336 132.422 336 128V80H400C417.645 80 432 94.355 432 112V192ZM314.937 344.562C314.062 344.219 313.328 343.906 312.437 343.906C307.314 343.906 296.838 354.271 232 420.404V264C232 259.594 228.422 256 224 256S216 259.594 216 264V420.688L141.656 346.344C138.531 343.219 133.469 343.219 130.344 346.344S127.219 354.531 130.344 357.656L218.344 445.656C219.844 447.156 221.875 448 224 448H224.047C226.172 448 228.219 447.125 229.719 445.594C260.172 414.531 309.891 364.188 316.187 358.812C317.609 357.937 318.781 356.625 319.437 354.937C321.062 350.844 319.047 346.188 314.937 344.562Z" })
  }
));
CalendarArrowDownThin.displayName = "CalendarArrowDownThin";
var CalendarArrowDown_default = CalendarArrowDownThin;
