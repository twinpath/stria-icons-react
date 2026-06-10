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
var PesoSign_exports = {};
__export(PesoSign_exports, {
  default: () => PesoSign_default
});
module.exports = __toCommonJS(PesoSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PesoSignDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 248C0 261.25 10.75 272 24 272H32V224H24C10.75 224 0 234.75 0 248ZM360 192C373.25 192 384 181.25 384 168S373.25 144 360 144H339.773C345.703 159.117 349.666 175.195 351.189 192H360ZM0 168C0 181.25 10.75 192 24 192H32V144H24C10.75 144 0 154.75 0 168ZM360 224H351.189C349.666 240.805 345.703 256.883 339.773 272H360C373.25 272 384 261.25 384 248S373.25 224 360 224ZM112 144V192H270.383C267.279 173.674 258.975 157.244 247.031 144H112ZM112 272H247.031C258.975 258.756 267.279 242.326 270.383 224H112V272Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 32H72C49.906 32 32 49.906 32 72V440C32 462.094 49.906 480 72 480S112 462.094 112 440V384H176C273.047 384 352 305.031 352 208S273.047 32 176 32ZM176 304H112V112H176C228.938 112 272 155.062 272 208S228.938 304 176 304Z" })
    ]
  }
));
PesoSignDuotone.displayName = "PesoSignDuotone";
var PesoSign_default = PesoSignDuotone;
