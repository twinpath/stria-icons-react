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
var LeafHeart_exports = {};
__export(LeafHeart_exports, {
  default: () => LeafHeart_default
});
module.exports = __toCommonJS(LeafHeart_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LeafHeartSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M486.181 39.984C481.543 29.641 467.189 29.328 461.525 39.156C430.439 92.98 368.195 113.715 312.195 100.391C286.947 94.383 259.597 93.836 231.269 100.398C165.871 115.543 113.299 168.75 99.828 234.562C94.806 259.098 95.131 282.887 99.439 305.242C21.886 368.23 0.992 449.047 0.668 450.383C-2.426 463.266 5.527 476.246 18.418 479.344C20.293 479.781 22.183 480 24.027 480C34.873 480 44.716 472.586 47.357 461.578C47.603 460.562 62.177 403.453 116.312 353.527C146.824 411.492 207.115 447.973 272.013 447.973C294.881 447.973 316.658 443.469 336.701 435.531C441.945 400.73 512 293.246 512 165.395C512 121.891 502.67 76.758 486.181 39.984ZM382.861 277.203L312.228 348.563C307.644 353.145 300.353 353.145 295.769 348.563L225.136 277.203C204.613 256.469 205.863 222.09 228.783 202.922C248.785 186.254 278.371 189.273 296.707 207.82L303.894 215.008L311.082 207.82C329.418 189.273 359.213 186.254 379.111 202.922C402.134 222.09 403.384 256.469 382.861 277.203Z" })
  }
));
LeafHeartSolid.displayName = "LeafHeartSolid";
var LeafHeart_default = LeafHeartSolid;
