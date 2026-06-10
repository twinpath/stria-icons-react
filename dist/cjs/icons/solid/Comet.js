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
var Comet_exports = {};
__export(Comet_exports, {
  default: () => Comet_default
});
module.exports = __toCommonJS(Comet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CometSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M434 0.717C395.25 12.217 322.25 34.967 246.375 61.967C244.25 54.967 242.375 48.467 240.75 43.342C239.375 38.842 236 35.092 231.5 33.217C227.125 31.342 222.125 31.592 217.875 33.842C175.375 55.967 65 116.467 3.5 176.342C2.375 177.342 1 178.342 0 179.342C-76.125 255.467 -76.125 378.842 0 454.967C76 531.092 199.5 530.967 275.5 454.842C276.5 453.842 277.5 452.467 278.5 451.342C338.375 389.717 398.875 279.217 421 236.967C423.25 232.717 423.5 227.717 421.625 223.217C419.875 218.842 416.125 215.467 411.5 214.092C406.25 212.467 399.875 210.592 392.875 208.467C419.875 132.467 442.625 59.467 454.25 20.717C455.875 15.092 454.375 8.842 450.125 4.717C445.875 0.467 439.75 -1.033 434 0.717ZM258.25 300.342L207.625 349.717L219.5 419.342C220.5 425.092 218.125 430.967 213.5 434.342C208.75 437.717 202.5 438.217 197.375 435.467L134.875 402.592L72.25 435.467C61.25 441.467 48 431.967 50.125 419.342L62.125 349.717L11.5 300.342C7.375 296.217 5.875 290.217 7.625 284.592C9.375 279.092 14.25 274.967 20 274.217L89.875 263.967L121.125 200.467C123.625 195.342 129 191.967 134.875 191.967C140.625 191.967 146 195.342 148.5 200.467L179.875 263.967L249.625 274.217C255.5 275.092 260.25 279.092 262 284.592C263.875 290.092 262.375 296.217 258.25 300.342Z" })
  }
));
CometSolid.displayName = "CometSolid";
var Comet_default = CometSolid;
