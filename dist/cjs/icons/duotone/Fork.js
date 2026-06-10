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
var Fork_exports = {};
__export(Fork_exports, {
  default: () => Fork_default
});
module.exports = __toCommonJS(Fork_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ForkDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M509.644 124.981L448.843 232.248C428.671 263.367 395.979 283.464 359.065 287.373C337.956 289.597 317.321 285.793 298.405 277.703L234.295 213.597C226.207 194.682 222.404 174.051 224.626 152.947C228.536 116.031 248.633 83.339 280.65 62.665L387.028 2.376C394.629 -1.944 404.28 -0.352 409.538 6.982C414.846 13.933 414.17 23.728 407.994 29.903L296.817 141.076L310.351 154.609L434.005 53.448C440.952 47.757 451.063 48.26 457.408 54.607S464.26 71.061 458.566 78.008L357.399 201.656L370.935 215.189L482.114 104.017C488.291 97.841 498.086 97.163 505.035 102.471C512.298 107.659 513.962 117.38 509.644 124.981Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M298.405 277.703L82.973 503.751C78.059 508.908 71.272 511.9 64.122 511.998C57.018 512.095 50.135 509.298 45.1 504.263L7.739 466.9C2.704 461.869 -0.095 454.982 0.002 447.88C0.1 440.728 3.092 433.943 8.249 429.029L234.295 213.597L298.405 277.703Z" })
    ]
  }
));
ForkDuotone.displayName = "ForkDuotone";
var Fork_default = ForkDuotone;
