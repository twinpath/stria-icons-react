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
const CoinThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 64C114.844 64 0 128.594 0 208V304C0 383.406 114.844 448 256 448S512 383.406 512 304V208C512 128.594 397.156 64 256 64ZM256 80C388.344 80 496 137.422 496 208S388.344 336 256 336S16 278.578 16 208S123.656 80 256 80ZM440 307.881V386.035C410.906 404.566 372.219 418.666 328 426.098V346.102C371.156 338.969 409.551 325.623 440 307.881ZM184 346.102V426.098C139.781 418.666 101.094 404.566 72 386.035V307.881C102.449 325.623 140.844 338.969 184 346.102ZM16 304V257.633C25.562 272.213 39.059 285.709 56 297.645V374.602C30.781 354.346 16 330.084 16 304ZM200 428.338V348.422C218.051 350.699 236.746 352 256 352S293.949 350.699 312 348.422V428.338C293.999 430.645 275.312 432 256 432S217.999 430.645 200 428.338ZM496 304C496 330.084 481.219 354.346 456 374.602V297.645C472.941 285.709 486.438 272.213 496 257.633V304Z" })
  }
));
CoinThin.displayName = "CoinThin";
var Coin_default = CoinThin;
