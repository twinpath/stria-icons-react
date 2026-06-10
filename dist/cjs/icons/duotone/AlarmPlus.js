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
var AlarmPlus_exports = {};
__export(AlarmPlus_exports, {
  default: () => AlarmPlus_default
});
module.exports = __toCommonJS(AlarmPlus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AlarmPlusDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 480.002C480 471.793 476.875 463.584 470.624 457.353L435.25 421.949C464.375 383.328 480 336.336 480 287.965C480 165.015 383.584 63.993 256 63.993C132.25 63.993 32 164.227 32 287.965C32 336.336 47.75 383.328 76.75 421.949L41.333 457.459C35.111 463.699 32 471.869 32 480.038C32 488.195 35.101 496.351 41.304 502.589L41.305 502.59C47.543 508.863 55.772 512 64 512C72.214 512 80.429 508.874 86.665 502.62L122 467.195C161.687 497.066 208.844 512.002 256 512.002S350.312 497.066 390 467.195L425.447 502.669C431.688 508.889 439.857 512 448.027 512C456.185 512 464.343 508.898 470.582 502.694L470.597 502.678C476.865 496.445 480 488.224 480 480.002ZM344.002 312H280V376C280 389.195 269.199 400 256.002 400C242.801 400 232 389.195 232 376V312H168.002C154.801 312 144 301.195 144 288C144 274.797 154.801 264 168.002 264H232V200C232 186.797 242.801 176 256.002 176C269.199 176 280 186.797 280 200V264H344.002C357.199 264 368 274.797 368 288C368 301.195 357.199 312 344.002 312Z ", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 0C43 0 0 42.992 0 95.988C0.125 114.234 5.375 131.984 15.25 147.234L161.25 25.621C143.5 9.125 120.25 0 96 0ZM416 0C391.75 0 368.5 9.125 350.875 25.621L496.75 147.234C506.625 131.984 511.875 114.234 512 95.988C512 42.992 469 0 416 0ZM344.002 264H280V200C280 186.797 269.199 176 256.002 176C242.801 176 232 186.797 232 200V264H168.002C154.801 264 144 274.797 144 288C144 301.195 154.801 312 168.002 312H232V376C232 389.195 242.801 400 256.002 400C269.199 400 280 389.195 280 376V312H344.002C357.199 312 368 301.195 368 288C368 274.797 357.199 264 344.002 264Z " })
    ]
  }
));
AlarmPlusDuotone.displayName = "AlarmPlusDuotone";
var AlarmPlus_default = AlarmPlusDuotone;
