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
const UmbrellaBeachDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M396.34 239.172L321.004 448.001H253L336.225 217.276L396.34 239.172Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528.027 448.001H48.002C21.492 448.001 0 469.491 0 496C0 504.836 7.164 512 16 512H560.029C568.867 512 576.031 504.836 576.031 496C576.031 469.491 554.539 448.001 528.027 448.001ZM247.639 185.005L486.15 271.879C521.902 150.506 504.777 40.258 443.523 17.883C436.148 15.258 428.398 13.883 420.396 13.883C362.395 13.883 292.141 83.132 247.639 185.005ZM115.381 136.881L217.512 174.13C252.639 92.507 303.766 29.758 356.52 0.383C260.639 -4.492 167.76 37.383 108.006 112.131C101.256 120.631 105.256 133.256 115.381 136.881ZM521.527 60.507C527.777 76.757 532.277 95.132 534.654 115.756C540.404 165.631 533.279 223.88 515.777 282.629L618.408 320.003C628.533 323.753 639.658 316.628 639.908 305.878C642.283 210.13 598.031 118.381 521.527 60.507Z" })
    ]
  }
));
UmbrellaBeachDuotone.displayName = "UmbrellaBeachDuotone";
var UmbrellaBeach_default = UmbrellaBeachDuotone;
