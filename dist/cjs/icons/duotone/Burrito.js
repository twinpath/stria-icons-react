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
var Burrito_exports = {};
__export(Burrito_exports, {
  default: () => Burrito_default
});
module.exports = __toCommonJS(Burrito_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BurritoDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M351.868 224.027C336.618 224.027 321.743 226.527 307.242 230.402C278.367 310.537 201.613 368.045 111.611 368.045C72.234 368.045 33.857 356.793 0.732 335.791C-3.018 369.545 7.607 404.674 33.482 430.553L80.984 478.059C126.361 523.313 199.863 523.313 245.24 478.059L461.247 262.281C430.122 237.529 391.62 224.027 351.868 224.027ZM287.742 160.02C287.742 120.264 274.242 81.76 249.365 50.756L33.357 266.531C22.982 276.908 14.732 289.285 8.982 302.912C38.857 324.414 74.734 336.041 111.611 336.041C208.738 336.041 287.742 257.031 287.742 160.02Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512.009 123.015C512.009 90.511 490.758 61.883 459.757 52.256C453.382 31.879 438.631 15.252 419.13 6.501C399.63 -2.25 377.379 -2.125 358.003 6.751C347.878 2.25 336.877 0 325.752 0C303.751 0 283.751 9.376 269 24.253C310.001 71.009 327.502 133.766 316.627 195.024C328.252 193.024 340.003 192.023 351.878 192.023C401.755 192.023 450.006 210.026 487.758 242.78C502.633 228.028 512.009 208.025 512.009 186.023C512.009 175.021 509.759 164.02 505.258 153.894C509.759 144.268 512.009 133.641 512.009 123.015Z" })
    ]
  }
));
BurritoDuotone.displayName = "BurritoDuotone";
var Burrito_default = BurritoDuotone;
