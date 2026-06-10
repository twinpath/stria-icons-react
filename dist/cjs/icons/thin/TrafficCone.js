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
var TrafficCone_exports = {};
__export(TrafficCone_exports, {
  default: () => TrafficCone_default
});
module.exports = __toCommonJS(TrafficCone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrafficConeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504 496H8C3.594 496 0 499.578 0 504S3.594 512 8 512H504C508.406 512 512 508.422 512 504S508.406 496 504 496ZM37.062 463.453C41.219 465.063 45.844 463.047 47.438 458.922L98.873 328H413.127L464.562 458.922C465.781 462.078 468.812 464 472 464C472.969 464 473.969 463.828 474.938 463.453C479.031 461.828 481.062 457.188 479.438 453.078L311.406 25.375C305.375 9.953 290.75 0 274.188 0H237.812C221.25 0 206.625 9.953 200.594 25.375L32.562 453.078C30.938 457.188 32.969 461.828 37.062 463.453ZM215.469 31.219C219.125 21.969 227.875 16 237.812 16H274.188C284.125 16 292.875 21.969 296.531 31.219L343.982 152H168.018L215.469 31.219ZM161.732 168H350.268L406.842 312H105.158L161.732 168Z" })
  }
));
TrafficConeThin.displayName = "TrafficConeThin";
var TrafficCone_default = TrafficConeThin;
