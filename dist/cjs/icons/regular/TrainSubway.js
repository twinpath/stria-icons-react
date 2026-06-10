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
var TrainSubway_exports = {};
__export(TrainSubway_exports, {
  default: () => TrainSubway_default
});
module.exports = __toCommonJS(TrainSubway_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrainSubwayRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 0H96C42.98 0 0 42.98 0 96V352C0 394.846 28.256 430.705 67.008 443.055L39.031 471.031C29.656 480.406 29.656 495.594 39.031 504.969C43.719 509.656 49.859 512 56 512S68.281 509.656 72.969 504.969L129.938 448H318.062L375.031 504.969C379.719 509.656 385.859 512 392 512S404.281 509.656 408.969 504.969C418.344 495.594 418.344 480.406 408.969 471.031L380.992 443.055C419.744 430.705 448 394.846 448 352V96C448 42.98 405.02 0 352 0ZM48 96C48 69.533 69.533 48 96 48H199.998V208H48V96ZM400 352C400 378.467 378.467 400 352 400H96C69.533 400 48 378.467 48 352V256H400V352ZM400 208H247.998V48H352C378.467 48 400 69.533 400 96V208ZM128 352C145.674 352 160 337.672 160 320C160 302.326 145.674 288 128 288S96 302.326 96 320C96 337.672 110.326 352 128 352ZM320 352C337.674 352 352 337.672 352 320C352 302.326 337.674 288 320 288S288 302.326 288 320C288 337.672 302.326 352 320 352Z" })
  }
));
TrainSubwayRegular.displayName = "TrainSubwayRegular";
var TrainSubway_default = TrainSubwayRegular;
