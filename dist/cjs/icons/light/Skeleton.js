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
const SkeletonLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 456C205.254 456 216 445.254 216 432S205.254 408 192 408S168 418.746 168 432S178.746 456 192 456ZM320 456C333.254 456 344 445.254 344 432S333.254 408 320 408S296 418.746 296 432S306.746 456 320 456ZM496 176H272V112H432C440.844 112 448 104.844 448 96S440.844 80 432 80H272V16C272 7.162 264.836 0 256 0S240 7.162 240 16V80H80C71.156 80 64 87.156 64 96S71.156 112 80 112H240V176H16C7.156 176 0 183.156 0 192S7.156 208 16 208H240V272H80C71.156 272 64 279.156 64 288S71.156 304 80 304H240V352H112.074C74.764 352 51.719 392.701 70.914 424.695L104.654 480.928C116.221 500.205 137.053 512 159.533 512H352.467C374.947 512 395.779 500.205 407.346 480.928L441.086 424.695C460.281 392.703 437.236 352 399.926 352H272V304H432C440.844 304 448 296.844 448 288S440.844 272 432 272H272V208H496C504.844 208 512 200.844 512 192S504.844 176 496 176ZM399.926 384C408.344 384 412.467 389.676 413.85 392.117C415.23 394.557 417.977 401.014 413.646 408.23L379.906 464.465C374.156 474.047 363.643 480 352.467 480H159.533C148.357 480 137.844 474.047 132.094 464.463L98.354 408.232C94.023 401.012 96.77 394.557 98.15 392.115C99.533 389.676 103.654 384 112.074 384H399.926Z" })
  }
));
SkeletonLight.displayName = "SkeletonLight";
var Skeleton_default = SkeletonLight;
