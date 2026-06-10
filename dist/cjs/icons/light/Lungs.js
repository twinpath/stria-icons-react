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
var Lungs_exports = {};
__export(Lungs_exports, {
  default: () => Lungs_default
});
module.exports = __toCommonJS(Lungs_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LungsLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640.001 419.336C640.176 470.217 596.965 511.041 546.092 511.957C524.385 512.348 521.954 510.348 455.126 492.5C412.876 481.125 383.876 445 383.876 403.875V343.83C383.876 331.064 398.092 323.439 408.727 330.502C413.192 333.467 415.876 338.471 415.876 343.832V403.875C415.876 430.25 435.376 454 463.376 461.5C527.876 478.75 529.501 480 541.876 480C578.376 480 608.001 453 608.001 419.75C608.001 412.5 607.001 405.375 605.126 398.375C584.376 320.25 551.251 245.5 507.001 176.375C479.251 132.5 474.876 128 453.876 128S415.876 143.125 415.876 161.75L415.995 266.117L504.594 322.5C512.047 327.25 514.251 337.125 509.501 344.594C506.454 349.375 501.266 352 495.985 352C493.047 352 490.079 351.188 487.407 349.5L320.001 242.969L152.594 349.5C145.079 354.25 135.235 352 130.501 344.594C125.751 337.125 127.954 327.25 135.407 322.5L224.022 266.107L224.126 161.75C224.126 143.125 207.126 128 186.126 128S160.751 132.5 133.001 176.375C88.751 245.5 55.626 320.25 34.876 398.375C33.001 405.375 32.001 412.625 32.001 419.75C32.001 453 61.626 480 98.126 480C110.501 480 112.126 478.75 176.626 461.5C204.626 454 224.126 430.25 224.126 403.875V343.832C224.126 338.471 226.809 333.467 231.274 330.502C241.909 323.439 256.126 331.064 256.126 343.83V403.875C256.126 445 227.126 481.125 184.876 492.5C118.047 510.348 115.616 512.348 93.909 511.957C43.036 511.041 -0.175 470.217 0.001 419.336C0.036 409.477 1.288 399.74 3.876 390.125C25.626 308.875 60.001 231 106 159.125C128.126 124.5 142 96 186.126 96C224.327 96 255.323 124.766 256.001 160.586V245.758L304.001 215.213V16C304.001 7.156 311.157 0 320.001 0S336.001 7.156 336.001 16V215.213L384.001 245.758V160.586C384.678 124.766 415.674 96 453.876 96C497.876 96 511.876 124.5 534 159.125C580.001 231 614.376 308.875 636.126 390.125C638.713 399.74 639.965 409.477 640.001 419.336Z" })
  }
));
LungsLight.displayName = "LungsLight";
var Lungs_default = LungsLight;
