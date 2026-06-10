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
var DoorOpen_exports = {};
__export(DoorOpen_exports, {
  default: () => DoorOpen_default
});
module.exports = __toCommonJS(DoorOpen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DoorOpenLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M232 224.004C218.746 224.004 208 238.33 208 256.002S218.746 288.002 232 288.002S256 273.674 256 256.002S245.254 224.004 232 224.004ZM260.375 1.443L100.375 41.443C78.998 46.787 64 65.996 64 88.031V480H16C7.164 480 0 487.162 0 496C0 504.836 7.164 512 16 512H288C305.674 512 320 497.672 320 480V49.148C320 39.004 317.389 28.805 311.477 20.559C299.393 3.707 279.264 -3.279 260.375 1.443ZM288 480H96V88.035C96 80.662 101 74.287 108.125 72.506L268.125 32.506C272.875 31.225 277.938 32.381 281.844 35.412C285.75 38.475 288 43.068 288 48.037V480ZM560 480H512V144.004C512 99.822 476.184 64.006 432.002 64.006H368C359.164 64.006 352 71.168 352 80.004V80.006C352 88.842 359.164 96.004 368 96.004H432C458.51 96.004 480 117.494 480 144.004V480C480 497.672 494.326 512 512 512H560C568.836 512 576 504.836 576 496C576 487.162 568.836 480 560 480Z" })
  }
));
DoorOpenLight.displayName = "DoorOpenLight";
var DoorOpen_default = DoorOpenLight;
