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
const BellSlashSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M104.626 362.252C98.626 368.752 96.001 376.502 96.001 384.002C96.126 400.377 109.001 416.001 128.126 416.001H407.424L159.505 221.688C156.267 312.517 122.938 342.512 104.626 362.252ZM320.001 512C355.376 512 384 483.375 384 448.001H256.001C256.001 483.375 284.626 512 320.001 512ZM630.813 469.102L540.055 397.969C542.33 393.64 543.963 388.994 544 384.002C544 376.502 541.375 368.752 535.375 362.252C516.125 341.503 479.875 310.253 479.875 208.005C479.875 130.256 425.5 68.132 352.001 52.882V32.007C352.001 14.383 337.626 0.008 320.001 0.008C302.376 0.008 288.001 14.383 288.001 32.007V52.882C245.323 61.737 209.606 86.715 186.837 121.125L38.814 5.109C28.212 -3.162 13.174 -1.099 5.126 9.187C-3.061 19.625 -1.249 34.718 9.189 42.89L601.188 506.883C611.688 515.086 626.75 513.211 634.875 502.805C643.063 492.367 641.25 477.274 630.813 469.102Z" })
  }
));
BellSlashSolid.displayName = "BellSlashSolid";
var BellSlash_default = BellSlashSolid;
