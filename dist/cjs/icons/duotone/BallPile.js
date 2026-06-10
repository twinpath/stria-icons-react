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
var BallPile_exports = {};
__export(BallPile_exports, {
  default: () => BallPile_default
});
module.exports = __toCommonJS(BallPile_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BallPileDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M80 352C35.844 352 0 387.844 0 432S35.844 512 80 512S160 476.156 160 432S124.156 352 80 352ZM288 352C243.844 352 208 387.844 208 432S243.844 512 288 512S368 476.156 368 432S332.156 352 288 352ZM496 352C451.844 352 416 387.844 416 432S451.844 512 496 512S576 476.156 576 432S540.156 352 496 352ZM288 0C243.844 0 208 35.844 208 80S243.844 160 288 160S368 124.156 368 80S332.156 0 288 0Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 168C131.844 168 96 203.844 96 248S131.844 328 176 328S256 292.156 256 248S220.156 168 176 168ZM400 168C355.844 168 320 203.844 320 248S355.844 328 400 328S480 292.156 480 248S444.156 168 400 168Z" })
    ]
  }
));
BallPileDuotone.displayName = "BallPileDuotone";
var BallPile_default = BallPileDuotone;
