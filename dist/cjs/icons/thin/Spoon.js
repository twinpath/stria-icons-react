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
var Spoon_exports = {};
__export(Spoon_exports, {
  default: () => Spoon_default
});
module.exports = __toCommonJS(Spoon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SpoonThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M484.702 27.281C466.905 9.438 441.436 0.031 411.048 0H410.969C362.376 0 306.235 24.75 267.923 63.062C267.907 63.094 266.485 64.5 266.469 64.531C230.938 100.875 222.688 156.594 244.798 207.906L9.362 429.031C3.518 434.594 0.112 442.375 0.003 450.437C-0.107 458.469 3.112 466.375 8.8 472.031L39.971 503.219C45.581 508.812 53.268 512 61.143 512H61.596C69.628 511.875 77.407 508.469 83.016 502.594L304.126 267.219C355.454 289.312 411.157 281.062 447.468 245.531C447.483 245.5 448.921 244.125 448.936 244.094C487.28 205.75 512.03 149.562 511.999 100.937C511.983 70.531 502.53 45.062 484.702 27.281ZM436.282 234.094C396.548 272.906 342.751 268 305.641 250.344C302.485 248.844 298.766 249.531 296.376 252.094L71.409 491.594C65.072 498.233 55.684 496.271 51.268 491.906L20.096 460.719C13.875 454.498 15.355 445.416 20.346 440.656L259.938 215.656C262.469 213.25 263.173 209.531 261.673 206.375C244.032 169.281 239.032 115.469 279.235 74.375C314.704 38.906 366.407 16 410.969 16H411.032C437.094 16 458.655 23.812 473.389 38.594C488.171 53.344 495.983 74.906 495.999 100.938C496.03 145.531 473.108 197.281 436.282 234.094Z" })
  }
));
SpoonThin.displayName = "SpoonThin";
var Spoon_default = SpoonThin;
