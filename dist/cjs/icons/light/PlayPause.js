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
var PlayPause_exports = {};
__export(PlayPause_exports, {
  default: () => PlayPause_default
});
module.exports = __toCommonJS(PlayPause_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlayPauseLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M52.506 71.406C46.361 66.307 39.217 64 32.217 64C15.713 64 0 76.809 0 96.027V415.973C0 435.189 15.715 448 32.217 448C39.219 448 46.361 445.695 52.506 440.594L244.529 280.621C259.781 267.748 259.781 244.252 244.529 231.379L52.506 71.406ZM32 415.973L31.779 96.176C31.838 96.123 31.961 96.064 32.07 96.029L224.047 256.035L32 415.973ZM368 64C359.164 64 352 71.164 352 80V432C352 440.836 359.164 448 368 448S384 440.836 384 432V80C384 71.164 376.836 64 368 64ZM496 64C487.164 64 480 71.164 480 80V432C480 440.836 487.164 448 496 448S512 440.836 512 432V80C512 71.164 504.836 64 496 64Z" })
  }
));
PlayPauseLight.displayName = "PlayPauseLight";
var PlayPause_default = PlayPauseLight;
