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
var Airplay_exports = {};
__export(Airplay_exports, {
  default: () => Airplay_default
});
module.exports = __toCommonJS(Airplay_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AirplayLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 32H80C35.875 32 0 67.875 0 112V336C0 380.125 35.875 416 80 416C88.844 416 96 408.844 96 400S88.844 384 80 384C53.531 384 32 362.469 32 336V112C32 85.531 53.531 64 80 64H496C522.469 64 544 85.531 544 112V336C544 362.469 522.469 384 496 384C487.156 384 480 391.156 480 400S487.156 416 496 416C540.125 416 576 380.125 576 336V112C576 67.875 540.125 32 496 32ZM310.617 297.375C298.121 284.875 277.754 284.875 265.258 297.375L137.305 425.375C117.312 445.5 131.682 480 160.047 480H415.953C444.318 480 458.687 445.5 438.57 425.375L310.617 297.375ZM160.047 448L288 320L415.953 448H160.047Z" })
  }
));
AirplayLight.displayName = "AirplayLight";
var Airplay_default = AirplayLight;
