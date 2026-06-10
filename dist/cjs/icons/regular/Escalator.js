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
var Escalator_exports = {};
__export(Escalator_exports, {
  default: () => Escalator_default
});
module.exports = __toCommonJS(Escalator_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EscalatorRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 96H448C424.75 96 402.281 104.438 384.781 119.75L303.855 190.564C303.074 155.896 274.854 128 240 128C204.654 128 176 156.652 176 192V302.443L155.938 320H96C42.969 320 0 362.984 0 416S42.969 512 96 512H192C215.25 512 237.719 503.562 255.219 488.25L484.062 288H544C597.031 288 640 245.016 640 192S597.031 96 544 96ZM544 240H466.027L452.453 251.877L223.611 452.125C214.859 459.783 203.635 464 192 464H96C69.533 464 48 442.467 48 416S69.533 368 96 368H173.975L187.547 356.123L416.391 155.873C425.141 148.217 436.367 144 448 144H544C570.467 144 592 165.533 592 192S570.467 240 544 240ZM240 96C266.525 95.9 288 74.455 288 48C288 21.543 266.525 0.1 240 0C213.475 0.1 192 21.543 192 48C192 74.455 213.475 95.9 240 96Z" })
  }
));
EscalatorRegular.displayName = "EscalatorRegular";
var Escalator_default = EscalatorRegular;
