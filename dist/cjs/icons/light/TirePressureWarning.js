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
var TirePressureWarning_exports = {};
__export(TirePressureWarning_exports, {
  default: () => TirePressureWarning_default
});
module.exports = __toCommonJS(TirePressureWarning_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TirePressureWarningLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 344C269.256 344 280 333.254 280 320S269.256 296 256 296C242.746 296 232 306.746 232 320S242.746 344 256 344ZM256 256C264.844 256 272 248.844 272 240V112C272 103.156 264.844 96 256 96S240 103.156 240 112V240C240 248.844 247.156 256 256 256ZM496 271.094C496 223.406 484.758 185.217 458.062 125.25C443.5 92.531 432 66.688 432 16C432 7.156 424.844 0 416 0S400 7.156 400 16C400 73.484 413.344 103.5 428.812 138.266C453.201 193.051 464 227.77 464 271.094C464 332.078 439.812 390.359 397.406 432H114.594C72.188 390.359 48 332.078 48 271.094C48 227.979 58.646 193.396 83.188 138.266C98.656 103.5 112 73.484 112 16C112 7.156 104.844 0 96 0S80 7.156 80 16C80 66.688 68.5 92.531 53.938 125.25C27.329 185.023 16 223.25 16 271.094C16 342.879 45.492 411.443 96.939 459.35C96.477 460.848 96 462.35 96 464V496C96 504.836 103.164 512 112 512S128 504.836 128 496V464H192V496C192 504.836 199.164 512 208 512S224 504.836 224 496V464H288V496C288 504.836 295.164 512 304 512S320 504.836 320 496V464H384V496C384 504.836 391.164 512 400 512S416 504.836 416 496V464C416 462.35 415.523 460.848 415.061 459.35C466.508 411.443 496 342.879 496 271.094Z" })
  }
));
TirePressureWarningLight.displayName = "TirePressureWarningLight";
var TirePressureWarning_default = TirePressureWarningLight;
