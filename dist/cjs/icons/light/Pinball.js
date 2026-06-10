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
var Pinball_exports = {};
__export(Pinball_exports, {
  default: () => Pinball_default
});
module.exports = __toCommonJS(Pinball_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PinballLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M145.404 211.609C137.492 205.309 128.148 200.021 118.109 196.631C108.814 193.492 99.375 191.998 90.099 191.998C52.181 191.998 16.906 216.92 4.484 256.172C-10.977 305.023 14.83 357.574 62.123 373.543L372.416 478.322C375.765 479.445 379.24 479.998 382.703 479.998C392.623 479.998 402.453 475.457 409.002 466.754C420.269 451.775 417.652 430.195 403.152 418.555L145.404 211.609ZM382.654 448.004L72.361 343.225C41.543 332.818 24.779 298.098 34.994 265.826C42.91 240.809 65.056 223.998 90.099 223.998C96.095 223.998 102.076 224.99 107.869 226.947C114.037 229.031 120.121 232.383 125.371 236.563L383.119 443.508C384.052 444.258 384.379 446.254 382.654 448.004ZM96.166 263.834C82.912 263.834 72.168 274.578 72.168 287.832C72.168 301.088 82.912 311.832 96.166 311.832C109.422 311.832 120.166 301.088 120.166 287.832C120.166 274.578 109.422 263.834 96.166 263.834ZM352 32C298.98 32 256 74.98 256 128S298.98 224 352 224S448 181.02 448 128S405.019 32 352 32ZM352 192C316.711 192 288 163.289 288 128S316.711 64 352 64S416 92.711 416 128S387.289 192 352 192Z" })
  }
));
PinballLight.displayName = "PinballLight";
var Pinball_default = PinballLight;
