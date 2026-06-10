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
var Pear_exports = {};
__export(Pear_exports, {
  default: () => Pear_default
});
module.exports = __toCommonJS(Pear_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PearLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 16C512 6.861 504.527 0 496 0C491.906 0 487.813 1.562 484.688 4.688L429.207 60.168C405.51 41.193 377 32 348.248 32C311.49 32 274.455 46.75 246.944 74.352C217.846 103.543 180.914 123.223 141.219 134.102C108.154 143.165 0 192.152 0 319.536C0 426.24 86.963 512 192.246 512C229.931 512 342.307 492.221 376.408 373.152C412.31 247.76 479.97 262.22 479.97 165.495C479.97 136.304 470.559 107.109 451.746 82.879L507.313 27.312C510.438 24.188 512 20.094 512 16ZM447.999 165.364C447.999 244.847 383.01 233.84 345.645 364.342C332.523 410.166 284.141 480 192.246 480C122.47 480 32.023 423.973 32.023 319.535C32.023 244.673 83.062 183.221 149.678 164.963C271.094 131.686 266.722 64 348.248 64C369.824 64 389.68 70.758 406.295 83.08L388.688 100.687C385.563 103.812 384 107.906 384 112C384 121.139 391.473 128 400 128C404.094 128 408.188 126.438 411.313 123.312L428.643 105.982C436.016 116.283 447.999 136.687 447.999 165.364Z" })
  }
));
PearLight.displayName = "PearLight";
var Pear_default = PearLight;
