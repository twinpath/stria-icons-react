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
const MicrophoneDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 216V256C368 344.906 301.719 418.469 216 430.219V464H256C274.195 464 288.842 479.186 287.962 497.572C287.569 505.784 280.222 512 272 512H112C103.778 512 96.431 505.785 96.038 497.572C95.158 479.186 109.807 464 128 464H168V429.844C79.969 417.719 16 337.812 16 248.156V216C16 202.745 26.745 192 40 192H40C53.255 192 64 202.745 64 216V250.934C64 317.147 117.664 379.57 183.746 383.738C258.034 388.423 320 329.329 320 256V216C320 202.745 330.745 192 344 192H344C357.255 192 368 202.745 368 216Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 352C245.031 352 288 309.031 288 256V96C288 42.969 245.031 0 192 0S96 42.969 96 96V256C96 309.031 138.969 352 192 352Z" })
    ]
  }
));
MicrophoneDuotone.displayName = "MicrophoneDuotone";
var Microphone_default = MicrophoneDuotone;
