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
var FeatherPointed_exports = {};
__export(FeatherPointed_exports, {
  default: () => FeatherPointed_default
});
module.exports = __toCommonJS(FeatherPointed_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FeatherPointedThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M478.883 0.094C361.406 8.524 -10.116 62.808 77.143 412.423C77.839 415.21 78.96 417.847 80.394 420.298L2.344 498.343C-0.781 501.468 -0.781 506.53 2.344 509.655C5.471 512.782 10.53 512.782 13.657 509.655L91.706 431.61C94.158 433.044 96.795 434.165 99.582 434.86C135.732 443.881 168.737 448 198.847 448C459.966 448 504.378 138.47 511.937 33.146C512.92 19.452 502.487 -1.583 478.883 0.094ZM198.847 432.001C169.356 432.001 137.402 427.751 103.896 419.421L187.319 336.003H395.587C351.657 391.644 289.005 432.001 198.847 432.001ZM283.323 240.006H450.034C438.762 267.878 424.642 295.047 407.337 320.004H203.32L283.323 240.006ZM456.149 224.061C456.099 224.059 456.067 224.006 456.017 224.006H299.323L341.669 181.664C344.794 178.539 344.794 173.477 341.669 170.352C338.544 167.227 333.481 167.227 330.356 170.352L92.578 408.115C68.483 311.197 79.288 230.27 124.739 167.582C211.74 47.585 402.187 21.639 480.025 16.053C490.238 15.687 496.582 23.574 495.977 32.002C493.151 71.391 483.977 148.194 456.149 224.061Z" })
  }
));
FeatherPointedThin.displayName = "FeatherPointedThin";
var FeatherPointed_default = FeatherPointedThin;
