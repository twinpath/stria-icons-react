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
var __exports = {};
__export(__exports, {
  default: () => __default
});
module.exports = __toCommonJS(__exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Icon3Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 336C320 415.406 255.409 480 176.005 480H114.602C63.666 480 18.606 447.531 2.481 399.188C-5.909 374.063 7.668 346.875 32.824 338.469C57.995 330.094 85.15 343.656 93.54 368.813C96.571 377.906 105.04 384 114.602 384H176.005C202.473 384 224.004 362.469 224.004 336S202.473 288 176.005 288H96.009C76.588 288 59.088 276.312 51.667 258.375C44.23 240.438 48.339 219.781 62.073 206.062L140.132 128H48.011C21.496 128 0.013 106.5 0.013 80S21.496 32 48.011 32H256.002C275.423 32 292.923 43.688 300.344 61.625C307.781 79.562 303.672 100.219 289.938 113.937L208.254 195.625C272.174 210.312 320 267.688 320 336Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
Icon3Duotone.displayName = "Icon3Duotone";
var __default = Icon3Duotone;
