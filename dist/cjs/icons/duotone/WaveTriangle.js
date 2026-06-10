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
var WaveTriangle_exports = {};
__export(WaveTriangle_exports, {
  default: () => WaveTriangle_default
});
module.exports = __toCommonJS(WaveTriangle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WaveTriangleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M633.592 262.745L489.593 455.054C483.561 463.129 474.077 467.887 463.999 467.887S444.437 463.129 438.405 455.054L176.001 104.648L57.595 262.745C47.017 276.955 26.986 279.804 12.799 269.162C-1.342 258.551 -4.201 238.456 6.408 224.309L150.407 32C162.47 15.849 189.532 15.849 201.595 32L463.999 382.406L582.405 224.309C592.998 210.13 613.029 207.312 627.201 217.892C641.342 228.503 644.201 248.598 633.592 262.745Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
WaveTriangleDuotone.displayName = "WaveTriangleDuotone";
var WaveTriangle_default = WaveTriangleDuotone;
