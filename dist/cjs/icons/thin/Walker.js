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
var Walker_exports = {};
__export(Walker_exports, {
  default: () => Walker_default
});
module.exports = __toCommonJS(Walker_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WalkerThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M391.679 416.773C391.712 416.48 392.001 416.301 392.001 416V72C392.001 32.312 359.689 0 320.001 0H178.378C145.003 0 116.224 22.656 108.38 55.062L0.224 502.125C-0.807 506.406 1.818 510.75 6.13 511.781C6.755 511.938 7.38 512 8.005 512C11.63 512 14.88 509.531 15.787 505.875L89.787 200H376.001V416C376.001 416.301 376.29 416.48 376.324 416.773C353.488 420.471 336.001 440.121 336.001 464C336.001 490.51 357.492 512 384.001 512S432.001 490.51 432.001 464C432.001 440.121 414.515 420.471 391.679 416.773ZM376.001 184H93.656L123.943 58.812C130.037 33.594 152.41 16 178.378 16H320.001C350.876 16 376.001 41.125 376.001 72V184ZM384.001 496C366.357 496 352.001 481.645 352.001 464S366.357 432 384.001 432S416.001 446.355 416.001 464S401.646 496 384.001 496Z" })
  }
));
WalkerThin.displayName = "WalkerThin";
var Walker_default = WalkerThin;
