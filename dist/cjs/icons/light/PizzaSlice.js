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
var PizzaSlice_exports = {};
__export(PizzaSlice_exports, {
  default: () => PizzaSlice_default
});
module.exports = __toCommonJS(PizzaSlice_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PizzaSliceLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M159.253 0.141C158.255 0.047 157.253 0 156.249 0H155.999C147.519 0 138.261 3.74 132.261 9.732C128.251 13.738 125.376 18.736 123.931 24.217L110.681 74.467C108.304 83.486 109.978 93.094 115.271 100.775C120.562 108.459 128.94 113.449 138.216 114.443C282.952 129.947 379.78 225.055 397.231 368.855C398.353 378.107 403.452 386.408 411.196 391.592C416.517 395.154 422.724 397.002 428.999 397.002C431.856 397.002 434.728 396.619 437.538 395.84L488.538 381.715C503.694 377.518 513.554 362.928 511.798 347.301C491.46 166.43 339.899 17.184 159.253 0.141ZM428.997 365.002C409.747 206.375 301.497 99.75 141.624 82.625L154.874 32.375C155.124 32.125 155.624 32 155.999 32H156.249C321.872 47.625 461.247 184.125 479.997 350.877L428.997 365.002ZM191.997 248C191.997 234.744 181.251 224 167.997 224S143.997 234.744 143.997 248C143.997 261.254 154.743 272 167.997 272S191.997 261.254 191.997 248ZM303.997 328C303.997 314.744 293.251 304 279.997 304S255.997 314.744 255.997 328C255.997 341.254 266.743 352 279.997 352S303.997 341.254 303.997 328ZM95.997 392C95.997 405.254 106.743 416 119.997 416S143.997 405.254 143.997 392C143.997 378.744 133.251 368 119.997 368S95.997 378.744 95.997 392ZM363.778 384.562L38.81 473.203L127.435 148.203C129.747 139.688 124.747 130.891 116.216 128.562C107.622 126.25 98.872 131.281 96.56 139.797L0.56 491.797C-0.94 497.328 0.622 503.25 4.685 507.312C7.716 510.359 11.81 512 15.997 512C17.403 512 18.81 511.812 20.216 511.438L372.216 415.438C380.747 413.109 385.747 404.313 383.435 395.797S372.403 382.25 363.778 384.562Z" })
  }
));
PizzaSliceLight.displayName = "PizzaSliceLight";
var PizzaSlice_default = PizzaSliceLight;
