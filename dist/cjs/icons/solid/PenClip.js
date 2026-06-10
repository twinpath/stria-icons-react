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
var PenClip_exports = {};
__export(PenClip_exports, {
  default: () => PenClip_default
});
module.exports = __toCommonJS(PenClip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenClipSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M497.94 74.176L437.824 14.06C419.076 -4.687 388.581 -4.687 369.834 14.06L313.342 70.677L441.323 198.658L497.94 142.166C516.687 123.419 516.687 92.924 497.94 74.176ZM251.101 53.68C235.479 38.057 210.232 38.057 194.61 53.68L75.753 172.412C69.503 178.661 69.503 188.784 75.753 195.033L87.062 206.343C93.311 212.592 103.435 212.592 109.684 206.343L222.856 93.296L256.789 127.23L94 290.019C41.508 342.511 8.388 411.376 0.139 485.115V485.365C-1.486 500.613 11.387 513.486 26.635 511.861C100.499 503.737 169.364 470.617 221.981 418L418.701 221.28L251.101 53.68Z" })
  }
));
PenClipSolid.displayName = "PenClipSolid";
var PenClip_default = PenClipSolid;
