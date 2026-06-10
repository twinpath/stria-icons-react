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
var ChartRadar_exports = {};
__export(ChartRadar_exports, {
  default: () => ChartRadar_default
});
module.exports = __toCommonJS(ChartRadar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartRadarLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 272C319.348 272 318.742 272.168 318.096 272.193L287.561 195.855C297.551 187.049 304 174.312 304 160C304 133.562 282.438 112 256 112S208 133.562 208 160C208 169.811 210.992 178.936 216.078 186.551L174.197 242.393C169.68 240.979 164.973 240 160 240C133.563 240 112 261.562 112 288S133.563 336 160 336C177.451 336 192.625 326.508 201.027 312.518L272.695 326.852C276.063 350.037 295.908 368 320 368C346.438 368 368 346.438 368 320S346.438 272 320 272ZM160 304C151.178 304 144 296.822 144 288S151.178 272 160 272S176 279.178 176 288S168.822 304 160 304ZM256 144C264.822 144 272 151.178 272 160S264.822 176 256 176S240 168.822 240 160S247.178 144 256 144ZM278.977 295.475L207.305 281.15C206.262 273.965 203.791 267.242 199.92 261.445L241.799 205.604C246.318 207.02 251.025 208 256 208C256.648 208 257.252 207.834 257.895 207.809L288.438 284.145C284.723 287.42 281.541 291.207 278.977 295.475ZM320 336C311.178 336 304 328.822 304 320S311.178 304 320 304S336 311.178 336 320S328.822 336 320 336ZM505.824 233.365L400.437 54.166C392.322 40.516 377.502 32 361.387 32H150.613C134.498 32 119.678 40.516 111.563 54.166L6.176 233.365C-2.059 247.365 -2.059 264.633 6.176 278.633L111.563 457.832C119.678 471.482 134.498 480 150.613 480H361.387C377.502 480 392.322 471.482 400.437 457.832L505.824 278.633C514.059 264.633 514.059 247.365 505.824 233.365ZM478.24 262.41L372.932 441.479C370.541 445.502 366.117 448 361.387 448H150.613C145.885 448 141.461 445.502 139.146 441.609L33.76 262.41C31.398 258.395 31.398 253.602 33.76 249.586L139.068 70.518C141.459 66.498 145.883 64 150.613 64H361.387C366.117 64 370.541 66.498 372.854 70.387L478.242 249.588C480.604 253.602 480.604 258.395 478.24 262.41Z" })
  }
));
ChartRadarLight.displayName = "ChartRadarLight";
var ChartRadar_default = ChartRadarLight;
