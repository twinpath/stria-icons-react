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
var TrashCanSlash_exports = {};
__export(TrashCanSlash_exports, {
  default: () => TrashCanSlash_default
});
module.exports = __toCommonJS(TrashCanSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrashCanSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M527.999 96C536.8 96 543.999 88.799 543.999 80C543.999 71.199 536.8 64 527.999 64H431.999L398.374 19.25C389.374 7.125 375.124 0 359.999 0H279.999C264.874 0 250.624 7.125 241.624 19.25L207.999 64H180.114L220.648 96H527.999ZM267.249 38.375C270.249 34.375 274.999 32 279.999 32H359.999C364.999 32 369.749 34.375 372.749 38.375L391.999 64H247.999L267.249 38.375ZM431.999 480H207.999C181.53 480 159.999 458.469 159.999 432V211.223L127.999 185.959V432C127.999 476.109 163.89 512 207.999 512H431.999C459.109 512 483.026 498.373 497.503 477.684L472.337 457.812C463.794 471.115 448.95 480 431.999 480ZM479.999 144V300.758L511.999 326.021V144C511.999 135.156 504.843 128 495.999 128S479.999 135.156 479.999 144ZM399.999 192V237.598L431.999 262.861V192C431.999 183.156 424.843 176 415.999 176S399.999 183.156 399.999 192ZM429.536 424.021L399.999 400.703V416C399.999 424.844 407.155 432 415.999 432C421.853 432 426.747 428.707 429.536 424.021ZM335.999 416V350.176L303.999 324.91V416C303.999 424.844 311.155 432 319.999 432S335.999 424.844 335.999 416ZM239.999 416V274.383L207.999 249.119V416C207.999 424.844 215.155 432 223.999 432S239.999 424.844 239.999 416ZM633.921 483.436L25.921 3.42C18.984 -2.033 8.921 -0.83 3.437 6.061C-2.032 12.998 -0.845 23.061 6.077 28.545L614.077 508.562C617.015 510.875 620.515 512 623.984 512C628.718 512 633.405 509.906 636.562 505.922C642.03 498.984 640.843 488.92 633.921 483.436Z" })
  }
));
TrashCanSlashLight.displayName = "TrashCanSlashLight";
var TrashCanSlash_default = TrashCanSlashLight;
