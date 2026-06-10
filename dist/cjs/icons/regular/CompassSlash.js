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
var CompassSlash_exports = {};
__export(CompassSlash_exports, {
  default: () => CompassSlash_default
});
module.exports = __toCommonJS(CompassSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CompassSlashRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M630.81 469.102L522.562 384.26C546.169 347.16 559.999 303.244 559.999 256C559.999 123.449 452.55 16 319.999 16C251.97 16 190.986 44.682 147.363 90.188L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.188C-3.061 19.625 -1.249 34.717 9.189 42.889L601.185 506.883C611.685 515.086 626.747 513.211 634.872 502.805C643.06 492.367 641.247 477.273 630.81 469.102ZM484.507 354.434L389.501 279.969L432.491 185.904C444.81 158.953 417.036 131.18 390.085 143.5L279.736 193.938L185.126 119.785C219.79 85.363 267.392 64 319.999 64C425.868 64 511.999 150.131 511.999 256C511.999 292.016 501.837 325.609 484.507 354.434ZM319.999 448C214.13 448 127.999 361.869 127.999 256C127.999 237.592 130.753 219.842 135.613 202.977L95.562 171.586C85.665 197.879 79.999 226.246 79.999 256C79.999 388.551 187.448 496 319.999 496C370.392 496 417.107 480.402 455.718 453.867L415.486 422.334C387.323 438.566 354.773 448 319.999 448ZM249.913 368.496L311.113 340.529L229.976 276.936L207.509 326.088C195.191 353.039 222.962 380.811 249.913 368.496Z" })
  }
));
CompassSlashRegular.displayName = "CompassSlashRegular";
var CompassSlash_default = CompassSlashRegular;
