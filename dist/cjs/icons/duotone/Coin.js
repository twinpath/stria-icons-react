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
const CoinDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 208C512 287.5 397.375 352 256 352S0 287.5 0 208S114.625 64 256 64S512 128.5 512 208Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 320C0 347.75 17.999 373.375 48 394.375V330C29.125 318 12.625 304.625 0 289.625V320ZM80 412.5C107.125 425.375 139.625 435.375 176 441.25V377C140.625 371 108.25 361.125 80 348V412.5ZM464 330V394.375C493.999 373.375 512 347.75 512 320V289.625C499.375 304.625 482.875 318 464 330ZM336 441.375C372.375 435.375 404.875 425.375 432 412.5V348C403.75 361.125 371.375 371 336 377V441.375ZM208 381.25V445.25C223.625 446.75 239.5 448 256 448S288.375 446.75 304 445.25V381.25C288 383 272 383.875 256 384C240 383.875 224 383 208 381.25Z" })
    ]
  }
));
CoinDuotone.displayName = "CoinDuotone";
var Coin_default = CoinDuotone;
