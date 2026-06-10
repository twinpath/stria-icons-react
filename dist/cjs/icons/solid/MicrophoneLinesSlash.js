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
var MicrophoneLinesSlash_exports = {};
__export(MicrophoneLinesSlash_exports, {
  default: () => MicrophoneLinesSlash_default
});
module.exports = __toCommonJS(MicrophoneLinesSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MicrophoneLinesSlashSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M383.998 464.001H343.998V430.22C364.599 427.396 383.984 420.828 401.689 411.507L358.426 377.598C343.762 382.248 328.146 384.775 311.746 383.74C245.662 379.572 191.999 317.147 191.999 250.934V247.156L143.999 209.536V248.16C143.999 337.815 207.967 417.72 295.998 429.845V464.001H255.998C238.326 464.001 223.998 478.327 223.998 496C223.998 504.836 231.162 512 239.998 512H399.998C408.836 512 415.998 504.836 415.998 496C415.998 478.327 401.672 464.001 383.998 464.001ZM630.811 469.102L471.447 344.196C486.814 318.261 495.997 288.308 495.997 256.004V216.005C495.997 202.75 485.252 192.005 471.998 192.005H471.998C458.743 192.005 447.998 202.75 447.998 216.005V256.004C447.998 277.123 442.416 296.751 433.205 314.224L407.511 294.085C412.746 282.402 415.998 269.666 415.998 256.004H358.924L324.475 229.002C327.389 225.948 331.443 224.004 335.998 224.004H415.998V192.005H335.998C327.162 192.005 319.998 184.841 319.998 176.005C319.998 167.169 327.162 160.005 335.998 160.005H415.998V128.006H335.998C327.162 128.006 319.998 120.842 319.998 112.006S327.162 96.006 335.998 96.006H415.998C415.998 42.003 371.438 -1.565 317.07 0.052C264.521 1.614 223.998 47.448 223.998 100.02L223.998 150.252L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.187C-3.061 19.625 -1.249 34.718 9.189 42.89L601.186 506.883C611.686 515.086 626.749 513.211 634.874 502.805C643.061 492.367 641.249 477.274 630.811 469.102Z" })
  }
));
MicrophoneLinesSlashSolid.displayName = "MicrophoneLinesSlashSolid";
var MicrophoneLinesSlash_default = MicrophoneLinesSlashSolid;
