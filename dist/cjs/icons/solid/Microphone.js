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
const MicrophoneSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 352C245.031 352 288 309.031 288 256V96C288 42.969 245.031 0 192 0S96 42.969 96 96V256C96 309.031 138.969 352 192 352ZM344 192H344C330.745 192 320 202.745 320 216V256C320 329.329 258.034 388.425 183.746 383.738C117.664 379.569 64 317.144 64 250.93V216C64 202.745 53.255 192 40 192H40C26.745 192 16 202.745 16 216V248.156C16 337.812 79.969 417.719 168 429.844V464H128C109.807 464 95.158 479.183 96.038 497.571C96.431 505.784 103.778 512 112 512H272C280.222 512 287.57 505.784 287.962 497.571C288.841 479.183 274.195 464 256 464H216V430.219C301.719 418.469 368 344.906 368 256V216C368 202.745 357.255 192 344 192Z" })
  }
));
MicrophoneSolid.displayName = "MicrophoneSolid";
var Microphone_default = MicrophoneSolid;
