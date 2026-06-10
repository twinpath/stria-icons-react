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
var CircleMicrophoneLines_exports = {};
__export(CircleMicrophoneLines_exports, {
  default: () => CircleMicrophoneLines_default
});
module.exports = __toCommonJS(CircleMicrophoneLines_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleMicrophoneLinesRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 304C282.516 304 304 282.516 304 256V224H280C275.582 224 272 220.418 272 216S275.582 208 280 208H304V176H280C275.582 176 272 172.418 272 168S275.582 160 280 160H304V144C304 117.484 282.516 96 256 96S208 117.484 208 144V256C208 282.516 229.484 304 256 304ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448ZM360 232C346.75 232 336 242.75 336 256C336 300.109 300.109 336 256 336S176 300.109 176 256C176 242.75 165.25 232 152 232S128 242.75 128 256C128 318.359 172.877 370.287 232 381.572V392C232 405.25 242.75 416 256 416S280 405.25 280 392V381.572C339.123 370.287 384 318.359 384 256C384 242.75 373.25 232 360 232Z" })
  }
));
CircleMicrophoneLinesRegular.displayName = "CircleMicrophoneLinesRegular";
var CircleMicrophoneLines_default = CircleMicrophoneLinesRegular;
