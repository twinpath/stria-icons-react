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
var UmbrellaBeach_exports = {};
__export(UmbrellaBeach_exports, {
  default: () => UmbrellaBeach_default
});
module.exports = __toCommonJS(UmbrellaBeach_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UmbrellaBeachSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M115.381 136.881L217.512 174.13C252.638 92.507 303.766 29.758 356.519 0.383C260.639 -4.492 167.759 37.383 108.006 112.131C101.255 120.631 105.256 133.256 115.381 136.881ZM247.638 185.005L486.151 271.879C521.903 150.506 504.777 40.258 443.524 17.883C436.148 15.258 428.398 13.883 420.397 13.883C362.394 13.883 292.141 83.132 247.638 185.005ZM521.528 60.507C527.778 76.757 532.278 95.132 534.653 115.756C540.404 165.631 533.278 223.88 515.777 282.629L618.408 320.003C628.533 323.753 639.659 316.628 639.909 305.878C642.284 210.13 598.031 118.381 521.528 60.507ZM528.028 448.001H321.017L386.02 269.504L325.892 247.629L253.013 448.001H48.002C21.491 448.001 0 469.491 0 496V496C0 504.837 7.164 512 16.001 512H560.03C568.867 512 576.031 504.837 576.031 496V496C576.031 469.491 554.539 448.001 528.028 448.001Z" })
  }
));
UmbrellaBeachSolid.displayName = "UmbrellaBeachSolid";
var UmbrellaBeach_default = UmbrellaBeachSolid;
