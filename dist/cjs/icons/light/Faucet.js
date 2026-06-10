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
const FaucetLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 416.189C511.979 433.76 497.568 448 480 448H416C398.549 448 384.283 433.906 384.004 416.52C383.721 398.877 371.184 384 353.539 384H334.248C312.074 422.1 271.258 448 224 448S135.928 422.1 113.754 384H16C7.164 384 0 376.836 0 368C0 359.162 7.164 352 16 352H133.898C147.152 389.166 182.34 416 224 416S300.848 389.166 314.102 352H352C387.289 352 416 380.711 416 416H480C480 345.42 422.58 288 352 288H314.102C300.848 250.834 265.66 224 224 224S147.152 250.834 133.898 288H16C7.164 288 0 280.836 0 272C0 263.162 7.164 256 16 256H113.754C133.379 222.281 167.631 198.203 208 193.092V144H80C71.156 144 64 136.844 64 128S71.156 112 80 112H208V80C208 71.156 215.156 64 224 64S240 71.156 240 80V112H368C376.844 112 384 119.156 384 128S376.844 144 368 144H240V193.092C280.371 198.203 314.623 222.281 334.248 256H352C440.438 256 512.104 327.729 512 416.189Z" })
  }
));
FaucetLight.displayName = "FaucetLight";
var Faucet_default = FaucetLight;
