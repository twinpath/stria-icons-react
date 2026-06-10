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
var LampFloor_exports = {};
__export(LampFloor_exports, {
  default: () => LampFloor_default
});
module.exports = __toCommonJS(LampFloor_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LampFloorLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M381.395 179.375L312.762 19.375C307.762 7.625 296.26 0 283.385 0H100.615C87.74 0 76.238 7.625 71.238 19.375L2.606 179.375C-1.644 189.25 -0.644 200.625 5.233 209.625C11.233 218.625 21.233 224 31.985 224H176V480H80C71.156 480 64 487.156 64 496S71.156 512 80 512H304C312.844 512 320 504.844 320 496S312.844 480 304 480H208V224H352.016C362.768 224 372.768 218.625 378.77 209.625C384.645 200.625 385.645 189.25 381.395 179.375ZM32.016 191.99L100.615 32H283.358L352.016 192L32.016 191.99Z" })
  }
));
LampFloorLight.displayName = "LampFloorLight";
var LampFloor_default = LampFloorLight;
