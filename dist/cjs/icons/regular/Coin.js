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
const CoinRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 64C114.625 64 0 128.5 0 208V320C0 390.75 114.625 448 256 448S512 390.75 512 320V208C512 128.5 397.375 64 256 64ZM88 363.375C62.375 349.125 48 333.25 48 320V291.75C60.375 301.375 73.875 309.625 88 316.5V363.375ZM184 394.25C162.25 390.875 140.75 385.375 120 377.875V329.875C140.75 337.125 162.25 342.625 184 346.125V394.25ZM296 398.25C283.25 399.375 269.875 400 256 400C242.125 400 228.75 399.375 216 398.25V350.125C229.125 351.25 242.375 352 256 352C269.625 352 282.875 351.25 296 350.125V398.25ZM392 378C371.25 385.375 349.75 390.875 328 394.25V346.125C349.75 342.625 371.25 337.125 392 329.875V378ZM464 320C464 333.25 449.625 349.125 424 363.375V316.5C438.125 309.625 451.625 301.375 464 291.75V320ZM256 304C137 304 48 253.375 48 208S137 112 256 112S464 162.625 464 208S375 304 256 304Z" })
  }
));
CoinRegular.displayName = "CoinRegular";
var Coin_default = CoinRegular;
