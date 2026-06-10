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
var EnvelopeDot_exports = {};
__export(EnvelopeDot_exports, {
  default: () => EnvelopeDot_default
});
module.exports = __toCommonJS(EnvelopeDot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EnvelopeDotThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M527.111 160C523.277 160 519.557 161.305 516.562 163.701L311.5 327.75C298.188 338.406 277.812 338.406 264.5 327.75L48 154.551V128C48 101.49 69.49 80 96 80H408C412.418 80 416 76.418 416 72S412.418 64 408 64H96C60.654 64 32 92.652 32 128V384C32 419.346 60.654 448 96 448H480C515.346 448 544 419.346 544 384V176.889C544 167.561 536.439 160 527.111 160ZM528 384C528 410.467 506.467 432 480 432H96C69.533 432 48 410.467 48 384V175.051L254.5 340.25C264 347.828 275.875 352 288 352S312 347.828 321.5 340.25L528 175.051V384ZM512 0C476.654 0 448 28.654 448 64S476.654 128 512 128S576 99.346 576 64S547.346 0 512 0ZM512 112C485.533 112 464 90.467 464 64S485.533 16 512 16S560 37.533 560 64S538.467 112 512 112Z" })
  }
));
EnvelopeDotThin.displayName = "EnvelopeDotThin";
var EnvelopeDot_default = EnvelopeDotThin;
