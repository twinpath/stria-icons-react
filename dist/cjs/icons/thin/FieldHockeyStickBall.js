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
var FieldHockeyStickBall_exports = {};
__export(FieldHockeyStickBall_exports, {
  default: () => FieldHockeyStickBall_default
});
module.exports = __toCommonJS(FieldHockeyStickBall_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FieldHockeyStickBallThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432.054 352C387.858 352 351.999 387.832 351.999 432C351.999 476.166 387.858 512 432.054 512S511.999 476.166 511.999 432C511.999 387.832 476.249 352 432.054 352ZM432.054 496C396.733 496 367.999 467.289 367.999 432S396.733 368 432.054 368C467.312 368 495.999 396.711 495.999 432S467.312 496 432.054 496ZM497.733 23.08L471.116 5.355C465.683 1.734 459.538 0 453.46 0C443.237 0 433.202 4.908 427.023 14.006L166.605 397.406C152.892 416.971 129.344 419.95 115.237 411.898C99.737 403.164 95.105 387.611 95.944 375.975C96.767 364.777 100.101 360.832 112.452 343.115C127.624 321.355 122.327 291.434 100.616 276.227C69.104 254.115 40.911 277.97 33.882 288.088L24.085 302.148C10.273 321.949 2.058 345.127 0.358 369.121C-3.395 421.363 22.55 469.809 68.148 495.584C87.796 506.686 109.499 512 131.237 512C198.779 512 235.936 465.636 245.64 451.75L506.456 67.77C516.464 53.037 512.546 32.947 497.733 23.08ZM232.526 442.586C224.048 454.718 190.78 496 131.237 496C111.722 496 92.628 491.039 76.023 481.656C35.89 458.969 13.011 416.287 16.319 370.252C17.815 349.133 25.038 328.748 37.214 311.295L47.023 297.217C57.033 282.808 76.877 279.112 91.437 289.332C105.89 299.455 109.429 319.477 99.327 333.965C80.501 360.97 80.767 364.21 79.987 374.822C78.792 391.35 85.362 413.43 107.304 425.793C136.263 442.325 167.241 424.378 179.839 406.396L364.171 135.016L417.374 170.447L232.526 442.586ZM493.222 58.779L426.362 157.213L373.163 121.779L440.257 22.996C442.32 19.96 451.539 11.551 462.249 18.672L488.862 36.396C496.283 41.338 498.235 51.392 493.222 58.779Z" })
  }
));
FieldHockeyStickBallThin.displayName = "FieldHockeyStickBallThin";
var FieldHockeyStickBall_default = FieldHockeyStickBallThin;
