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
var FlagSwallowtail_exports = {};
__export(FlagSwallowtail_exports, {
  default: () => FlagSwallowtail_default
});
module.exports = __toCommonJS(FlagSwallowtail_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FlagSwallowtailThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400.564 208L504.477 84.613C512.463 75.129 514.242 61.742 509.016 50.504C503.785 39.262 492.396 32 480 32H16V8C16 3.582 12.418 0 8 0S0 3.582 0 8V504C0 508.406 3.594 512 8 512S16 508.406 16 504V384H480C492.396 384 503.785 376.738 509.016 365.496C514.244 354.254 512.463 340.867 504.475 331.387L400.564 208ZM494.508 358.746C491.893 364.367 486.197 368 480 368H16V48H480C486.197 48 491.893 51.633 494.508 57.254C497.121 62.871 496.23 69.566 492.238 74.309L388.326 197.695L379.646 208L388.326 218.305L492.238 341.695C496.23 346.434 497.121 353.129 494.508 358.746Z" })
  }
));
FlagSwallowtailThin.displayName = "FlagSwallowtailThin";
var FlagSwallowtail_default = FlagSwallowtailThin;
