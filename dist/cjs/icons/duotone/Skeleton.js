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
var Skeleton_exports = {};
__export(Skeleton_exports, {
  default: () => Skeleton_default
});
module.exports = __toCommonJS(Skeleton_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SkeletonDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 160H16C7.125 160 0 167.125 0 176V208C0 216.875 7.125 224 16 224H224V160ZM432 256H288V320H432C440.875 320 448 312.875 448 304V272C448 263.125 440.875 256 432 256ZM80 128H224V64H80C71.125 64 64 71.125 64 80V112C64 120.875 71.125 128 80 128ZM448 112V80C448 71.125 440.875 64 432 64H288V128H432C440.875 128 448 120.875 448 112ZM64 272V304C64 312.875 71.125 320 80 320H224V256H80C71.125 256 64 263.125 64 272ZM399.926 352H112.074C74.764 352 51.719 392.703 70.914 424.695L113.975 496.463C119.758 506.102 130.176 512 141.416 512H370.584C381.824 512 392.242 506.102 398.025 496.463L441.086 424.695C460.281 392.703 437.236 352 399.926 352ZM200 464C186.746 464 176 453.254 176 440S186.746 416 200 416S224 426.746 224 440S213.254 464 200 464ZM312 464C298.746 464 288 453.254 288 440S298.746 416 312 416S336 426.746 336 440S325.254 464 312 464ZM496 160H288V224H496C504.875 224 512 216.875 512 208V176C512 167.125 504.875 160 496 160Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 16V352H224V16C224 7.125 231.125 0 240 0H272C280.875 0 288 7.125 288 16Z" })
    ]
  }
));
SkeletonDuotone.displayName = "SkeletonDuotone";
var Skeleton_default = SkeletonDuotone;
