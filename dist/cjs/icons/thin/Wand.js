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
var Wand_exports = {};
__export(Wand_exports, {
  default: () => Wand_default
});
module.exports = __toCommonJS(Wand_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WandThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M502.832 9.166C496.736 3.072 488.725 0 480.697 0C473.199 0 465.689 2.68 459.717 8.078L186.642 256.008H144.025C135.189 256.008 128.027 263.17 128.027 272.006V308.875L10.547 414.867C-3.031 427.117 -3.574 448.244 9.355 461.176L50.789 502.617C57.074 508.9 65.26 512 73.42 512C82.139 512 90.832 508.463 97.158 501.492L376.361 192.008H399.982C408.857 192.008 415.978 184.883 415.978 176.008V148.012L503.887 52.324C515.101 39.959 514.633 20.969 502.832 9.166ZM492.105 41.5L404.197 137.188L399.978 141.777V148.012L399.982 176.008H369.246L364.48 181.291L85.308 490.74C82.23 494.133 78.008 496 73.42 496C69.152 496 65.133 494.332 62.103 491.305L20.67 449.863C17.549 446.74 15.892 442.592 16.006 438.178S17.986 429.705 21.264 426.746L138.746 320.754L144.027 315.99V308.875L144.025 272.008H192.822L197.398 267.854L470.443 19.949C473.262 17.402 476.902 16 480.697 16C484.787 16 488.629 17.592 491.519 20.48C497.297 26.258 497.523 35.523 492.105 41.5Z" })
  }
));
WandThin.displayName = "WandThin";
var Wand_default = WandThin;
