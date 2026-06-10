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
var Salad_exports = {};
__export(Salad_exports, {
  default: () => Salad_default
});
module.exports = __toCommonJS(Salad_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SaladDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416.154 96C418.779 96 421.281 96.625 423.906 96.75C406.275 76.875 380.891 64 352.131 64C343.627 64.125 335.125 65.375 326.996 67.75C309.365 26.625 268.85 0 224.082 0C179.316 0 138.801 26.625 121.17 67.75C113.041 65.375 104.539 64.125 96.035 64C43.016 64 0 107 0 160S43.016 256 96.035 256H169.324L84.637 171.312C78.387 165.062 78.387 154.937 84.637 148.688S101.012 142.438 107.262 148.688L207.949 249.375V112C207.949 103.156 215.105 96 223.949 96S239.949 103.156 239.949 112V256H292.607C289.732 245.625 288.232 234.875 288.107 224C288.232 153.375 345.502 96.125 416.154 96ZM415.949 128C362.93 128 319.949 170.98 319.949 224C319.949 235.281 322.254 245.945 325.828 256H506.07C509.645 245.945 511.949 235.281 511.949 224C511.949 170.98 468.969 128 415.949 128Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M495.804 288H16.195C7.06 288 -0.7 295.75 0.05 304.875C6.808 381.25 58.374 444.25 128.212 468.75V480C128.212 497.625 142.607 512 160.253 512H352.497C370.144 512 384.537 497.625 384.537 480V468.5C454.001 443.875 505.316 381 511.949 304.875C512.701 295.75 505.066 288 495.804 288ZM169.374 256H239.999V112C239.999 103.156 232.843 96 223.999 96S207.999 103.156 207.999 112V249.375L107.312 148.688C101.062 142.438 90.937 142.438 84.687 148.688S78.437 165.063 84.687 171.312L169.374 256Z" })
    ]
  }
));
SaladDuotone.displayName = "SaladDuotone";
var Salad_default = SaladDuotone;
