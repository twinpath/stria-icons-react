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
var Microphone_exports = {};
__export(Microphone_exports, {
  default: () => Microphone_default
});
module.exports = __toCommonJS(Microphone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MicrophoneLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 192C327.199 192 320 199.199 320 208V256C320 329.5 257.75 388.625 183.25 383.75C115.25 379.125 64 319.625 64 251.5V208C64 199.199 56.801 192 48 192S32 199.199 32 208V250.375C32 333.75 93.625 406.5 176 414.75V480H112C103.199 480 96 487.199 96 496C96 504.799 103.199 512 112 512H272C280.801 512 288 504.799 288 496C288 487.199 280.801 480 272 480H208V415C288.75 406.875 352 338.75 352 256V208C352 199.199 344.801 192 336 192ZM192 352C245 352 288 309 288 256V96C288 43 245 0 192 0S96 43 96 96V256C96 309 139 352 192 352ZM128 96C128 60.75 156.75 32 192 32S256 60.75 256 96V256C256 291.25 227.25 320 192 320S128 291.25 128 256V96Z" })
  }
));
MicrophoneLight.displayName = "MicrophoneLight";
var Microphone_default = MicrophoneLight;
