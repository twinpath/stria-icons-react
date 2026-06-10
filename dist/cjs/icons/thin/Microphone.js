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
const MicrophoneThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 352C245.031 352 288 309.031 288 256V96C288 42.969 245.031 0 192 0S96 42.969 96 96V256C96 309.031 138.969 352 192 352ZM112 96C112 51.889 147.887 16 192 16S272 51.889 272 96V256C272 300.111 236.113 336 192 336S112 300.111 112 256V96ZM352 256V200C352 195.594 348.406 192 344 192S336 195.594 336 200V256C336 335.406 271.406 400 192 400S48 335.406 48 256V200C48 195.594 44.406 192 40 192S32 195.594 32 200V256C32 341.479 99.562 410.924 184 415.191V496H72C67.594 496 64 499.594 64 504S67.594 512 72 512H312C316.406 512 320 508.406 320 504S316.406 496 312 496H200V415.191C284.438 410.924 352 341.479 352 256Z" })
  }
));
MicrophoneThin.displayName = "MicrophoneThin";
var Microphone_default = MicrophoneThin;
