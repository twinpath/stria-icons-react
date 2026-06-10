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
var Asterisk_exports = {};
__export(Asterisk_exports, {
  default: () => Asterisk_default
});
module.exports = __toCommonJS(Asterisk_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AsteriskLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M413.778 368.141C410.778 373.188 405.45 376 399.982 376C397.216 376 394.419 375.281 391.857 373.781L239.999 284.047V464C239.999 472.844 232.843 480 223.999 480S207.999 472.844 207.999 464V284.047L56.144 373.781C53.581 375.281 50.784 376 48.019 376C42.55 376 37.222 373.188 34.222 368.141C29.737 360.531 32.253 350.719 39.862 346.219L192.538 256L39.862 165.781C32.253 161.281 29.737 151.469 34.222 143.859C38.753 136.281 48.534 133.797 56.144 138.219L207.999 227.953V48C207.999 39.156 215.155 32 223.999 32S239.999 39.156 239.999 48V227.953L391.857 138.219C399.497 133.797 409.278 136.281 413.778 143.859C418.263 151.469 415.747 161.281 408.138 165.781L255.462 256L408.138 346.219C415.747 350.719 418.263 360.531 413.778 368.141Z" })
  }
));
AsteriskLight.displayName = "AsteriskLight";
var Asterisk_default = AsteriskLight;
