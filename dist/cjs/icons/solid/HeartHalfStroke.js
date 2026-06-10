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
var HeartHalfStroke_exports = {};
__export(HeartHalfStroke_exports, {
  default: () => HeartHalfStroke_default
});
module.exports = __toCommonJS(HeartHalfStroke_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeartHalfStrokeSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M462.969 62.859C438.775 41.92 408.871 31.998 378.723 32C341.236 32 303.377 47.344 275.693 75.924L256.008 96.248L256 96.24L236.32 75.924C186.371 24.357 103.316 15.885 49.041 62.861C-13.104 116.652 -16.197 212.516 39.824 270.484L232.974 470.195C239.305 476.742 247.654 480.004 256 479.992C264.318 479.98 272.637 476.723 278.947 470.195L472.096 270.484C528.211 212.516 525.117 116.648 462.969 62.859ZM437.592 237.115L256 424.877V165.23L256.01 165.24C293.797 126.225 283 137.371 310.17 109.32C328.219 90.688 353.209 80 378.728 80C392.732 80 413.265 83.322 431.557 99.152C451.246 116.195 462.734 140.168 463.904 166.656C465.064 192.961 455.48 218.637 437.592 237.115Z" })
  }
));
HeartHalfStrokeSolid.displayName = "HeartHalfStrokeSolid";
var HeartHalfStroke_default = HeartHalfStrokeSolid;
