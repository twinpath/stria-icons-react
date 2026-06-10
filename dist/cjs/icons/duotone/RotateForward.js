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
var RotateForward_exports = {};
__export(RotateForward_exports, {
  default: () => RotateForward_default
});
module.exports = __toCommonJS(RotateForward_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RotateForwardDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M345.724 144.23C320.258 123.715 289.182 112 256.011 112C217.54 112 181.382 126.969 154.194 154.187C126.974 181.375 112.004 217.531 112.004 256S126.974 330.625 154.194 357.812C181.382 385.031 217.54 400 256.011 400C282.596 400 308.076 392.851 330.255 379.453C348.585 368.379 372.275 372.259 387.419 387.402L387.419 387.402C409.128 409.111 405.672 446.153 379.363 461.977C342.483 484.158 300.152 496 256.011 496C191.914 496 131.63 471.031 86.316 425.687C40.97 380.375 16 320.094 16 256S40.97 131.625 86.316 86.312C131.63 40.969 191.914 16 256.011 16C314.853 16 370.332 37.262 414.117 75.795L345.724 144.23Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M495.986 59.035V204.93C495.986 215.52 487.402 224.103 476.812 224.103H331.065C307.005 224.103 294.952 195.02 311.959 178.002L449.916 39.961C466.913 22.955 495.986 34.99 495.986 59.035Z" })
    ]
  }
));
RotateForwardDuotone.displayName = "RotateForwardDuotone";
var RotateForward_default = RotateForwardDuotone;
