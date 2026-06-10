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
var ArrowsMaximize_exports = {};
__export(ArrowsMaximize_exports, {
  default: () => ArrowsMaximize_default
});
module.exports = __toCommonJS(ArrowsMaximize_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsMaximizeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 200V113.938L257.938 256L400 398.062V312C400 298.75 410.75 288 424 288S448 298.75 448 312V456C448 459.125 447.361 462.238 446.146 465.172C443.715 471.035 439.043 475.711 433.182 478.145C430.248 479.359 427.135 480 424 480H280C266.75 480 256 469.25 256 456S266.75 432 280 432H366.062L224 289.938L81.938 432H168C181.25 432 192 442.75 192 456S181.25 480 168 480H24C20.875 480 17.762 479.359 14.828 478.148C8.965 475.715 4.289 471.043 1.855 465.18C0.641 462.25 0 459.133 0 456V312C0 298.75 10.75 288 24 288S48 298.75 48 312V398.062L190.062 256L48 113.938V200C48 213.25 37.25 224 24 224S0 213.25 0 200V56C0 52.875 0.639 49.762 1.854 46.828C4.285 40.965 8.957 36.289 14.818 33.855C17.752 32.641 20.865 32 24 32H168C181.25 32 192 42.75 192 56S181.25 80 168 80H81.938L224 222.062L366.062 80H280C266.75 80 256 69.25 256 56S266.75 32 280 32H424C427.125 32 430.238 32.641 433.172 33.852C439.035 36.285 443.711 40.957 446.145 46.82C447.359 49.75 448 52.867 448 56V200C448 213.25 437.25 224 424 224S400 213.25 400 200Z" })
  }
));
ArrowsMaximizeRegular.displayName = "ArrowsMaximizeRegular";
var ArrowsMaximize_default = ArrowsMaximizeRegular;
