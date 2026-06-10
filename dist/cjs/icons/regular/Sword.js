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
var Sword_exports = {};
__export(Sword_exports, {
  default: () => Sword_default
});
module.exports = __toCommonJS(Sword_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SwordRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M511.839 18.25C513.214 8.5 505.59 0 495.966 0C495.216 0 494.466 0 493.716 0.125L399.979 16L148.512 267.5L109.767 228.625C103.518 222.5 93.394 222.5 87.145 228.625L68.397 247.375C63.023 252.75 62.273 261.25 66.523 267.5L119.641 347.25L66.398 400.5L37.276 386C36.027 385.375 28.028 381.75 21.278 388.5L4.031 405.75C-1.344 411.125 -1.344 419.875 4.031 425.375L86.645 508C89.395 510.625 92.894 512 96.519 512C100.018 512 103.518 510.625 106.267 508L123.515 490.75C127.639 486.5 128.764 480.125 126.015 474.75L111.517 445.625L164.76 392.375L244.499 445.5C250.873 449.75 259.247 449 264.622 443.625L283.369 424.875C289.493 418.625 289.493 408.5 283.369 402.25L244.499 363.5L495.966 112L511.839 18.25ZM451.222 88.875L210.629 329.5L182.507 301.375L423.101 60.75L456.971 55L451.222 88.875Z" })
  }
));
SwordRegular.displayName = "SwordRegular";
var Sword_default = SwordRegular;
