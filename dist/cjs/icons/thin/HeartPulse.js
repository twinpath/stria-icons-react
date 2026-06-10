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
var HeartPulse_exports = {};
__export(HeartPulse_exports, {
  default: () => HeartPulse_default
});
module.exports = __toCommonJS(HeartPulse_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeartPulseThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464.313 256H357.063L327.25 196.406C325.844 193.656 323.281 192.375 319.906 192C316.813 192.062 314.031 193.906 312.781 196.75L256.75 322.656L199.438 165.25C198.281 162.094 195.25 160 191.906 160H191.813C188.406 160.031 185.406 162.25 184.313 165.469L154.094 256H47.688C43.281 256 39.688 259.594 39.688 264S43.281 272 47.688 272H159.844C163.281 272 166.344 269.812 167.438 266.531L192.219 192.281L248.469 346.75C249.594 349.812 252.469 351.875 255.719 352H256C259.156 352 262.031 350.156 263.313 347.25L320.531 218.719L344.969 267.594C346.313 270.281 349.094 272 352.125 272H464.313C468.719 272 472.313 268.406 472.313 264S468.719 256 464.313 256ZM463.276 62.859C439.045 41.922 409.096 32 378.905 32C341.362 32 303.446 47.344 275.723 75.922L256.006 96.25L236.289 75.922C208.563 47.34 170.656 32 133.11 32C102.924 32 72.963 41.922 48.737 62.859C-2.308 106.98 -13.045 179.188 15.531 235.777C16.85 238.391 19.596 240 22.526 240C28.362 240 32.026 233.879 29.401 228.672C19.641 209.312 14.785 187.445 15.774 165.238C17.354 129.875 32.783 97.812 59.225 74.961C79.629 57.32 105.182 48 133.11 48C167.291 48 200.703 62.234 224.781 87.055C248.92 111.938 239.34 102.062 256.006 119.242C271.983 102.773 263.799 111.211 287.231 87.055C311.309 62.234 344.725 48 378.908 48C406.834 48 432.383 57.32 452.787 74.957C479.237 97.812 494.666 129.883 496.227 165.246C497.207 187.449 492.34 209.312 482.563 228.664C479.932 233.875 483.594 240 489.436 240H489.438C492.364 240 495.108 238.391 496.426 235.781C525.061 179.188 514.322 106.977 463.276 62.859ZM421.576 304H420.967C418.856 304 416.834 304.855 415.365 306.371L267.465 459.07C264.385 462.25 260.301 464 255.963 464C251.621 464 247.537 462.25 244.457 459.07L96.553 306.371C95.084 304.855 93.063 304 90.951 304H90.344C83.465 304 79.961 312.25 84.742 317.188L232.942 470.195C239.272 476.73 247.615 480 255.959 480C264.307 480 272.651 476.73 278.981 470.195L427.178 317.188C431.959 312.25 428.455 304 421.576 304Z" })
  }
));
HeartPulseThin.displayName = "HeartPulseThin";
var HeartPulse_default = HeartPulseThin;
