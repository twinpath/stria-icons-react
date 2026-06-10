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
var LocationDotSlash_exports = {};
__export(LocationDotSlash_exports, {
  default: () => LocationDotSlash_default
});
module.exports = __toCommonJS(LocationDotSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LocationDotSlashRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M630.81 469.102L457.054 332.916C500.907 267.736 511.999 240.58 511.999 192C511.999 85.969 426.03 0 319.999 0C249.14 0 187.88 38.771 154.661 95.908L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.188C-3.061 19.625 -1.249 34.717 9.189 42.889L601.185 506.883C611.685 515.086 626.747 513.211 634.872 502.805C643.06 492.367 641.247 477.273 630.81 469.102ZM319.999 224C319.087 224 318.32 223.553 317.427 223.479L290.025 202.002C288.954 198.812 287.999 195.545 287.999 192C287.999 174.355 302.355 160 319.999 160S351.999 174.355 351.999 192S337.644 224 319.999 224ZM363.058 259.244C385.222 245.021 399.999 220.293 399.999 192C399.999 147.816 364.183 112 319.999 112C284.833 112 255.298 134.84 244.573 166.379L192.874 125.857C216.714 79.699 264.511 48 319.999 48C399.402 48 463.999 112.598 463.999 192C463.999 226.975 458.052 245.082 419.144 303.203L363.058 259.244ZM319.999 445.836C302.306 420.371 286.581 397.969 272.622 378.086C220.005 303.131 195.792 267.992 184.792 241.521L128.122 197.105C129.378 270.367 158.3 295.865 300.28 501.676C305.046 508.559 312.523 512 319.999 512S334.952 508.559 339.718 501.676C363.753 466.834 384.275 437.566 402.247 411.959L364.415 382.307C351.159 401.193 336.509 422.072 319.999 445.836Z" })
  }
));
LocationDotSlashRegular.displayName = "LocationDotSlashRegular";
var LocationDotSlash_default = LocationDotSlashRegular;
