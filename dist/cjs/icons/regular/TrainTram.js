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
var TrainTram_exports = {};
__export(TrainTram_exports, {
  default: () => TrainTram_default
});
module.exports = __toCommonJS(TrainTram_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrainTramRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 376C269.256 376 280 365.254 280 352C280 338.744 269.256 328 256 328C242.746 328 232 338.744 232 352C232 365.254 242.746 376 256 376ZM128 376C141.256 376 152 365.254 152 352C152 338.744 141.256 328 128 328C114.746 328 104 338.744 104 352C104 365.254 114.746 376 128 376ZM324.758 418.82C341.561 401.531 352 378.014 352 352V192C352 138.98 309.02 96 256 96H216V48H282.75C305.5 48 326.906 56.875 343.031 72.984C347.719 77.656 353.875 80 360 80C366.156 80 372.281 77.656 376.969 72.969C386.344 63.594 386.344 48.391 376.969 39.016C351.781 13.859 318.312 0 282.75 0H101.25C65.688 0 32.219 13.859 7.031 39.016C-2.344 48.391 -2.344 63.594 7.031 72.969C16.375 82.328 31.563 82.344 40.969 72.984C57.094 56.875 78.5 48 101.25 48H168V96H128C74.98 96 32 138.98 32 192V352C32 378.014 42.439 401.531 59.242 418.82L7.031 471.031C-2.344 480.406 -2.344 495.594 7.031 504.969C11.719 509.656 17.844 512 24 512S36.281 509.656 40.969 504.969L101.965 443.973C110.297 446.332 118.912 448 128 448H256C265.088 448 273.703 446.332 282.035 443.973L343.031 504.969C347.719 509.656 353.844 512 360 512S372.281 509.656 376.969 504.969C386.344 495.594 386.344 480.406 376.969 471.031L324.758 418.82ZM304 352C304 378.467 282.467 400 256 400H128C101.533 400 80 378.467 80 352V288H304V352ZM304 240H80V192C80 165.533 101.533 144 128 144H256C282.467 144 304 165.533 304 192V240Z" })
  }
));
TrainTramRegular.displayName = "TrainTramRegular";
var TrainTram_default = TrainTramRegular;
