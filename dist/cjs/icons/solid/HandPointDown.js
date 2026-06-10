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
var HandPointDown_exports = {};
__export(HandPointDown_exports, {
  default: () => HandPointDown_default
});
module.exports = __toCommonJS(HandPointDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandPointDownSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 256V320C256 337.672 270.312 352 288 352S320 337.672 320 320V256C320 238.328 305.688 224 288 224S256 238.328 256 256ZM200 272H160V352C160 369.672 174.312 384 192 384S224 369.672 224 352V267.59C216.459 270.271 208.459 272 200 272ZM72 272C69.26 272 66.66 271.492 64 271.193V480C64 497.672 78.312 512 96 512S128 497.672 128 480V272H72ZM416 288V224C416 206.328 401.688 192 384 192S352 206.328 352 224V288C352 305.672 366.312 320 384 320S416 305.672 416 288ZM384 160C395.717 160 406.553 163.381 416 168.879V136C416 60.889 355.111 0 280 0L191.281 0C162.516 0 134.489 9.107 111.219 26.016L74.812 52.469C48 72.031 32 103.469 32 136.594V200C32 222.091 49.909 240 72 240H200C222.094 240 240 222.094 240 200C240 171.266 213.28 160 197.724 160L128 160C119.163 160 112 152.837 112 144V144C112 135.163 119.163 128 128 128H200C237.869 128 268.594 157.354 271.447 194.51C276.762 193.08 282.234 192 288 192C301.275 192 313.602 196.047 323.826 202.969C332.559 178.014 356.066 160 384 160Z" })
  }
));
HandPointDownSolid.displayName = "HandPointDownSolid";
var HandPointDown_default = HandPointDownSolid;
