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
var TemperatureList_exports = {};
__export(TemperatureList_exports, {
  default: () => TemperatureList_default
});
module.exports = __toCommonJS(TemperatureList_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TemperatureListLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 338.75V144C160 135.125 152.875 128 144 128S128.002 135.125 128.002 144V338.75C109.377 345.375 96.002 363.125 96.002 384C96.002 410.5 117.502 432 144 432C170.5 432 192 410.5 192 384C192 363.125 178.625 345.375 160 338.75ZM240 96C240 43 197 0 144 0C91.002 0 48.002 43 48.002 96V299.375C28.252 321.75 16.127 351.125 16.002 383.375C15.627 453.625 72.752 511.5 143.125 512H144C214.75 512 272 454.75 272 384C272 351.5 259.875 321.875 240 299.375V96ZM144 480H143.375C90.627 479.625 47.752 436.25 48.002 383.5C48.252 344 70.502 322.125 80.002 311.5V96C80.002 60.75 108.752 32 144 32C179.25 32 208 60.75 208 96V311.5C217.125 321.875 240 344.125 240 384C240 436.875 196.875 480 144 480ZM336 64H496C504.801 64 512 56.799 512 48C512 39.199 504.801 32 496 32H336C327.201 32 320 39.199 320 48C320 56.799 327.201 64 336 64ZM496 160H336C327.201 160 320 167.199 320 176C320 184.799 327.201 192 336 192H496C504.801 192 512 184.799 512 176C512 167.199 504.801 160 496 160ZM496 288H368C359.201 288 352 295.199 352 304C352 312.799 359.201 320 368 320H496C504.801 320 512 312.799 512 304C512 295.199 504.801 288 496 288Z" })
  }
));
TemperatureListLight.displayName = "TemperatureListLight";
var TemperatureList_default = TemperatureListLight;
