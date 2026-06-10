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
var DownLeft_exports = {};
__export(DownLeft_exports, {
  default: () => DownLeft_default
});
module.exports = __toCommonJS(DownLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DownLeftThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M364.781 128.474L319.526 83.22C307.029 70.722 286.769 70.722 274.271 83.22L138.506 218.984L70.624 151.102C61.476 141.954 47.709 139.214 35.755 144.163C31.791 145.807 28.287 148.184 25.372 151.099C19.484 156.987 16 165.07 16 173.729V400.003C16 408.842 19.58 416.841 25.369 422.631S39.158 432 47.997 432H274.271C282.932 432.001 291.014 428.516 296.902 422.628C299.817 419.713 302.195 416.207 303.837 412.245C308.787 400.291 306.047 386.524 296.899 377.376L229.016 309.494L364.781 173.729C377.278 161.232 377.277 140.97 364.781 128.474ZM353.467 139.788C359.706 146.026 359.706 156.177 353.467 162.416L206.389 309.494L285.585 388.69C290.177 393.282 291.537 400.125 289.054 406.124C288.246 408.076 287.078 409.824 285.588 411.314C282.566 414.336 278.548 416 274.273 416H47.998C43.722 416 39.703 414.338 36.683 411.317C33.664 408.298 32.001 404.279 32.001 400.003V173.729C32.001 169.453 33.664 165.435 36.686 162.413C38.176 160.923 39.926 159.756 41.884 158.944C47.875 156.463 54.72 157.825 59.31 162.416L138.506 241.611L285.585 94.533C291.823 88.295 301.974 88.295 308.212 94.533L353.467 139.788Z" })
  }
));
DownLeftThin.displayName = "DownLeftThin";
var DownLeft_default = DownLeftThin;
