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
var Sandwich_exports = {};
__export(Sandwich_exports, {
  default: () => Sandwich_default
});
module.exports = __toCommonJS(Sandwich_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SandwichRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 320H32C14.375 320 0 334.375 0 352V416C0 433.625 14.375 448 32 448H480C497.625 448 512 433.625 512 416V352C512 334.375 497.625 320 480 320ZM464 400H48V368H464V400ZM480 64H32C14.375 64 0 78.375 0 96V160C0 177.625 14.375 192 32 192H480C497.625 192 512 177.625 512 160V96C512 78.375 497.625 64 480 64ZM464 144H48V112H464V144ZM497.625 247.25C480.75 245.5 470.75 240.5 458.75 234.5C445.875 228 387.125 195.625 309.5 234.5C256.75 260.875 219.25 242.75 202.875 234.5C190.125 228.125 131.625 195.375 53.375 234.5C41.375 240.5 31.375 245.5 14.375 247.25C6.25 248.125 0 255 0 263.125V279.25C0 288.75 8.5 296.125 18 295.25C44.5 292.625 60.375 284.75 74.75 277.5C127.625 251.125 165.125 269.375 181.5 277.5C259.125 316.375 318 284 331 277.5C386.875 249.5 426.375 272 437.25 277.5C451.625 284.75 467.625 292.625 493.875 295.25C503.5 296.125 512 288.875 512 279.25V263.125C512 255 505.75 248.125 497.625 247.25Z" })
  }
));
SandwichRegular.displayName = "SandwichRegular";
var Sandwich_default = SandwichRegular;
