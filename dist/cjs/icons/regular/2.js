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
var __exports = {};
__export(__exports, {
  default: () => __default
});
module.exports = __toCommonJS(__exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Icon2Regular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 447.994C320 465.685 305.672 480 288 480H32.004C18.754 480 6.879 471.842 2.129 459.465C-2.621 447.119 0.739 433.085 10.582 424.208L212.001 242.642C227.673 227.233 236.845 205.572 236.845 182.537C236.845 159.532 227.673 137.872 211.017 121.525C176.189 87.362 119.597 87.425 84.8 121.525L54.191 150.999C41.473 163.252 21.207 162.908 8.942 150.124C-3.308 137.403 -2.917 117.118 9.817 104.866L40.207 75.61C99.487 17.411 196.33 17.443 255.829 75.829C284.86 104.303 300.844 142.185 300.844 182.537C300.844 222.919 284.86 260.802 255.829 289.276L115.3 415.988H288C305.672 415.988 320 430.303 320 447.994Z" })
  }
));
Icon2Regular.displayName = "Icon2Regular";
var __default = Icon2Regular;
