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
var StarShooting_exports = {};
__export(StarShooting_exports, {
  default: () => StarShooting_default
});
module.exports = __toCommonJS(StarShooting_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarShootingDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M312.969 7.031C303.594 -2.344 288.406 -2.344 279.031 7.031L231.031 55.031C221.656 64.406 221.656 79.594 231.031 88.969C235.719 93.656 241.859 96 248 96S260.281 93.656 264.969 88.969L312.969 40.969C322.344 31.594 322.344 16.406 312.969 7.031ZM504.969 7.031C495.594 -2.344 480.406 -2.344 471.031 7.031L311.031 167.031C301.656 176.406 301.656 191.594 311.031 200.969C315.719 205.656 321.859 208 328 208S340.281 205.656 344.969 200.969L504.969 40.969C514.344 31.594 514.344 16.406 504.969 7.031ZM471.031 199.031L423.031 247.031C413.656 256.406 413.656 271.594 423.031 280.969C427.719 285.656 433.859 288 440 288S452.281 285.656 456.969 280.969L504.969 232.969C514.344 223.594 514.344 208.406 504.969 199.031S480.406 189.656 471.031 199.031Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M364.277 267.252L259.524 252L212.648 156.738C204.272 139.736 179.897 139.611 171.396 156.738L124.52 252L19.767 267.252C0.891 270.002 -6.734 293.255 7.017 306.507L82.894 380.516L64.893 485.154C61.768 504.032 81.644 518.158 98.269 509.282L192.022 459.901L285.775 509.282C293.525 513.408 302.9 512.658 310.025 507.532C317.026 502.406 320.651 493.655 319.151 485.154L301.275 380.516L377.152 306.507C390.778 293.255 383.152 270.002 364.277 267.252Z" })
    ]
  }
));
StarShootingDuotone.displayName = "StarShootingDuotone";
var StarShooting_default = StarShootingDuotone;
