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
var Coin_exports = {};
__export(Coin_exports, {
  default: () => Coin_default
});
module.exports = __toCommonJS(Coin_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CoinLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 64C114.625 64 0 128.5 0 208V320C0 390.75 114.625 448 256 448S512 390.75 512 320V208C512 128.5 397.375 64 256 64ZM64 366.625C43.75 352 32 335.625 32 320V277.625C41.75 287.25 52.375 295.75 64 303V366.625ZM144 401.875C127.5 397.625 111.5 392 96 385V320.25C111.5 327.25 127.625 332.875 144 337.25V401.875ZM240 415.625C218.5 414.875 197.125 412.75 176 409V344.75C197.125 348.5 218.5 350.625 240 351.25V415.625ZM336 409C314.875 412.75 293.5 415 272 415.625V351.25C293.5 350.625 314.875 348.5 336 344.75V409ZM416 385C400.5 392 384.5 397.625 368 401.875V337.25C384.375 332.875 400.5 327.25 416 320.25V385ZM480 320C480 335.625 468.25 352 448 366.625V303C459.625 295.75 470.25 287.25 480 277.625V320ZM256 320C124 320 32 261 32 208S124 96 256 96S480 155 480 208S388 320 256 320Z" })
  }
));
CoinLight.displayName = "CoinLight";
var Coin_default = CoinLight;
