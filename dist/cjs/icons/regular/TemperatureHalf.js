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
var TemperatureHalf_exports = {};
__export(TemperatureHalf_exports, {
  default: () => TemperatureHalf_default
});
module.exports = __toCommonJS(TemperatureHalf_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TemperatureHalfRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 112C272 50.125 221.875 0 160 0S48 50.125 48 112V278.5C28.25 303.125 16 334 16 368C16 447.5 80.5 512 160 512S304 447.5 304 368C304 334 291.75 303.125 272 278.5V112ZM160 464C107.125 464 64 420.875 64 368C64 341 75.75 320.75 85.5 308.5L96 295.375V112C96 76.75 124.75 48 160 48S224 76.75 224 112V295.25L234.5 308.375C244.25 320.75 256 341 256 368C256 420.875 212.875 464 160 464ZM176 322.875V208C176 199.25 168.75 192 160 192S144 199.25 144 208V322.875C125.375 329.5 112 347.125 112 368C112 394.5 133.5 416 160 416S208 394.5 208 368C208 347.125 194.625 329.5 176 322.875Z" })
  }
));
TemperatureHalfRegular.displayName = "TemperatureHalfRegular";
var TemperatureHalf_default = TemperatureHalfRegular;
