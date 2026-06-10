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
var ArrowTrendUp_exports = {};
__export(ArrowTrendUp_exports, {
  default: () => ArrowTrendUp_default
});
module.exports = __toCommonJS(ArrowTrendUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowTrendUpThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 104V288C576 292.422 572.406 296 568 296S560 292.422 560 288V123.312L325.656 357.656C322.531 360.781 317.469 360.781 314.344 357.656L192 235.312L13.656 413.656C12.094 415.219 10.062 416 8 416S3.906 415.219 2.344 413.656C-0.781 410.531 -0.781 405.469 2.344 402.344L186.344 218.344C189.469 215.219 194.531 215.219 197.656 218.344L320 340.688L548.687 112H384C379.594 112 376 108.422 376 104S379.594 96 384 96H568C572.406 96 576 99.578 576 104Z" })
  }
));
ArrowTrendUpThin.displayName = "ArrowTrendUpThin";
var ArrowTrendUp_default = ArrowTrendUpThin;
