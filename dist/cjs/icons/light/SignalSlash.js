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
var SignalSlash_exports = {};
__export(SignalSlash_exports, {
  default: () => SignalSlash_default
});
module.exports = __toCommonJS(SignalSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SignalSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M463.999 112C463.999 103.156 456.843 96 447.999 96S431.999 103.156 431.999 112V262.863L463.999 288.125V112ZM63.999 384C55.155 384 47.999 391.156 47.999 400V496C47.999 504.844 55.155 512 63.999 512S79.999 504.844 79.999 496V400C79.999 391.156 72.843 384 63.999 384ZM591.999 16C591.999 7.156 584.843 0 575.999 0S559.999 7.156 559.999 16V363.922L591.999 389.184V16ZM431.999 496C431.999 504.844 439.155 512 447.999 512S463.999 504.844 463.999 496V451.234L431.999 425.969V496ZM191.999 288C183.155 288 175.999 295.156 175.999 304V496C175.999 504.844 183.155 512 191.999 512S207.999 504.844 207.999 496V304C207.999 295.156 200.843 288 191.999 288ZM303.999 496C303.999 504.844 311.155 512 319.999 512S335.999 504.844 335.999 496V350.18L303.999 324.914V496ZM633.921 483.438L25.921 3.422C18.984 -2.031 8.921 -0.828 3.437 6.062C-2.032 13 -0.845 23.062 6.077 28.547L614.077 508.562C617.015 510.875 620.515 512 623.984 512C628.718 512 633.405 509.906 636.562 505.922C642.03 498.984 640.843 488.922 633.921 483.438Z" })
  }
));
SignalSlashLight.displayName = "SignalSlashLight";
var SignalSlash_default = SignalSlashLight;
