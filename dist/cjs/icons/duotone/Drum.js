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
var Drum_exports = {};
__export(Drum_exports, {
  default: () => Drum_default
});
module.exports = __toCommonJS(Drum_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DrumDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M255.996 352.004C242.743 352.004 231.997 362.748 231.997 376.003V479.471C239.907 479.793 247.893 480 255.996 480C264.1 480 272.086 479.793 279.996 479.471V376.003C279.996 362.748 269.25 352.004 255.996 352.004ZM96 320.005C82.746 320.005 72 330.749 72 344.004V445.761C86.332 452.249 102.461 457.938 120 462.768V344.004C120 330.749 109.254 320.005 96 320.005ZM415.993 320.005C402.739 320.005 391.993 330.749 391.993 344.004V462.768C409.532 457.938 425.661 452.249 439.993 445.761V344.004C439.993 330.749 429.247 320.005 415.993 320.005ZM508.061 42.858C500.842 31.795 485.967 28.639 474.842 35.936L242.844 187.931C231.751 195.197 228.657 210.071 235.938 221.164C240.532 228.195 248.188 232.008 256.032 232.008C260.532 232.008 265.094 230.742 269.157 228.086L501.155 76.091C512.248 68.826 515.342 53.951 508.061 42.858Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M511.996 208.141V368.004C511.996 398.233 484.492 425.611 439.998 445.761V344.004C439.998 330.749 429.252 320.005 415.998 320.005C402.745 320.005 391.999 330.749 391.999 344.004V462.768C358.95 471.865 320.933 477.805 280.002 479.471V376.003C280.002 362.748 269.256 352.004 256.002 352.004C256 352.004 256 352.004 255.998 352.004S255.996 352.004 255.994 352.004C242.74 352.004 231.994 362.748 231.994 376.003V479.471C191.063 477.805 153.046 471.865 119.997 462.768V344.004C119.997 330.749 109.251 320.005 95.997 320.005C82.743 320.005 71.997 330.749 71.997 344.004V445.761C27.504 425.611 0 398.233 0 368.004V208.141C0 100.52 219.494 96.02 255.994 96.02C255.996 96.02 255.996 96.02 255.998 96.02S256 96.02 256.002 96.02C271.259 96.02 318.544 96.92 368.358 105.697L306.642 146.132C290.404 144.88 273.502 144.143 256.002 144.143C256 144.143 256 144.143 255.998 144.143S255.996 144.143 255.994 144.143C141.122 144.143 48 172.768 48 208.141S141.122 272.264 255.994 272.264C255.996 272.264 255.996 272.264 255.998 272.264S256 272.264 256.002 272.264C370.874 272.264 463.996 243.515 463.996 208.141C463.996 186.882 430.223 168.115 378.448 156.481L431.135 121.964C476.135 138.292 511.996 164.739 511.996 208.141Z" })
    ]
  }
));
DrumDuotone.displayName = "DrumDuotone";
var Drum_default = DrumDuotone;
