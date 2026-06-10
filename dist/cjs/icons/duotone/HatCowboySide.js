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
var HatCowboySide_exports = {};
__export(HatCowboySide_exports, {
  default: () => HatCowboySide_default
});
module.exports = __toCommonJS(HatCowboySide_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HatCowboySideDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 367.992C640 435.239 579.75 448 564.8 448C471.91 448 425.3 410.926 354.93 343.53L266.719 259.042C240.999 236.1 210.999 223.979 179.999 223.979C110.309 223.979 51.359 286.705 33.319 380.053C30.129 396.655 32.939 413.887 41.029 427.358C48.859 440.469 60.639 448 73.279 448H30.579C21.334 448.033 12.903 442.721 8.939 434.369C-3.731 407.326 0.299 382.094 1.869 373.993C22.899 265.122 94.469 191.975 179.999 191.975C218.949 191.975 256.309 206.897 288.89 235.93L377.1 320.418C446.45 386.874 485.18 415.997 564.8 415.997C588.62 415.997 608 394.465 608 367.992C608 346.18 587.39 259.902 495.55 243.11L490 210.027C601.87 223.979 640 323.458 640 367.992Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M354.898 343.528L266.687 259.04C240.967 236.099 210.966 223.98 179.967 223.98C110.277 223.98 51.327 286.704 33.285 380.052C30.096 396.652 32.907 413.888 40.997 427.359C48.827 440.47 60.607 447.998 73.246 447.998H564.767C493.647 447.998 449.657 426.265 401.356 385.834C386.577 373.453 371.387 359.33 354.898 343.528ZM495.516 243.108L468.357 81.094C462.216 48.09 427.547 26.337 391.997 33.299L200.817 70.683C173.727 75.984 153.407 96.757 150.466 122.17L142.897 196.703C155.001 193.555 167.459 191.964 179.967 191.976C218.916 191.976 256.277 206.896 288.856 235.927L377.066 320.415C446.417 386.873 485.147 415.998 564.767 415.998C588.586 415.998 607.968 394.464 607.968 367.992C607.968 346.18 587.358 259.899 495.516 243.108Z" })
    ]
  }
));
HatCowboySideDuotone.displayName = "HatCowboySideDuotone";
var HatCowboySide_default = HatCowboySideDuotone;
