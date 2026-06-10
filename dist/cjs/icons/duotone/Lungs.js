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
var Lungs_exports = {};
__export(Lungs_exports, {
  default: () => Lungs_default
});
module.exports = __toCommonJS(Lungs_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LungsDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M186 96.001C142 96.001 128 124.501 105.875 159.127C59.875 231.002 25.5 308.878 3.875 390.129C1.25 399.879 0 409.754 0 419.754C0 481.005 62.5 525.255 125.25 508.38L184.75 492.505C226.875 481.13 256 445.005 256 403.879V279.515L154.625 347.097C147.273 352 137.34 350.011 132.437 342.66L123.562 329.347C118.662 321.995 120.648 312.062 128 307.159L256 221.823V161.752C256 125.376 224.625 96.001 186 96.001ZM636.125 390.129C614.5 308.878 580.125 231.002 534.125 159.127C512 124.501 498 96.001 454 96.001C415.375 96.001 384 125.376 384 161.752V221.823L512 307.159C519.354 312.062 521.34 321.995 516.438 329.347L507.562 342.66C502.662 350.011 492.729 352 485.375 347.097L384 279.515V403.879C384 445.005 413.125 481.13 455.25 492.505L514.75 508.38C577.5 525.255 640 481.005 640 419.754C640 409.754 638.75 399.879 636.125 390.129Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M516.563 329.347L507.688 342.66C502.788 350.011 492.854 352 485.501 347.097L337.876 248.68C327.127 241.514 313.124 241.514 302.375 248.68L154.751 347.097C147.399 352 137.465 350.011 132.563 342.66L123.688 329.347C118.788 321.995 120.774 312.062 128.126 307.159L281.876 204.658C290.778 198.723 296.126 188.732 296.126 178.032V16C296.126 7.164 303.29 0 312.126 0H328.126C336.964 0 344.126 7.164 344.126 16V178.032C344.126 188.732 349.473 198.723 358.375 204.658L512.126 307.159C519.479 312.062 521.465 321.995 516.563 329.347Z" })
    ]
  }
));
LungsDuotone.displayName = "LungsDuotone";
var Lungs_default = LungsDuotone;
