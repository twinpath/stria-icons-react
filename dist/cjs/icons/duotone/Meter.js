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
var Meter_exports = {};
__export(Meter_exports, {
  default: () => Meter_default
});
module.exports = __toCommonJS(Meter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MeterDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM192 208C192 216.836 184.838 224 176 224H144C135.164 224 128 216.836 128 208V144C128 135.162 135.164 128 144 128H176C184.838 128 192 135.162 192 144V208ZM288 208C288 216.836 280.836 224 272 224H240C231.164 224 224 216.836 224 208V144C224 135.162 231.164 128 240 128H272C280.836 128 288 135.162 288 144V208ZM384 208C384 216.836 376.836 224 368 224H336C327.164 224 320 216.836 320 208V144C320 135.162 327.164 128 336 128H368C376.836 128 384 135.162 384 144V208Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 128H240C231.164 128 224 135.162 224 144V208C224 216.836 231.164 224 240 224H272C280.836 224 288 216.836 288 208V144C288 135.162 280.836 128 272 128ZM176 128H144C135.164 128 128 135.162 128 144V208C128 216.836 135.164 224 144 224H176C184.838 224 192 216.836 192 208V144C192 135.162 184.838 128 176 128ZM368 128H336C327.164 128 320 135.162 320 144V208C320 216.836 327.164 224 336 224H368C376.836 224 384 216.836 384 208V144C384 135.162 376.836 128 368 128Z" })
    ]
  }
));
MeterDuotone.displayName = "MeterDuotone";
var Meter_default = MeterDuotone;
