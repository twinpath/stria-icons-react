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
var PersonSkiJumping_exports = {};
__export(PersonSkiJumping_exports, {
  default: () => PersonSkiJumping_default
});
module.exports = __toCommonJS(PersonSkiJumping_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonSkiJumpingLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128.008 144H281.38L188.069 237.328C182.006 243.359 176.944 250.359 173.507 257.297L114.165 360C109.727 367.641 112.352 377.438 120.008 381.859C122.539 383.312 125.289 384 128.008 384C133.508 384 138.883 381.141 141.851 376L201.631 272.484C204.006 267.797 207.038 263.594 210.663 259.969L331.316 139.312C335.879 134.734 337.254 127.859 334.785 121.875C332.316 115.891 326.473 112 320.004 112H128.008C119.164 112 112.008 119.156 112.008 128S119.164 144 128.008 144ZM408.002 112C438.877 112 464.001 86.875 464.001 56S438.877 0 408.002 0S352.003 25.125 352.003 56S377.128 112 408.002 112ZM408.002 32C421.221 32 432.002 42.766 432.002 56S421.221 80 408.002 80S384.003 69.234 384.003 56S394.784 32 408.002 32ZM499.938 176.5C491.219 174.25 482.657 179.516 480.501 188.062C471.782 222.297 448.564 251.484 416.783 268.125L8.604 481.828C0.761 485.922 -2.271 495.594 1.823 503.422C4.698 508.875 10.26 512 16.01 512C18.51 512 21.073 511.422 23.416 510.172L431.595 296.469C471.438 275.625 500.563 238.984 511.5 195.937C513.687 187.375 508.5 178.672 499.938 176.5Z" })
  }
));
PersonSkiJumpingLight.displayName = "PersonSkiJumpingLight";
var PersonSkiJumping_default = PersonSkiJumpingLight;
