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
var Rss_exports = {};
__export(Rss_exports, {
  default: () => Rss_default
});
module.exports = __toCommonJS(Rss_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RssRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M25.005 32.051C12.052 31.176 0.583 41.769 0.021 55.018C-0.526 68.268 9.755 79.455 23.005 79.986C222.531 88.361 391.668 257.478 400.012 457.001C400.558 469.907 411.183 480 423.98 480C424.323 480 424.652 480 424.995 479.969C438.245 479.438 448.526 468.251 447.979 455.001C438.604 231.136 248.859 41.394 25.005 32.051ZM25.567 176.076C12.411 175.357 0.911 185.231 0.052 198.45C-0.807 211.668 9.224 223.105 22.442 223.949C143.393 231.823 248.187 336.6 256.046 457.563C256.874 470.25 267.436 480 279.967 480C280.499 480 281.03 479.969 281.561 479.938C294.78 479.094 304.811 467.657 303.951 454.439C294.576 310.32 169.704 185.419 25.567 176.076ZM64.004 352.006C47.625 352.006 31.247 358.255 18.751 370.751C-6.243 395.742 -6.243 436.264 18.751 461.255C31.247 473.75 47.625 480 64.004 480S96.761 473.75 109.259 461.255C134.25 436.264 134.25 395.742 109.259 370.751C96.761 358.255 80.382 352.006 64.004 352.006ZM75.316 427.315C71.238 431.393 66.478 432.002 64.004 432.002S56.77 431.393 52.69 427.315C48.613 423.237 48.004 418.479 48.004 416.003C48.004 413.526 48.613 408.769 52.691 404.691C56.77 400.613 61.529 400.003 64.004 400.003S71.238 400.613 75.318 404.691C79.396 408.769 80.003 413.526 80.003 416.003C80.003 418.479 79.396 423.237 75.316 427.315Z" })
  }
));
RssRegular.displayName = "RssRegular";
var Rss_default = RssRegular;
