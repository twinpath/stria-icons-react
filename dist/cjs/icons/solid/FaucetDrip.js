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
var FaucetDrip_exports = {};
__export(FaucetDrip_exports, {
  default: () => FaucetDrip_default
});
module.exports = __toCommonJS(FaucetDrip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaucetDripSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 480C416 497.625 430.375 512 448 512S480 497.625 480 480S448 416 448 416S416 462.375 416 480ZM352 192H313.375C297.625 178.5 277.875 168.875 256 164V116.5L224 113L192 116.5V164C170.125 169 150.375 178.625 134.625 192H16C7.125 192 0 199.125 0 208V304C0 312.875 7.125 320 16 320H108.75C129.375 357.75 173 384 224 384S318.625 357.75 339.25 320H352C369.625 320 384 334.375 384 352S398.375 384 416 384H480C497.625 384 512 369.625 512 352C512 263.625 440.375 192 352 192ZM81.625 95.875L224 80.875L366.375 95.875C375.875 96.875 384 89.125 384 79.125V48.875C384 38.875 375.875 31.125 366.375 32.125L256 43.75V16C256 7.125 248.875 0 240 0H208C199.125 0 192 7.125 192 16V43.75L81.625 32.125C72.125 31.125 64 38.875 64 48.875V79.125C64 89.125 72.125 96.875 81.625 95.875Z" })
  }
));
FaucetDripSolid.displayName = "FaucetDripSolid";
var FaucetDrip_default = FaucetDripSolid;
