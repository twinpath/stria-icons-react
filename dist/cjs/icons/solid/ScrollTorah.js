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
var ScrollTorah_exports = {};
__export(ScrollTorah_exports, {
  default: () => ScrollTorah_default
});
module.exports = __toCommonJS(ScrollTorah_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScrollTorahSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 366.5L337.75 336.875H302.25L320 366.5ZM382.5 311.5H419.25L400.875 280.75L382.5 311.5ZM48 0C21.5 0 0 14.375 0 32V480C0 497.625 21.5 512 48 512S96 497.625 96 480V32C96 14.375 74.5 0 48 0ZM419.25 200.5H382.375L400.875 231.25L419.25 200.5ZM220.75 311.5H257.625L239.125 280.625L220.75 311.5ZM287.125 311.5H352.875L386.125 256L352.875 200.5H287.125L253.875 256L287.125 311.5ZM592 0C565.5 0 544 14.375 544 32V480C544 497.625 565.5 512 592 512S640 497.625 640 480V32C640 14.375 618.5 0 592 0ZM128 480H512V32H128V480ZM194.75 185.875C198.5 179.25 205.625 175.125 213.25 175.125H272.75L301.875 126.5C305.625 120 312.625 116.125 320 116.125C327.375 116 334.25 120 338 126.25L367.25 175.125H426.75C434.375 175.125 441.375 179.25 445.125 185.875S448.75 200.625 444.875 207.125L415.625 256L445 305C449 311.5 449 319.625 445.25 326.125C441.5 332.75 434.375 336.875 426.75 336.875H367.25L338.125 385.5C334.375 392 327.5 395.875 320 396C312.625 396 305.75 392.125 302 385.75L272.75 336.875H213.25C205.625 336.875 198.625 332.75 194.875 326.125S191.25 311.375 195.125 304.875L224.375 256L195 207C191.125 200.5 191 192.375 194.75 185.875ZM320 145.5L302.25 175.125H337.625L320 145.5ZM257.5 200.5H220.75L239.125 231.375L257.5 200.5Z" })
  }
));
ScrollTorahSolid.displayName = "ScrollTorahSolid";
var ScrollTorah_default = ScrollTorahSolid;
