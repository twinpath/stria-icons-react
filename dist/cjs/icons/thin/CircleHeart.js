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
var CircleHeart_exports = {};
__export(CircleHeart_exports, {
  default: () => CircleHeart_default
});
module.exports = __toCommonJS(CircleHeart_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleHeartThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M326.123 144C304.701 144 283.068 152.77 267.248 169.102L255.998 180.715L244.748 169.102C228.928 152.766 207.297 144 185.873 144C168.65 144 151.555 149.672 137.73 161.637C102.219 192.375 100.451 247.152 132.463 280.277L242.838 394.398C246.449 398.133 251.211 400 255.973 400S265.496 398.133 269.107 394.398L379.48 280.277C411.547 247.152 409.779 192.371 374.266 161.633C360.441 149.668 343.352 144 326.123 144ZM367.979 269.152L257.605 383.277C256.666 384.25 255.275 384.246 254.338 383.273L143.969 269.16C131.598 256.355 124.965 238.602 125.773 220.441C126.59 202.137 134.555 185.547 148.201 173.734C158.584 164.75 171.609 160 185.873 160C203.531 160 220.803 167.375 233.256 180.234L255.998 203.711L278.74 180.234C291.197 167.375 308.467 160 326.123 160C340.389 160 353.416 164.75 363.795 173.73C377.447 185.547 385.41 202.137 386.217 220.445C387.02 238.598 380.373 256.352 367.979 269.152ZM256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.516 32 256S132.486 32 256 32S480 132.484 480 256S379.514 480 256 480Z" })
  }
));
CircleHeartThin.displayName = "CircleHeartThin";
var CircleHeart_default = CircleHeartThin;
