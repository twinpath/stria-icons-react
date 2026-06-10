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
var DrawSquare_exports = {};
__export(DrawSquare_exports, {
  default: () => DrawSquare_default
});
module.exports = __toCommonJS(DrawSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DrawSquareDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M119.123 384C124.621 393.445 128 404.283 128 416S124.621 438.555 119.123 448H328.877C323.379 438.555 320 427.717 320 416S323.379 393.445 328.877 384H119.123ZM32 151.123V360.877C41.445 355.379 52.283 352 64 352S86.555 355.379 96 360.877V151.123C86.555 156.621 75.717 160 64 160S41.445 156.621 32 151.123ZM384 160C372.283 160 361.445 156.621 352 151.123V360.877C361.445 355.379 372.283 352 384 352S406.555 355.379 416 360.877V151.123C406.555 156.621 395.717 160 384 160ZM119.123 64C124.621 73.445 128 84.283 128 96S124.621 118.555 119.123 128H328.877C323.379 118.555 320 107.717 320 96S323.379 73.445 328.877 64H119.123Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 80C72.822 80 80 87.178 80 96S72.822 112 64 112S48 104.822 48 96S55.178 80 64 80M64 32C28.654 32 0 60.654 0 96S28.654 160 64 160S128 131.346 128 96S99.346 32 64 32L64 32ZM384 80C392.822 80 400 87.178 400 96S392.822 112 384 112S368 104.822 368 96S375.178 80 384 80M384 32C348.654 32 320 60.654 320 96S348.654 160 384 160S448 131.346 448 96S419.346 32 384 32L384 32ZM64 400C72.822 400 80 407.178 80 416S72.822 432 64 432S48 424.822 48 416S55.178 400 64 400M64 352C28.654 352 0 380.654 0 416S28.654 480 64 480S128 451.346 128 416S99.346 352 64 352L64 352ZM384 400C392.822 400 400 407.178 400 416S392.822 432 384 432S368 424.822 368 416S375.178 400 384 400M384 352C348.654 352 320 380.654 320 416S348.654 480 384 480S448 451.346 448 416S419.346 352 384 352L384 352Z" })
    ]
  }
));
DrawSquareDuotone.displayName = "DrawSquareDuotone";
var DrawSquare_default = DrawSquareDuotone;
