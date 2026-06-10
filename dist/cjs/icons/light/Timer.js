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
var Timer_exports = {};
__export(Timer_exports, {
  default: () => Timer_default
});
module.exports = __toCommonJS(Timer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TimerLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C247.156 16 240 23.156 240 32V112C240 120.844 247.156 128 256 128S272 120.844 272 112V48.594C379.25 56.812 464 146.688 464 256C464 370.688 370.688 464 256 464S48 370.688 48 256C48 207.156 65.281 159.656 96.656 122.281C102.344 115.531 101.469 105.438 94.688 99.75S77.844 94.938 72.156 101.719C35.938 144.844 16 199.625 16 256C16 388.344 123.656 496 256 496S496 388.344 496 256S388.344 16 256 16ZM244.688 267.312C247.812 270.438 251.906 272 256 272S264.188 270.438 267.312 267.312C273.562 261.062 273.562 250.937 267.312 244.688L187.312 164.688C181.062 158.438 170.937 158.438 164.688 164.688S158.438 181.063 164.688 187.312L244.688 267.312Z" })
  }
));
TimerLight.displayName = "TimerLight";
var Timer_default = TimerLight;
