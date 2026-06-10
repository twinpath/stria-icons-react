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
var MicrophoneSlash_exports = {};
__export(MicrophoneSlash_exports, {
  default: () => MicrophoneSlash_default
});
module.exports = __toCommonJS(MicrophoneSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MicrophoneSlashSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 464.001H344V430.22C364.601 427.396 383.982 420.828 401.689 411.507L358.426 377.598C343.762 382.248 328.148 384.775 311.748 383.74C245.664 379.572 192 317.147 192 250.934V247.158L144.001 209.538V248.16C144.001 337.815 207.969 417.72 296 429.845V464.001H256C238.328 464.001 224 478.327 224 496C224 504.836 231.164 512 240 512H400C408.838 512 416 504.836 416 496C416 478.327 401.674 464.001 384 464.001ZM630.811 469.102L471.449 344.198C486.814 318.261 495.999 288.308 495.999 256.004V216.005C495.999 202.75 485.254 192.005 471.999 192.005H471.999C458.745 192.005 448 202.75 448 216.005V256.004C448 277.123 442.416 296.753 433.205 314.224L407.513 294.087C412.748 282.404 416 269.666 416 256.004L416 100.02C416 47.448 375.477 1.614 322.928 0.052C268.56 -1.565 224 42.003 224 96.006V150.254L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.187C-3.061 19.625 -1.249 34.718 9.189 42.89L601.186 506.883C611.686 515.086 626.749 513.211 634.874 502.805C643.061 492.367 641.249 477.274 630.811 469.102Z" })
  }
));
MicrophoneSlashSolid.displayName = "MicrophoneSlashSolid";
var MicrophoneSlash_default = MicrophoneSlashSolid;
