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
var SensorTriangleExclamation_exports = {};
__export(SensorTriangleExclamation_exports, {
  default: () => SensorTriangleExclamation_default
});
module.exports = __toCommonJS(SensorTriangleExclamation_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SensorTriangleExclamationDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M383.989 32H63.998C28.624 32 0 60.625 0 96V416C0 451.375 28.624 480 63.998 480H242.493C239.993 476.875 237.243 474 235.243 470.5C220.244 444.75 220.119 413 235.243 387.375L375.989 143.25C390.739 117.375 418.238 101.5 447.987 101.625V96C447.987 60.625 419.363 32 383.989 32ZM95.997 272C95.997 280.875 88.872 288 79.998 288S63.998 280.875 63.998 272V112C63.998 103.125 71.123 96 79.998 96S95.997 103.125 95.997 112V272ZM159.995 272C159.995 280.875 152.871 288 143.996 288S127.996 280.875 127.996 272V112C127.996 103.125 135.121 96 143.996 96S159.995 103.125 159.995 112V272ZM223.994 272C223.994 280.875 216.869 288 207.994 288S191.995 280.875 191.995 272V112C191.995 103.125 199.119 96 207.994 96S223.994 103.125 223.994 112V272Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M80 96C71.125 96 64 103.125 64 112V272C64 280.875 71.125 288 80 288S96 280.875 96 272V112C96 103.125 88.875 96 80 96ZM143.998 96C135.123 96 127.998 103.125 127.998 112V272C127.998 280.875 135.123 288 143.998 288S159.998 280.875 159.998 272V112C159.998 103.125 152.873 96 143.998 96ZM633.109 403.375L492.234 159.25C472.609 125.125 423.359 125.125 403.734 159.25L262.859 403.375C243.234 437.375 267.859 480 307.109 480H588.859C628.109 480 652.734 437.375 633.109 403.375ZM447.984 432C434.734 432 423.984 421.25 423.984 408S434.734 384 447.984 384S471.984 394.75 471.984 408S461.234 432 447.984 432ZM472.002 336C472.002 349.25 461.252 360 448.002 360S424.002 349.25 424.002 336V256C424.002 242.75 434.752 232 448.002 232S472.002 242.75 472.002 256V336ZM207.996 96C199.121 96 191.996 103.125 191.996 112V272C191.996 280.875 199.121 288 207.996 288S223.996 280.875 223.996 272V112C223.996 103.125 216.871 96 207.996 96Z" })
    ]
  }
));
SensorTriangleExclamationDuotone.displayName = "SensorTriangleExclamationDuotone";
var SensorTriangleExclamation_default = SensorTriangleExclamationDuotone;
