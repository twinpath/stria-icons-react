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
var FlowerTulip_exports = {};
__export(FlowerTulip_exports, {
  default: () => FlowerTulip_default
});
module.exports = __toCommonJS(FlowerTulip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FlowerTulipThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504 319.947H442C362.371 319.947 293.855 365.733 264 430.986V255.93H270.406C341.859 255.93 400 198.508 400 127.894V39.87C400 36.932 398.375 34.213 395.781 32.806C393.188 31.462 390.031 31.524 387.563 33.212L321.672 77.162L262.25 2.86C259.219 -0.953 252.781 -0.953 249.75 2.86L190.328 77.162L124.438 33.212C121.969 31.524 118.812 31.462 116.219 32.806C113.625 34.213 112 36.932 112 39.87V127.894C112 198.508 170.141 255.93 241.594 255.93H248V430.986C218.145 365.733 149.629 319.947 70 319.947H8C3.578 319.947 0 323.542 0 327.949C0 429.446 87.031 512 194 512H318C424.969 512 512 429.446 512 327.949C512 323.542 508.422 319.947 504 319.947ZM241.594 239.925C178.953 239.925 128 189.661 128 127.894V54.812L187.562 94.542C190.969 96.823 195.641 96.105 198.25 92.885L256 20.678L313.75 92.885C316.359 96.105 320.984 96.823 324.438 94.542L384 54.812V127.894C384 189.661 333.047 239.925 270.406 239.925H241.594ZM194 495.996C98.688 495.996 20.641 424.914 16.203 335.952H70C165.313 335.952 243.359 407.034 247.797 495.996H194ZM318 495.996H264.203C268.641 407.034 346.688 335.952 442 335.952H495.797C491.359 424.914 413.312 495.996 318 495.996Z" })
  }
));
FlowerTulipThin.displayName = "FlowerTulipThin";
var FlowerTulip_default = FlowerTulipThin;
