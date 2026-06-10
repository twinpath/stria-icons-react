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
var PiggyBank_exports = {};
__export(PiggyBank_exports, {
  default: () => PiggyBank_default
});
module.exports = __toCommonJS(PiggyBank_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PiggyBankDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560 224H530.49C521.719 204.158 509 186.309 493.109 171.539L512 96H480C450.6 96 424.609 109.5 407 130.32C399.43 129.221 391.881 128 384 128H256C161.18 128 96 206.881 96 288C95.961 338.371 119.68 385.809 160 416V480C160 497.674 174.326 512 192 512H224C241.674 512 256 497.674 256 480V448H384V480C384 497.674 398.326 512 416 512H448C465.674 512 480 497.674 480 480V415.279C491.822 406.348 502.348 395.822 511.279 384H560C568.836 384 576 376.836 576 368V240C576 231.164 568.836 224 560 224ZM432 288C423.164 288 416 280.836 416 272S423.164 256 432 256S448 263.164 448 272S440.836 288 432 288Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M51.26 255.52C38.272 252.881 29.881 240.211 32.52 227.221C34.74 215.82 45.4 208 57 208H58C61.315 208 64 205.314 64 202.001V182.001C64 178.686 61.315 176 58 176C29.5 176 4.1 196.4 0.471 224.619C0.154 227.018 -0.004 229.432 0 231.85C-0.039 262.818 25.031 287.955 56 288H96C96.01 277.246 97.141 266.521 99.369 256H56C54.408 256 52.82 255.84 51.26 255.52ZM432 256C423.164 256 416 263.164 416 272S423.164 288 432 288S448 280.836 448 272S440.836 256 432 256ZM339.25 5.781C328.752 1.965 317.67 0.008 306.5 0C253.481 -0.014 210.49 42.957 210.477 95.977C210.473 108.508 212.924 120.92 217.69 132.51C230.236 129.492 243.096 127.979 256 128H384C388.25 128.033 392.496 128.328 396.711 128.881C414.836 79.02 389.111 23.906 339.25 5.781Z" })
    ]
  }
));
PiggyBankDuotone.displayName = "PiggyBankDuotone";
var PiggyBank_default = PiggyBankDuotone;
