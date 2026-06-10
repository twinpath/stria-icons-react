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
var Paste_exports = {};
__export(Paste_exports, {
  default: () => Paste_default
});
module.exports = __toCommonJS(Paste_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PasteLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M502.627 214.625L425.373 137.375C419.371 131.371 411.232 128 402.746 128H288C252.654 128 224 156.652 224 192V448C224 483.344 252.654 512 288 512H448C483.346 512 512 483.344 512 448V237.254C512 228.766 508.629 220.629 502.627 214.625ZM416 173.254L466.746 224H416V173.254ZM480 448C480 465.672 465.674 480 448 480H288C270.326 480 256 465.672 256 448V192C256 174.328 270.326 160 288 160H384V224C384 241.672 398.326 256 416 256H480V448ZM256.703 64.008C270.063 64.297 281.436 72.812 285.936 84.687C288.564 91.617 295.453 96 302.869 96C312.914 96 320.049 86.195 317.002 76.621C308.773 50.781 284.543 32 256 32C244.908 32 236.471 43.258 241.479 54.98C243.994 60.871 250.299 63.867 256.703 64.008ZM208 64H205.053C206.846 58.969 208 53.637 208 48C208 21.531 186.467 0 160 0S112 21.531 112 48C112 53.637 113.154 58.969 114.947 64H112C103.156 64 96 71.156 96 80S103.156 96 112 96H208C216.844 96 224 88.844 224 80S216.844 64 208 64ZM160 64C151.164 64 144 56.836 144 48S151.164 32 160 32C168.838 32 176 39.164 176 48S168.838 64 160 64ZM177.203 416H64C46.326 416 32 401.672 32 384V97.707C32 80.207 46.262 63.742 63.76 64C73.709 64.145 81.6 55.23 79.723 44.969C78.318 37.293 71.084 31.918 63.281 32.004C28.314 32.391 0 60.961 0 96V384C0 419.344 28.654 448 64 448H177.203C185.375 448 192 441.375 192 433.203V430.797C192 422.625 185.375 416 177.203 416Z" })
  }
));
PasteLight.displayName = "PasteLight";
var Paste_default = PasteLight;
