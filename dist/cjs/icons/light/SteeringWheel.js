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
var SteeringWheel_exports = {};
__export(SteeringWheel_exports, {
  default: () => SteeringWheel_default
});
module.exports = __toCommonJS(SteeringWheel_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SteeringWheelLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 48C370.691 48 464 141.309 464 256H366.438C358.93 219.5 326.598 192 287.969 192H224.031C185.402 192 153.07 219.5 145.562 256H48C48 141.309 141.309 48 256 48ZM256 342C253.82 342 251.883 341.25 250.309 339.75L182.859 272.25C178.258 267.625 176.926 260.625 179.348 254.5C186.25 236.625 203.688 224 224.031 224H287.969C308.313 224 325.75 236.625 332.652 254.5C335.074 260.625 333.742 267.625 329.141 272.25L261.691 339.75C260.117 341.25 258.18 342 256 342ZM50.723 288H153.312L240.016 374.625V463.189C143.488 455.797 65.391 382.342 50.723 288ZM271.984 463.189V374.625L358.688 288H461.277C446.609 382.342 368.512 455.797 271.984 463.189Z" })
  }
));
SteeringWheelLight.displayName = "SteeringWheelLight";
var SteeringWheel_default = SteeringWheelLight;
