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
var CircleCalendar_exports = {};
__export(CircleCalendar_exports, {
  default: () => CircleCalendar_default
});
module.exports = __toCommonJS(CircleCalendar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleCalendarDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM384 356.572C384 371.715 371.715 384 356.572 384H155.43C140.287 384 128 371.715 128 356.572V224H384V356.572ZM384 192H128V155.428C128 140.28 140.28 128 155.428 128H192V112C192 103.2 199.2 96 208 96H208C216.8 96 224 103.2 224 112V128H288V112C288 103.2 295.2 96 304 96H304C312.8 96 320 103.2 320 112V128H356.572C371.72 128 384 140.28 384 155.428V192Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 356.572C128 371.715 140.287 384 155.43 384H356.572C371.715 384 384 371.715 384 356.572V224H128V356.572ZM356.572 128H320V112C320 103.2 312.8 96 304 96H304C295.2 96 288 103.2 288 112V128H224V112C224 103.2 216.8 96 208 96H208C199.2 96 192 103.2 192 112V128H155.43C140.281 128 128 140.281 128 155.43V192H384V155.428C384 140.28 371.72 128 356.572 128Z" })
    ]
  }
));
CircleCalendarDuotone.displayName = "CircleCalendarDuotone";
var CircleCalendar_default = CircleCalendarDuotone;
