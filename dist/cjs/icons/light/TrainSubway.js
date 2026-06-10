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
var TrainSubway_exports = {};
__export(TrainSubway_exports, {
  default: () => TrainSubway_default
});
module.exports = __toCommonJS(TrainSubway_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrainSubwayLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 352V96C448 42.98 405.02 0 352 0H96C42.98 0 0 42.98 0 96V352C0 398.02 32.42 436.383 75.641 445.734L36.687 484.688C30.437 490.938 30.437 501.063 36.687 507.312C39.812 510.438 43.906 512 48 512S56.188 510.438 59.312 507.312L118.625 448H329.375L388.687 507.312C391.812 510.438 395.906 512 400 512S408.188 510.438 411.312 507.312C417.562 501.062 417.562 490.937 411.312 484.688L372.359 445.734C415.58 436.383 448 398.02 448 352ZM240 32H352C387.291 32 416 60.711 416 96V224H240V32ZM32 96C32 60.711 60.711 32 96 32H208V224H32V96ZM352 416H96C60.711 416 32 387.289 32 352V256H416V352C416 387.289 387.291 416 352 416ZM112 312C98.746 312 88 322.744 88 336C88 349.254 98.746 360 112 360C125.256 360 136 349.254 136 336C136 322.744 125.256 312 112 312ZM336 312C322.746 312 312 322.744 312 336C312 349.254 322.746 360 336 360C349.256 360 360 349.254 360 336C360 322.744 349.256 312 336 312Z" })
  }
));
TrainSubwayLight.displayName = "TrainSubwayLight";
var TrainSubway_default = TrainSubwayLight;
