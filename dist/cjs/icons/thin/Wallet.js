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
var Wallet_exports = {};
__export(Wallet_exports, {
  default: () => Wallet_default
});
module.exports = __toCommonJS(Wallet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WalletThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M440 112H72C67.594 112 64 115.594 64 120S67.594 128 72 128H440C470.875 128 496 153.125 496 184V408C496 438.875 470.875 464 440 464H72C41.125 464 16 438.875 16 408V104C16 73.125 41.125 48 72 48H472C476.406 48 480 44.406 480 40S476.406 32 472 32H72C32.312 32 0 64.312 0 104V408C0 447.688 32.312 480 72 480H440C479.688 480 512 447.688 512 408V184C512 144.312 479.688 112 440 112ZM440 296C440 273.938 422.062 256 400 256S360 273.938 360 296S377.938 336 400 336S440 318.062 440 296ZM376 296C376 282.781 386.781 272 400 272S424 282.781 424 296S413.219 320 400 320S376 309.219 376 296Z" })
  }
));
WalletThin.displayName = "WalletThin";
var Wallet_default = WalletThin;
