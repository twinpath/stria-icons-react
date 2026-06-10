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
var HeartCrack_exports = {};
__export(HeartCrack_exports, {
  default: () => HeartCrack_default
});
module.exports = __toCommonJS(HeartCrack_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeartCrackThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M473.74 73.741L471.24 71.241C445.585 45.03 411.835 32 378.073 32C351.3 32 324.524 40.186 301.748 56.493L335.996 159.854L240.001 223.846L287.999 351.829L144.005 207.848L240.001 143.856L211.377 57.368C188.355 40.534 161.125 32.078 133.923 32.078C100.134 32.074 66.381 45.123 40.76 71.366L38.26 73.741C-10.363 123.609 -12.488 202.849 31.01 255.967L243.126 474.563C246.688 478.188 251.344 480 255.984 480S265.25 478.188 268.749 474.563L480.99 255.842C524.488 202.849 522.363 123.609 473.74 73.741ZM469.508 244.703L257.268 463.424H256.967C256.459 463.424 255.441 463.42 254.924 463.42C254.732 463.42 254.609 463.42 254.607 463.424L43.388 245.831C4.845 198.763 7.624 128.077 49.279 85.341L52.208 82.54C73.908 60.313 102.931 48.072 133.923 48.076C156.883 48.076 178.88 54.751 197.854 67.429L220.98 137.307L135.13 194.537C131.142 197.197 128.556 201.501 128.084 206.27C127.611 211.043 129.302 215.773 132.691 219.159L276.685 363.14C279.774 366.23 283.872 367.827 288.004 367.827C290.995 367.827 294.002 366.991 296.66 365.281C302.992 361.203 305.623 353.263 302.978 346.213L259.439 230.115L344.871 173.165C350.865 169.17 353.449 161.663 351.183 154.824L320.831 63.215C338.209 53.228 357.785 47.998 378.073 47.998C409.044 47.998 438.072 60.227 459.927 82.552L462.284 84.907C504.393 128.097 507.178 198.72 469.508 244.703Z" })
  }
));
HeartCrackThin.displayName = "HeartCrackThin";
var HeartCrack_default = HeartCrackThin;
