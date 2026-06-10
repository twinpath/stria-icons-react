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
var EllipsisStrokeVertical_exports = {};
__export(EllipsisStrokeVertical_exports, {
  default: () => EllipsisStrokeVertical_default
});
module.exports = __toCommonJS(EllipsisStrokeVertical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EllipsisStrokeVerticalDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 192 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 176C51.834 176 16 211.834 16 256S51.834 336 96 336S176 300.166 176 256S140.166 176 96 176ZM96 272C87.178 272 80 264.822 80 256S87.178 240 96 240S112 247.178 112 256S104.822 272 96 272Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 160C140.166 160 176 124.166 176 80S140.166 0 96 0S16 35.834 16 80S51.834 160 96 160ZM96 64C104.822 64 112 71.178 112 80S104.822 96 96 96S80 88.822 80 80S87.178 64 96 64ZM96 352C51.834 352 16 387.834 16 432S51.834 512 96 512S176 476.166 176 432S140.166 352 96 352ZM96 448C87.178 448 80 440.822 80 432S87.178 416 96 416S112 423.178 112 432S104.822 448 96 448Z" })
    ]
  }
));
EllipsisStrokeVerticalDuotone.displayName = "EllipsisStrokeVerticalDuotone";
var EllipsisStrokeVertical_default = EllipsisStrokeVerticalDuotone;
