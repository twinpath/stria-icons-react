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
var WandMagic_exports = {};
__export(WandMagic_exports, {
  default: () => WandMagic_default
});
module.exports = __toCommonJS(WandMagic_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WandMagicThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M500.58 39L473.016 11.424C465.402 3.809 455.418 0 445.438 0C435.455 0 425.477 3.807 417.861 11.422L11.424 417.838C-3.807 433.068 -3.809 457.76 11.422 472.992L38.992 500.574C46.605 508.189 56.59 512 66.57 512C76.553 512 86.531 508.193 94.146 500.576L500.578 94.15C515.807 78.922 515.807 54.23 500.58 39ZM82.832 489.264C78.488 493.607 72.713 496 66.57 496S54.652 493.607 50.309 489.262L22.736 461.68C13.77 452.711 13.77 438.119 22.738 429.152L284.295 167.607L344.393 227.705L82.832 489.264ZM489.266 82.836L355.707 216.395L295.607 156.295L429.176 22.734C433.52 18.393 439.295 16 445.438 16C451.582 16 457.357 18.393 461.699 22.734L489.266 50.312C498.23 59.279 498.23 73.871 489.266 82.836Z" })
  }
));
WandMagicThin.displayName = "WandMagicThin";
var WandMagic_default = WandMagicThin;
