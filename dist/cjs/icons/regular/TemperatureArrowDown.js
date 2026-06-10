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
var TemperatureArrowDown_exports = {};
__export(TemperatureArrowDown_exports, {
  default: () => TemperatureArrowDown_default
});
module.exports = __toCommonJS(TemperatureArrowDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TemperatureArrowDownRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 368C192 394.5 170.5 416 144 416S96 394.5 96 368C96 347.125 109.375 329.5 128 322.875V304C128 295.25 135.25 288 144 288S160 295.25 160 304V322.875C178.625 329.5 192 347.125 192 368ZM256 278.5C275.75 303.125 288 334 288 368C288 447.5 223.5 512 144 512S0 447.5 0 368C0 334 12.25 303.125 32 278.5V112C32 50.125 82.125 0 144 0S256 50.125 256 112V278.5ZM240 368C240 341 228.25 320.75 218.5 308.375L208 295.25V112C208 76.75 179.25 48 144 48S80 76.75 80 112V295.375L69.5 308.5C59.75 320.75 48 341 48 368C48 420.875 91.125 464 144 464S240 420.875 240 368ZM504.062 358.156C494.219 349.312 479.078 350.094 470.156 359.938L440 393.453V56C440 42.75 429.25 32 416 32S392 42.75 392 56V393.453L361.844 359.938C352.953 350.094 337.797 349.313 327.938 358.156C318.094 367.031 317.297 382.188 326.156 392.062L398.156 472.062C402.719 477.125 409.203 480 416 480S429.281 477.125 433.844 472.062L505.844 392.062C514.703 382.188 513.906 367.031 504.062 358.156Z" })
  }
));
TemperatureArrowDownRegular.displayName = "TemperatureArrowDownRegular";
var TemperatureArrowDown_default = TemperatureArrowDownRegular;
