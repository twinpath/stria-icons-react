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
var Voicemail_exports = {};
__export(Voicemail_exports, {
  default: () => Voicemail_default
});
module.exports = __toCommonJS(Voicemail_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VoicemailLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 240C640 160.5 575.5 96 496 96S352 160.5 352 240C352 285.5 373.5 325.625 406.5 352H233.5C266.5 325.625 288 285.5 288 240C288 160.5 223.5 96 144 96S0 160.5 0 240C0 314 56.125 374.375 128 382.375V384H512V382.375C583.875 374.375 640 314 640 240ZM32 240C32 178.125 82.125 128 144 128S256 178.125 256 240S205.875 352 144 352C82.125 351.875 32.125 301.875 32 240ZM496 352C434.125 352 384 301.875 384 240S434.125 128 496 128S608 178.125 608 240C607.875 301.875 557.875 351.875 496 352Z" })
  }
));
VoicemailLight.displayName = "VoicemailLight";
var Voicemail_default = VoicemailLight;
