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
var BaseballBatBall_exports = {};
__export(BaseballBatBall_exports, {
  default: () => BaseballBatBall_default
});
module.exports = __toCommonJS(BaseballBatBall_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BaseballBatBallLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M627.281 60.172L603.654 27.674C581.027 -3.447 538.9 -8.197 510.023 12.801L307.759 159.662C262.13 192.783 220.379 230.904 183.377 273.4C154.375 306.771 110.871 352.016 53.119 394.012L31.492 409.76C31.242 409.385 20.24 392.262 5.99 403.512C-0.885 409.01 -2.01 419.135 3.49 426.01L67.494 506C72.744 512.5 82.746 514.25 89.996 508.5C90.496 508.125 102.871 499.002 90.121 483.004L108.246 469.754C174.252 421.885 230.629 397.262 263.382 383.264C315.259 361.266 364.638 333.393 410.265 300.271L612.529 153.537C642.281 131.789 648.906 90.043 627.281 60.172ZM70.119 458.006L51.494 434.758C80.369 413.885 123.248 384.139 176.502 328.52L208.754 372.889C140.623 405.762 99.246 436.758 70.119 458.006ZM593.652 127.664C346.636 306.771 350.511 310.146 233.755 361.391L195.002 308.271C279.882 213.281 281.507 218.154 528.773 38.799C543.65 28.049 565.777 30.049 577.777 46.422L601.279 78.92C612.779 94.543 609.279 116.291 593.652 127.664ZM496 352C451.875 352 416 387.877 416 432C416 476.125 451.875 512 496 512S576 476.125 576 432C576 387.877 540.125 352 496 352ZM496 480C469.498 480 448 458.5 448 432C448 405.502 469.498 384.002 496 384.002C522.5 384.002 544 405.502 544 432C544 458.5 522.5 480 496 480Z" })
  }
));
BaseballBatBallLight.displayName = "BaseballBatBallLight";
var BaseballBatBall_default = BaseballBatBallLight;
