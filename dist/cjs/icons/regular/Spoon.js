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
var Spoon_exports = {};
__export(Spoon_exports, {
  default: () => Spoon_default
});
module.exports = __toCommonJS(Spoon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SpoonRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M475.452 36.617C445.952 7.074 402.251 -5.236 352.423 2.045C307.267 8.621 262.923 30.822 229.189 64.553C189.784 104.969 178.425 165.229 198.675 219.205L14.909 395.451C5.63 404.309 0.192 416.73 0.005 429.557C-0.183 442.398 4.942 454.99 14.05 464.1L47.909 497.955C56.862 506.906 69.175 512 81.784 512H82.456C95.284 511.812 107.706 506.375 116.503 497.143L292.845 313.352C346.845 333.568 407.11 322.209 447.718 282.621L449.077 281.262C487.921 242.438 512.03 185.459 511.999 132.592C511.968 93.643 499.327 60.428 475.452 36.617ZM413.999 248.469C384.173 277.59 337.579 283.543 298.095 263.279L282.189 255.139L81.847 464.021L48.081 430.15L256.923 229.861L248.767 213.957C228.501 174.477 234.439 127.904 264.704 96.893C289.329 72.285 324.704 54.584 359.329 49.539C366.345 48.523 373.126 48.023 379.657 48.023C405.235 48.023 426.749 55.756 441.515 70.551C460.077 89.08 463.983 114.531 463.999 132.623C464.034 173.809 444.888 218.311 413.999 248.469Z" })
  }
));
SpoonRegular.displayName = "SpoonRegular";
var Spoon_default = SpoonRegular;
