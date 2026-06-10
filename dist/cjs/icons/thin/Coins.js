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
var Coins_exports = {};
__export(Coins_exports, {
  default: () => Coins_default
});
module.exports = __toCommonJS(Coins_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CoinsThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 0C213.961 0 128 28.654 128 64V120.05C128 124.441 131.559 128 135.95 128H136.05C140.441 128 144 124.441 144 120.05V89.543C173.602 112.17 241.219 128 320 128S466.398 112.17 496 89.543V152C496 169.676 466.743 189.563 421.844 202.412C418.419 203.393 416 206.483 416 210.046V210.046C416 214.53 419.67 218.028 423.884 218.028C425.604 218.028 470.905 206.208 496 182.711V248C496 260.195 467.837 278.675 421.966 291.04C418.484 291.979 416 295.1 416 298.707V299.129C416 303.658 419.717 307.07 423.994 307.07C435.925 307.07 512 281.129 512 248V64C512 28.654 426.039 0 320 0ZM320 112C206.121 112 144 80.291 144 64S206.121 16 320 16S496 47.709 496 64S433.879 112 320 112ZM192 160C85.961 160 0 195.816 0 240V440C0 475.346 85.961 512 192 512S384 475.346 384 440V240C384 195.816 298.039 160 192 160ZM368 440C368 459.67 295.422 496 192 496S16 459.67 16 440V366.797C46.219 395.121 115.586 416 192 416S337.781 395.121 368 366.797V440ZM368 336C368 364.984 289.5 400 192 400S16 364.984 16 336V274.119C44.473 302.211 108.977 320 192 320S339.527 302.211 368 274.119V336ZM192 304C91.656 304 16 276.484 16 240C16 209.789 91.27 176 192 176S368 209.789 368 240C368 276.484 292.344 304 192 304Z " })
  }
));
CoinsThin.displayName = "CoinsThin";
var Coins_default = CoinsThin;
