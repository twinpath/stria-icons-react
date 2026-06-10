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
var FlagUsa_exports = {};
__export(FlagUsa_exports, {
  default: () => FlagUsa_default
});
module.exports = __toCommonJS(FlagUsa_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FlagUsaLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M472.5 0C465.5 0 458.25 1.5 451.25 4.625C400.75 27.25 363.5 34.875 332.25 34.875C266.125 34.875 227.75 0.375 151.375 0.375C119.75 0.375 81.25 6.875 32 23.625V16C32 7.25 24.75 0 16 0S0 7.25 0 16V496C0 504.8 7.2 512 16 512H16C24.8 512 32 504.8 32 496V403.625C76.25 387.75 113.625 381.625 146.5 381.625C227.75 381.625 284.25 416 365.625 416C400.875 416 440.75 409.5 489.25 391C503.25 385.625 512.125 373.125 512.125 359.75V33.375C512 13 493.375 0 472.5 0ZM256 54.25C314.25 71.75 369.875 76.125 464.25 33.75C473.75 29.625 480 33.25 480 39.375V91.75C381.25 133.5 326.75 120.125 256 107.875V54.25ZM256 140.25C290.5 146.375 320.25 152.25 354.75 152.25C389.999 152.25 430.625 145.25 480 126.001V187.625C376.5 221 317.25 206.001 256 191.625V140.25ZM32 57.25C77.999 40.5 117.25 32.375 151.375 32.375C179.125 32.375 201.875 37.875 224 44.5V184.5C172.875 174.125 115.375 169.75 32 194.875V57.25ZM32 228.25C132.625 195.875 191.125 209.125 252.375 223.625C309.875 237.25 372.625 253.625 480.125 221.25V275.75C379.625 308.125 321.125 294.875 259.75 280.375C198.75 266.001 135.25 251.75 32 282.875V228.25ZM365.5 384C289.875 384 232.5 349.625 146.375 349.625C109.75 349.625 72 356.125 31.875 369.375V316.25C132.5 283.875 190.875 297.125 252.25 311.625C311 325.375 372.75 341.5 479.875 309.25V359.5C479.125 362.001 421.125 384 365.5 384ZM96 64C87.25 64 80 71.25 80 80S87.25 96 96 96S112 88.75 112 80S104.75 64 96 64ZM168 96C176.75 96 184 88.75 184 80S176.75 64 168 64S152 71.25 152 80S159.25 96 168 96ZM96 120C87.25 120 80 127.25 80 136S87.25 152 96 152S112 144.75 112 136S104.75 120 96 120ZM168 152C176.75 152 184 144.75 184 136S176.75 120 168 120S152 127.25 152 136S159.25 152 168 152Z" })
  }
));
FlagUsaLight.displayName = "FlagUsaLight";
var FlagUsa_default = FlagUsaLight;
