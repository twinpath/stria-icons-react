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
var Dice_exports = {};
__export(Dice_exports, {
  default: () => Dice_default
});
module.exports = __toCommonJS(Dice_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiceRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576.015 192H473.814C477.365 202.111 479.562 212.734 479.562 223.766C479.562 249.406 469.578 273.516 451.437 291.656L320.015 423.064V448C320.015 483.346 348.669 512 384.015 512H576.015C611.361 512 640.015 483.346 640.015 448V256C640.015 220.652 611.361 192 576.015 192ZM480.015 376C466.761 376 456.015 365.254 456.015 352C456.015 338.744 466.761 328 480.015 328S504.015 338.744 504.015 352C504.015 365.254 493.269 376 480.015 376ZM447.558 223.763C447.558 207.384 441.309 191.005 428.812 178.508L269.033 18.73C256.537 6.234 240.158 -0.016 223.779 -0.016S191.021 6.234 178.523 18.73L18.746 178.508C6.249 191.005 0 207.384 0 223.763S6.249 256.521 18.746 269.018L178.523 428.797C191.021 441.293 207.4 447.541 223.779 447.541S256.537 441.293 269.033 428.797L428.812 269.018C441.309 256.521 447.558 240.143 447.558 223.763ZM394.871 235.076L235.091 394.855C231.015 398.932 226.253 399.541 223.779 399.541C221.302 399.541 216.541 398.932 212.464 394.855L52.687 235.076C48.609 231 48.001 226.238 48.001 223.764S48.609 216.527 52.687 212.449L212.46 52.674C216.542 48.594 221.304 47.984 223.779 47.984S231.013 48.594 235.091 52.672L394.871 212.449C398.949 216.527 399.558 221.289 399.558 223.764S398.949 231 394.871 235.076ZM223.779 301.588C210.988 301.588 199.78 311.878 199.78 325.588C199.78 339.343 211.03 349.588 223.779 349.588C237.508 349.588 247.779 338.364 247.779 325.588C247.779 312.792 237.485 301.588 223.779 301.588ZM223.779 199.766C210.018 199.766 199.78 211.015 199.78 223.764C199.78 236.607 210.123 247.764 223.779 247.764C237.492 247.764 247.779 236.559 247.779 223.764C247.779 210.973 237.49 199.766 223.779 199.766ZM121.957 199.766C108.2 199.766 97.956 211.014 97.956 223.764C97.956 236.558 108.25 247.764 121.957 247.764C135.663 247.764 145.956 236.566 145.956 223.764C145.956 210.973 135.667 199.766 121.957 199.766ZM325.603 199.766C311.847 199.766 301.603 211.014 301.603 223.764C301.603 236.558 311.897 247.764 325.603 247.764C339.317 247.764 349.604 236.559 349.604 223.764C349.604 210.973 339.314 199.766 325.603 199.766ZM223.779 97.941C210.988 97.941 199.78 108.232 199.78 121.941C199.78 135.697 211.03 145.941 223.779 145.941C237.508 145.941 247.779 134.717 247.779 121.941C247.779 109.146 237.485 97.941 223.779 97.941Z " })
  }
));
DiceRegular.displayName = "DiceRegular";
var Dice_default = DiceRegular;
