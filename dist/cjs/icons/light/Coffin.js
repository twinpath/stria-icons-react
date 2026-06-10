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
var Coffin_exports = {};
__export(Coffin_exports, {
  default: () => Coffin_default
});
module.exports = __toCommonJS(Coffin_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CoffinLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M402.65 112.75L303.886 13.5C295.134 4.75 283.634 0 271.382 0H176.618C164.366 0 152.864 4.75 144.112 13.5L45.349 112.75C34.099 124.125 29.472 140.75 33.349 156.375L113.234 477.125C118.236 497.625 136.612 512 157.739 512H290.259C311.388 512 329.765 497.625 334.765 477.125L414.652 156.375C418.527 140.75 413.902 124.125 402.65 112.75ZM303.761 469.375C302.261 475.625 296.634 480 290.259 480H157.739C151.364 480 145.739 475.625 144.237 469.375L64.353 148.625C63.228 143.875 64.603 138.75 68.103 135.25L166.741 36.125C169.491 33.5 172.993 32 176.618 32H271.382C275.132 32 278.507 33.5 281.132 36L379.896 135.25C383.398 138.75 384.773 143.875 383.648 148.625L303.761 469.375Z" })
  }
));
CoffinLight.displayName = "CoffinLight";
var Coffin_default = CoffinLight;
