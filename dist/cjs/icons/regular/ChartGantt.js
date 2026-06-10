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
var ChartGantt_exports = {};
__export(ChartGantt_exports, {
  default: () => ChartGantt_default
});
module.exports = __toCommonJS(ChartGantt_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartGanttRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M216 256H360C373.25 256 384 245.25 384 232S373.25 208 360 208H216C202.75 208 192 218.75 192 232S202.75 256 216 256ZM152 160H264C277.25 160 288 149.25 288 136S277.25 112 264 112H152C138.75 112 128 122.75 128 136S138.75 160 152 160ZM376 352H456C469.25 352 480 341.25 480 328S469.25 304 456 304H376C362.75 304 352 314.75 352 328S362.75 352 376 352ZM488 432H48V56C48 42.75 37.25 32 24 32S0 42.75 0 56V448C0 465.594 14.406 480 32 480H488C501.25 480 512 469.25 512 456S501.25 432 488 432Z" })
  }
));
ChartGanttRegular.displayName = "ChartGanttRegular";
var ChartGantt_default = ChartGanttRegular;
