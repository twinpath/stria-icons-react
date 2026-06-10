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
var Garage_exports = {};
__export(Garage_exports, {
  default: () => Garage_default
});
module.exports = __toCommonJS(Garage_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GarageLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 416H272C263.125 416 256 423.125 256 432S263.125 448 272 448H368C376.875 448 384 440.875 384 432S376.875 416 368 416ZM610.625 118.375L338.625 3.75C326.75 -1.25 313.25 -1.25 301.375 3.75L29.375 118.375C11.625 125.75 0 143.25 0 162.5V496C0 504.801 7.201 512 16 512C24.801 512 32 504.801 32 496V162.5C32 156.125 35.875 150.25 41.75 147.75L313.75 33.125C317.75 31.5 322.25 31.5 326.25 33.125L598.25 147.75C604.125 150.25 608 156.125 608 162.5V496C608 504.801 615.201 512 624 512C632.801 512 640 504.801 640 496V162.5C640 143.25 628.375 125.75 610.625 118.375ZM512 192H128C110.4 192 96 206.4 96 224V496C96 504.801 103.201 512 112 512C120.801 512 128 504.801 128 496V352H512V496C512 504.801 519.201 512 528 512C536.801 512 544 504.801 544 496V224C544 206.4 529.6 192 512 192ZM512 320H128V224H512V320Z" })
  }
));
GarageLight.displayName = "GarageLight";
var Garage_default = GarageLight;
