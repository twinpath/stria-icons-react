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
var PaperPlaneTop_exports = {};
__export(PaperPlaneTop_exports, {
  default: () => PaperPlaneTop_default
});
module.exports = __toCommonJS(PaperPlaneTop_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PaperPlaneTopThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M492.594 226.592L44.596 34.591C40.537 32.845 36.262 31.999 32.021 31.999C23.398 31.999 14.922 35.497 8.721 42.044C-0.498 51.81 -2.623 66.294 3.377 78.31L96 256L3.377 433.686C-2.623 445.702 -0.498 460.186 8.721 469.952C14.908 476.499 23.377 479.999 32.002 479.999C36.252 479.999 40.533 479.155 44.596 477.405L492.594 285.404C504.375 280.373 512 268.795 512 255.998S504.375 231.623 492.594 226.592ZM17.691 71.161C14.701 65.171 15.771 57.884 20.338 53.046C23.377 49.839 27.635 47.999 32.021 47.999C34.18 47.999 36.283 48.433 38.293 49.298L486.31 241.307C489.523 242.68 491.914 245.113 493.605 248H109.875L17.691 71.161ZM486.291 270.697L38.266 462.71C36.281 463.565 34.174 463.999 32.002 463.999C27.623 463.999 23.375 462.163 20.355 458.968C15.771 454.112 14.701 446.825 17.566 441.083L109.875 264H493.603C491.91 266.885 489.514 269.32 486.291 270.697Z" })
  }
));
PaperPlaneTopThin.displayName = "PaperPlaneTopThin";
var PaperPlaneTop_default = PaperPlaneTopThin;
