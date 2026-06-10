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
var DisplaySlash_exports = {};
__export(DisplaySlash_exports, {
  default: () => DisplaySlash_default
});
module.exports = __toCommonJS(DisplaySlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DisplaySlashRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M630.812 469.109L560.117 413.699C587.613 406.52 607.999 381.744 607.999 352V64C607.999 28.654 579.345 0 543.999 0H95.999C79.544 0 64.689 6.334 53.41 16.555L38.812 5.113C28.343 -3.059 13.312 -1.246 5.109 9.191C-3.063 19.629 -1.235 34.723 9.187 42.895L601.187 506.891C605.593 510.328 610.796 512 615.984 512C623.109 512 630.156 508.844 634.89 502.812C643.062 492.375 641.234 477.281 630.812 469.109ZM559.999 352C559.999 360.822 552.822 368 543.999 368H501.81L94.037 48.396C94.708 48.311 95.304 48 95.999 48H543.999C552.822 48 559.999 55.178 559.999 64V352ZM455.999 464H405.271L395.671 416H407.98L346.738 368H95.999C87.177 368 79.999 360.822 79.999 352V158.936L31.999 121.314V352C31.999 387.346 60.654 416 95.999 416H244.328L234.728 464H183.999C170.749 464 159.999 474.75 159.999 488S170.749 512 183.999 512H455.999C469.249 512 479.999 501.25 479.999 488S469.249 464 455.999 464ZM283.671 464L293.271 416H346.728L356.328 464H283.671Z" })
  }
));
DisplaySlashRegular.displayName = "DisplaySlashRegular";
var DisplaySlash_default = DisplaySlashRegular;
