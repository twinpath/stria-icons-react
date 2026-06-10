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
var TennisBall_exports = {};
__export(TennisBall_exports, {
  default: () => TennisBall_default
});
module.exports = __toCommonJS(TennisBall_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TennisBallThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM247.062 32.453C247.463 37.629 248 42.781 248 48C248 158.281 158.281 248 48 248C42.797 248 37.641 247.393 32.457 246.994C37.115 130.658 130.721 37.078 247.062 32.453ZM32.354 262.992C37.574 263.365 42.756 264 48 264C167.109 264 264 167.109 264 48C264 42.754 263.428 37.572 263.051 32.357C380.869 36.051 475.863 130.994 479.635 248.797C474.451 248.42 469.277 248 464 248C344.891 248 248 344.891 248 464C248 469.189 248.561 474.418 248.938 479.643C131.049 475.941 36.02 380.887 32.354 262.992ZM264.926 479.549C264.527 474.359 264 469.162 264 464C264 353.719 353.719 264 464 264C469.24 264 474.402 264.387 479.555 264.785C475.008 381.227 381.346 474.93 264.926 479.549Z" })
  }
));
TennisBallThin.displayName = "TennisBallThin";
var TennisBall_default = TennisBallThin;
