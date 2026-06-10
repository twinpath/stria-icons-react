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
var IndianRupeeSign_exports = {};
__export(IndianRupeeSign_exports, {
  default: () => IndianRupeeSign_default
});
module.exports = __toCommonJS(IndianRupeeSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IndianRupeeSignSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 176C320 193.672 305.672 208 288.001 208H251.967C240.193 259.414 201.233 300.59 150.739 314.703L272.392 408.297C289.907 421.766 293.173 446.875 279.704 464.391C271.829 474.625 259.97 480 247.971 480C239.455 480 230.877 477.297 223.612 471.703L15.617 311.703C2.039 301.266 -3.383 283.328 2.133 267.125C7.648 250.906 22.882 240 40.007 240H112.005C135.592 240 156.004 227.037 167.103 208H32.007C14.336 208 0.008 193.672 0.008 176S14.336 144 32.007 144H167.103C156.004 124.963 135.592 112 112.005 112H40.007C17.914 112 0.008 94.094 0.008 72S17.914 32 40.007 32H280.001C302.094 32 320 49.906 320 72S302.094 112 280.001 112H240.32C245.391 122.117 249.554 132.707 252.134 144H288.001C305.672 144 320 158.328 320 176Z" })
  }
));
IndianRupeeSignSolid.displayName = "IndianRupeeSignSolid";
var IndianRupeeSign_default = IndianRupeeSignSolid;
