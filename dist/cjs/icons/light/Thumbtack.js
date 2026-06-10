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
var Thumbtack_exports = {};
__export(Thumbtack_exports, {
  default: () => Thumbtack_default
});
module.exports = __toCommonJS(Thumbtack_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ThumbtackLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M48 32H336C344.822 32 352 24.822 352 16S344.822 0 336 0H48C39.178 0 32 7.178 32 16S39.178 32 48 32ZM301.053 193.777L293.75 79.075C293.354 70.49 286.344 63.188 276.342 64.073C271.648 64.274 261.187 69.11 261.809 80.821C270.315 216.734 269.746 207.659 270.172 214.471C347.821 250.503 352 295.688 352 313C352 316.859 348.859 320 345 320H208V232C208 223.178 200.822 216 192 216S176 223.178 176 232V320H39C35.141 320 32 316.859 32 313C32 295.719 36.154 250.515 113.828 214.471C114.279 207.26 113.783 215.155 122.188 80.881C122.666 71.845 115.783 64.436 107.021 64H106.881C97.258 63.998 90.676 70.527 90.244 79.17L82.947 193.777C30.912 220.922 0 265.209 0 313C0 334.504 17.496 352 39 352H176V496C176 504.822 183.178 512 192 512S208 504.822 208 496V352H345C366.504 352 384 334.504 384 313C384 265.209 353.088 220.922 301.053 193.777Z" })
  }
));
ThumbtackLight.displayName = "ThumbtackLight";
var Thumbtack_default = ThumbtackLight;
