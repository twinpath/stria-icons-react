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
const HeartHalfStrokeDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M472.096 270.484L278.947 470.195C272.637 476.723 264.318 479.98 256 479.992V424.877L437.592 237.115C455.48 218.637 465.064 192.961 463.904 166.656C462.734 140.168 451.246 116.195 431.557 99.152C413.266 83.322 392.732 80 378.729 80C353.209 80 328.219 90.688 310.17 109.32C283 137.371 293.797 126.225 256.01 165.24L256 165.23V96.24L256.008 96.248L275.693 75.924C303.377 47.344 341.236 32 378.723 32C408.871 31.998 438.775 41.92 462.969 62.859C525.117 116.648 528.211 212.516 472.096 270.484Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 479.992C247.654 480.004 239.305 476.742 232.974 470.195L39.824 270.484C-16.197 212.516 -13.104 116.652 49.041 62.861C103.316 15.885 186.371 24.357 236.32 75.924L256 96.24V479.992Z" })
    ]
  }
));
HeartHalfStrokeDuotone.displayName = "HeartHalfStrokeDuotone";
var HeartHalfStroke_default = HeartHalfStrokeDuotone;
