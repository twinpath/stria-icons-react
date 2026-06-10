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
var Walker_exports = {};
__export(Walker_exports, {
  default: () => Walker_default
});
module.exports = __toCommonJS(Walker_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WalkerSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M415.943 392.683V95.953C415.943 42.979 372.947 0 319.953 0H190.592C143.722 -0.125 103.602 33.734 95.977 79.961L0.238 487.512C-1.262 496.258 4.487 504.504 13.236 506.003L44.733 511.5C53.482 513 61.731 507.252 63.231 498.507L127.724 223.891H351.95V392.683C326.827 407.176 314.579 436.662 322.078 464.648C329.577 492.634 354.949 512 383.946 512C412.943 512 438.315 492.634 445.815 464.648C453.314 436.662 441.065 407.176 415.943 392.683ZM351.95 159.922H142.847L159.096 90.706C161.595 75.214 174.969 63.969 190.592 63.969H319.953C337.576 63.969 351.95 78.337 351.95 95.953V159.922ZM383.946 463.774C375.072 463.774 367.948 456.652 367.948 447.781S375.072 431.789 383.946 431.789C392.82 431.789 399.945 438.911 399.945 447.781S392.82 463.774 383.946 463.774Z" })
  }
));
WalkerSolid.displayName = "WalkerSolid";
var Walker_default = WalkerSolid;
