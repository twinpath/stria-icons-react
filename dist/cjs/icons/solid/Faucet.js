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
var Faucet_exports = {};
__export(Faucet_exports, {
  default: () => Faucet_default
});
module.exports = __toCommonJS(Faucet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaucetSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 256H313.375C297.625 242.5 277.875 232.875 256 228V180.5L224 177L192 180.5V228C170.125 233 150.375 242.625 134.625 256H16C7.125 256 0 263.125 0 272V368C0 376.875 7.125 384 16 384H108.75C129.375 421.75 173 448 224 448S318.625 421.75 339.25 384H352C369.625 384 384 398.375 384 416S398.375 448 416 448H480C497.625 448 512 433.625 512 416C512 327.625 440.375 256 352 256ZM81.625 159.875L224 144.875L366.375 159.875C375.875 160.875 384 153.125 384 143.125V112.875C384 102.875 375.875 95.125 366.375 96.125L256 107.75V80C256 71.125 248.875 64 240 64H208C199.125 64 192 71.125 192 80V107.75L81.625 96.125C72.125 95.125 64 102.875 64 112.875V143.125C64 153.125 72.125 160.875 81.625 159.875Z" })
  }
));
FaucetSolid.displayName = "FaucetSolid";
var Faucet_default = FaucetSolid;
