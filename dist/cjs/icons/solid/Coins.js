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
const CoinsSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 405.25V448C0 483.25 85.999 512 192 512C297.999 512 384 483.25 384 448V405.25C342.75 434.375 267.25 448 192 448S41.25 434.375 0 405.25ZM320 128C425.999 128 512 99.25 512 64S425.999 0 320 0C213.999 0 128 28.75 128 64S213.999 128 320 128ZM0 300.375V352C0 387.25 85.999 416 192 416C297.999 416 384 387.25 384 352V300.375C342.75 334.375 267.125 352 192 352S41.25 334.375 0 300.375ZM416 311.375C473.25 300.25 512 279.75 512 256V213.25C488.75 229.75 454.75 240.875 416 247.75V311.375ZM192 160C85.999 160 0 195.75 0 240S85.999 320 192 320C297.999 320 384 284.25 384 240S297.999 160 192 160ZM411.25 216.25C471.25 205.5 512 184.25 512 160V117.25C476.5 142.375 415.5 155.875 351.25 159.125C380.75 173.375 402.5 192.625 411.25 216.25Z " })
  }
));
CoinsSolid.displayName = "CoinsSolid";
var Coins_default = CoinsSolid;
