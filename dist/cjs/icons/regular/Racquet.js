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
var Racquet_exports = {};
__export(Racquet_exports, {
  default: () => Racquet_default
});
module.exports = __toCommonJS(Racquet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RacquetRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M616.298 61.273C562.047 -17.212 434.419 -19.711 333.042 50.4C275.291 90.392 237.415 145.756 224.665 200.245C214.665 242.862 194.539 281.73 168.039 316.098C167.664 315.848 152.914 307.974 137.288 318.847L13.661 405.58C-0.84 415.703 -4.34 435.699 5.786 450.196L39.536 498.312C50.037 513.309 70.037 516.059 84.162 506.185L207.79 419.702C217.665 412.829 221.79 401.581 220.79 390.458C251.166 381.21 282.541 376.211 314.292 376.461C342.917 376.711 349.167 380.21 372.543 380.585C422.294 381.085 477.17 364.463 526.671 330.22C629.673 258.859 669.799 138.508 616.298 61.273ZM207.915 343.967C217.79 331.095 226.29 317.473 234.29 303.6C242.79 320.347 246.915 324.096 255.291 333.219C239.415 335.719 223.665 339.218 207.915 343.967ZM499.295 290.728C459.67 318.222 414.669 333.094 372.793 332.595C233.29 331.095 237.04 175.25 360.293 89.892C416.919 50.775 466.295 48.025 486.92 48.025C496.92 48.025 496.92 48.025 486.92 48.025C625.173 49.525 624.173 204.37 499.295 290.728Z" })
  }
));
RacquetRegular.displayName = "RacquetRegular";
var Racquet_default = RacquetRegular;
