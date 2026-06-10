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
var ArrowTrendDown_exports = {};
__export(ArrowTrendDown_exports, {
  default: () => ArrowTrendDown_default
});
module.exports = __toCommonJS(ArrowTrendDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowTrendDownRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 216V392C576 405.25 565.25 416 552 416H376C362.75 416 352 405.25 352 392S362.75 368 376 368H494.062L320 193.938L208.969 304.969C204.281 309.656 198.141 312 192 312S179.719 309.656 175.031 304.969L7.031 136.969C2.344 132.281 0 126.141 0 120C0 106.291 11.21 96 24 96C30.141 96 36.281 98.344 40.969 103.031L192 254.062L303.031 143.031C307.719 138.344 313.859 136 320 136S332.281 138.344 336.969 143.031L528 334.062V216C528 202.75 538.75 192 552 192S576 202.75 576 216Z" })
  }
));
ArrowTrendDownRegular.displayName = "ArrowTrendDownRegular";
var ArrowTrendDown_default = ArrowTrendDownRegular;
