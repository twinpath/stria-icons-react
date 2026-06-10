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
var BellSlash_exports = {};
__export(BellSlash_exports, {
  default: () => BellSlash_default
});
module.exports = __toCommonJS(BellSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BellSlashDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M104.625 362.251C98.625 368.751 96 376.501 96 384.001C96.125 400.376 109 416.001 128.125 416.001H407.424L159.504 221.686C156.266 312.516 122.938 342.511 104.625 362.251ZM320 512C355.375 512 384 483.375 384 448.001H256C256 483.375 284.625 512 320 512ZM535.375 362.251C516.125 341.502 479.875 310.252 479.875 208.003C479.875 130.254 425.5 68.129 352 52.879V32.004C352 14.38 337.625 0.005 320 0.005C302.25 0.005 288 14.38 288 32.004V52.879C245.34 61.731 209.543 86.686 186.66 121.01L540.207 398.11C542.416 393.691 543.963 388.976 544 384.001C544 375.876 541 368.126 535.375 362.251Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M615.984 512C610.796 512 605.593 510.344 601.187 506.875L9.187 42.879C-1.235 34.723 -3.063 19.63 5.109 9.192C13.296 -1.214 28.343 -3.089 38.812 5.13L630.812 469.125C641.234 477.282 643.062 492.375 634.89 502.813C630.156 508.844 623.109 512 615.984 512Z" })
    ]
  }
));
BellSlashDuotone.displayName = "BellSlashDuotone";
var BellSlash_default = BellSlashDuotone;
