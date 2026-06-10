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
const CalendarCheckDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V192H0V464ZM135.031 343.016C144.406 333.641 159.594 333.641 168.969 343.016L198.656 372.703L277.781 280.359C286.438 270.297 301.594 269.172 311.625 277.766C321.688 286.391 322.844 301.547 314.219 311.609L218.219 423.609C213.875 428.672 207.594 431.703 200.906 431.953C200.625 431.984 200.312 431.984 200 431.984C193.656 431.984 187.531 429.453 183.031 424.953L135.031 376.953C125.656 367.578 125.656 352.391 135.031 343.016Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 64H352V32C352 14.327 337.673 0 320 0H320C302.327 0 288 14.327 288 32V64H160V32C160 14.327 145.673 0 128 0H128C110.327 0 96 14.327 96 32V64H48C21.49 64 0 85.49 0 112V192H448V112C448 85.49 426.51 64 400 64ZM277.781 280.359L198.656 372.703L168.969 343.016C159.594 333.641 144.406 333.641 135.031 343.016S125.656 367.578 135.031 376.953L183.031 424.953C187.531 429.453 193.656 431.984 200 431.984C200.312 431.984 200.625 431.984 200.906 431.953C207.594 431.703 213.875 428.672 218.219 423.609L314.219 311.609C322.844 301.547 321.687 286.391 311.625 277.766C301.594 269.172 286.438 270.297 277.781 280.359Z" })
    ]
  }
));
CalendarCheckDuotone.displayName = "CalendarCheckDuotone";
var CalendarCheck_default = CalendarCheckDuotone;
