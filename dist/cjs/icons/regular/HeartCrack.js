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
var HeartCrack_exports = {};
__export(HeartCrack_exports, {
  default: () => HeartCrack_default
});
module.exports = __toCommonJS(HeartCrack_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeartCrackRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M462.969 62.859C438.777 41.92 408.871 31.998 378.724 32C341.236 32 303.379 47.344 275.693 75.924L256.008 96.248L236.32 75.924C208.633 47.34 170.783 32 133.291 32C103.148 32 73.23 41.926 49.041 62.861C-13.104 116.652 -16.197 212.516 39.824 270.484L232.974 470.195C239.295 476.732 247.627 480 255.961 480C264.293 480 272.625 476.732 278.947 470.195L472.096 270.484C528.211 212.516 525.117 116.648 462.969 62.859ZM437.594 237.115L255.961 424.918L74.34 237.129C42.098 203.766 34.459 138.971 80.455 99.154C120.359 64.615 175.047 81.658 201.842 109.32C225.752 134.004 216.963 124.928 237.084 145.701L144.006 207.768L144.123 207.885L144.017 207.955L287.998 351.791L240.058 223.926L336.008 159.947L335.959 159.783L335.996 159.76L335.525 158.338L318.621 101.979C347.06 79.289 395.232 67.715 431.557 99.152C477.123 138.59 470.519 203.102 437.594 237.115Z" })
  }
));
HeartCrackRegular.displayName = "HeartCrackRegular";
var HeartCrack_default = HeartCrackRegular;
