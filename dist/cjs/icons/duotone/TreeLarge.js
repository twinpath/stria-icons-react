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
var TreeLarge_exports = {};
__export(TreeLarge_exports, {
  default: () => TreeLarge_default
});
module.exports = __toCommonJS(TreeLarge_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TreeLargeDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M446.764 512H288V368L319.144 315.576C321.805 310.258 317.937 304 311.99 304H288V208C288 199.162 280.836 192 272 192H240C231.164 192 224 199.162 224 208V240H200.01C194.062 240 190.195 246.258 192.855 251.578L224 304V512H65.17C36.672 512 21.424 477.5 40.422 455.625L130.289 352H94.293C68.67 352 54.795 322.75 71.045 303.5L166.037 192H121.291C99.918 192 88.293 169.5 101.916 154.75L236.781 8.25C246.779 -2.75 265.279 -2.75 275.277 8.25L410.267 154.75C423.766 169.5 412.268 192 390.893 192H346.146L441.014 303.5C457.264 322.75 443.389 352 417.766 352H381.769L471.637 455.625C490.51 477.375 475.387 512 446.764 512Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M200.01 240H224V208C224 199.163 231.163 192 240 192H272C280.837 192 288 199.163 288 208V304H311.99C317.938 304 321.805 310.258 319.145 315.576L288 368V512H224V304L192.855 251.578C190.195 246.258 194.062 240 200.01 240Z" })
    ]
  }
));
TreeLargeDuotone.displayName = "TreeLargeDuotone";
var TreeLarge_default = TreeLargeDuotone;
