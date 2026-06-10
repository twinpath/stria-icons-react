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
var BoltSlash_exports = {};
__export(BoltSlash_exports, {
  default: () => BoltSlash_default
});
module.exports = __toCommonJS(BoltSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoltSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M415.956 32.004C415.96 32.002 415.972 32 415.989 32C415.989 32 415.999 31.986 416.001 31.986L337.771 188.459L363.421 208.709L444.62 46.297C451.464 32.609 447.651 16.016 435.558 6.656C429.784 2.209 422.88 0 415.989 0C408.448 0 400.929 2.646 394.935 7.906L259.353 126.549L284.89 146.711L415.956 32.004ZM423.308 255.988L479.984 255.986L453.101 279.512L478.648 299.68L501.056 280.07C511.085 271.289 514.648 257.211 509.96 244.742C505.275 232.256 493.337 223.99 479.993 223.99H382.775L423.308 255.988ZM216.72 255.994L160.019 255.996L186.911 232.461L161.366 212.293L138.946 231.912C128.917 240.695 125.355 254.773 130.042 267.242C134.73 279.727 146.665 287.992 160.009 287.992H257.251L216.72 255.994ZM633.925 483.436L25.921 3.42C18.984 -2.033 8.921 -0.83 3.437 6.061C-2.032 12.998 -0.845 23.061 6.077 28.545L614.081 508.562C617.019 510.875 620.519 512 623.987 512C628.722 512 633.409 509.906 636.566 505.922C642.034 498.984 640.847 488.92 633.925 483.436ZM224.001 479.996L302.237 323.51L276.589 303.26L195.382 465.686C188.538 479.373 192.351 495.967 204.444 505.328C210.226 509.781 217.13 512 224.005 512C231.536 512 239.067 509.344 245.067 504.078L380.661 385.424L355.116 365.258L224.001 479.996Z" })
  }
));
BoltSlashLight.displayName = "BoltSlashLight";
var BoltSlash_default = BoltSlashLight;
