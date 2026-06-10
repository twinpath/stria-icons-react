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
var FutbolBall_exports = {};
__export(FutbolBall_exports, {
  default: () => FutbolBall_default
});
module.exports = __toCommonJS(FutbolBall_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FutbolBallLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM272 146.91V112.07L336.646 64.281C366.389 76.844 392.504 96.234 413.314 120.328L387.932 196.332L355.006 207.027L272 146.91ZM333.189 230.723L303.902 321.062H208.365L178.838 230.715L256 174.816L333.189 230.723ZM256 84.113L213.205 52.473C227.025 49.57 241.33 48 256 48S284.975 49.57 298.795 52.473L256 84.113ZM240 112.07V146.91L156.994 207.027L124.068 196.332L98.686 120.328C119.496 96.234 145.611 76.844 175.354 64.281L240 112.07ZM92.508 202.895L49.225 233.797C52.35 204.492 61.689 177.07 75.736 152.668L92.508 202.895ZM114.174 226.73L147.383 237.52L179.121 334.609L158.469 363.031L78.383 363.684C62.08 336.898 51.615 306.242 48.879 273.352L114.174 226.73ZM154.965 395.078L170.938 445.613C144.637 433.766 121.314 416.598 102.166 395.5L154.965 395.078ZM184.336 381.832L205.244 353.062H306.756L327.664 381.832L303.498 458.316C288.215 461.906 272.363 464 256 464S223.785 461.906 208.502 458.316L184.336 381.832ZM353.531 363.031L333.063 334.867L364.629 237.516L397.826 226.73L463.121 273.352C460.385 306.242 449.92 336.898 433.617 363.684L353.531 363.031ZM409.834 395.5C390.686 416.598 367.363 433.766 341.062 445.613L357.035 395.078L409.834 395.5ZM419.492 202.895L436.264 152.668C450.311 177.07 459.65 204.492 462.775 233.797L419.492 202.895Z" })
  }
));
FutbolBallLight.displayName = "FutbolBallLight";
var FutbolBall_default = FutbolBallLight;
