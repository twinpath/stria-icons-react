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
var Retweet_exports = {};
__export(Retweet_exports, {
  default: () => Retweet_default
});
module.exports = __toCommonJS(Retweet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RetweetRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M328 368H136V192.023H192C201.703 192.023 210.453 186.18 214.172 177.207S215.828 157.922 208.969 151.047L128.969 71.031C124.281 66.344 118.141 64 112 64S99.719 66.344 95.031 71.031L15.031 151.047C8.172 157.922 6.109 168.234 9.828 177.207S22.297 192.023 32 192.023H88V392C88 405.25 98.75 416 112 416H328C341.25 416 352 405.25 352 392S341.25 368 328 368ZM598.172 334.793C594.453 325.82 585.703 319.977 576 319.977H520V120C520 106.75 509.25 96 496 96H280C266.75 96 256 106.75 256 120S266.75 144 280 144H472V319.977H416C406.297 319.977 397.547 325.82 393.828 334.793S392.172 354.078 399.031 360.953L479.031 440.969C483.719 445.656 489.859 448 496 448S508.281 445.656 512.969 440.969L592.969 360.953C599.828 354.078 601.891 343.766 598.172 334.793Z" })
  }
));
RetweetRegular.displayName = "RetweetRegular";
var Retweet_default = RetweetRegular;
